import { Col, Form, Input, Row, Select, Upload, notification } from "antd";
import React, { useState } from "react";
import StyledButton from "../StyledButton/StyledButton";
import { requiredRule } from "@/utils/rules";
import {
  ProductCondition,
  PtaStatus,
  RamOptions,
  WarrantyOptions,
  StorageOptions,
} from "@/utils/fakeData";
import api from "@/services/api";
import { MdOutlineMyLocation } from "react-icons/md";
import PlacesAutocomplete, {
  geocodeByAddress
} from "react-places-autocomplete";

const PostSmartWatch = (props) => {
  const { brands, disabledForm, user = {} } = props;

  const [form] = Form.useForm();

  const { Option } = Select;
  const [fileList, setFileList] = useState([]);
  const [loading, setLoading] = useState(false);

  // location related states & functions

  const [isPlacesDropDown, setIsPlacesDropdown] = useState(false);
  const [address, setAddress] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    let extractedData = extractAddressComponents(
      results[0]?.address_components
    );
    setSelectedAddress(extractedData);
    setAddress(value);
  };

  let onGetLocation = async () => {
    let location = await getLocationAndDecodeAddress();
    if (location) {
      setSelectedAddress(location);
      setAddress(`${location.area}, ${location.city}`);
      form.setFieldValue(
        "area",
        `${location.area}, ${location.city}`
      );
      setIsPlacesDropdown(false);
    }
  }

  const onOpenPlacesDropdown = () => {
    setIsPlacesDropdown(!isPlacesDropDown);
  };

  const onClosePlacesDropdown = () => {
    setIsPlacesDropdown(false);
  };

  // end of location related states & functions end

  const handleFileChange = (info) => {
    const { fileList } = info;
    setFileList([...fileList]);
    return true;
  };

  const compressImage = async (file) => {
    // console.log(
    //   `originalFile size ${file?.originFileObj.size} MB Before compress`
    // );

    const image = new Image();
    image.src = URL.createObjectURL(file?.originFileObj);

    return new Promise((resolve) => {
      image.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = 800;
        canvas.height = 600;

        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

        canvas.toBlob(
          (blob) => {
            // console.log(`originalFile size ${blob.size} MB After compress`);
            resolve({
              ...file,
              originFileObj: blob,
            });
          },
          file?.originFileObj.type,
          0.7 // Adjust the quality as needed
        );
      };
    });
  };

  const uploadFiles = async (id, files) => {
    const { fileList } = files;

    try {
      const compressedImages = await Promise.all(fileList.map(compressImage));

      let formData = new FormData();

      for (const [key, value] of Object.entries(compressedImages)) {
        formData.append(`image[]`, value?.originFileObj);
      }
      formData.append("product_id", id);

      let res = await api.post("/upload-Ad-image", formData);
    } catch (error) {
      console.error("Error compressing images:", error);
    }
  };

  const onFinish = async (values) => {
    const { files, ...data } = values;

    let payload = {
      ...data,
      category: "Watch",
    };

    try {
      setLoading(true);

      let formData = new FormData();

      for (const [key, value] of Object.entries(payload)) {
        formData.append(key, value);
      }

      let res = await api.post("/post-Ad", formData);

      if (res?.data?.status) {
        form.resetFields();
        await uploadFiles(res?.data?.product_id, files);
        notification.success({
          message: "Success",
          description: "Ad posted successfully!",
        });
      }
    } catch (error) {
      notification.error({
        message: "Oops",
        description: "Something went wrong!",
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="post">
      <h2>Watch</h2>
      <Form disabled={disabledForm} onFinish={onFinish} form={form} layout="vertical">
        <Row gutter={[20, 20]}>
          <Col lg={8} md={8} sm={12} xs={24}>
            <Form.Item
              rules={requiredRule}
              name={"brand"}
              label="Product Brand"
            >
              <Select className="styled_select">
                {brands?.map((item, i) => (
                  <Option key={i} value={item?.title}>
                    {item.title}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col lg={8} md={8} sm={12} xs={24}>
            <Form.Item
              rules={requiredRule}
              name={"model"}
              className="styled_input"
              label="Product Model"
            >
              <Input />
            </Form.Item>
          </Col>
          <Col lg={8} md={8} sm={12} xs={24}>
            <Form.Item
              rules={requiredRule}
              name={"price"}
              className="styled_input"
              label="Price"
            >
              <Input />
            </Form.Item>
          </Col>

          {
            disabledForm ? null : !user?.city && <Col lg={8} md={8} sm={12} xs={24}>
              <Form.Item
                rules={requiredRule}
                label="Location"
                name="area"
              >
                <PlacesAutocomplete
                  shouldFetchSuggestions={address?.length > 3}
                  value={address}
                  onChange={setAddress}
                  onSelect={handleSelect}
                  searchOptions={{
                    componentRestrictions: {
                      country: "pk", // ISO 3166-1 alpha-2 country code for Pakistan
                    },
                  }}
                >
                  {({
                    getInputProps,
                    suggestions,
                    getSuggestionItemProps,
                    loading,
                  }) => (
                    <div>
                      <Input

                        onClick={onOpenPlacesDropdown}
                        onBlur={onClosePlacesDropdown}
                        {...getInputProps({
                          placeholder: "Click to find your address",
                        })}
                        value={address}
                      />
                      {isPlacesDropDown && (
                        <div className="suggest_box">
                          <button
                            onClick={onGetLocation}
                            type="button"
                          >
                            <MdOutlineMyLocation />
                            Current location
                          </button>

                          {loading && <div>Loading...</div>}

                          {suggestions.map((suggestion, index) => (
                            <div
                              className={`${suggestion.active ? "active" : ""
                                }`}
                              key={index}
                              {...getSuggestionItemProps(
                                suggestion,
                                {}
                              )}
                            >
                              {suggestion.description}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </PlacesAutocomplete>
              </Form.Item>
            </Col>
          }

          <Col lg={8} md={8} sm={12} xs={24}>
            <Form.Item
              rules={requiredRule}
              name={"product_type"}
              label="Product Condition"
            >
              <Select className="styled_select">
                {ProductCondition?.map((item, i) => (
                  <Option key={i} value={item?.value}>
                    {item.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          <Col lg={8} md={8} sm={12} xs={24}>
            <Form.Item rules={requiredRule} name={"warranty"} label="Warranty">
              <Select className="styled_select">
                {WarrantyOptions?.map((item, i) => (
                  <Option key={i} value={item?.value}>
                    {item.label}
                  </Option>
                ))}
                <Option value={"No Warranty"}>No Warranty</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="files" rules={requiredRule} label="Upload images">
              <Upload
                beforeUpload={() => false}
                listType="picture-card"
                fileList={fileList}
                onChange={handleFileChange}
                maxCount={20}
              >
                {fileList?.length === 20 ? "" : "Upload"}
              </Upload>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name={"description"}
              className="styled_input textarea_style"
              label="Description"
            >
              <Input.TextArea />
            </Form.Item>
          </Col>
        </Row>
        <div className="submit_wrapper">
          <StyledButton disabled={disabledForm} loading={loading} type="submit">
            Post
          </StyledButton>
        </div>
      </Form>
    </div>
  );
};

export default PostSmartWatch;
