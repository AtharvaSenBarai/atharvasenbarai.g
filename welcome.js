firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("Login.html")
    }else{
        document.getElementById("user").innerHTML = `You are Logged In as ${user.email}\nVerified: ${user.emailVerified}`
    if (user.emailVerified) {
        verifyEmailBtn.classList.add('d-none')
    } else {
        verifyEmailBtn.classList.remove('d-none')
    }
})

function logout(){
    firebase.auth().signOut()
}
