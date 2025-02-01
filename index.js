// index.js
export async function fetchArtwork() {
  const API_URL = "https://api.artic.edu/api/v1/artworks/search";

  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data); // Log the fetched data to the console

    const responseElement = document.getElementById("response");
    responseElement.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    console.error("Error fetching artwork", error);
    const responseElement = document.getElementById("response");
    responseElement.textContent = "Error fetching artwork";
  }
}
