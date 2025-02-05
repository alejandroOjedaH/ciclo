window.onload= () =>{
    let cicloJson;
    let currentSlide = document.getElementById("sliderContent");
    let currentPosition;
    let rightButton = document.getElementById("botonDerecho");
    let leftButton = document.getElementById("botonIzquierdo");

    cicloJson = loadJson();
    loadInicial();

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
}

