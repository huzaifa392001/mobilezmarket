import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

const SectionHeading = (props) => {
    const { text = "", className = "primary" } = props;

    return (
        <>
            <div className="linkBtnCont">
                {props?.btn ? (
                    <>
                        <h2 className={'secHeading'}>{text}</h2>
                        <Link href={props?.btnLink} className="linkBtn">
                            View All
                            <FaLongArrowAltRight />
                        </Link>
                    </>
                ) : (
                    <h2 className={'secHeading'}>{text}</h2>
                )}
            </div>
        </>
    );
};

SectionHeading.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
};

export default SectionHeading;
