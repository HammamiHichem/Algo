function sweatshirtPricing(num) {
    const pricePerShirt = 20; // Prix par sweat-shirt en dollars
    let totalCost = num * pricePerShirt; // Coût total sans remise

    // Appliquer les remises en fonction du nombre de sweat-shirts
    if (num === 2) {
        totalCost *= (1 - 0.09); // Appliquer une remise de 9% pour 2 sweat-shirts
    } else if (num === 3) {
        totalCost *= (1 - 0.19); // Appliquer une remise de 19% pour 3 sweat-shirts
    } else if (num >= 4) {
        totalCost *= (1 - 0.35); // Appliquer une remise de 35% pour 4 sweat-shirts ou plus
    }

    // Arrondir le coût total au dollar supérieur et le retourner
    return Math.ceil(totalCost);
}

function clockHandAngles(seconds) {
    // Convertir les secondes en heures, minutes et secondes
    let hours = seconds / 3600;
    let minutes = (hours - Math.floor(hours)) * 60;
    let secs = (minutes - Math.floor(minutes)) * 60;

    // Calculer les angles pour les heures, minutes et secondes
    let hourAngle = Math.floor((hours % 12) * 30);
    let minuteAngle = Math.floor(minutes * 6);
    let secondAngle = Math.floor(secs * 6);

    // Afficher les angles
    console.log(`Hour hand: ${hourAngle} degs. Minute hand: ${minuteAngle} degs. Second hand: ${secondAngle} degs.`);
}

// Tests pour sweatshirtPricing
console.log(sweatshirtPricing(1)); // Output: 20
console.log(sweatshirtPricing(2)); // Output: 36 (arrondi à 36)
console.log(sweatshirtPricing(3)); // Output: 49 (arrondi à 49)
console.log(sweatshirtPricing(4)); // Output: 52 (arrondi à 52)

// Tests pour clockHandAngles
clockHandAngles(3600); // Output: Hour hand: 30 degs. Minute hand: 0 degs. Second hand: 0 degs.
clockHandAngles(119730); // Output: Hour hand: 277 degs. Minute hand: 93 degs. Second hand: 180 degs.
