import styles from "../styles/Contact.module.scss";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1>Contact Me</h1>
      <div className={styles.info}>
        <div className={styles.mail}>
          <h2>
            <HiOutlineMail /> Email
          </h2>
          <h3>
            <a href="mailto:bfbali43@gmail.com">bfbali43@gmail.com</a>
          </h3>
        </div>
        <div className={styles.phone}>
          <h2>
            <HiOutlinePhone /> Phone
          </h2>
          <h3>
            <a href="tel:+90 (541) 270 3026">+90 (541) 270 3026</a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
