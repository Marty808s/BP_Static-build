import PropTypes from "prop-types";

export default function Paragraph({ text, property, size }) {
    return (
        <p className={`${property} ${size}`}>{text}</p>
    );
}

Paragraph.propTypes = {
    text: PropTypes.string,
    property: PropTypes.oneOf(["font-bold", "font-normal"]),
    size: PropTypes.oneOf(["text-base", "text-lg", "text-xl"]),
};