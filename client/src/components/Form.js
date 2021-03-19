import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { storeForm } from '../actions';
import { COMPLETED } from '../types/formPages';

import Completed from './Completed';
import Fields from './Fields';

function Form ({ className, currentStep, onNext, onBack, storeForm, formValues, formData, formPages }) {
  const { register, handleSubmit, errors } = useForm({
    reValidateMode: 'onBlur',
  });

  const onSubmit = (data) => {
    storeForm(data);
    onNext();
  }

  const currentPage = formPages[currentStep];

  return (
    <form className={className} onSubmit={handleSubmit(onSubmit)}>
        <div className={`form form--${currentPage}`}>
          <Fields 
            fieldData={ formData[currentStep] }
            register={ register }
            errors={ errors }
            formValues={ formValues }
          />
          {currentPage === COMPLETED &&
            <Completed />
          }
        </div>

        {currentPage !== COMPLETED &&
          <div className="form__button-bar">
            <button className="button button--back" type="button" onMouseDown={onBack}>Back</button>
            <button className="button" type="submit" >Next</button>
          </div>
        }
      </form>
  )

}

const mapStateToProps = ({form}) => {
  return { formValues: form };
}

export default connect(mapStateToProps, { storeForm })(Form);