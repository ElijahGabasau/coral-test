import * as formPages from '../types/formPages';
import { COMPLETED } from '../types/formPages';

function Aside ({ className, currentStep, currentPage, setCurrentStep }) {
  const jumpTo = (number) => {
    if (currentStep < number || currentPage === COMPLETED) {
      return;
    }

    setCurrentStep(number);
  } 

  const renderItems = () => {
    const data = [];
    const formKeys = Object.keys(formPages);

    for (let i = 0; i < formKeys.length; i++) {
      data.push(
        <li key={`aside-${i}`} className="aside__item">
          <div className={`aside__figure ${currentStep < i? '' : 'aside__figure--active'}`}>
            {currentStep === i
              ?<svg className="aside__icon" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.755859" y="11.2522" width="1.1714" height="1.1714" fill="white"/>
                <rect x="3.58936" y="11.2522" width="1.1714" height="1.1714" fill="white"/>
                <rect x="6.42285" y="11.2522" width="1.1714" height="1.1714" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M10.5464 11.5306L11.3105 8.68348L11.6956 8.30909L14.0902 10.7042L13.6822 11.1003L10.5464 11.5306ZM14.4737 10.3318L12.0589 7.95595L18.3366 1.85327L20.7398 4.24713L14.4737 10.3318ZM21.187 3.8129L21.8383 3.1804L19.455 0.766113L18.7741 1.428L21.187 3.8129Z" fill="white"/>
              </svg>
              :<p>{i + 1}</p>
            }
          </div>
          <p 
            className={`aside__link ${currentStep <= i || currentPage === COMPLETED ? '' : 'aside__link--active'}`} 
            onMouseDown={() => jumpTo(i)}
          >
            {formPages[formKeys[i]]}
          </p>
        </li>
      )
    }

    return data;
  }

  return (
    <aside className={`aside ${className}`}>
      <ul className="aside__nav">
        { renderItems() }
      </ul>
    </aside>
  )
}

export default Aside;