let button = document.querySelector('button');
let move = 0
button.addEventListener('click' , () =>{
    
    let colors = ["#0000ff" , "#008000" , "#800080" , "#ffff00" , "#00008b" , "#ff0000" , "#a52a2a" , "#7fff00" , "#40e0d0"]
    
    if (move > colors.length - 1) {
        move = 0;
    }
    document.body.style.backgroundColor = colors[move]
    document.getElementById('color').innerHTML = colors[move]
    document.getElementById('span').style.backgroundColor = colors[move]
    
    move++;
} )