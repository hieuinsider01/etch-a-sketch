const container = document.querySelector('.container');
const changeGridLayoutBtn = document.querySelector('.changeGridLayout');

function createGrid(size) {
    // 1. Clear the existing grid
    container.innerHTML = "";

    // 2. Calculate the size for each item to fit the container
    // We use the container's max-width from CSS (1020px)
    const itemDimension = 1020 / size;

    // 3. Create new grid items and add them to the container
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');

        // Set size dynamically
        div.style.width = `${itemDimension}px`;
        div.style.height = `${itemDimension}px`;

        // 4. Add event listeners to each new item
        div.addEventListener('mouseover', () => {
            // Changed to a more visible effect for demonstration
            div.style.opacity = 0.5;
        });

        div.addEventListener('mouseout', () => {
            div.style.opacity = 1;
        });

        container.appendChild(div);
    }
}

changeGridLayoutBtn.addEventListener('click', () => {
    while (true) { // Corrected syntax
        const input = prompt("Enter a number for the new grid size (between 2 and 100):");

        // Handle case where user presses "Cancel"
        if (input === null) {
            break; // Exit the loop
        }

        const number = Number(input); // Corrected type conversion

        if (Number.isInteger(number) && number >= 2 && number <= 100) {
            createGrid(number);
            break; // Exit the loop on valid input
        } else {
            alert("Invalid input. Please enter a whole number between 2 and 100.");
        }
    }
});

// Create the initial 16x16 grid when the page loads
createGrid(16);
