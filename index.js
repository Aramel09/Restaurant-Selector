const restaurants = [
    'Chipotle',
    "Wendy's",
    'Cheesecake Factory',
    'Wingstop',
    'McDonalds',
    'Doña Bessy',
    'Popeyes',
    'Cava'
]


function generateList() {
    const newList = document.createElement('ul')

    for (let i = 0; i < restaurants.length; i++){
        const postRestaurants = document.createElement('li')
        postRestaurants.innerText = restaurants[i]
        newList.appendChild(postRestaurants)
        // postRestaurants.id = restaurants[i]
        postRestaurants.setAttribute("id", restaurants[i])
        document.body.appendChild(newList)
 

}}

generateList()

function randomizer(){
const randomNumber = Math.floor(Math.random() * restaurants.length);
console.log(randomNumber)
console.log(restaurants[randomNumber])
return restaurants[randomNumber]
}

const prueba = randomizer()
const a = document.getElementById(prueba).style.color = 'green'
console.log(a)



// let contador = 0;
// const atribute = document.querySelectorAll('li')
// console.log(atribute)
// atribute.forEach((atribute) => {
//     atribute.setAttribute('class', restaurants[contador])
//     console.log(atribute)
//     console.log(contador)
//     contador++;
// })


// const yaMeHarte = document.querySelector('li')
// yaMeHarte.setAttribute('id', 'Chipotle')
// console.log(yaMeHarte)

