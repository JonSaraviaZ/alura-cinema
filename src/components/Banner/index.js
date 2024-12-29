import { useMediaQuery } from "react-responsive";
import styles from "./Banner.module.css";

function Banner({ img, color }) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div
    className={`${styles.capa} ${isMobile ? styles.mobile : ''}`}
      style={{ backgroundImage: `url("/img/banner-${img}.png")` }}
    >
      <div className={styles.gradient} style={{ background: `${color}` }}>
        
      </div>
    </div>
  );
}

export default Banner;
