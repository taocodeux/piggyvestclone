//Update the user names
function updateDashboard(){
    let verifiedUser = JSON.parse(localStorage.getItem("verifiedUser"))

    if (verifiedUser){
        document.getElementById("userfullName").innerHTML = `${verifiedUser.userNames},`
        document.getElementById("useracctName").innerHTML = `${verifiedUser.userNames}`
        document.getElementById("name-p").innerHTML = `${verifiedUser.userNames}`
        document.getElementById("card-acct-name").innerHTML = `${verifiedUser.userNames}`
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
        // let editPictureModal = document.getElementById("edit-picture-modal")
        let savingsDp = document.getElementById("savingsdp")

        userProfile.src = fileContentUrl
        acctDp.src = fileContentUrl  
        changeacctdp.src = fileContentUrl     
        // editPictureModal.src = fileContentUrl  
        savingsDp.src = fileContentUrl
        
        localStorage.setItem("userProfileImage",JSON.stringify(fileContentUrl))
    }
    reader.readAsDataURL(file) //the reader should read the selected image as a data url
}

    //to make the picture stay on load
function dpStayOnLoad(){
    let userProfile = document.getElementById("userProfile") //get img html by id
    let acctDp = document.getElementById("acct-dp")
    let changeacctdp = document.getElementById("changed-acct-dp")
    // let editPictureModal = document.getElementById("edit-picture-modal")
    let savingsDp = document.getElementById("savingsdp")
    let storedImage = JSON.parse(localStorage.getItem("userProfileImage"))

    if(storedImage){
        userProfile.src = storedImage
        acctDp.src = storedImage
        changeacctdp.src = storedImage  
        // editPictureModal.src = storedImage  
        savingsDp.src = storedImage
    }else{
        console.log("no picture seen")
    }
}
dpStayOnLoad()

//logout
function logOut(){
    alert("logging out...")
    localStorage.removeItem("verifiedUser")
    window.location.href = "sign in.html"
}

//display block the acct div
function goToAcctPage(){
    let homePage = document.getElementById("homePage")
    let accountPage = document.getElementById("account-page")
    let savingsPage = document.getElementById("savings-page")
    let activeAcct = document.getElementsByClassName("active-acct")[0]
    let activeSavings = document.getElementsByClassName("active-savings")[0]
    let activeHome = document.getElementsByClassName("active")[0]
    let savingsDown = document.getElementById("savings-down")
    let acctDown = document.getElementById("acct-down")
    let homeDown = document.getElementById("home-down")
    let homeP = document.getElementById("home-p")
    let savingsP = document.getElementById("savings-p")
    let acctP = document.getElementById("acct-p")
    




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
    acctDown.style.color = "#083E9E"
    homeDown.style.color = "#A0AEC0"
    savingsDown.style.color = "#A0AEC0"
    homeP.style.color = "#A0AEC0"
    savingsP.style.color ="#A0AEC0"
    acctP.style.color ="#2D3748"




    // localStorage.setItem("currentPage", JSON.stringify(accountPage))
    // localStorage.setItem("currentPage1", "accountPage")

}
goToAcctPage()

//display block the home div
function goToHomePage(){
    let homePage = document.getElementById("homePage")
    let accountPage = document.getElementById("account-page")
    let savingsPage = document.getElementById("savings-page")
    let activeAcct = document.getElementsByClassName("active-acct")[0]
    let activeHome = document.getElementsByClassName("active")[0]
    let activeSavings = document.getElementsByClassName("active-savings")[0]
    let homeDown = document.getElementById("home-down")
    let savingsDown = document.getElementById("savings-down")
    let acctDown = document.getElementById("acct-down")
    let homeP = document.getElementById("home-p")
    let savingsP = document.getElementById("savings-p")
    let acctP = document.getElementById("acct-p")




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
    homeDown.style.color = "#083E9E"
    savingsDown.style.color = "#A0AEC0"
    acctDown.style.color = "#A0AEC0"
    homeP.style.color = "#2D3748"
    savingsP.style.color ="#A0AEC0"
    acctP.style.color ="#A0AEC0"




    // localStorage.setItem("currentPage", JSON.stringify(homePage))
    // localStorage.setItem("currentPage2", "homePage")
}
goToHomePage()

