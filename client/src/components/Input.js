import { useState } from 'react';

function Input ({ name, label, required, register, errors, formValues, type, regexVal, confirm}) {
  //setting up validation properties
  const [value, setValue] = useState('');
  
  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const isMatch = (confirm) => confirm === value;
  const confirmName = `confirm_${name}`;

  let validate = null;

  if (regexVal) {
    const re = new RegExp(regexVal, 'g');
    validate = input => re.test(input);
  }

  //pushing input to render
  const render = [
    <div key={`${name}-input`} className="input__field">
      <label className="input__label" >
        {required && <span className="t--bold u-primary">*</span>} { label }:
      </label>
      <input 
        className={`form__input ${errors[name]? 'form__input--invalid' : ''}`} 
        name={ name } 
        ref={register({ required, validate })} 
        defaultValue={formValues[name]}
        type={ type }
        onChange={(e) => handleChange(e)}
      />
      {errors[name] && <div className="form__invalid-sign"><p>!</p></div>}
      {errors[name] && 
        <div className="form__invalid-message">
          <p>Error</p>
          {errors[name].type === 'required' && <p>={label} is required</p> }
          {errors[name].type === 'validate' && <p>{label} is invalid</p>}
        </div>
      }
    </div>
  ]

  //checking if confirm for an input is needed
  if (confirm) {
    render.push (
      <div key={`${name}-confirm`} className="input__field">
      <label className="input__label" >
        {required && <span className="t--bold u-primary">*</span>} Confirm { label }:
      </label>
      <input 
        className={`form__input ${errors[confirmName]? 'form__input--invalid' : ''}`} 
        name={ confirmName } 
        ref={register({ required, validate: isMatch })} 
        defaultValue={formValues[name]}/>
      {errors[confirmName] && <div className="form__invalid-sign"><p>!</p></div>}
      {errors[confirmName] && 
        <div className="form__invalid-message">
          <p>Error</p>
          {errors[confirmName].type === 'required' && <p>Confirm {label} is required</p> }
          {errors[confirmName].type === 'validate' && <p>Confirm {label} and {label} do not match</p>}
        </div>
      }
    </div>
    )
  }

  return render;
}

export default Input;