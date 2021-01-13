import React, { useState } from "react";
import PropTypes from 'prop-types';

/**
 *
 * @name Radio Component
 * @function handle change to store target value
 * @param props
 * @return target value of selected radio button 
 */

const RadioComponent = (props) => {
  const { title, data, radioButtonSelection } = props;
  const [selectedItem, setSelectedItem] = useState();

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedItem(value);
  };
  radioButtonSelection(selectedItem);
  return (
    <>
      <p>{`Choose ${title} from below`}</p>
      {data.map((item) => (
        <label htmlFor={item} key={item}>
          {" "}
          {item}
          <input
            type="radio"
            id={item}
            name={title}
            value={item}
            onChange={handleChange}
          />
        </label>
      ))}
    </>
  );
};

RadioComponent.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  radioButtonSelection: PropTypes.func.isRequired,
};

export default RadioComponent;
