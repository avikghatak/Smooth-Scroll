let hamburger = document.getElementById('hamburger')
let nav = document.querySelector('.nav_ul')
let btn2 = document.querySelector('.navbar')
let btn3 = document.querySelectorAll('.line')
let count = 0;
let logo = document.querySelector('.nav_logo')
hamburger.addEventListener('click',()=>{
    nav.classList.toggle('show')
    Array.from(btn3).forEach((element)=>{
       element.classList.toggle('active')
    })
})

const HighlishtMenu = ()=>{
    const elem = document.querySelector('.highlight')
    const home = document.querySelector('.nav_home')
    const about = document.querySelector('.nav_about')
    const services = document.querySelector('.nav_services')
    const contacts = document.querySelector('.nav_contact')
    let scroll = window.scrollY

    if(window.innerWidth > 900 && scroll < 631 ){
        home.classList.add('highlight')
        about.classList.remove('highlight')
        services.classList.remove('highlight')
        return
    }
    else if (window.innerWidth > 900 && scroll < 1188 ){
        home.classList.remove('highlight')
        about.classList.add('highlight')
        services.classList.remove('highlight')
        return
    }
    else if (window.innerWidth > 900 && scroll < 1900 ){
        about.classList.remove('highlight')
        services.classList.add('highlight')
        return
    }
    else{
        services.classList.remove('highlight')
        about.classList.remove('highlight')
        home.classList.remove('highlight')
    }
    if(elem && window.innerWidth <960 && scroll<600){
        elem.classList.remove('highlight')
    }
}

window.addEventListener('scroll',HighlishtMenu)

const list_items = document.querySelectorAll('.list_items')
console.log(Array.from(list_items))
Array.from(list_items).forEach((element)=>{
    element.addEventListener('click',()=>{
        if(window.innerWidth < 901){
            nav.classList.toggle('show')
        hamburger.classList.toggle('change')
        btn2.classList.toggle('nav_main')
        Array.from(btn3).forEach((element)=>{
           element.classList.toggle('active')
        })
        }
    })
})

const hidemobile =()=>{
  if(window.innerWidth < 901){
      nav.classList.remove('show')
      Array.from(btn3).forEach((element)=>{
        element.classList.remove('active')
     })
  }
}
nav.addEventListener('click',hidemobile)