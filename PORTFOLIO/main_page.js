// Menu déroulant

// On récupère le logo et le menu déroulant dans le DOM
const logo = document.querySelector(".logo")
const dropdown = document.querySelector(".dropdown")

// Quand la souris passe sur le logo, on affiche le menu déroulant
logo.addEventListener("mouseover", function() {
    dropdown.classList.add("showdropdown") // Ajoute la classe qui rend le menu visible
})

// Quand la souris quitte le logo, on cache le menu déroulant
logo.addEventListener("mouseleave", function(){
    dropdown.classList.remove("showdropdown") // Supprime la classe pour cacher le menu
})
