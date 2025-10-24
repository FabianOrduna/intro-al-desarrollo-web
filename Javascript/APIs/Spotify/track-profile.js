function addAlbumResponse(container, data) {
  const card = document.createElement("div");
  card.className = "card mb-3";
  card.style.maxWidth = "540px";

  const row = document.createElement("div");
  row.className = "row g-0";

  const imgCol = document.createElement("div");
  imgCol.className = "col-md-4";

  const img = document.createElement("img");
  img.src = data.album.images[0]?.url || "";
  img.alt = `Album cover for ${data.album.name}`;
  img.className = "img-fluid rounded-start";

  imgCol.appendChild(img);

  const bodyCol = document.createElement("div");
  bodyCol.className = "col-md-8";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const title = document.createElement("h5");
  title.className = "card-title";
  title.textContent = data.name;

  const artist = document.createElement("p");
  artist.className = "card-text";
  artist.innerHTML = `<strong>Artist:</strong> ${data.artists
    .map((a) => a.name)
    .join(", ")}`;

  const album = document.createElement("p");
  album.className = "card-text";
  album.innerHTML = `<strong>Album:</strong> ${data.album.name}`;

  const release = document.createElement("p");
  release.className = "card-text";
  release.innerHTML = `<small class="text-muted"><strong>Release Date:</strong> ${data.album.release_date}</small>`;

  cardBody.append(title, artist, album, release);
  bodyCol.appendChild(cardBody);
  row.append(imgCol, bodyCol);
  card.appendChild(row);
  container.appendChild(card);
}

function addHTMLAlbumResponse(container, data) {
  const outputHTML = `<div class="card mb-3 bg-success" style="max-width: 540px">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="${data.album.images[0]?.url || ""}"
            alt="Album cover for ${data.album.name}"
            class="img-fluid rounded-start"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <p class="card-text">
              <strong>Artist:</strong> ${data.artists
                .map((a) => a.name)
                .join(", ")}
            </p>
            <p class="card-text"><strong>Album:</strong> ${data.album.name}</p>
            <p class="card-text">
              <small class="text-muted"
                ><strong>Release Date:</strong> ${
                  data.album.release_date
                }</small
              >
            </p>
          </div>
        </div>
      </div>
    </div>`;
  container.innerHTML = outputHTML;
}

async function ejecutaFuncion() {
  const token = document.getElementById("token").value.trim(); // ABC
  const trackId = document.getElementById("track-id").value.trim();

  const container = document.getElementById("track-info");
  container.innerHTML = "<p>Hola</p><p>Mundo</p>";

  const parrafo = document.createElement("p");
  parrafo.textContent = "Loading...";
  container.appendChild(parrafo);

  try {
    const response = await fetch(
      "https://api.spotify.com/v1/tracks/" + trackId,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    container.innerHTML = ""; // Clear loading
    // addAlbumResponse(container, data); -> modificando el DOM
    addHTMLAlbumResponse(container, data); // -> usando innerHTML
  } catch (err) {
    container.innerHTML = "";
    const error = document.createElement("p");
    error.textContent = err.message;
    error.style.color = "red";
    container.appendChild(error);
  }
}

//-------------------------------------------------------------------------------
// Purpose: Fetch and display Spotify track information using Spotify Web API
document.getElementById("fetch-btn").addEventListener("click", ejecutaFuncion);
