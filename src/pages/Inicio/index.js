import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./index.module.css";

function Inicio() {
  const [videos, setVideos] = useState([]);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 769px)" });

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/JonSaraviaZ/alura-cinema-api/videos"
    )
      .then((response) => response.json())
      .then((data) => {
        setVideos(data);
      });
  }, []);
  return (
    <>
    {/* Adapta el color del banner basado en la pantalla */}
      <Banner img="home" color={isMobile ? "#FF6347" : "#154580"} />
      <Titulo>
        <h1>{isMobile ? "Tus videos favoritos en el móvil" : "Un lugar para guardar sus videos favoritos"} </h1>
      </Titulo>

      <section className={styles.container}
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        padding: isMobile ? "10px" : "20px",
        margin: "40px auto",
        maxWidth: "100%",
        gap: "10px",
      }}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />;
        })}
      </section>
    </>
  );
}

export default Inicio;
