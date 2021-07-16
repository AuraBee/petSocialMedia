const cats = [
    {
        name: 'Pumpkin',
        thumbnail: 'imgs/Pumpkin.jpeg'
    },
     {
        name: 'Snuggles',
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


function renderCats(){
    let imgsDOM = ""
    for (let i = 0; i < cats.length; i++) {
      catBasket.innerHTML += ` <img class="cat-img" src="${cats[i].thumbnail}">`
    }
}

renderCats()
