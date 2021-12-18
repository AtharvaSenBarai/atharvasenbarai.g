firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("Login.html")
    }else{
        document.getElementById("user").innerHTML = `You are Logged In as ${user.email}\nVerified: ${user.emailVerified}`
    }
})


function logout(){
    firebase.auth().signOut()
}
