import styles from "../styles/Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.name}>
        <h2 className="text-white">Hi! My Name is</h2>
        <h1>Bekir BALI</h1>
      </div>
      <div className={styles.title}>
        <h3>Front-End Developer</h3>
      </div>
    </div>
  );
};

export default Home;
