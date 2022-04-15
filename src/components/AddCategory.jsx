import { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      //utilizando un callback puedo hacer referencia al estado anterior del setCategories sin pasale la propiedad del estado actual al component
      setCategories((categories) => [inputValue, ...categories]);
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handlerSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputValue}
        name=""
        id=""
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
