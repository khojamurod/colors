
let j=0
let btn = document.querySelector('.colors')
let btns = document.querySelectorAll('.colors')


let colorPanel = document.querySelector('.themes')
let panel = document.querySelector('.panel__btn')
let random = document.querySelector('.random__btn')

let elm = document.querySelector('.element')
let colors = ['#7fff00','#ff7f50','#1e90ff','#808000','#ff4500']


for (let i = 0; i < btns.length; i++) {
    btns[i].style.background= colors[i]

    btns[i].addEventListener('click' , function(){
        elm.style.background = colors[i]
    })
}

panel.addEventListener('click' , function(){
    j++
    if(j%2==1 ){
        colorPanel.style.left= '0'
    }else{
        colorPanel.style.left= '-100%'
    }
})


function randomRang(){
    x= Math.floor(Math.random()*5)

    return x
}

random.addEventListener('click' , function(){
    for(key in colors){
    elm.style.background = colors[randomRang()]
    }

})