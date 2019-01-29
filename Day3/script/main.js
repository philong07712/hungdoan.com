 myArray = ['red', 'green', 'blue', 'purple', 'white', 'yellow', 'orange', 'gray', 'black', 'gold', 'lime', 'seagray', 'tan', 'steelblue', 'wheat', 'yeallowgreen']

function change() {
    var rand = myArray[Math.floor(Math.random() * myArray.length)];
    document.body.style.background = rand;
}
