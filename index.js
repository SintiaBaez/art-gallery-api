let alohomoraActivated = false; // Status to track if Alohomora is active

async function fetchArtworks() {
  const url =
    "https://api.artic.edu/api/v1/artworks?fields=id,title,image_id,artist_title";

  const gallery = document.getElementById("art-gallery");
  const artistFilter = document.getElementById("artist-filter");

  if (!gallery || !artistFilter) {
    console.error("Gallery or filter dropdown not found!");
    return;
  }

  gallery.innerHTML = "<p>Loading artworks...</p>";
  artistFilter.innerHTML = '<option value="all">All Artists</option>';

  try {
    const response = await fetch(url);
    const data = await response.json();

    gallery.innerHTML = "";
    if (!data.data.length) {
      gallery.innerHTML = "<p>No artworks found.</p>";
      return;
    }

    const artists = new Set();
    const artworks = [];

    data.data.forEach((art) => {
      if (art.image_id) {
        artworks.push(art);

        if (art.artist_title) {
          artists.add(art.artist_title);
        }
      }
    });

    artists.forEach((artist) => {
      const option = document.createElement("option");
      option.value = artist;
      option.textContent = artist;
      artistFilter.appendChild(option);
    });

    artistFilter.addEventListener("change", (event) => {
      filterArtworks(event.target.value, artworks);
    });

    displayArtworks(artworks);
  } catch (error) {
    console.error("Error fetching artworks:", error);
    gallery.innerHTML = "<p>Error loading artworks. Try again later.</p>";
  }
}

async function fetchAlternateArtworks() {
  const url =
    "https://api.artic.edu/api/v1/artworks?page=2&limit=12&fields=id,title,image_id,artist_title";

  const gallery = document.getElementById("art-gallery");

  gallery.innerHTML = "<p>Summoning new artworks...</p>";

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!data.data.length) {
      gallery.innerHTML = "<p>No new artworks found.</p>";
      return;
    }

    displayArtworks(data.data);
  } catch (error) {
    console.error("Error fetching new artworks:", error);
    gallery.innerHTML = "<p>Something went wrong. Try again!</p>";
  }
}

function displayArtworks(artworks) {
  const gallery = document.getElementById("art-gallery");
  gallery.innerHTML = "";

  artworks.forEach((art) => {
    const imageUrl = `https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`;
    const coverUrl = "https://wallpaperaccess.com/full/4137444.jpg";

    const card = document.createElement("div");
    card.className = "art-card";

    const cover = document.createElement("div");
    cover.className = "art-cover";
    const coverImg = document.createElement("img");
    coverImg.src = coverUrl;
    coverImg.alt = "Cover Image";
    cover.appendChild(coverImg);

    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = art.title;
    img.classList.add("art-image");

    const title = document.createElement("p");
    title.textContent = `${art.title} by ${art.artist_title || "Unknown"}`;

    card.appendChild(cover);
    card.appendChild(img);
    card.appendChild(title);
    gallery.appendChild(card);

    // If Alohomora is active, display images directly
    if (alohomoraActivated) {
      card.classList.add("show");
    }
  });
}

function filterArtworks(artist, artworks) {
  let filteredArt;
  if (artist === "all") {
    filteredArt = artworks;
  } else {
    filteredArt = artworks.filter((art) => art.artist_title === artist);
  }

  displayArtworks(filteredArt);
}

fetchArtworks();

// LUMOS Button Effect
document.getElementById("lumos").addEventListener("click", function () {
  document.body.classList.toggle("lit");
  this.classList.toggle("glowing");
  this.textContent = document.body.classList.contains("lit") ? "Nox" : "Lumos";
});

//Charms button effect
// Alohomora
document.getElementById("alohomora").addEventListener("click", function () {
  alohomoraActivated = !alohomoraActivated; // Alternate status

  const cards = document.querySelectorAll(".art-card");
  cards.forEach((card) => {
    card.classList.toggle("show", alohomoraActivated);
  });

  this.textContent = alohomoraActivated ? "Colloportus" : "Alohomora";
});

// Expecto Patronum
document
  .getElementById("expecto-patronum")
  .addEventListener("click", function () {
    const cards = document.querySelectorAll(".art-card");
    cards.forEach((card) => {
      card.classList.toggle("glowing-border");
    });
    this.textContent =
      this.textContent === "Expecto Patronum"
        ? "Expecto Patronum"
        : "Expecto Patronum";
  });

//Felix Felicis
document.getElementById("felix-felicis").addEventListener("click", function () {
  fetchAlternateArtworks();
});
