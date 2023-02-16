const join = document.querySelector(".container")

const btn = document.querySelector(".btn")

const popup = document.querySelector(".popup")

const xicon = document.querySelector(".fa-sharp")

btn.addEventListener("click",(e) => {
    popup.classList.remove("hidden")
    join.classList.add("blur")
})

xicon.addEventListener("click", (e) => {
    popup.classList.add("hidden")
    join.classList.remove("blur")

})