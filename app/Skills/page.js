export default function Skills() {
  return (
    <div className=" m-50 ">
      <section id="skills" className="skills-section">
        <div className="container">
          <h2 className="section-title">
            My <span>Skills</span>
          </h2>

          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">
                <i className="devicon-html5-plain colored"></i>
              </div>
              <h3>HTML5</h3>
              <div className="skill-progress">
                <div className="progress-bar w-11/12 bg-[#E44D26]"></div>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-icon">
                <i className="devicon-css3-plain colored"></i>
              </div>
              <h3>CSS3</h3>
              <div className="skill-progress">
                <div className="progress-bar bg-[#264DE4;] w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
