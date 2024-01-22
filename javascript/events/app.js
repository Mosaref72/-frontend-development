function onclickHandel(e) {
    document.querySelector('h1').innerHTML= new Date().toLocaleTimeString()
}

setInterval(onclickHandel)

function getRandomColor() {
   let str = '0123456789ABCDEF' 
   let setColor = '#'

   for (let i = 0; i < 6; i++) {
    setColor += str[Math.floor(Math.random() * 16)];
    
   }
   return setColor
}
let randomColor = getRandomColor()

let bgColor = document.querySelector(".color")
bgColor.style.backgroundColor= randomColor
setInterval(randomColor,1000)


document.querySelector('.nameChange').addEventListener('change',() => {
    let x = document.querySelector('.nameChange');
    x.value = x.value.toUpperCase();
})

