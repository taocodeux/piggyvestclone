//Update the user names
function updateDashboard(){
    let verifiedUser = JSON.parse(localStorage.getItem("verifiedUser"))

    if (verifiedUser){
        document.getElementById("userfullName").innerHTML = `${verifiedUser.userNames},`
        document.getElementById("useracctName").innerHTML = `${verifiedUser.userNames}`
        document.getElementById("name-p").innerHTML = `${verifiedUser.userNames}`
    } else{
        alert("no name found")
    }
}
updateDashboard()

//change dp
function changeDp(event){
    let file = event.target.files[0] //to get the selected img file from folder using event and store in a variable, the index 0 means the first img file if the user selected a multiple image and the files is the selected files from the folder
    let reader = new FileReader() //a new filereader is created to read the files

    reader.onload = function(event){  //after reading file the reader.onload function is called
        let fileContentUrl = event.target.result //the event.target.result contains the file content in data url form
        let userProfile = document.getElementById("userProfile") //get img html by id
        let acctDp = document.getElementById("acct-dp")
        let changeacctdp = document.getElementById("changed-acct-dp")
        let editPictureModal = document.getElementById("edit-picture-modal")

        userProfile.src = fileContentUrl
        acctDp.src = fileContentUrl  
        changeacctdp.src = fileContentUrl     
        editPictureModal.src = fileContentUrl  
        
        localStorage.setItem("userProfileImage",JSON.stringify(fileContentUrl))
    }
    reader.readAsDataURL(file) //the reader should read the selected image as a data url
}

//to make the picture stay on load
function dpStayOnLoad(){
    let userProfile = document.getElementById("userProfile") //get img html by id
    let acctDp = document.getElementById("acct-dp")
    let changeacctdp = document.getElementById("changed-acct-dp")
    let editPictureModal = document.getElementById("edit-picture-modal")
    let storedImage = JSON.parse(localStorage.getItem("userProfileImage"))

    if(storedImage){
        userProfile.src = storedImage
        acctDp.src = storedImage
        changeacctdp.src = storedImage  
        editPictureModal.src = storedImage  
    }
}
dpStayOnLoad()


//logout
function logOut(){
    alert("logging out...")
    localStorage.removeItem("verifiedUser")
    window.location.href = "sign in.html"
}


//display block the savings page
function goToSavingsPage(){
    let homePage = document.getElementById("homePage")
    let accountPage = document.getElementById("account-page")
    let savingsPage = document.getElementById("savings-page")
    let activeAcct = document.getElementsByClassName("active-acct")[0]
    let activeHome = document.getElementsByClassName("active")[0]
    let activeSavings = document.getElementsByClassName("active-savings")[0]

    savingsPage.style.display = "block"
    accountPage.style.display = "none"
    homePage.style.display = "none"
    activeAcct.style.color = "#fff"
    activeAcct.style.backgroundColor = "transparent"
    activeAcct.style.padding = "0";
    activeHome.style.color = "#fff"
    activeHome.style.backgroundColor = "transparent"
    activeHome.style.padding = "0";
    activeSavings.style.color = "#083E9E"
    activeSavings.style.backgroundColor = "#fff"
    activeSavings.style.padding = "4px 40px 4px 24px"
    activeSavings.style.borderRadius = "8px 8px 8px 0"

    // localStorage.setItem("currentPage", JSON.stringify(savingsPage))
    // localStorage.setItem("currentPage3", "savingsPage")
}
goToSavingsPage()

//display block the home div
function goToHomePage(){
    let homePage = document.getElementById("homePage")
    let accountPage = document.getElementById("account-page")
    let savingsPage = document.getElementById("savings-page")
    let activeAcct = document.getElementsByClassName("active-acct")[0]
    let activeHome = document.getElementsByClassName("active")[0]
    let activeSavings = document.getElementsByClassName("active-savings")[0]

    homePage.style.display = "block"
    savingsPage.style.display = "none"
    accountPage.style.display = "none"
    activeAcct.style.color = "#fff"
    activeAcct.style.backgroundColor = "transparent"
    activeHome.style.color = "#083E9E"
    activeHome.style.backgroundColor = "#fff"
    activeHome.style.padding = "4px 40px 4px 24px"
    activeAcct.style.padding = "0";
    activeHome.style.borderRadius = "8px 8px 8px 0"
    activeSavings.style.color = "#fff"
    activeSavings.style.backgroundColor = "transparent"
    activeSavings.style.padding = "0";

    // localStorage.setItem("currentPage", JSON.stringify(homePage))
    // localStorage.setItem("currentPage2", "homePage")
}
goToHomePage()

