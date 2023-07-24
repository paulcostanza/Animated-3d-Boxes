const images = [
    "images/7eleven.webp",
    "images/amazon.webp",
    "images/bellatlantic.webp",
    "images/dhl.webp",
    "images/fujitsu.webp",
    "images/google.webp",
    "images/instagram.webp",
    "images/microsoft.webp",
    "images/nike.webp",
    "images/playstation.webp",
    "images/starbucks.webp",
    "images/sunset.webp",
    "images/tacobell.webp",
    "images/tesla.webp",
    "images/twitch.webp",
    "images/windows.webp",
    "images/youtube.webp"
]

// selects our image
let image = images[Math.floor(Math.random() * images.length)]

// Our elements from HTML
const boxesContainer = document.getElementById('boxes')
const btn = document.getElementById('btn-transform')
const btnChangeImage = document.getElementById('btn-image')

btn.addEventListener('click', () => boxesContainer.classList.toggle('big'))

const createBoxes = () => {
    for(let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const box = document.createElement('div')
            box.classList.add('box')
            box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`

            boxesContainer.appendChild(box)
        }
    }
}

createBoxes()

// we can now select 'box class' because the function 'createBox' adds it to the div with the class 'boxes'
const boxImage = document.querySelectorAll('.box')

const addImage = () => {
    boxImage.forEach(b => {
        b.style.backgroundImage = 'url(' + image + ')';
    });
}

// Changes our image with the button, 'Change Image'
btnChangeImage.addEventListener('click', () => {
    image = images[Math.floor(Math.random() * images.length)]
    
    addImage()
})

addImage()











