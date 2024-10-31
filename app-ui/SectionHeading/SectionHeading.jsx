import React from "react";
import PropTypes from "prop-types";

const SectionHeading = (props) => {
    const { text = "", className = "primary" } = props;

    return (
        <h2 className={'secHeading'}>{text}</h2>
    );
};

SectionHeading.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
};

export default SectionHeading;
