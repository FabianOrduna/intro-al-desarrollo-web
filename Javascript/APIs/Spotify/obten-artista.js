async function obtenArtistaFijo() {
  const URL = "https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb";

  const args = {
    method: "GET",
    headers: {
      Authorization: "Bearer XYZ",
    },
  };

  const response = await fetch(URL, args);
  console.log(response);
  const data = await response.json();
  console.log(data);
}
