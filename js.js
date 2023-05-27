console.log("hello")

const ingredients = document.getElementsByClassName('ingredientItem')
const burgerBox = document.getElementById('burgerBox')
const burgerList = document.getElementById('burgerList').querySelector('ul');

const mainBurgerBox = document.getElementById("mainBurgerBox")
const defaultText = document.getElementById("defaultText")

const topBun = document.getElementById("topBun")
const btnBun = document.getElementById("tbtnBun")

let beingDragged

burgerBox.addEventListener('dragover', (e) => {
    e.preventDefault();
})

burgerBox.addEventListener('drop', (e) => {
    defaultText.style.display="none"
    addElementToList(beingDragged.name)
    const name = beingDragged.name

    switch (name) {
        case 'Sesame Bun':
            mainBurgerBox.style.minWidth = "5px";
            mainBurgerBox.style.minHeight= "5px";
            topBun.innerHTML = '<img class="ingredientItem" name="Veggie Patty" src="svgs/BunTop1.svg">'
            btnBun.innerHTML = '<img class="ingredientItem" name="Veggie Patty" src="svgs/BunBtn1.svg">'
            break;
        case 'Whole Wheat Bun':
            mainBurgerBox.style.minWidth = "5px";
            mainBurgerBox.style.minHeight= "5px";
            topBun.innerHTML = '<img class="ingredientItem" name="Veggie Patty" src="svgs/BunTop2.svg">'
            btnBun.innerHTML = '<img class="ingredientItem" name="Veggie Patty" src="svgs/BunBtn2.svg">'
            break;
        case 'Brioche Bun':
            mainBurgerBox.style.minWidth = "5px";
            mainBurgerBox.style.minHeight= "5px";
            topBun.innerHTML = '<img class="ingredientItem" name="Veggie Patty" src="svgs/BunTop3.svg">'
            btnBun.innerHTML = '<img class="ingredientItem" name="Veggie Patty" src="svgs/BunBtn3.svg">'
            break;
        default:
            mainBurgerBox.append(beingDragged)
    }

})



for (let i = 0; i < ingredients.length; i++) {
    ingredients[i].addEventListener('dragstart', (e) => {
        beingDragged = e.target.cloneNode(true)

    })
}

const addElementToList = (name) => {
    let exist


    for (let i = 0; i < burgerList.children.length; i++) {
        if (burgerList.children[i].children[0].innerHTML === name) {

            let count = burgerList.children[i].children[1].innerHTML
            burgerList.children[i].children[1].innerHTML = parseInt(count) + 1
            exist = true

        }

    }

    if (!exist) {
        burgerList.innerHTML += "<li><a>" + name + "</a>(<span>1</span>)</li>"
    }
}




