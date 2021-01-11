import React from "react";

const RadioComponent = (props) => {
  const { title, data } = props;
  return (
    <>
      <p>{`Choose ${title} from below`}</p>
      {data.map((item) => (
        <label htmlFor={item} key={item}>
          {" "}
          {item}
          <input type="radio" id={item} name={title} value={item} />
        </label>
      ))}
    </>
  );
};

export default RadioComponent;
