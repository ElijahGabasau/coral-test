import { useState } from 'react';

//composed pretty much like an Input component. Written separately due to its high specificity
function Password ({ name, label, required, register, errors, formValues }) {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const isValidPas = (password) => password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/);
  const isMatch = (confirm) => confirm === value;

  const confirmName = `confirm_${name}`;
  return (
    <div className="password">
      <div className="password__instructions">
        <svg className="password__bubble" viewBox="0 0 609 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M109 0H0.5L109 50.9868V400H609V0H115H109Z"/>
        </svg>
        <div className="password__title"><h5>Instructions:</h5><div className="password__sign"><p>!</p></div></div>
        <p>
          <span className="t--cpz">{label}</span> must include:<br/>
          - at least 8 characters<br/>
          - an UPPER case letter<br/>
          - a lower case letter<br/>
          - a number
        </p>
      </div>

      <div className="password__field">
        <label className="password__label" >
          {required && <span className="t--bold u-primary">*</span>} { label }:
        </label>
        <input 
          className={`form__input ${errors[name]? 'form__input--invalid' : ''}`} 
          name={ name } 
          type="password"
          ref={register({ required, validate: isValidPas })} 
          defaultValue={formValues[name]}
          onChange={(e) => handleChange(e)}
        />
        {errors[name] && <div className="form__invalid-sign"><p>!</p></div>}
        {errors[name] && 
          <div className="form__invalid-message">
            <p>Error</p>
            {errors[name].type === 'required' && <p>{label} is required</p> }
            {errors[name].type === 'validate' && <p>{label} has to be at least 8 characters long and must contain at least one of each: a lowercase letter, an uppercase letter and a number</p>}
          </div>
          }
      </div>

      <div className="password__field">
        <label className="password__label" >
          {required && <span className="t--bold u-primary">*</span>} Confirm { label }:
        </label>
        <input 
          className={`form__input ${errors[confirmName]? 'form__input--invalid' : ''}`} 
          type="password"
          name={ confirmName } 
          ref={register({ required, validate: isMatch })} 
          defaultValue={formValues[name]}
        />
        {errors[confirmName] && <div className="form__invalid-sign"><p>!</p></div>}
        {errors[confirmName] && 
          <div className="form__invalid-message">
            <p>Error</p>
            {errors[confirmName].type === 'required' && <p>Confirm {label} is required</p> }
            {errors[confirmName].type === 'validate' && <p>Confirm {label} and {label} do not match</p>}
          </div>
          }
      </div>
    </div>
  );
}

export default Password;