const cats = [
    {
        name: 'Button Nose',
        thumbnail: 'imgs/buttonNose.jpg'
    },
     {
        name: 'Snuggly Wuggly',
        thumbnail: 'imgs/Snuggles.png'
        // credit: 'https://unsplash.com/photos/OzAeZPNsLXk'
    },
     {
        name: 'Cruella',
        thumbnail: 'imgs/Cruella.png',
        // credit: 'https://unsplash.com/photos/w2DsS-ZAP4U'
    },
    
    { 
        name: 'Fred du Purr',
        thumbnail: 'imgs/ginGinger.jpg',
                //credit: with thank - Nina Mercado - unsplash
    },
    
    {
        name: 'Agustus Meaw',
        thumbnail: 'imgs/Agustus.jpg',
        //credit:
    },
    
        
    {
        name: 'Kitt Kanut',
        thumbnail: 'imgs/kitGinger.jpg',
        //credit:
    }
    
]

const catBasket = document.getElementById("cat-basket")


cats.forEach(image => {
    const card = document.createElement('div')
    card.classList.add('card');
    catBasket.appendChild(card)

    const picture = document.createElement('img')
    picture.classList.add('picture');
    picture.src = image.thumbnail
    card.appendChild(picture)

    const imageName = document.createElement('h2')
    imageName.classList.add('image-name');
    imageName.innerText = image.name
    card.appendChild(imageName)
})

// 
/*          refactored into forEach (above)
//function renderCats(){
//     let imgsDOM = ""
//       let catImg = document.getElementsByClassName("cat-img")
//     for (let i = 0; i < cats.length; i++) {
//     catBasket.innerHTML += ` <img class="cat-img" src="${cats[i].thumbnail}">  `
  
//     let catImg = document.getElementsByClassName("cat-img")
//     catImg.innerHTML += cats[i].name
//     }
  
// }

// renderCats()*/
