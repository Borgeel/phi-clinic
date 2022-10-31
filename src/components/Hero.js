const Hero = () => {
  return(
    <div className="hero-container">
      <div className="hero-image"></div>
      <span className="hero-text-container">
        <span className="hero-title-container">
        <span className="hero-title">
            <span style={{textDecoration: "underline"}}>Unleash</span>
            &nbsp;Your Inner Radiance And Natural Beauty
          </span>
        </span>
        {/* <span className="hero-title-container">
          <span className="hero-title">And Natural Beauty</span>
        </span> */}
          <span className="hero-subtitle">Get the best results with us at PHI Clinic</span>
      </span>
    </div>

  );
}

export default Hero;