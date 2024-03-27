const formSubmit = document.getElementById("button")

formSubmit.addEventListener("click",(event)=>{
    event.preventDefault();
    const userName = document.getElementById("user-name").value
    const passcode = document.getElementById("pass-word").value
    const userData = {
        username:userName,
        password:passcode
    }
    loginUser(userData)
})

const loginUser = async(userdat)=>{
    try {
        const resp = await fetch("http://localhost:8081/login",{
            method:"POST",
            credentials:"include",
            redirect:"follow",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(userdat)
        })

        const data = await resp.json()
        console.log(data);
        window.location.href = "http://localhost:5500/client/index.html"
    } catch (error) {
        console.log(error.message);
    }
}