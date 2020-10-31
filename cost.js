function calculateCost() {
    
    var area= document.getElementById('area').value;
    var costPerSqFt=document.getElementById('costPerSqFt').value;
    var possessionCharges= document.getElementById('possessionCharges').value;

    var basePrice = parseFloat(area*costPerSqFt);
    var registryCharges = basePrice * 0.05;
    var commisionCharges = basePrice * 0.01;
    var costOfRawFlat = parseFloat(area*costPerSqFt) 
        + parseFloat(possessionCharges)
        + parseFloat(registryCharges)
        +parseFloat(commisionCharges);
    var totalCostWithFurnishing = parseFloat(costOfRawFlat) + 200000;
    var transferCost = parseFloat(area) * 421;
    

    document.getElementById('basePrice').value = basePrice;
    document.getElementById('costOfRawFlat').value = costOfRawFlat;
    document.getElementById('registryCharges').value = registryCharges;
    document.getElementById('commisionCharges').value = commisionCharges;
    document.getElementById('totalCostWithFurnishing').value = totalCostWithFurnishing;
    document.getElementById('transferCost').value = transferCost;
}

function basePriceChange(){
    if (document.getElementById('area').value){
        var area= document.getElementById('area').value;
    }
    else{
        var area = 1280;
        document.getElementById('area').value = 1117;
    }
    var basePrice = document.getElementById('basePrice').value;
    var costPerSqFt= parseFloat(basePrice)/parseFloat(area);
    var possessionCharges= document.getElementById('possessionCharges').value;
    var registryCharges = basePrice * 0.05;
    var commisionCharges = basePrice * 0.01;
    var costOfRawFlat = parseFloat(area*costPerSqFt) 
        + parseFloat(possessionCharges)
        + parseFloat(registryCharges)
        +parseFloat(commisionCharges);
    var totalCostWithFurnishing = parseFloat(costOfRawFlat) + 200000;
    var transferCost = parseFloat(area) * 421;
    
    document.getElementById('costOfRawFlat').value = costOfRawFlat;
    document.getElementById('costPerSqFt').value = costPerSqFt;
    document.getElementById('registryCharges').value = registryCharges;
    document.getElementById('commisionCharges').value = commisionCharges;
    document.getElementById('totalCostWithFurnishing').value = totalCostWithFurnishing;
    document.getElementById('transferCost').value = transferCost;
}