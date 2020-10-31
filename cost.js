function calculateCost() {
    
    var area= document.getElementById('area').value;
    var costPerSqFt= document.getElementById('costPerSqFt').value;
    var possessionCharges= document.getElementById('possessionCharges').value;

    var baseCost = parseFloat(area*costPerSqFt);
    var registryCharges = baseCost * 0.05;
    var commisionCharges = baseCost * 0.01;
    var costOfRawFlat = parseFloat(area*costPerSqFt) 
        + parseFloat(possessionCharges)
        + parseFloat(registryCharges)
        +parseFloat(commisionCharges);
    var totalCostWithFurnishing = parseFloat(costOfRawFlat) + 200000;
    var transferCost = parseFloat(area) * 421;
    

    document.getElementById('costOfRawFlat').value = costOfRawFlat;
    document.getElementById('registryCharges').value = registryCharges;
    document.getElementById('commisionCharges').value = commisionCharges;
    document.getElementById('totalCostWithFurnishing').value = totalCostWithFurnishing;
    document.getElementById('transferCost').value = transferCost;
}