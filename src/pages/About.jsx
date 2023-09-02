import styles from "../styles/About.module.scss";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.bio}>
        <h2>BIO</h2>
        <p>
          Hello, I'm Bekir, a dedicated frontend web developer with experience
          in{" "}
          <strong>
            {" "}
            HTML, CSS, JavaScript, React.js, Tailwindcss, SCSS, and Bootstrap
          </strong>
          . I am passionate about creating visually appealing and intuitive
          websites that provide an exceptional user experience. My expertise in
          web development allows me to bring my clients' visions to life, and I
          am committed to delivering projects on time and within budget. In
          addition to my technical skills, I enjoy finding creative solutions to
          complex problems. When I'm not coding, you can find me exploring new
          technologies, or improving my skills through online courses and
          tutorials. Thank you for taking the time to visit my portfolio
          website, and I look forward to the opportunity to collaborate with
          you.
        </p>
      </div>
      <div className={styles.experience}>
        <div className={styles.place}>
          <h2>Clarusway, LLC, US (REMOTE)</h2>
          <h4>Nov 2022 - Apr 2022</h4>
        </div>
        <h3>Front End Developer Trainee</h3>
        <ul>
          <li>
            Developed interactive, responsive and scalable frontend using HTML5,
            CSS3, JavaScript ES6, React.js
          </li>
          <li>
            Designing a website with HTML, CSS, SASS(SCSS) and Bootstrap-5 codes
          </li>
          <li>
            Support HTML and CSS projects using JS Dom manipulation and event
            listeners
          </li>
          <li>
            Requesting APIs using Async, Await and Fetch structures to view data
            from various platforms
          </li>
          <li>State management applying using React States</li>
          <li>
            Experienced in writing modular and reusable codes, using build tools
            and package managers
          </li>
          <li>
            Studied on Computational Thinking, Operating Systems, Linux, Version
            Control Systems(Git & Github),Software Development Life Cycle (SDLC)
          </li>
          <li>
            Used SCRUM & Agile methodologies and JIRA while working on
            individual & group projects
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
