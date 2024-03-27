const formButton = document.getElementById("submit")
formButton.addEventListener("click",(event)=>{
    event.preventDefault();
    const name = document.getElementById("name").value
    const username = document.getElementById("username").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const bio = document.getElementById("bio").value
    if(!name||!username||!email||!password||!bio){
        alert("All fields are required")
        return
    }

    const userData = {
        Name:name,
        Username:username,
        Email:email,
        Password:password,
        Bio:bio
    }
    
    registerUser(userData)

})

const registerUser = async(userdata)=>{
    try {
        const resp = fetch("http://localhost:8081/signup",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(userdata)
        })

        const data =await resp.json()
        console.log(data);
        window.location.href = "http://localhost:5500/client/login.html"
    } catch (error) {
        console.log(error.message)
    }
}