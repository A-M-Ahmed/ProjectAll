const contactForm = document.querySelector("#contactForm")
// * inputs 
const email = document.querySelector("#email")
const emailError = document.querySelector(".emailError")
const password = document.querySelector("#password")
const strength = document.querySelector("#str")
const passwordError = document.querySelector(".passwordError")

password.addEventListener('input', () => {
    if (password.value.length > 0) {
        passwordError.style.display = "block"
    } else {
        passwordError.style.display = "none"
    }
    if (password.value.length < 4) {
        strength.innerHTML = "weak"
        strength.style.color = "red"
    } else if (password.value.length >= 4 && password.value.length < 8) {
        strength.innerHTML = "medium"
        strength.style.color = "green"
    } else if (password.value.length >= 8) {
        strength.innerHTML = "strong"
        strength.style.color = "blue"
    }
})
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    emailError.textContent = ""
    passwordError.textContent = ""
    if (!emailValid()) {
        email.focus()
        return
    } else if (!passwordValid()) {
        password.focus();
        return
    }

    Swal.fire(
        {
            title: "Success",
            text: "Success registration was successfully",
            icon: "success",
            confirmButton: "ok"
        }
    )
})

function emailValid() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    if (!email.value.match(emailPattern)) {
        setError(email)
        emailError.textContent = "Put a valid email"
        emailError.style.color = "red"
        return false
    } else {
        setSuccess(email)
        return true
    }
}

function passwordValid() {

    if (password.value.length < 8) {
        passwordError.textContent = "Password is not more than 8 character";
        passwordError.style.color = "red"
        return false


    } else {
        setSuccess(password)
        return true

    }
}

function setError(element) {
    element.classList.add('invalid')
    element.classList.remove('valid')

}
function setSuccess(element) {
    element.classList.add("valid")
    element.classList.remove("invalid")
}