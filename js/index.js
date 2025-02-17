window.onload= () =>{
    let insta = document.getElementById("insta");
    let mail = document.getElementById("mail");

    //Carrusel
    let cicloJson;
    let currentSlide = document.getElementById("sliderContent");
    let currentPosition;
    let rightButton = document.getElementById("botonDerecho");
    let leftButton = document.getElementById("botonIzquierdo");

    //Projects buttons
    let galaButton = document.getElementById("galaProyectos");
    let musButton = document.getElementById("musProyectos");
    let becaButton = document.getElementById("becasProyectos");

    let galaPopUp = document.getElementById("galaPopUp");
    let musPopUp = document.getElementById("musPopUp");
    let closeGalaPopUp = document.getElementById("closeGalaPopUp");
    let closeMusPopUp = document.getElementById("closeMusPopUp");

    cicloJson = loadJson();
    loadInicial();
    checkLocalStorage();
    
    insta.onclick = ()=> {
        window.location = "https://www.instagram.com/elcicloproductions/?hl=es";
    };

    mail.onclick = ()=> {
        navigator.clipboard.writeText("lavidaesunciclog6@gmail.com");
        alert("Copied the gmail: lavidaesunciclog6@gmail.com");
    };

    function loadJson(){
        return [
            {
                "text": "<h1>ciclo1</h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius placerat nibh. Nam ullamcorper vestibulum urna, sed porttitor massa placerat in.",
                "img":"./img/vino.jpg",
                "url":"",
            },
            {
                "text": "<h1>ciclo2</h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius placerat nibh. Nam ullamcorper vestibulum urna, sed porttitor massa placerat in.",
                "img":"./img/vino1.jpg",
                "url":"",
            },
            {
                "text": "<h1>ciclo3</h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius placerat nibh. Nam ullamcorper vestibulum urna, sed porttitor massa placerat in.",
                "img":"./img/vino2.jpg",
                "url":"",
            },
            {
                "text": "<h1>ciclo4</h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius placerat nibh. Nam ullamcorper vestibulum urna, sed porttitor massa placerat in.",
                "img":"./img/vino3.jpg",
                "url":"",
            }
        ]
    }

    function loadInicial(){
        currentPosition= 0;
        let currentImg = currentSlide.children[0];
        let currentText = currentSlide.children[1];

        currentImg.src = cicloJson[0].img;
        currentText.innerHTML=cicloJson[0].text;
        
        currentSlide.onclick = () => {
            navigation.navigate("./proyecto/index.html?p="+currentPosition);
        }
    } 
    
    function changeRight(){
        let newSlide;
        if( currentPosition < cicloJson.length-1){
            currentPosition=currentPosition+1;
        }else if(currentPosition == cicloJson.length-1) {
            currentPosition=0;
        }
        setTimeout(function(){
            currentSlide.classList.remove("sliderMostrarVinoIz");
            currentSlide.classList.remove("sliderMostrarVinoDer");
            currentSlide.classList.add("sliderOcultarVinoDer");

            newSlide = createNewSlide();
            newSlide.children[0].src = cicloJson[currentPosition].img;
            newSlide.children[1].innerHTML = cicloJson[currentPosition].text;
            newSlide.onclick = () => {
                navigation.navigate("./proyecto/index.html?p="+currentPosition);
            }
            setTimeout(function(){
                currentSlide.parentNode.replaceChild(newSlide, currentSlide);
                currentSlide = newSlide;
                newSlide.classList.add("sliderMostrarVinoDer");
            }, 500);
        }, 1); 
    }
    function changeLeft(){
        let newSlide;
        if( currentPosition > 0){
            currentPosition=currentPosition-1;
        }else if(currentPosition == 0) {
            currentPosition=cicloJson.length-1;
        }
        setTimeout(function(){
            currentSlide.classList.remove("sliderMostrarVinoDer");
            currentSlide.classList.remove("sliderMostrarVinoIz");
            currentSlide.classList.add("sliderOcultarVinoIz");           

            newSlide = createNewSlide();
            newSlide.children[0].src = cicloJson[currentPosition].img;
            newSlide.children[1].innerHTML = cicloJson[currentPosition].text;
            newSlide.onclick = () => {
                navigation.navigate("./proyecto/index.html?p="+currentPosition);
            }
        setTimeout(function(){
                currentSlide.parentNode.replaceChild(newSlide, currentSlide);
                currentSlide = newSlide;
                newSlide.classList.add("sliderMostrarVinoIz");
            }, 500);
        }, 1);
    }
    
    function createNewSlide(){
        //create a new slide
        let slide = document.createElement("div");
        let img = document.createElement("img");
        let text = document.createElement("div");

        slide.id = "sliderContent";
        img.id="currentCicloImg";
        text.id="currentCicloText";

        img.classList.add("absoluta");
        text.classList.add("absoluta");
        
        slide.append(img);
        slide.append(text);
        return slide;
    }

    rightButton.onclick = changeRight;
    leftButton.onclick = changeLeft;

    galaButton.onclick = () => {
        galaButton.innerHTML = "<del>"+galaButton.innerText+"</del>";
        localStorage.setItem("enterGala", "true");
        
        galaPopUp.classList.remove("hidePopUp");
        galaPopUp.classList.add("showPopUp");

        document.getElementById("container").style.overflow = 'hidden';
    }
    musButton.onclick = () => {
        musButton.innerHTML = "<del>"+musButton.innerText+"</del>";
        localStorage.setItem("enterMus", "true");

        musPopUp.classList.remove("hidePopUp");
        musPopUp.classList.add("showPopUp");

        document.getElementById("container").style.overflow = 'hidden';
    }
    becaButton.onclick = () => {
        becaButton.innerHTML = "<del>"+becaButton.innerText+"</del>";
        localStorage.setItem("enterBeca", "true");

    }

    function checkLocalStorage(){
        if(localStorage.getItem("enterGala") === "true"){
            galaButton.innerHTML = "<del>"+galaButton.innerText+"</del>";
        }
        if(localStorage.getItem("enterMus") === "true"){
            musButton.innerHTML = "<del>"+musButton.innerText+"</del>";
        }
        if(localStorage.getItem("enterBeca") === "true"){
            becaButton.innerHTML = "<del>"+becaButton.innerText+"</del>";
        }
    }

    closeGalaPopUp.onclick = () => {
        closePopUp(galaPopUp);
    }

    closeMusPopUp.onclick = () => {
        closePopUp(musPopUp);
    }

    function closePopUp(popUpToClose){
        popUpToClose.classList.remove("showPopUp");
        popUpToClose.classList.add("hidePopUp");
        document.getElementById("container").style.overflowY = 'auto';
    }

}

