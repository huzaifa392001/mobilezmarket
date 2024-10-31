"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import ProductResult from "../ProductResult/ProductResult";
import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { AiOutlineClose } from "react-icons/ai";
import { MdFilterListOff } from "react-icons/md";
import { RiSeparator } from "react-icons/ri";
import StyledButton from "../StyledButton/StyledButton";
import { CaretRightOutlined } from "@ant-design/icons";
import { Checkbox, Collapse, Form, Radio, Slider, Tag } from "antd";

import api from "@/services/api";
import debounce from "lodash/debounce";
import { ProductCondition, PtaStatus, WarrantyOptions } from "@/utils/fakeData";
import { FaRegGrinBeamSweat } from "react-icons/fa";
import AddBanner from "../AddBanner/AddBanner";
import SectionHeading from "../SectionHeading/SectionHeading";
import StepSection from "../StepSection/StepSection";

const FiltersLayout = ({ searchProp }) => {
    const [deviceData, setDeviceData] = useState([]);
    const [categoryBrands, setCategoryBrands] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isLoadMore, setIsLoadMore] = useState(false);
    const [page, setPage] = useState(1);
    const [totalRecords, setTotalRecords] = useState(1);
    const [rams, setRams] = useState([]);
    const [rom, setRom] = useState([]);
    const [cities, setCities] = useState([]);
    const [accessoriesCategory, setAccessoriesCategory] = useState([]);
    const [isDomReady, setIsDomReady] = useState(false);

    const filtersNodeRef = useRef(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsDomReady(true);
            console.log("searchProp=> ", searchProp)
        }
    }, []);

    const searchParams = useSearchParams();
    const pathParams = usePathname();

    const filterParam = pathParams.split('/');

    let category;
    let brand;
    let city;
    for (let i = 0; i < filterParam.length; i++) {
        // Check for city
        if (filterParam[i].startsWith('c-')) {
            let tempParam = (filterParam[i].replaceAll("_", " "))
            city = tempParam.substring(2);
        }
        // Check for category
        else if (filterParam[i].startsWith('cat-')) {
            let tempParam = (filterParam[i].replaceAll("_", " "))
            category = tempParam.substring(4);
        }
        // Check for brand
        else if (filterParam[i].startsWith('b-')) {
            filterParam[i].replaceAll("_", " ")
            let tempParam = (filterParam[i].replaceAll("_", " "))
            brand = tempParam.substring(2);
        }
    }
    const ram = searchParams.get("ram") || "";
    const storage = searchParams.get("storage") || "";
    const pta_status = searchParams.get("pta_status") || "";
    const product_status = searchParams.get("product_status") || "";
    const min_price = searchParams.get("min_price") || "";
    const max_price = searchParams.get("max_price") || "";
    const search = searchParams.get("search") || "";
    const sort = searchParams.get("sort") || "";
    const order = searchParams.get("order") || "";
    const warranty = searchParams.get("warranty") || "";
    const accessories_category = searchParams.get("accessories_category") || "";

    const router = useRouter();
    const [form] = Form.useForm();

    const getBrands = async (cat) => {
        try {
            let res = await api.get(`/product-brands?category=${cat}`);

            if (res?.data?.status) {
                let getBrands = res?.data?.product_brands?.map((item) => {
                    return {
                        label: item,
                        value: item,
                    };
                });
                setCategoryBrands(getBrands);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getCities = async () => {
        try {
            let res = await api.get(`/cities`);

            if (res?.data?.status) {
                let getCitiesData = res?.data?.cities?.map((item) => {
                    return {
                        label: item,
                        value: item,
                    };
                });
                setCities(getCitiesData);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getDevices = async (data, isNewData, newPage) => {
        try {
            let res = await api.post(`/category?page=${newPage}`, data);

            if (isNewData) {
                setDeviceData(res?.data?.data?.data);
            } else {
                setDeviceData((prev) => [...(prev || []), ...res?.data?.data?.data]);
            }

            setTotalRecords(res?.data?.data?.total);

            let formValues = {
                ...data,
                brand: data?.brand?.[0] || "",
                range: [data?.min_price || 0, data?.max_price || 1000000],
            };

            let getRams = res?.data?.ram?.map((item) => {
                return {
                    label: `${item?.ram} GB`,
                    value: `${item?.ram} GB`,
                };
            });
            let getRoms = res?.data?.storage?.map((item) => {
                return {
                    label: `${item?.storage} GB`,
                    value: `${item?.storage} GB`,
                };
            });

            let getAccessoriesCategory = res?.data?.accessories_category?.map(
                (item) => {
                    return {
                        label: item?.accessories_category,
                        value: item?.accessories_category,
                    };
                }
            );

            setAccessoriesCategory(getAccessoriesCategory);
            setRams(getRams);
            setRom(getRoms);

            form.setFieldsValue(formValues);
        } catch (error) {
            console.log(error);
        }

        setLoading(false);
        setIsLoadMore(false);
    };

    const handleCollapse = () => {
        let filterNode = filtersNodeRef.current;
        if (filterNode?.classList.contains("open")) {
            filterNode.classList.remove("open");
        } else {
            filterNode.classList.add("open");
        }
    };
    const handleCollapseClose = () => {
        let filterNode = filtersNodeRef.current;
        filterNode.classList.remove("open");
    };

    const debouncedGetDevices = debounce(getDevices, 300);

    let payload = {
        ...(category && { category }),
        ...(accessories_category && { accessories_category }),
        ...(brand && { brand: brand.split(",") }),
        ...(ram && { ram: ram.split(",") }),
        ...(storage && { storage: storage.split(",") }),
        ...(pta_status && { pta_status: pta_status.split(",") }),
        ...(product_status && { product_status: product_status.split(",") }),
        ...(city && { city }),
        ...(min_price && { min_price }),
        ...(max_price && { max_price }),
        ...(search && { search }),
        ...(sort && { sort }),
        ...(order && { order }),
        ...(warranty && { warranty: warranty.split(",") }),
    };

    useEffect(() => {
        getCities();
    }, []);

    useEffect(() => {
        setLoading(true);

        debouncedGetDevices(payload, true, 1);

        return () => debouncedGetDevices.cancel();
    }, [
        category,
        brand,
        ram,
        storage,
        pta_status,
        product_status,
        city,
        min_price,
        max_price,
        search,
        sort,
        order,
        warranty,
        accessories_category,
    ]);

    useEffect(() => {
        if (category) {
            getBrands(category);
            handleCollapseClose();
        }
    }, [category]);

    const onReset = () => {
        setPage(1);
        form.resetFields();
        router.push("/devices");
    };

    const onBrandChange = () => {
        form.setFieldsValue({
            brand: [],
            ram: [],
            storage: [],
        });
    };

    const removeUndefinedValues = (obj) => {
        const result = {};
        for (const key in obj) {
            if (obj[key] !== undefined) {
                result[key] = obj[key];
            }
        }
        return result;
    };

    const onFinish = (values) => {
        let getValues = removeUndefinedValues(values);
        let payload = {
            ...getValues,
        };
        setPage(1);
        if (payload?.range?.[1] > 0) {
            payload = {
                ...payload,
                ...(getValues?.brand?.length > 0 ? { brand: [getValues?.brand] } : {}),
                ...(getValues?.range
                    ? { min_price: getValues?.range[0], max_price: getValues?.range[1] }
                    : {}),
            };
        }

        delete payload.range;

        let url = new URL(window.location.href);
        let params = new URLSearchParams(url.search);

        params.delete("search");
        params.delete("sort");
        params.delete("order");

        Object.entries(payload).forEach(([key, value]) => {
            if (key === "min_price" || key === "max_price") {
                params.set(key, value);
            } else {
                if (value?.length) {
                    params.set(key, value);
                }
            }
        });
        url.search = params.toString();
        let cityParam = params.get('city');
        let brandParam = params.get('brand');
        let newPath = pathParams;

        if (cityParam || brandParam) {
            if (cityParam) {
                if (cityParam.includes(' ')) {
                    cityParam = cityParam.replace(' ', '_')
                }
                let tempPath = newPath.replace('/c-', '/c/')
                if (tempPath.includes('/c/')) {
                    newPath = newPath.replace(/\/c-[^/]+/, `/c-${cityParam}`);
                } else {
                    newPath += `/c-${cityParam}`;
                }
                router.push(`${newPath}`);
            }
            if (brandParam) {
                if (brandParam.includes(' ')) {
                    brandParam = brandParam.replace(' ', '_')
                }
                let tempPath = newPath.replace('/b-', '/b/')
                if (tempPath.includes('/b/')) {
                    newPath = newPath.replace(/\/b-[^/]+/, `/b-${brandParam}`);
                } else {
                    newPath += `/b-${brandParam}`;
                }
                router.push(`${newPath}`);
            }
        } else {
            router.push(`${newPath}${url.search}`);
        }
    };

    let timer;

    const onValuesChange = (value) => {
        let newPath = pathParams;
        console.log('value=> ', value)
        if (Object.keys(value)[0] === "range") {
            clearTimeout(timer);
            timer = setTimeout(() => {
                form.submit();
            }, 1000);
        } else {
            if (Object.keys(value)[0] === "category") {
                let newValue = value?.category
                // router.push(`/devices/cat-${value?.category}`);
                if (newValue.includes(' ')) {
                    newValue = newValue.replace(' ', '_')
                }
                let tempPath = newPath.replace('/cat-', '/cat/')
                if (tempPath.includes('/cat/')) {
                    newPath = newPath.replace(/\/cat-[^/]+/, `/cat-${newValue}`);
                } else {
                    newPath += `/cat-${newValue}`;
                }
                router.push(`/devices/cat-${newValue}`);
            } else {
                form.submit();
            }
        }
    };

    const onPageChange = () => {
        setIsLoadMore(true);
        let newPage = page + 1;
        payload.page = newPage;
        debouncedGetDevices(payload, false, newPage);
        setPage(newPage);
    };

    return (
        <>
            <div className="content_wrap">
                <div className="page_title_wrap">
                    <div>
                        <StyledButton className="primary sm" onClick={handleCollapse}>
                            Filters
                        </StyledButton>
                        <h1 className="page_title">
                            {searchProp ? (
                                <>
                                    Buy {searchProp} in Pakistan
                                </>
                            ) : (
                                <>
                                    Buy
                                    latest {brand ? `${brand} ${category === "mobile" ? "mobile" : category ? category : ''}` : `category` ? category === "mobile" ? "Mobile Devices" : category === "accessories" ? `${accessories_category ? accessories_category : "Mobile Accessories"}` : category === "tablet" ? "Tablet Devices" : category === "watch" ? "Smart Watches" : "Mobile Devices" : "Mobile Devices"}{" "} in {city ? city : "Pakistan"}
                                </>
                            )}
                        </h1>
                    </div>

                    <p>
                        Showing {deviceData?.length} out of {totalRecords}{" "}
                    </p>
                </div>
            </div>
            <div className="breadcrumbCont">
                <div className="content_wrap">
                    <div className="styled_breadcrumb">
                        <Link href="/">
                            <IoHome />
                            Home
                        </Link>
                        <span className="separator">/</span>
                        {category && (
                            <>
                                <Link
                                    href={`/devices${("/cat-" + category?.replaceAll(" ", "_"))}`}>
                                    {category}
                                </Link>
                                <span className="separator">/</span>
                            </>
                        )}
                        {brand && (
                            <>
                                <Link
                                    href={`/devices${category !== undefined ? "/cat-" + category?.replaceAll(" ", "_") : ""}${("/b-" + brand?.replaceAll(" ", "_"))}`}>
                                    {brand}
                                </Link>
                                <span className="separator">/</span>
                            </>
                        )}
                        {city && (
                            <Link
                                href={`/devices${category !== undefined ? "/cat-" + category?.replaceAll(" ", "_") : ""}${brand !== undefined ? "/b-" + brand?.replaceAll(" ", "_") : ''}${("/c-" + city?.replaceAll(" ", "_"))}`}>
                                {city}{" "}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
            <div className="content_fluid">
                <div className="content_wrap">
                    <div className="flex_layout">
                        <div ref={filtersNodeRef} className="filters">
                            {isDomReady && (
                                <div className="sticky_container">
                                    <Form
                                        form={form}
                                        onFinish={onFinish}
                                        onValuesChange={onValuesChange}
                                        layout="vertical"
                                    >
                                        <div className="filters_header">
                                            <h3>Filters</h3>{" "}
                                            <div>
                                                <StyledButton
                                                    onClick={onReset}
                                                    className="with_icon_right primary sm"
                                                >
                                                    Clear All Filter <MdFilterListOff />
                                                </StyledButton>
                                                <StyledButton
                                                    onClick={handleCollapseClose}
                                                    className="icon_style filters_action primary sm"
                                                >
                                                    <AiOutlineClose />
                                                </StyledButton>
                                            </div>
                                        </div>
                                        <div className="form_item_wrap">
                                            <Collapse
                                                expandIcon={({ isActive }) => (
                                                    <CaretRightOutlined rotate={isActive ? 90 : 0} />
                                                )}
                                                ghost
                                                bordered={false}
                                                expandIconPosition="end"
                                                defaultActiveKey={["1"]}
                                            >
                                                <Collapse.Panel key="1" header="Category">
                                                    <Form.Item name="category">
                                                        <Radio.Group onChange={onBrandChange}>
                                                            <Radio value={"mobile"}>
                                                                <Tag color="blue">Mobile</Tag>
                                                            </Radio>
                                                            <Radio value={"tablet"}>
                                                                <Tag color="blue">Tablet</Tag>
                                                            </Radio>
                                                            <Radio value={"watch"}>
                                                                <Tag color="blue">Smart Watches</Tag>
                                                            </Radio>
                                                            <Radio value={"accessories"}>
                                                                <Tag color="blue">Accessories</Tag>
                                                            </Radio>
                                                        </Radio.Group>
                                                    </Form.Item>
                                                </Collapse.Panel>
                                                {category === "accessories" && (
                                                    <>
                                                        {accessoriesCategory?.length > 0 && (
                                                            <Collapse.Panel
                                                                key="10"
                                                                header="Assories Category"
                                                            >
                                                                <Form.Item name="accessories_category">
                                                                    <Radio.Group>
                                                                        {accessoriesCategory?.map((item) => (
                                                                            <Radio value={item?.label}>
                                                                                <Tag color="blue">{item?.label}</Tag>
                                                                            </Radio>
                                                                        ))}
                                                                    </Radio.Group>
                                                                </Form.Item>
                                                            </Collapse.Panel>
                                                        )}
                                                    </>
                                                )}
                                                {categoryBrands?.length > 0 && (
                                                    <Collapse.Panel key="2" header="Brands">
                                                        <Form.Item name="brand">
                                                            <Radio.Group>
                                                                {categoryBrands?.map((item) => (
                                                                    <Radio value={item?.label}>
                                                                        <Tag color="blue">{item?.label}</Tag>
                                                                    </Radio>
                                                                ))}
                                                            </Radio.Group>
                                                        </Form.Item>
                                                    </Collapse.Panel>
                                                )}
                                                <Collapse.Panel key="4" header="City">
                                                    <Form.Item name="city">
                                                        <Radio.Group>
                                                            {cities?.map((item) => (
                                                                <Radio value={item?.value}>
                                                                    <Tag color="blue">{item?.value}</Tag>
                                                                </Radio>
                                                            ))}
                                                        </Radio.Group>
                                                    </Form.Item>
                                                </Collapse.Panel>
                                                <Collapse.Panel key="3" header="Price Range">
                                                    <Form.Item name={"range"}>
                                                        <Slider
                                                            defaultValue={[1000, 500000]}
                                                            min={0}
                                                            max={1000000}
                                                            range
                                                        />
                                                    </Form.Item>
                                                    {max_price > 0 ? (
                                                        <div className="price_range">
                                                            <span>{min_price || 0}</span>{" "}
                                                            <span>
                                                                <RiSeparator />
                                                            </span>
                                                            <span>{max_price || 0}</span>
                                                        </div>
                                                    ) : null}
                                                </Collapse.Panel>
                                                {["accessories", "watch"].includes(category) !==
                                                    true && (
                                                        <Collapse.Panel key="5" header="Ram">
                                                            <Form.Item name="ram">
                                                                <Checkbox.Group options={rams} />
                                                            </Form.Item>
                                                        </Collapse.Panel>
                                                    )}
                                                {["accessories", "watch"].includes(category) !==
                                                    true && (
                                                        <Collapse.Panel key="6" header="Storage">
                                                            <Form.Item name="storage">
                                                                <Checkbox.Group options={rom} />
                                                            </Form.Item>
                                                        </Collapse.Panel>
                                                    )}
                                                <Collapse.Panel key="7" header="Product Condition">
                                                    <Form.Item name="product_status">
                                                        <Checkbox.Group options={ProductCondition} />
                                                    </Form.Item>
                                                </Collapse.Panel>
                                                <Collapse.Panel key="8" header="Warranty">
                                                    <Form.Item name="warranty">
                                                        <Checkbox.Group options={WarrantyOptions} />
                                                    </Form.Item>
                                                </Collapse.Panel>
                                                {["accessories", "watch"].includes(category) !==
                                                    true && (
                                                        <Collapse.Panel key="9" header="Pta Status">
                                                            <Form.Item name="pta_status">
                                                                <Checkbox.Group options={PtaStatus} />
                                                            </Form.Item>
                                                        </Collapse.Panel>
                                                    )}
                                            </Collapse>
                                        </div>
                                    </Form>
                                </div>
                            )}
                        </div>

                        <div className="flex_cols">
                            <div className="product_results">
                                <ProductResult
                                    isDomReady={isDomReady}
                                    setLoading={setLoading}
                                    setCategoryBrands={setCategoryBrands}
                                    setDeviceData={setDeviceData}
                                    isLoadMore={isLoadMore}
                                    loading={loading}
                                    deviceData={deviceData}
                                />
                            </div>
                            {totalRecords && totalRecords > deviceData?.length ? (
                                <>
                                    {!loading && (
                                        <div className="load_more">
                                            <StyledButton
                                                loading={isLoadMore}
                                                disabled={isLoadMore}
                                                onClick={onPageChange}
                                            >
                                                Load More
                                            </StyledButton>
                                        </div>
                                    )}
                                </>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <section className="stepSec secPadding">
                <div className="content_wrap">
                    <SectionHeading text="publish your ad on mobilez market" />
                    <StepSection />
                </div>
            </section>
            <section className="bannerSec secPadding">
                <div className="content_wrap">
                    <AddBanner />
                </div>
            </section>
        </>
    );
};

export default FiltersLayout;
