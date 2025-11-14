import { Profile } from "./ProfileWithParams.jsx";

const datos = [
  {
    URL: "https://nbxsoluciones.com/wp-content/uploads/2023/11/mariecurie.jpg",
    ALT: "Marie Curie",
  },
  {
    URL: "https://tse2.mm.bing.net/th/id/OIP.-y89fDTVHW0mBZdw9fYnogHaEK?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    ALT: "Charles Darwin",
  },
];

const Gallery = () => {
  return (
    <section>
      <h1>Científicos importantes</h1>
      <Profile
        url={
          "https://nbxsoluciones.com/wp-content/uploads/2023/11/mariecurie.jpg"
        }
        textoAlternativo={"Marie Curie"}
      />
      <Profile
        url={
          "https://tse2.mm.bing.net/th/id/OIP.-y89fDTVHW0mBZdw9fYnogHaEK?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
        }
        textoAlternativo={"Charles Darwin"}
      />
      <Profile />
      <hr />
      {datos.map((dato) => (
        <Profile key={dato.URL} url={dato.URL} textoAlternativo={dato.ALT} />
      ))}
    </section>
  );
};

export default Gallery;
