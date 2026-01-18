// Formulaire
// On récupère les éléments du formulaire et les messages d'erreur dans des variables
const form = document.querySelector("form") // le formulaire entier
const nameInput = document.querySelector("#name") // champ du nom
const nameError = document.querySelector("#name-error") // message d'erreur du nom
const emailInput = document.querySelector("#email") // champ email
const emailError = document.querySelector("#email-error") // message d'erreur email
const telInput = document.querySelector("#tel") // champ téléphone
const telError = document.querySelector("#tel-error") // message d'erreur téléphone
const messageInput = document.querySelector("#message") // champ message
const messageError = document.querySelector("#message-error") // message d'erreur message
const sendsuccess = document.querySelector ("#send-success") // message de succès après envoi

// Écoute de l'événement "submit" sur le formulaire
form.addEventListener("submit", function (event) {
    event.preventDefault() // Empêche le formulaire de se soumettre normalement (page ne se recharge pas)

    let hasError = false // variable pour savoir si une erreur est présente

    // On crée un tableau regroupant chaque champ avec son message d'erreur
    const array = [
        [nameInput, nameError],
        [emailInput, emailError],
        [telInput, telError],
        [messageInput, messageError]
    ]

    // RESET VISUEL : on enlève les styles d'erreur et on cache tous les messages d'erreur
    array.forEach(([input, error]) => {
        input.classList.remove("input-error") // enlève la bordure rouge ou style d'erreur
        error.classList.remove("show") // enlève la classe qui affiche le message
        error.classList.add("hidden") // ajoute la classe qui cache le message
    })

    // On cache aussi le message de succès
    sendsuccess.classList.remove("show")
    sendsuccess.classList.add("hidden")

    // Validation des champs vides
    array.forEach(([input, error]) => {
        if (input.value.trim() === "") { // si le champ est vide après avoir supprimé les espaces
            input.classList.add("input-error") // ajoute le style d'erreur
            error.classList.add("show") // affiche le message d'erreur
            error.classList.remove("hidden") // s'assure que le message n'est pas caché
            hasError = true // on note qu'il y a une erreur
        }
    })

    // Validation du message : longueur minimum
    if (messageInput.value.trim() !== "" && messageInput.value.length < 10) {
        messageInput.classList.add("input-error") // ajoute le style d'erreur
        messageError.classList.add("show") // affiche le message d'erreur
        messageError.classList.remove("hidden") // s'assure qu'il n'est pas caché
        messageError.textContent =
            "Le message doit contenir au minimum 10 caractères" // texte spécifique pour ce type d'erreur
        hasError = true // on note qu'il y a une erreur
    }

    // Si aucune erreur n'a été détectée
    if (!hasError) {
        sendsuccess.classList.add("show") // affiche le message de succès
        sendsuccess.classList.remove("hidden") // s'assure qu'il n'est pas caché
        form.reset() // réinitialise tous les champs du formulaire
    }
})
