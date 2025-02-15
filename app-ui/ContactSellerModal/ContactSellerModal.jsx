import {Modal} from "antd";
import React from "react";
import StyledButton from "../StyledButton/StyledButton";
import {FaPhoneAlt} from "react-icons/fa";
import {FaMessage} from "react-icons/fa6";
import {SiWhatsapp} from "react-icons/si";
import api from "@/services/api";

const ContactSellerModal = (props) => {
    const {
        open = true, onClose = () => {
        }, data = {}, product
    } = props;


    const onSendPhoneLeads = async () => {
        try {
            let res = await api.post(`/phone-leads`, {
                product: product[0],
                user: data?.user?.id

            });

            if (res.data.status) {

            }
        } catch (error) {

        }
    }

    const onSendWhatsappLeads = async () => {
        try {
            let res = await api.post(`/whatsapp-leads`, {
                product: product[0],
                user: data?.user?.id

            });
            if (res.data.status) {

            }
        } catch (error) {

        }
    }

    const handlePhoneCall = () => {
        onSendPhoneLeads();
        window.location.href = `tel:${data?.user?.phone}`; // Replace with the actual phone number
    };

    const handleMessage = () => {
        window.location.href = `sms:${data?.user?.phone}`; // Replace with the actual phone number
    };

    const handleWhatsApp = () => {

        onSendWhatsappLeads();
        const phoneNumber = (data?.user?.phone?.split(" ") || [""]).shift()?.substring(1).split(" ").join(" ");

        window.open(
            `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${window.location.href}`,
            "_blank"
        );
    };


    return (
        <Modal footer={false} width={500} open={open} onCancel={onClose}>
            <div className="contact_seller_modal">
                <h1>Contact With Seller</h1>
                <h3>{data?.user?.shop_name}</h3>

                <div className="contact_links">
                    <button className="social_btns" onClick={handlePhoneCall}>
                        <FaPhoneAlt/>
                        {data?.user?.phone}
                    </button>
                    <button className="social_btns" onClick={handleMessage}>
                        <FaMessage/>
                        {data?.user?.phone}
                    </button>
                    <button className="social_btns" onClick={handleWhatsApp}>
                        <SiWhatsapp/>
                        {data?.user?.phone}
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default ContactSellerModal;
