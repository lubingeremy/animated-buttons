
// let switchHov = switchButton.parentElement.querySelector(':hover');
// let style = window.getComputedStyle(switchButton, ':hover::before');
// let transform = style.getPropertyValue('transform');

// console.log(switchHov)
// console.log(style)
// console.log(transform)


const switchButton = document.getElementById("btn4")
var stateButton = false;

switchButton.addEventListener('click', function(e){
    e.stopPropagation();
    e.preventDefault();
    console.log('sup');

    if(stateButton === false){
        switchButton.style.setProperty("--posit", "translate(-0.255rem, 1.17rem)");
        stateButton = true;
    } else{
        switchButton.style.setProperty("--posit", "translate(-0.255rem, -0.019rem)");
        stateButton = false;
    }
    
})