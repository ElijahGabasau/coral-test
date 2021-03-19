function Textarea ({ name, label, required, errors, register, comment, formValues}) {
  return (
    <div className="textarea__field">
      <label className="textarea__label" >
        {required && <span className="t--bold u-primary">*</span>} { label }:
      </label>
      <textarea className={`form__textarea ${errors[name]? 'form__textarea--invalid' : ''}`}name={ name } ref={register({ required })} defaultValue={formValues[name]} />
      {comment && <p className="textarea__label textarea__label--comment">{comment}</p>}
      {errors[name] && <div className="form__invalid-sign">!</div>}
      {errors[name] && 
        <div className="form__invalid-message">
          <p>Error</p>
          <p>{label} is required</p>
        </div>
      }
    </div>
  )
}

export default Textarea;