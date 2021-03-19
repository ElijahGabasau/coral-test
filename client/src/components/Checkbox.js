function Checkbox ({ label, name, sublabels, required, register, errors, formValues }) {
  const renderCheckboxes = () => {
    const checkboxes = [];

    for (let label of sublabels) {
      checkboxes.push (
        <div key={label}>
          <input 
            id={label} 
            value={ label } 
            name={ name } 
            type='checkbox' 
            defaultChecked={ formValues[name] && formValues[name].includes(label) }
            ref={register({ required })} 
          />
          <label htmlFor={label} className="checkbox__label" >{ label }</label>
        </div>
      )
    }

    return checkboxes;
  }

  return (
    <div className="checkbox__field">
      <p className="checkbox__label">
        {required && <span className="t--bold u-primary">*</span>} {label}
      </p>
      <div className="checkbox__container">
        { renderCheckboxes() }
      </div>
      {errors[name] && <div className="form__invalid-sign">!</div>}
      {errors[name] && 
        <div className="form__invalid-message">
          <p>Error</p>
          <p>Please select your personal {label}</p>
        </div>
      }
    </div>
  )
}

export default Checkbox;