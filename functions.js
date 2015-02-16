function show(){
    var season = document.getElementById("season").value;
    var plants = document.getElementsByClassName('plant');
    if(season == "summer"){
        clear(plants);
        document.getElementById("tomato").style.display = "block";
        document.getElementById("lettuce").style.display = "block";
    }else if(season == "autumn"){
        clear(plants);
        document.getElementById("basil").style.display = "block";
        document.getElementById("lettuce").style.display = "block";
    }else if(season == "winter"){
        clear(plants);
        document.getElementById("asparagus").style.display = "block";
    }else if(season == "spring"){
        clear(plants);
        document.getElementById("lettuce").style.display = "block";
        document.getElementById("tomato").style.display = "block";
    }else if(season == "default"){
        for(var i = 0, plant;plant = plants[i]; i++) {
                plant.style.display = 'block';
        }
    }
    return true;
}
 function clear(elements){
    for(var i = 0, element;element = elements[i]; i++) {
        element.style.display = 'none';
    }
}