//display block the savings page
function goToSavingsPage(){ 
    let homePage = document.getElementById("homePage")
    let accountPage = document.getElementById("account-page")
    let savingsPage = document.getElementById("savings-page")
    let activeAcct = document.getElementsByClassName("active-acct")[0]
    let activeHome = document.getElementsByClassName("active")[0]
    let activeSavings = document.getElementsByClassName("active-savings")[0]
    let savingsDown = document.getElementById("savings-down")
    let homeDown = document.getElementById("home-down")
    let acctDown = document.getElementById("acct-down")
    let homeP = document.getElementById("home-p")
    let savingsP = document.getElementById("savings-p")
    let acctP = document.getElementById("acct-p")




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
    savingsDown.style.color = "#083E9E"
    homeDown.style.color = "#A0AEC0"
    acctDown.style.color = "#A0AEC0"
    homeP.style.color = "#A0AEC0"
    savingsP.style.color ="#2D3748"
    acctP.style.color ="#A0AEC0"




    // localStorage.setItem("currentPage", JSON.stringify(savingsPage))
    // localStorage.setItem("currentPage3", "savingsPage")
}
goToSavingsPage()
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
    let cardAcctNo = document.getElementById("card-acct-no")

    let savedAcctNo = JSON.parse(localStorage.getItem("userAcctNo")) //check if the acctno is saved already
    
    if (savedAcctNo === null) {   // If the account number is not already saved, generate and save it
        let generatedNo = Math.floor(Math.random() * 10000000000)
        localStorage.setItem("userAcctNo", JSON.stringify(generatedNo))
        savedAcctNo = generatedNo // Update the saved value 
    } else {
        accountNumber.innerText = savedAcctNo // If the account number is already saved, use the saved value
        cardAcctNo.innerText = savedAcctNo 
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
let pinModal = document.getElementById("pin-modal")
let saveBtn = document.getElementById("foot-btn")

let users = JSON.parse(localStorage.getItem("myUsers")) || [];

function saveNewDetails(){
    users[currentUserIndex].userNames = fullNameModal.value
    users[currentUserIndex].userEmail = emailModal.value
    users[currentUserIndex].userPassword = passwordModal.value
    users[currentUserIndex].userNumber = numberModal.value

    localStorage.setItem("myUsers",JSON.stringify(users))
    localStorage.setItem("savedPin",JSON.stringify(pinModal.value) )

    document.getElementById("userfullName").innerHTML = users[currentUserIndex].userNames
    document.getElementById("useracctName").innerHTML = users[currentUserIndex].userNames
    document.getElementById("name-p").innerHTML = users[currentUserIndex].userNames    
    document.getElementById("card-acct-name").innerHTML = users[currentUserIndex].userNames
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

//open the modals and validate account numbers
let accountNumbers = {
    taoAcct: {
        name: "Badmus Odunayo",
        bank: "Access Bank",
        accountNumber: "0103430044"
    },
    olabisiAcct: {
        name: "Yakub Olabisi",
        bank: "First Bank",
        accountNumber: "0823692640"
    },
    nanaAcct: {
        name: "Badmus Nana",
        bank: "Polaris Bank",
        accountNumber: "0102990453"
    }
}

localStorage.setItem("accountNumbers", JSON.stringify(accountNumbers))

let recipientAcctNoInput = document.getElementById("recipient-acct-no")
let bankSelect = document.getElementById("banks")
let foundUserNames = document.getElementById("foundUserNames")

function openModal1(){
    $('#exampleModalToggle1').modal('show')
    foundUserNames.innerText = ""
}
function backToModal1(){
    $('#exampleModalToggle2').modal('hide')
    $('#exampleModalToggle1').modal('show')
    foundUserNames.innerText = ""
}
function openModal2(){
    $('#exampleModalToggle2').modal('show')
    $('#exampleModalToggle1').modal('hide')
    foundUserNames.innerText = ""
}

recipientAcctNoInput.addEventListener('input', updateFoundUserNames)
bankSelect.addEventListener('change', updateFoundUserNames)

function updateFoundUserNames(){
    let recipientAcctNo = recipientAcctNoInput.value
    let userBank = bankSelect.value
    let savedAccountNumbers = JSON.parse(localStorage.getItem("accountNumbers"))
     
    if(recipientAcctNo && userBank){
        let accountFound = false

        for (let key in savedAccountNumbers) {
            if (
              recipientAcctNo == savedAccountNumbers[key].accountNumber &&
              userBank == savedAccountNumbers[key].bank
            ) {
              foundUserNames.innerText = savedAccountNumbers[key].name
              accountFound = true
              localStorage.setItem("selectedRecipientAcctNo", JSON.stringify(recipientAcctNo))
              localStorage.setItem("selectedUserBank", JSON.stringify(userBank))
              localStorage.setItem("selectedFoundUserName", JSON.stringify(foundUserNames.innerText))
              break
            }
        }
        if(!accountFound){
            foundUserNames.innerText = "Incorrect account details!"
        }
    }else{
        foundUserNames.innerText = ""
    }
}

function openModal3(){
    let selectedRecipientAcctNo = JSON.parse(localStorage.getItem("selectedRecipientAcctNo"))
    let selectedUserBank = JSON.parse(localStorage.getItem("selectedUserBank"))
    let selectedFoundUserName = JSON.parse(localStorage.getItem("selectedFoundUserName"))

    if(selectedFoundUserName && selectedRecipientAcctNo && selectedUserBank){
        let theFoundAcct = document.getElementById("theFoundAcct")
        let theFoundBank = document.getElementById("theFoundBank")
        let theFoundName = document.getElementById("theFoundName")

        theFoundAcct.innerText = "(" + selectedRecipientAcctNo + ")"
        theFoundBank.innerText = selectedUserBank
        theFoundName.innerText = selectedFoundUserName
    }
    if(foundUserNames.innerText !== "Incorrect account details!" && foundUserNames.innerText){
        $('#exampleModalToggle2').modal('hide')
        $('#exampleModalToggle3').modal('show')
    }else{
        alert("Please check account details")
    }
}
function backToModal2(){
    $('#exampleModalToggle3').modal('hide')
    $('#exampleModalToggle2').modal('show')
}
function openModal4(){
    let amountToSend = document.getElementById("amountToSend")
    let narration = document.getElementById("narration")
    
    localStorage.setItem("selectedAmountToSend", JSON.stringify(amountToSend.value))
    localStorage.setItem("selectedNarration", JSON.stringify(narration.value))

    let selectedAmountToSend = JSON.parse(localStorage.getItem("selectedAmountToSend"))
    let selectedNarration = JSON.parse(localStorage.getItem("selectedNarration"))
    let selectedRecipientAcctNo = JSON.parse(localStorage.getItem("selectedRecipientAcctNo"))
    let selectedUserBank = JSON.parse(localStorage.getItem("selectedUserBank"))
    let selectedFoundUserName = JSON.parse(localStorage.getItem("selectedFoundUserName"))

    if(selectedAmountToSend && selectedRecipientAcctNo && selectedUserBank && selectedFoundUserName){
        let boldAmount = document.getElementById("boldAmount")
        let boldNarration = document.getElementById("boldNarration")
        let foundAmountToSend = document.getElementById("foundAmountToSend")
        let boldBank = document.getElementById("boldBank")
        let boldAcct = document.getElementById("boldAcct")
        let boldName = document.getElementById("boldName")

        boldAmount.innerText = "₦" + selectedAmountToSend
        boldNarration.innerText = selectedNarration
        foundAmountToSend.innerText = "₦" + selectedAmountToSend
        boldAcct.innerText = selectedRecipientAcctNo
        boldBank.innerText = selectedUserBank
        boldName.innerText = selectedFoundUserName
    }
    if(amountToSend.value){
        $('#exampleModalToggle4').modal('show')
        $('#exampleModalToggle3').modal('hide')
    }else{
        alert("please fill in the amount to send!")
    }
    
}
function backToModal3(){
    $('#exampleModalToggle3').modal('show')
    $('#exampleModalToggle4').modal('hide')
    foundUserNames.innerText = ""
}
function openModal5(){
    let savedPin = JSON.parse(localStorage.getItem("savedPin"))
    let pinInput = document.getElementById("pinInput")
    
    if(pinInput.value === savedPin){
        $('#exampleModalToggle5').modal('show')
        $('#exampleModalToggle4').modal('hide')
        setTimeout(function () {
            $('#exampleModalToggle5').modal('hide')
            openModal6()
        }, 5000)
    }else{
        alert("Incorrect Transaction pin")
    }
}
//initialize the user balance
let userBalance = JSON.parse(localStorage.getItem("newUserBal")) || 500000

//update the user balance html
function updateUserBal(){
    let userBal = document.getElementById("cardMoney")
    userBal.innerText = "₦" + userBalance.toLocaleString()
}
updateUserBal()

function openModal6(){
    let selectedAmountToSend = JSON.parse(localStorage.getItem("selectedAmountToSend")) 
    
    if(selectedAmountToSend > userBalance){
        alert("Insufficient balance")
        openModal3()
        return
    }else{
        $('#exampleModalToggle6').modal('show')
        //deduct money sent from userbal
        userBalance -= selectedAmountToSend
        localStorage.setItem("newUserBal", JSON.stringify(userBalance))

        updateUserBal()
    }
}
let storedUserBal = JSON.parse(localStorage.getItem("newUserBal"))
if(storedUserBal){
    userBalance = storedUserBal
    updateUserBal()
}
function backToModal4(){
    $('#exampleModalToggle4').modal('show')
    $('#exampleModalToggle5').modal('hide')
}

function closeLastModal(){
    $('#exampleModalToggle6').modal('hide')
}
function leaveModal(){
    $('#exampleModal').modal('hide')
}
function leaveModal2(){
    $('#exampleModal2').modal('hide')
}
//to limit the pin input to four
function limitPinTo4(input){
    if (input.value.length > 4) {
        input.value = input.value.slice(0, 4)
    }
}

// show receipt 
function showReceipt(){
    //get current date and time
    function getCurrentDateNTime(){
        let currentDate = new Date()
        let formattedDateNTime = currentDate.toLocaleString()
        return formattedDateNTime
    }
    let transactionTime = document.getElementById("transactionTime")
    transactionTime.innerText = getCurrentDateNTime()

    //generate reference no
    function generateTransRefNo(){
        let transReference = document.getElementById("transReference")
        
        let savedRefNo = JSON.parse(localStorage.getItem("userRefId"))
        if (savedRefNo === null){
            let generateReferenceNo = Math.floor(Math.random() * 1000000000000000)
            localStorage.setItem("userRefId", JSON.stringify(generateReferenceNo))
            savedRefNo = generateReferenceNo
        }
        transReference.innerText = savedRefNo
        
    }
    generateTransRefNo()

    let savedAcctNo = JSON.parse(localStorage.getItem("userAcctNo"))
    let savedReceiptUser = JSON.parse(localStorage.getItem("myUsers"));
    let selectedAmountToSend = JSON.parse(localStorage.getItem("selectedAmountToSend"))
    let selectedNarration = JSON.parse(localStorage.getItem("selectedNarration"))
    let selectedRecipientAcctNo = JSON.parse(localStorage.getItem("selectedRecipientAcctNo"))
    let selectedUserBank = JSON.parse(localStorage.getItem("selectedUserBank"))
    let selectedFoundUserName = JSON.parse(localStorage.getItem("selectedFoundUserName"))

    if(savedReceiptUser && savedAcctNo && selectedAmountToSend && selectedRecipientAcctNo && selectedUserBank && selectedFoundUserName){
        let receiptNarration = document.getElementById("receiptNarration")
        let boldReceiptAmount = document.getElementById("boldReceiptAmount")
        let receiptBank = document.getElementById("receiptBank")
        let receiptAcct = document.getElementById("receiptAcct")
        let receiptName = document.getElementById("receiptName")
        let ownerAcctNo = document.getElementById("ownerAcctNo")
        let ownerAcctName = document.getElementById("ownerAcctName")

        receiptNarration.innerText = selectedNarration
        boldReceiptAmount.innerText = "₦" + selectedAmountToSend
        receiptAcct.innerText = selectedRecipientAcctNo
        receiptBank.innerText = selectedUserBank
        receiptName.innerText = selectedFoundUserName
        ownerAcctNo.innerText = savedAcctNo
        ownerAcctName.innerText = savedReceiptUser[0].userNames
    }
}

function showModalAndDownload() {
    showReceipt();

    $('#exampleModalToggle7').modal('show');
    $('#exampleModalToggle6').modal('hide');

    setTimeout(function(){
        let modalContent = document.getElementById("modalContent")
        
        //capture modal div as an image using html2canvas
        html2canvas(modalContent).then(function (canvas) {
            //convert canvas to image data url
            let imgData = canvas.toDataURL("image/png")
    
            //create a downloadable link
            let a = document.createElement("a")
            a.href = imgData
            a.download = 'div_content.png'
            document.body.appendChild(a)
    
            //trigger a click event on the link to start the download
            a.click()
    
            //remove th link from the DOM
            document.body.removeChild(a)
        })
    },2000)
}

//update the userbal and store to localstorage
let newUserBal = JSON.parse(localStorage.getItem("newUserBal"))
userBalance = newUserBal

function updateBalAndSave(){
    let userBal = document.getElementById("cardMoney")
    userBal.innerText = "₦" + userBalance.toLocaleString()
}
updateBalAndSave()

function makePayment() {
    let amountToAdd = parseFloat(document.getElementById("moneyToAdd").value)
    let prev_bal = localStorage.getItem("newUserBal")
    if(amountToAdd <= 0){
        alert("please fill in a valid amount to add")
    }else{
        localStorage.setItem("amountToAdd", JSON.stringify(amountToAdd))
        new_bal = parseInt(prev_bal) + amountToAdd
        localStorage.setItem("newUserBal", new_bal)
    }

    let storedAmount = JSON.parse(localStorage.getItem("amountToAdd"))
    // Retrieve values from localStorage
    let storedUsers = JSON.parse(localStorage.getItem("myUsers"));
    if (storedUsers && storedUsers.length > 0 && storedAmount) {
        let defaultName = storedUsers[0].userName;
        let defaultEmail = storedUsers[0].userEmail;
        let defaultNumber = storedUsers[0].userNumber;

        FlutterwaveCheckout({
            public_key: "FLWPUBK_TEST-ce9061e9d7a77e76873b46f24875dd62-X",
            tx_ref: "titanic-48981487343MDI0NzMx",
            amount: amountToAdd,
            currency: "NGN",
            payment_options: "card, banktransfer, ussd",
            redirect_url: "dashboard.html",
            meta: {
                consumer_id: 23,
                consumer_mac: "92a3-912ba-1192a",
            },
            customer: {
                email: defaultEmail,
                phone_number: defaultNumber,
                name: defaultName,
            },
            customizations: {
                title: "Add money to account",
                description: "Payment to add funds to piggyBank",
                logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
            },
            callback: function(response){
                if(response.status === "successful"){
                    userBalance += storedAmount
                    localStorage.setItem("newUserBal", JSON.stringify(userBalance))

                    updateBalAndSave()
                    setTimeout (function(){
                        window.location.href = "dashboard.html"
                    },3000)
                    alert("payment successful")
                }else{
                    alert("payment failed!")
                }
            }
        })
    }
}


//transaction history
let transactionBody = document.getElementById("transaction-body")