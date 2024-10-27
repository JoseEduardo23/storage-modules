// Importamos las funciones necesarias desde los archivos respectivos
import { listGames, games } from "./games.js";
import { saveFavoriteGame, getFavoriteGame } from "./storage.js";

// Mostrar todos los videojuegos disponibles
function displayGames() {
    const gamesList = document.getElementById("games-list");
    const favoriteSelect = document.getElementById("favorite-select");
    gamesList.innerHTML = "";
    favoriteSelect.innerHTML = "";

    games.forEach((game, index) => {
        // Crear elementos de la lista de juegos
        const listItem = document.createElement("li");
        listItem.textContent = game;
        gamesList.appendChild(listItem);

        // Crear opciones para seleccionar juego favorito
        const option = document.createElement("option");
        option.value = index;
        option.textContent = game;
        favoriteSelect.appendChild(option);
    });
}

// Guardar un juego favorito
function saveFavorite() {
    const favoriteSelect = document.getElementById("favorite-select");
    const selectedIndex = favoriteSelect.value;

    if (selectedIndex >= 0 && selectedIndex < games.length) {
        saveFavoriteGame(games[selectedIndex]);
        displayFavorite();
    } else {
        console.error("Índice de juego no válido.");
    }
}

// Mostrar el juego favorito guardado en el HTML
function displayFavorite() {
    const favoriteGame = getFavoriteGame();
    const favoriteGameElement = document.getElementById("favorite-game");

    if (favoriteGame) {
        favoriteGameElement.textContent = `Tu juego favorito es: ${favoriteGame}`;
    } else {
        favoriteGameElement.textContent = "Aún no tienes un juego favorito guardado.";
    }
}

// Inicializar lista de juegos y juego favorito al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    displayGames();
    displayFavorite();
});