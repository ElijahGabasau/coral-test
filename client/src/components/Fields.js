import _ from 'lodash';

import Textarea from './Textarea';
import Checkbox from './Checkbox';
import Input from './Input';
import Password from './Password';
import Captcha from './Captcha';
import Select from './Select';

//switcher component deciding which type of input to render per each piece of data 
function Fields ({ fieldData, register, errors, formValues }) {
  const renderFields = () => {
    if(!fieldData) {
      return
    }

    return _.map(fieldData, (data) => {
      if (data.type === 'select') {
        return(
          <Select
            key={ data.name }
            register={ register }
            errors={ errors }
            formValues={ formValues }
            {...data}
          />
        )
      }

      if (data.type === 'checkbox') {
        return (
          <Checkbox
            key={ data.name }
            register={ register }
            errors={ errors }
            formValues={ formValues }
            {...data}
          />
        );
      }

      if (data.type === 'textarea') {
        return (
          <Textarea 
            key={ data.name }
            errors={ errors } 
            register={ register }
            formValues={ formValues }
            {...data}
          />
        );
      }

      if (data.type === 'captcha') {
        return (
          <Captcha 
            key={ data.name }
            errors={ errors } 
            register={ register }
            {...data}
          />
        )
      }

      if (data.type === 'password') {
        return (
          <Password 
            key={ data.name }
            errors={ errors } 
            register={ register }
            formValues={ formValues }
            {...data}
          />
        )
      }

      return (
        <Input 
          key={ data.name }
          errors={ errors } 
          register={ register }
          formValues={ formValues }
          {...data}
        />
      );
    });
  }

  return renderFields();
}

export default Fields;