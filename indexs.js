//i got carried away, it was fun

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0 //count number
let decrementcount = 0 //decrement usage
let imageElement = null //by default there are no images
let textElement = null; //by default there are no text elements
let highestNumber = 0; //0 by default is used for the highest number achieved

function increment() { //incrrements the number by 1
    count += 1
    decrementcount = 0
    countEl.textContent = count
    magic()
}

function decrement(){ //decrements the number by 1
    if(count >0){
        count -= 1
        countEl.textContent = count
        magic()
    } else { //if the number is 0, it will not decrement
        decrementcount += 1
        alert("there are no more people to remove")
        if (decrementcount == 5){ //however...
            alert("What are you doing?")
        }
        if (decrementcount == 7){
            alert("Nothing is happening you know")
        }
        if (decrementcount == 10){ //unless youre bored here...
            alert("Fine, just do what you want")
        }
        if (decrementcount == 15){
            alert("Just click the increment button pleaseeee")
        }
        if (decrementcount == 20){ //it reloads the page
            alert("thats it, reloading the page...")
            location.reload();
        }
    }
}
function save() { //saves the current count
    let countStr = count + " - "
    if (saveEl.textContent === "Previous Number: ") {
        saveEl.textContent = "Previous Number: " + countStr;
        highestNumber = parseInt(countStr);
        document.getElementById("highest-number").textContent = "Highest Number: " + highestNumber;
    } else {
        saveEl.textContent += countStr;
        updateHighestNumber();
    }
    countEl.textContent = 0
    count = 0
    decrementcount = 0
    if (count == 0){ //calls magic() function to reset all classes once count hits 0
        magic()
    }
    if (imageElement) {
        imageElement.style.opacity = 0;
        imageElement.style.transition = "opacity 1s";
        setTimeout(() => {
          imageElement.remove();
          imageElement = null;
        }, 1000);
    }
}

function updateHighestNumber() {
    let savedNumbers = saveEl.textContent.replace("Previous Number: ", "").split(" - ");
    let highest = 0;
    for (let i = 0; i < savedNumbers.length; i++) {
        let num = parseInt(savedNumbers[i]);
        if (num > highest) {
            highest = num;
        }
    }
        highestNumber = highest;
        document.getElementById("highest-number").textContent = "Highest Number: " + highestNumber;
}

function reset(){
    saveEl.textContent = "Previous Number: ";
    highestNumber = 0;
    document.getElementById("highest-number").textContent = "Highest Number: 0";
}
  
