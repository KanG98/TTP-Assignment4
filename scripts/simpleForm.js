const userInfo = {
    username: "",
    email: "",
    password: "12345678"
}

function submit(){
    let usernameElm = document.getElementById("username")
    let emailElm = document.getElementById("email")
    let passwordElm = document.getElementById("password")


    if(passwordElm.value !== userInfo.password){
        alert("wrong password")
    }
    else{
        console.log("logging successfully !!")
        userInfo.username = usernameElm.value
        userInfo.email = emailElm.value
        console.log(userInfo.username)
        console.log(userInfo.email)
        console.log(userInfo.password)
        
        let textElm = document.getElementById("success-text")
        textElm.textContent = "Logging successfully !!"

    }
}
