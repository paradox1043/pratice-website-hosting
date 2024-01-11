

function increment() {
    let count = parseInt(document.getElementById('count').innerText) || 0;
    // Increment the count by one
    count++;

    // Update the HTML element with the new count
    document.getElementById('count').innerText = count;
}