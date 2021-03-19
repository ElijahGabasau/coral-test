function Header ({ className, currentStep, currentPage }) {
  return (
    <header className={`header ${className}`}>
      <h2 className="header__title">New User Registration</h2>
      <h3 className="header__subtitle"><span className="t--caps">Step</span> {currentStep}: <span className="t--cpz">{currentPage}</span></h3>
    </header>
  )
}

export default Header;