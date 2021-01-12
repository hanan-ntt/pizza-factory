import React, { useState } from "react";

/**
 * @name CheckboxComponent
 * @function handle change to verify the selection and create an array of selected values
 * @param props
 * @return array of selected checkbox values
 */

const CheckboxComponent = (props) => {
  const { title, data, max, checkboxSelection } = props;
  const [selectedItems, setSelectedItems] = useState([]);
  const [maxLimitReached, setMaxLimitReach] = useState(true);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setSelectedItems((prev) => prev.concat(name));
    }
    if (!checked) {
      let removeUncheckedValue = selectedItems.filter((item) => item !== name);
      setSelectedItems(removeUncheckedValue);
    }
    if (selectedItems.length >= max - 1) {
      setMaxLimitReach(false);
    } else {
      setMaxLimitReach(true);
    }
  };
  checkboxSelection(selectedItems);

  return (
    
    <>
      <p>{`Choose ${title} from below`}</p>
      {data.map((item) => (
        <label htmlFor={item} key={item}>
          {item}
          <input
            type="checkbox"
            id={item}
            name={item}
            value={item}
            onChange={handleChange}
          />
        </label>
      ))}
      <p>{maxLimitReached ? "" : `You can pick maximum of ${max} ${title}.`}</p>
    </>
  );
};

export default CheckboxComponent;
