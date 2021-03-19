function Completed () {
  return(
    <div className="completed">
        <svg className="completed__figure" viewBox="0 0 386 386" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="193" cy="193" r="183" stroke="#D5D5D5" strokeWidth="20"/>
          <path d="M93 180L185 256L317 134" stroke="#9EF77E" strokeWidth="40"/>
        </svg>

        <div className="completed__content">
          <h3 className="completed__title">Thank you for registering!</h3>
          <p className="completed__text">
            A registration confirmaion email was sent to the email address proided. 
            Your registration will be sent for approval and activation to the Administrator. 
            <span className="t--semibold"> You will receive an email when your account is ready to use.</span>
          </p>
      </div>
    </div>
  )
}

export default Completed;