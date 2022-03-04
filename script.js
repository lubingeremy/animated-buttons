
// let switchHov = switchButton.parentElement.querySelector(':hover');
// let style = window.getComputedStyle(switchButton, ':hover::before');
// let transform = style.getPropertyValue('transform');

// console.log(switchHov)
// console.log(style)
// console.log(transform)


const switchButton = document.getElementById("btn4")
var stateButton = 0;

switchButton.addEventListener('click', function(e){
    e.stopPropagation();
    e.preventDefault();
    console.log('sup');

    if(stateButton === 0){
        switchButton.style.setProperty("--posit", "translate(-0.255rem, 1.17rem)");
        stateButton = 1;
    } else{
        switchButton.style.setProperty("--posit", "translate(-0.255rem, -0.019rem)");
        stateButton = 0;
    }
    
})