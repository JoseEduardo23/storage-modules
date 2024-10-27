// Lista de videojuegos disponibles
export const games = [
    "The Legend of Zelda: Breath of the Wild",
    "Super Mario Odyssey",
    "Animal Crossing: New Horizons",
];

// Función para listar los juegos disponibles
export function listGames() {
    console.log("Lista de videojuegos disponibles:");
    games.forEach((game) => {
        console.log(game);
    });
}