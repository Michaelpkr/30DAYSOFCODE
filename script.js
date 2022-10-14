let currentPage = Number(document.querySelector("#pageIdentify").innerHTML)

toPreviousLink = document.getElementById("toPrevious");
toNextLink = document.getElementById("toNext");

toPreviousLink.setAttribute("href", `https://michaelpkr.github.io/30DAYSOFCODE/day${currentPage - 1}.html`)
toNextLink.setAttribute("href", `https://michaelpkr.github.io/30DAYSOFCODE/day${currentPage + 1}.html`)

console.log(document.getElementById("darkModeButton").innerHTML)

function darkModeSwitch() {
    let element = document.body;
    element.classList.toggle("dark");
    

    if(document.getElementById("darkModeButton").innerHTML === "☽"){
        document.getElementById("darkModeButton").innerHTML = "☼";
        
    }else if (document.getElementById("darkModeButton").innerHTML = "☼"){
        document.getElementById("darkModeButton").innerHTML = "☽"
    }

    
    
    }
