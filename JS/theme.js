let toggleOff = document.querySelector(".fa-toggle-off") ;
let toggleOn = document.querySelector(".fa-toggle-on") ;
let theme = document.querySelectorAll(".theme") ;
let numsBgColor = document.querySelectorAll(".num") ;
let numsColor = document.querySelectorAll(".color") ;

function toggleTheme(){
    if(toggleOff.style.display === "inline-block"){
        toggleOff.style.display = "none" ;
        toggleOff.style.transform = "display 1s ease" ;
        toggleOn.style.display = "inline-block" ;
        toggleOn.style.transform = "display 1s ease" ;

        theme.forEach(themes => {
            themes.style.backgroundColor = "#141332" ;
        });

        numsBgColor.forEach(numColor => {
            numColor.style.backgroundColor = "#2A2743" ;
        });

        numsColor.forEach(numColor => {
            numColor.style.color = "#FFFFFF" ;
        });

    }else{
        console.log("working??");
        toggleOff.style.display = "inline-block" ;
        toggleOff.style.transition = "display 0.5s ease" ;
        toggleOn.style.display = "none" ;
        toggleOn.style.transition = "display 0.5s ease" ;

        theme.forEach(themes => {
            themes.style.backgroundColor = "#FFFFFF" ;
        });

        numsBgColor.forEach(numColor => {
            numColor.style.backgroundColor = "#D9D9D9" ;
        });

        numsColor.forEach(numColor => {
            numColor.style.color = "black" ;
        });

    }
}