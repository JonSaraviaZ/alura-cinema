import { useFavoritosContext } from "context/Favoritos";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import iconFavorito from "./iconFavorito.png";
import iconNoFavorito from "./iconNoFavorito.png";

function Card({ id, capa, titulo }) {
  
  const {favorito , agregarFavorito}= useFavoritosContext()
  const isFavorito = favorito.some(fav=> fav.id === id)
  const icon = isFavorito ? iconFavorito : iconNoFavorito;

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 769px)" });

  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`}>
      <img src={capa} alt={titulo} className={styles.capa} />
      <h2>{titulo}</h2>
      </Link>
      <img
        src={icon}
        alt="Icono favorito"
        className={styles.favorito}
        onClick={()=> agregarFavorito({id, titulo, capa})}
      />
    </div>
  );
}
export default Card;
