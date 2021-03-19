import { useEffect } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

function Captcha ({ name, label, required, register, errors }) {
  useEffect(() => {
    loadCaptchaEnginge(6); 
  }, []);

  const isMatch = (captcha) => validateCaptcha(captcha)

  return (
    <div className="captcha__field">
      <label className="captcha__label" >
        {required && <span className="t--bold u-primary">*</span>} { label }:
      </label>

      <div className="captcha__input">
        <LoadCanvasTemplate />
        <input 
          className={`form__input ${errors[name]? 'form__input--invalid' : ''}`} 
          name={ name } 
          ref={register({ required, validate: isMatch })} 
          autoComplete="off"
        />
        {errors[name] && <p className="captcha__comment"><span className="t--cpz">{label}</span> did not match. Please, try again</p>}
      </div>
    </div>
  )
}

export default Captcha;