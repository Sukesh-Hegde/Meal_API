//seting up an empty array in the local storage if it doesn't already exist
if (localStorage.getItem("favouritesList") == null) {
    localStorage.setItem("favouritesList", JSON.stringify([]));
}

