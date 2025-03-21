// Your code here
function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    let left = parseInt(dodger.style.left) || 0; // Default to 0 if undefined

    if (left > 0) {
        left -= 10; // Move left by 10 pixels
        dodger.style.left = `${left}px`;
    }
}

function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    let left = parseInt(dodger.style.left) || 0; // Default to 0 if undefined

    if (left < 360) {
        left += 10; // Move right by 10 pixels
        dodger.style.left = `${left}px`;
    }
}

 { moveDodgerLeft, moveDodgerRight };
