import woman from "../assets/images/woman.png"

const Hero = () => {
  return(
    <div className="hero-container">
      <div>
        <div className="hero-title">Unleash Your Inner Radiance And Natural Beauty</div>
      </div>
      <div className="hero-image-container">
        <img src={woman} className="hero-image"/>
      </div>
    </div>
  );
}

export default Hero;