import hero from "../img/hero.jpg";

function Hero() {
  return (
    <div className="hero-section">
      <img src={hero} />
      <h2>The bright Future of Web 3.0?</h2>
      <div className="hero-description">
        <p>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button>READ MORE</button>
      </div>
    </div>
  );
}

export default Hero;
