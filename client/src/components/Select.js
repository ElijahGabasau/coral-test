function Select ({ name, label, required, register, errors, formValues, options }) {
  const renderOptions = () => {
    const render = [];

    for (let option of options) {
      render.push(
        <option key={option} value={option}>{ option }</option>
      )
    }

    return render;
  }

  return (
    <div className="input__field">
      <label className="input__label" >
        {required && <span className="t--bold u-primary">*</span>} { label }:
      </label>
      <select
        className={`form__input ${errors[name]? 'form__input--invalid' : ''}`} 
        name={ name } 
        ref={register({ required })} 
        defaultValue={formValues[name]}
      >
        { renderOptions() }
      </select>
      {errors[name] && <div className="form__invalid-sign"><p>!</p></div>}
      {errors[name] && 
        <div className="form__invalid-message">
          <p>Error</p>
          <p>{label} is required</p>
        </div>
        }
    </div>
  );
}

export default Select;