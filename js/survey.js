document.getElementById('contactForm').addEventListener('submit', function(event) {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  if (name === "" || email === "" || message === "") {
    alert("All fields must be filled out");
    event.preventDefault();
  } else if (!email.includes("@")) {
    alert("Please enter a valid email address");
    event.preventDefault();
  } else {
    alert("Thank you for your message! We will get back to you soon.");
  }
});
