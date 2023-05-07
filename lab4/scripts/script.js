let counter = 0;

function increment(){
    var body = document.getElementsByTagName("body")[0];
    body.classList.toggle("dark");
    counter++;
    document.getElementById("countText").innerHTML = counter;
    
    if (counter >= 5) {
        alert("Відрахований");
    }
}

function pasteHTML(){
    document.getElementById("buttonSection").innerHTML = '<button onclick="increment()">Білий/Чорний</button>';
}

pasteHTML();
