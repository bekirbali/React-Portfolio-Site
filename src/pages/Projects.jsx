import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRepos } from "../services/api";
import styles from "../styles/Projects.module.scss";
import { featuredRepos } from "../services/api";

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getRepos().then((res) => setRepos(res.data));
    setLoading(false);
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <h1 className="text-white">Loading...</h1>
      ) : (
        <>
          <div className={styles.title}>
            <h2 className="mb-4">Featured Projects</h2>
          </div>
          <div className={styles.featured}>
            {featuredRepos.map((repo) => {
              const { name, description, repo_url, site, technologies, gif } =
                repo;
              return (
                <div className={styles.mainRepos}>
                  <h2>{name}</h2>
                  <img src={gif} alt={name} />
                  <p>{description}</p>
                  <h4>{technologies?.join(" / ")}</h4>
                  <Link to={repo_url}>Repo Link</Link>
                  {site ? <Link to={site}>Site Link</Link> : "No Site Link!"}
                </div>
              );
            })}
          </div>
          <div className={styles.title}>
            <h2>My Projects</h2>
          </div>
          <h3 className="text-center text-white my-4">React Projects</h3>
          <div className={styles.main}>
            {repos
              .filter((repo) => repo.name.toLowerCase().includes("react"))
              .map((repo) => {
                const { id, name, html_url } = repo;
                return (
                  <div className={styles.repo} key={id}>
                    <h2>{name}</h2>
                    <Link to={html_url}>Repo Link</Link>
                  </div>
                );
              })}
          </div>
          <h3 className="text-center text-white my-4">Other Projects</h3>
          <div className={styles.main}>
            {repos
              .filter((repo) => !repo.name.toLowerCase().includes("react"))
              .map((repo) => {
                const { id, name, html_url } = repo;
                return (
                  <div className={styles.repo} key={id}>
                    <h2>{name}</h2>
                    <Link to={html_url}>Repo Link</Link>
                  </div>
                );
              })}
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;
