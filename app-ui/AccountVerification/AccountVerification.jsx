import { extractAddressComponents, getLocationAndDecodeAddress } from '@/utils/helper';
import { requiredRule } from '@/utils/rules';
import { Form, Input, notification } from 'antd';
import { useState } from 'react';
import { MdOutlineMyLocation } from "react-icons/md";
import PlacesAutocomplete, {
    geocodeByAddress
} from "react-places-autocomplete";
import StyledButton from '../StyledButton/StyledButton';
import api from '@/services/api';
import { useRouter } from 'next/navigation';

const AccountVerification = (props) => {


    const [form] = Form.useForm();
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        try {
            setLoading(true);
            let res = await api.post(`/send-otp`, values);

            if (res.data.status) {
                localStorage.setItem('@phone', JSON.stringify(values.phone_number));
                router.push('/otp')
            } else {
                notification.error({
                    message: 'Error',
                    description: 'Something went wrong',
                });
            }

        } catch (error) {
            notification.error({
                message: 'Error',
                description: 'Something went wrong',
            });
        }
        setLoading(false);
    }

    return (
        <div className="account_verification">
            <h1>Please verify your account</h1>
            <p>
                You need to verify your account to post an ad. We will send you a verification code to your phone number.
            </p>
            <Form
                form={form}
                onFinish={onFinish}
                layout="vertical"
            >
                <Form.Item rules={requiredRule} name={'phone_number'} className="styled_input" label="Enter your phone number">
                    <Input />
                </Form.Item>
                {/* <Form.Item
                    rules={requiredRule}
                    className="styled_input"
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
                </Form.Item> */}
                <div className="submit_wrapper">
                    <StyledButton loading={loading} type='submit'>Verify</StyledButton>
                </div>
            </Form>
        </div>
    )
}

export default AccountVerification