// Email.send({
//   SecureToken: "bc61184-6336-4d33-b9ee-cc896ce64ecc",
//   To: "them@website.com",
//   From: "matthewmarcoy168@gmail.com",
//   Subject: "This is the subject",
//   Body: "And this is the body",
// }).then((message) => alert(message));
let btn = document.querySelector("button");
let emailAddress = document.querySelector("#email");
let firstName = document.querySelector("#first");
let secondName = document.querySelector("#last");
let phoneNumber = document.querySelector("#phonenumber");
let sent = document.querySelector("h6");
let form = document.querySelector("form");
let data = document.querySelector(".data");
let menubtn = document.querySelector(".fa-bars");
let menu = document.querySelector(".showwhenmob .links");
menubtn.addEventListener("click", () => {
  menu.classList.toggle("active")
})
btn.onclick = function (e) {
  e.preventDefault();

  if (firstName.value === "") {
    firstName.parentElement.classList.add("errorr");
  }
  if (emailAddress.value === "") {
    emailAddress.parentElement.classList.add("errorr");
  }
  if (secondName.value === "") {
    secondName.parentElement.classList.add("errorr");
  }
  if (phoneNumber.value === "") {
    phoneNumber.parentElement.classList.add("errorr");
  } else {
    btn.value = "Sending...";

    const serviceID = "default_service";
    const templateID = "template_5lw80fg";

    emailjs.sendForm(serviceID, templateID, form).then(
      () => {
        btn.value = "Send Email";

        sent.style.opacity = "1";
      },
      (err) => {
        btn.value = "Send Email";
        alert(JSON.stringify(err));
      }
    );
  }
};

// Body: `this massage is from ${firstName} ${secondName} this is his phone number ${phoneNumber} and this is his email ${emailAddress} and this is what he want ${textarea}`,
