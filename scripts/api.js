const url = "https://zoo-animal-api.herokuapp.com/animals/rand"

const h1 = document.getElementById("APIh1");
const img = document.getElementById("APIimg")
const btn = document.getElementById("APIbtn")


btn.addEventListener("click", function getAPI(){
    fetch(url)
    .then((response) => {
        response.json().then((data) => {
            h1.textContent = data["name"];
            img.src = data["image_link"];
        })
    })
})