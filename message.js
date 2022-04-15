function removeItems() {
    document.getElementById('nom').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}

var btn = document.getElementById('btn');
btn.addEventListener('click', function (e) {
    e.preventDefault()
    var nom = document.getElementById('nom').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var body = '' + nom + '<br>' + email + '<br>' + '<br>' + message;


    Email.send({
        Host: "smtp.gmail.com",
        Username: "moussasagos@gmail.com",
        Password: "okuvxguscwmzqqmv",
        To: 'moussasagos@gmail.com',
        From: email,
        Subject: 'Portfolio',
        Body: body,
    }).then(
        message => alert("Message envoyer")
    );
    
    removeItems();
})