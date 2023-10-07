// function getElement(element){
//      const selection = document.querySelector(element)
//      if (selection){
//         return selection
//      }else throw new Error('no element selected');
// }
   
const button = document.querySelector('.but')
const image = document.querySelector('img')
const namee = document.querySelector('.name') 
const actualname = document.querySelector('.nameword')


const buttons = [...document.querySelectorAll('.iconButton')]
const url = 'https://randomuser.me/api/'
const headin = document.querySelector(".headin")
const getuser = async()=>{
    const data = await fetch(url)
    const user = await data.json()
    const person = user.results[0]
    const {phone,email} = person
    const {gender} = person
    const {medium} = person.picture
    const {first,last} = person.name
    const {password} = person.login
    const {date} = person.dob
    const {number} = person.location.street
    console.log()
    return{
        phone,email,gender,medium,name:`${first} ${last}`,password,date,number
    }

}
const showuser = async()=>{
    const info = await getuser()
    console.log(info)
    image.src = info.medium
    actualname.textContent = info.name
    buttons.forEach( (butt)=>{
        const label = butt.dataset.label
        butt.addEventListener('click', ()=>{
        console.log(info.label)
        
            actualname.textContent = info[label]
            namee.textContent = `my ${label} is` 
            buttons.forEach((but)=>{
                but.classList.remove('active')
            })
            butt.classList.add('active')
        
        })
    })
   

}
window.addEventListener('DOMContentLoaded', ()=>{
    showuser()
    console.log('welcome')
    buttons[0].classList.add('active')
})

button.addEventListener('click',()=>{
    namee.textContent = `my name is` 
    buttons.forEach((but)=>{
        but.classList.remove('active')
    }) 
    buttons[0].classList.add('active')
    showuser()
})

