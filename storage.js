export function saveFavoriteGame(game) {
    localStorage.setItem("favoriteGame", JSON.stringify(game)); 
    console.log(`${game} ha sido guardado como tu juego favorito.`);
}

export function getFavoriteGame() {
    const favoriteGame = JSON.parse(localStorage.getItem("favoriteGame")); 
    return favoriteGame;
}