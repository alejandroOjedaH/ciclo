window.onload= () =>{
    let insta = document.getElementById("insta");
    let mail = document.getElementById("mail");
    
    insta.onclick = ()=> {
        window.location = "https://www.instagram.com/elcicloproductions/?hl=es";
    };

    mail.onclick = ()=> {
        navigator.clipboard.writeText("lavidaesunciclog6@gmail.com");
        alert("Copied the gmail: lavidaesunciclog6@gmail.com");
    };
}

