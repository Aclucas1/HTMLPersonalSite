// Get Header
var heading = document.firstElementChild.lastElementChild.firstElementChild;

// Update Header Var
heading.innerHTML = 'Updated by JS';
heading.style.color = 'blue'

// Click on the check box
document.querySelector('input').click();

function flipH1() {
    if (heading.style.color == 'red'){
        heading.style.color = 'blue'
    }
    else {
        heading.style.color = 'red'
    }
}

document.querySelector(".list a").style.color = "green"