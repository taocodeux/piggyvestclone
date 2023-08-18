let emailInput = document.getElementById("emailInput")
let passwordInput = document.getElementById("passwordInput")
let savedUser = JSON.parse(localStorage.getItem("myUsers")) || []


function loginToDash(event){
    event.preventDefault()

    if (!emailInput.value.trim() || !passwordInput.value.trim()){
        alert("Input can't be empty")
        return
    } 

    //find the user with the same email and password from the saverusers
    let foundUsers = savedUser.find((preUser) =>
     preUser.userEmail === emailInput.value.trim()
     && preUser.userPassword === passwordInput.value.trim())
   

     if(foundUsers){
      alert("User found")
      localStorage.setItem("verifiedUser", JSON.stringify(foundUsers))
      window.location.href = "dashboard.html"
      return
     } else{
    alert("Incorrect credentials, Please check your credentials")
        
     }
}

