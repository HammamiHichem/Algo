function minToFront(arr) {
    // Trouver l'index de l'élément le plus bas
    var minIndex = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < arr[minIndex]) {
            minIndex = i;
        }
    }

    // Stocker la valeur de l'élément le plus bas
    var minValue = arr[minIndex];

    // Déplacer tous les éléments précédents d'un index vers la droite
    for (var j = minIndex; j > 0; j--) {
        arr[j] = arr[j - 1];
    }

    // Placer l'élément le plus bas au début du tableau
    arr[0] = minValue;

    return arr;
}

// Test de la fonction
var arr = [4, 2, 1, 3, 5];
console.log("Avant : ", arr); // Output: Avant :  [4, 2, 1, 3, 5]
console.log("Après : ", minToFront(arr)); // Output: Après :  [1, 4, 2, 3, 5]
