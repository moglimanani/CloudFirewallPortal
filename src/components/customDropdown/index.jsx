import React from 'react';
import Select from 'react-select';

function CustomDropDown(props) {
  const { selectedValue, options, customOnChangeEvent, name, isClearable, isSearchable, customClassName } = props;
  console.log(333, name, selectedValue, options);

  return (
    <Select
      className={customClassName}
      value={options ? options.filter(({ value }) => value === selectedValue) : []}
      isClearable={isClearable}
      isSearchable={isSearchable}
      getOptionLabel={({ label }) => label}
      getOptionValue={({ value }) => value}
      name={name}
      options={options}
      onChange={selected => customOnChangeEvent(selected)}
    />
  );
}

export default CustomDropDown;
