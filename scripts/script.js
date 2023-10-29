const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
} 



emailjs.init("Basit");

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting in the traditional way

        emailjs.sendForm("Basit", "mujeebabiola", this)
            .then(function (response) {
                console.log("Sent successfully: " + response.text);
                // You can display a success message to the user or redirect them to a thank-you page.
            }, function (error) {
                console.log("Failed to send: " + error);
                // You can display an error message to the user.
            });
    });

