import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { postUser } from '../actions';

import Header from './Header';
import Aside from './Aside';
import Form from './Form';

//all data is stored separately
import { contactInfo, areas, address, password } from './fieldData';
import { CONTACT_INFO, AREAS, ADDRESS, PASSWORD, COMPLETED } from '../types/formPages';

function App ({ form, postUser }) {
  //proccess the data into arrays for further use
  const formPages = [ CONTACT_INFO, AREAS, ADDRESS, PASSWORD, COMPLETED ];
  const formData = [ contactInfo, areas, address, password ];

  //setting up current step of the form
  const [ currentStep, setCurrentStep ] = useState(0);
  const currentPage = formPages[currentStep];

  //check if user completed the form
  useEffect(() => {
    if(currentPage === COMPLETED) {
      postUser(form);
    }
  }, [currentStep])

  //handlers for moving forwards and backwards through the form
  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  }

  const handleBack = () => {
    if (currentStep === 0) {
      return;
    }

    setCurrentStep(currentStep - 1);
  }

  return (
    <div className="app">
      <Header 
        className="app__header" 
        currentStep={ currentStep + 1 }
        currentPage={ currentPage }
      />
      <Aside 
        className="app__aside" 
        currentStep={ currentStep }  
        currentPage={ currentPage }
        setCurrentStep={ setCurrentStep }
      />
      <Form 
        className="app__form"
        currentStep={ currentStep }
        onNext={ handleNext }
        onBack={ handleBack } 
        formData={ formData }
        formPages={ formPages }
      />
      <a href="#" className="app__link">Back to login</a>
    </div>
  )
}

const mapStateToProps = ({form}) => {
  return { form };
}

export default connect(mapStateToProps, { postUser })(App);