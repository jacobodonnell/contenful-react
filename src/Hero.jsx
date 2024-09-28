import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contenful CMS</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga quae
            tempora deserunt doloribus magni impedit, odit fugit nisi aliquam
            aperiam eaque commodi excepturi facilis. Quidem cum et dolorem
            incidunt rem sunt possimus repellendus saepe consequuntur
            perferendis ipsam vel, vero asperiores?
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
