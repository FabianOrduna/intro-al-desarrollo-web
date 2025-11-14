export const Profile = ({ url, textoAlternativo }) => {
  if (!url) {
    return null;
  }

  return <img src={url} alt={textoAlternativo} />;
};
