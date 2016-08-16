import React from 'react';

const Select = (props) => {
  let options = props.items.map(item => {
    return <option value={item} key={item}>{item}</option>
  })

  return (
    <select value={props.selectedItem}
            disabled={props.disabled}
            onChange={evt => props.onChange(evt.target.value)}>
      <option value="">-- Select {props.title} --</option>
      {options}
    </select>
  )
}

Select.defaultProps = {
  disabled: false,
  title: null
};

export default Select
