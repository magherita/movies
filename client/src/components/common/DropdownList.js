import React from "react";
import PropTypes from "prop-types";

const DropdownList = ({ prompt, items, value, onChange, name }) => {
  return (
    <select
      className="form-control form-control-md mt-1"
      value={value}
      onChange={onChange}
      name={name}
    >
      <option defaultValue>{prompt}</option>
      {Object.keys(items).map((item, index) => (
        <option key={index} value={item.toLowerCase()}>
          {item}
        </option>
      ))}
    </select>
  );
};

DropdownList.propTypes = {
  prompt: PropTypes.string.isRequired,
  items: PropTypes.object.isRequired
};

DropdownList.defaultProps = {
  prompt: "Choose"
};

export default DropdownList;
