import React, { useState } from "react";

const CheckboxComponent = (props) => {
  const { title, data, min, max } = props;
  const [selectedItems, setSelectedItems] = useState([]);
  const [checkNumOfItems, setCheckNumOfItems] = useState(true);
  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setSelectedItems((prev) => prev.concat(name));
    }
    if (!checked) {
      let removeUncheckedValue = selectedItems.filter((item) => item !== name);
      setSelectedItems(removeUncheckedValue);
    }
  };
  const checkNumberOfItems = (min, max) => {
    if (selectedItems.length > max) {
      setCheckNumOfItems(false);
    }
  };
  checkNumberOfItems();
  console.log("Item Limit Test: ",checkNumOfItems);
  console.log("Min Val: ",min);
  console.log("Max Val: ",max);
  console.log("Current Val:", selectedItems.length);
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
      {checkNumOfItems ? '' : `You need to a minimum of ${min} and maximum of ${max} ${title}`}
    </>
  );
};

export default CheckboxComponent;
