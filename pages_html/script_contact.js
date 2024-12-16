function sendMail() {
    let parms = {
        prénom: document.getElementById("prénom").value,
        Nom: document.getElementById("nom").value,
        Email: document.getElementById("email").value,
        Mobile: document.getElementById("mobile").value,
        Message: document.getElementById("message").value,
    };

    emailjs.send("service_tz9lmj9", "template_uekof5c", parms)
        .then(function(response) {
            alert("Email envoyé avec succès !");
        })
        .catch(function(error) {
            alert("Échec de l'envoi de l'email : " + error.message);
        });
}
