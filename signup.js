let fullName = document.getElementById("full-name")
let myEmail = document.getElementById("email-address")
let myNumber = document.getElementById("phone-number")
let myPassword = document.getElementById("password")
let users = []

function sendSignUp(event){
    event.preventDefault()

    let myUserInfo = {
        userNames : fullName.value,
        userEmail : myEmail.value,
        userNumber : myNumber.value,
        userPassword : myPassword.value
    }

    if(!fullName.value || !myEmail.value || !myNumber.value || !myPassword.value){
        alert("Please fill in all required fields!")
        return
    }else{
        users.push(myUserInfo)
        alert("Sign Up successfull!, Now Sign in your account!")
        localStorage.setItem("myUsers", JSON.stringify(users))
        window.location.href = "sign in.html"
    }
}