//display block the acct div
function goToAcctPage(){
    let homePage = document.getElementById("homePage")
    let accountPage = document.getElementById("account-page")
    let savingsPage = document.getElementById("savings-page")
    let activeAcct = document.getElementsByClassName("active-acct")[0]
    let activeSavings = document.getElementsByClassName("active-savings")[0]
    let activeHome = document.getElementsByClassName("active")[0]

    homePage.style.display = "none"
    savingsPage.style.display = "none"
    accountPage.style.display = "block"
    activeHome.style.color = "#fff"
    activeHome.style.backgroundColor = "transparent"
    activeHome.style.padding = "0";
    activeSavings.style.color = "#fff"
    activeSavings.style.backgroundColor = "transparent"
    activeSavings.style.padding = "0";
    activeAcct.style.color = "#083E9E"
    activeAcct.style.backgroundColor = "#fff"
    activeAcct.style.padding = "4px 40px 4px 24px"
    activeAcct.style.borderRadius = "8px 8px 8px 0"

    // localStorage.setItem("currentPage", JSON.stringify(accountPage))
    // localStorage.setItem("currentPage1", "accountPage")

}
goToAcctPage()
// Check if the page to display is stored in local storage
// let currentPage1 = localStorage.getItem("currentPage1")
// let currentPage2 = localStorage.getItem("currentPage2")
// let currentPage3 = localStorage.getItem("currentPage3")

// if (currentPage1 === "homePage") {
//     goToHomePage()
// } else if (currentPage2 === "savingsPage") {
//     goToSavingsPage()
// } else if (currentPage3 === "accountPage") {
//     goToAcctPage()
// } else {
//     goToHomePage()
// }



// generate account number and to stay on refresh
function generateorLoadAcctNo(){
    let accountNumber = document.getElementById("acct-number")
    let savedAcctNo = JSON.parse(localStorage.getItem("userAcctNo")) //check if the acctno is saved already
    
    if (savedAcctNo === null) {   // If the account number is not already saved, generate and save it
        let generatedNo = Math.floor(Math.random() * 10000000000)
        localStorage.setItem("userAcctNo", JSON.stringify(generatedNo))
        savedAcctNo = generatedNo // Update the saved value 
    } else {
        accountNumber.innerText = savedAcctNo // If the account number is already saved, use the saved value
    }
}
generateorLoadAcctNo()


//update the input value with the normal user details
let nameContent = document.getElementById("full-name-modal")
let emailContent = document.getElementById("email-modal")
let passwordContent = document.getElementById("password-modal")
let numberContent = document.getElementById("number-modal")
let storedUsers = JSON.parse(localStorage.getItem("myUsers"))
let currentUserIndex = 0 //the current user logged in

if (storedUsers.length > 0){
    nameContent.value = storedUsers[currentUserIndex].userNames
    emailContent.value = storedUsers[currentUserIndex].userEmail
    passwordContent.value = storedUsers[currentUserIndex].userPassword
    numberContent.value = storedUsers[currentUserIndex].userNumber
}

//change details and save changes
let fullNameModal = document.getElementById("full-name-modal")
let emailModal = document.getElementById("email-modal")
let passwordModal = document.getElementById("password-modal")
let numberModal = document.getElementById("number-modal")
let saveBtn = document.getElementById("foot-btn")


let users = JSON.parse(localStorage.getItem("myUsers")) || [];

function saveNewDetails(){
    users[currentUserIndex].userNames = fullNameModal.value
    users[currentUserIndex].userEmail = emailModal.value
    users[currentUserIndex].userPassword = passwordModal.value
    users[currentUserIndex].userNumber = numberModal.value
    localStorage.setItem("myUsers",JSON.stringify(users))
    alert("Profile Updated successfully!")
    closeTheModalDiv()
}

//show modal
function showModal(){
    let modalDiv = document.getElementById("modalDiv") 

    modalDiv.style.display = "block"
}
showModal()

//close modal

function closeTheModalDiv(){
    let modalDiv = document.getElementById("modalDiv") 

    modalDiv.style.display = "none"
}
closeTheModalDiv()
