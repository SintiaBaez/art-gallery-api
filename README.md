# Lumos Art Gallery API

Welcome to the Lumos Art Gallery API! This project is an API designed to provide users with access to a curated collection of artwork from various artists, featuring magical and whimsical themes. Whether you are a fan of art or want to explore unique pieces, this API serves as the backend for an interactive art gallery web application.

## Project Overview

The Lumos Art Gallery API provides endpoints for managing, displaying, and interacting with the gallery's artwork collection. It is designed to support various features such as retrieving artworks, adding new pieces, and categorizing them into specific collections based on different themes.

## Key Features

- Fetch artwork details: Retrieve information about various artworks, including title, description, artist, and associated image.
- Add new artwork: Ability for administrators to add new pieces of art to the gallery with relevant metadata.
- Categorization of artworks: Group artworks into different categories, such as magical, fantasy, or abstract.
- Search functionality: Search for artwork based on artists.
- Art metadata: Access information about the artists, such as their names and descriptions.

## Endpoints

The Lumos Art Gallery API provides the following endpoints:

1. /Artists

GET: Retrieve a list of all artists in the gallery.
Response: A list of artists with relevant metadata (name, bio, etc.).

2. /artworks
   GET: Retrieve a list of all artworks in the gallery.
   Response: A list of artworks, including their titles, descriptions, artists, and image URLs.

3. /artworks/search/:artistName
   GET: Search for artworks by artist name.
   Response: A list of artworks by the specified artist.

## Installation

To get started with the Lumos Art Gallery API, follow these steps:

1. Clone the repository
   git clone https://github.com/SintiaBaez/art-gallery-api.

## Contributing

We welcome contributions to the Lumos Art Gallery API! If you'd like to help improve this project, please follow these steps:

1. Fork this repository
2. Create a new branch
3. Make your changes
4. Commit your changes
5. Push to the branch
6. Create a pull request

Here are some ways you can contribute:

Report bugs or issues
Suggest new features
Help with testing and documentation
Submit code improvements or bug fixes