function magic(){
    const element = document.querySelector(".number");
    let count = parseInt(countEl.textContent);

    element.classList.remove('red', 'green', 'blue', 'yellow', 'orange','purple','pink', 'roygbiv'); //by default, all classes are removed

    if(count >= 5 && count <= 9){ //element class changes per currrent count range
        element.classList.add("blue")
    }else if (count >= 10 && count <= 29){
        element.classList.add("red")
    }else if (count >= 30 && count <= 49){
        element.classList.add("orange")
    }else if (count >= 50 && count <= 79){
        element.classList.add("yellow")
    }else if (count >= 80 && count <= 99){
        element.classList.add("green")
    }else if (count >= 100 && count <= 129){
        element.classList.add("purple")
    }else if (count >= 130 && count <= 159){
        element.classList.add("pink")
    }else if (count >= 160 && count <= 200){
        element.classList.add("roygbiv")
    } else {
        element.classList.add("black")
    }

    if (count == 10) {
        if (!imageElement) {
            imageElement = document.createElement("img");
            imageElement.src = "LOOK.jpg"; // replace with your image URL
            imageElement.style.position = "absolute";
            imageElement.style.top = `${Math.random() * (window.innerHeight - 100)}px`;
            imageElement.style.left = `${Math.random() * (window.innerWidth - 100)}px`;
            imageElement.style.zIndex = "-1"; // set the z-index to -1 to display the image behind other elements
            imageElement.style.opacity = 0; // set the initial opacity to 0
            document.body.appendChild(imageElement);
            setTimeout(() => {
                imageElement.style.opacity = 1; // fade in the image
                imageElement.style.transition = "opacity 1s"; // set the transition duration
            }, 0);
        }
    }else if (count == 20){
        if (!imageElement) {
            imageElement = document.createElement("img");
            imageElement.src = "tea.jpg";
            imageElement.style.position = "absolute";
            imageElement.style.top = `${Math.random() * (window.innerHeight - 100)}px`;
            imageElement.style.left = `${Math.random() * (window.innerWidth - 100)}px`;
            imageElement.style.zIndex = "-1"; 
            imageElement.style.opacity = 0; 
            document.body.appendChild(imageElement);
            setTimeout(() => {
                imageElement.style.opacity = 1; 
                imageElement.style.transition = "opacity 1s"; 
            }, 0);
        }
    }else if (count == 50){
        if (!imageElement) {
            imageElement = document.createElement("img");
            imageElement.src = "happy.jpg"; 
            imageElement.style.position = "absolute";
            imageElement.style.top = `${Math.random() * (window.innerHeight - 100)}px`;
            imageElement.style.left = `${Math.random() * (window.innerWidth - 100)}px`;
            imageElement.style.zIndex = "-1"; 
            imageElement.style.opacity = 0; 
            document.body.appendChild(imageElement);
            setTimeout(() => {
                imageElement.style.opacity = 1; 
                imageElement.style.transition = "opacity 1s"; 
            }, 0);
        }
    }else if (count == 70){
        if (!imageElement) {
            imageElement = document.createElement("img");
            imageElement.src = "what.gif";
            imageElement.style.position = "absolute";
            imageElement.style.top = `${Math.random() * (window.innerHeight - 100)}px`;
            imageElement.style.left = `${Math.random() * (window.innerWidth - 100)}px`;
            imageElement.style.zIndex = "-1"; 
            imageElement.style.width = "200px"
            imageElement.style.height = "200px"
            imageElement.style.opacity = 0; 
            document.body.appendChild(imageElement);
            setTimeout(() => {
                imageElement.style.opacity = 1; 
                imageElement.style.transition = "opacity 1s"; 
            }, 0);
        }
    }else if (count == 100){
        alert ("100 horray")
        if (!imageElement) {
            imageElement = document.createElement("img");
            imageElement.src = "cooked.gif"; 
            imageElement.style.position = "absolute";
            imageElement.style.top = `${Math.random() * (window.innerHeight - 100)}px`;
            imageElement.style.left = `${Math.random() * (window.innerWidth - 100)}px`;
            imageElement.style.zIndex = "-1"; 
            imageElement.style.width = "400px"
            imageElement.style.height = "200px"
            imageElement.style.opacity = 0; 
            document.body.appendChild(imageElement);
            setTimeout(() => {
                imageElement.style.opacity = 1;
                imageElement.style.transition = "opacity 1s"; 
            }, 0);
        }
    } else if (imageElement) {
        imageElement.style.opacity = 0; // fade out the image
        imageElement.style.transition = "opacity 1s"; // set the transition duration
        setTimeout(() => {
            imageElement.remove();
            imageElement = null;
        }, 1000); // wait for the transition to complete before removing the image
    }

    else if (count == 120){
        alert ("your fingers must be tired")
        if (!imageElement) {
            imageElement = document.createElement("img");
            imageElement.src = "hulaanmoito.jpg"; 
            imageElement.style.position = "absolute";
            imageElement.style.top = `${Math.random() * (window.innerHeight - 100)}px`;
            imageElement.style.left = `${Math.random() * (window.innerWidth - 100)}px`;
            imageElement.style.zIndex = "-1"; 
            imageElement.style.width = "400px"
            imageElement.style.height = "300px"
            imageElement.style.opacity = 0; 
            document.body.appendChild(imageElement);
            setTimeout(() => {
                imageElement.style.opacity = 1;
                imageElement.style.transition = "opacity 1s"; 
            }, 0);
        }
    } else if (imageElement) {
        imageElement.style.opacity = 0; // fade out the image
        imageElement.style.transition = "opacity 1s"; // set the transition duration
        setTimeout(() => {
            imageElement.remove();
            imageElement = null;
        }, 1000); // wait for the transition to complete before removing the image
    }
    
    else if (count == 150){
        if (!imageElement) {
            imageElement = document.createElement("img");
            imageElement.src = "oh.png"; 
            imageElement.style.position = "absolute";
            imageElement.style.top = `${Math.random() * (window.innerHeight - 100)}px`;
            imageElement.style.left = `${Math.random() * (window.innerWidth - 100)}px`;
            imageElement.style.zIndex = "-1"; 
            imageElement.style.width = "400px"
            imageElement.style.height = "300px"
            imageElement.style.opacity = 0; 
            document.body.appendChild(imageElement);
            setTimeout(() => {
                imageElement.style.opacity = 1;
                imageElement.style.transition = "opacity 1s"; 
            }, 0);
        }
    } else if (imageElement) {
        imageElement.style.opacity = 0; // fade out the image
        imageElement.style.transition = "opacity 1s"; // set the transition duration
        setTimeout(() => {
            imageElement.remove();
            imageElement = null;
        }, 1000); // wait for the transition to complete before removing the image
    }

}


