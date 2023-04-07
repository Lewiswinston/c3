function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var phone = document.getElementById("phone").value;
    var subject = "New form submission";
    var body = "Name: " + name + "\n\nEmail: " + email + "\n\nMessage: " + message + "\n\nphone:" + phone;
    window.open('mailto:lewiswinston17@gmail.com?subject=' + subject + '&body=' + body);
 }
 
 var form = document.getElementById("myForm");
 form.addEventListener("submit", function(event) {
    event.preventDefault();
    sendEmail();
 });
 

