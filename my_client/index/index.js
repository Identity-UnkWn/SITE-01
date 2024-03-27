const userdata = async()=>{
    try {
        const resp = fetch("http://localhost:8081",{method:"GET",credentials:"include"})
        if(resp!==200){
            window.location.href="http://localhost:5500/client/login.html"
        }

        const {data}=await resp.json()
        const username = document.getElementById("name")
        const usermail = document.getElementById("email")
        const userbio = document.getElementById("userbio")
        username.innerText = data.username
        usermail.innerText = data.email
        userbio.innerText = data.bio
    
    } catch (error) {
        console.log(error.message)
        window.location.href ="http://localhost:5500/client/login.html"
    }
}

userdata()