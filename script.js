// Modal functionality
const modal = document.getElementById("projectModal");
const modalContent = document.getElementById("modalContent");

const projects = {
    inventory: {
        title: "Advanced Inventory System",
        description: "A fully dynamic inventory system with drag & drop functionality",
        media: [
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/..." frameborder="0" allowfullscreen></iframe>',
            '<img src="images/inventory1.jpg" alt="Inventory System">'
        ]
    },
    uiframework: {
        title: "Custom UI Framework",
        description: "Optimized UI framework for Roblox games",
        media: [
            '<img src="images/ui-framework.jpg" alt="UI Framework">',
            '<img src="images/ui-example.jpg" alt="UI Example">'
        ]
    }
};

function openModal(projectId) {
    const project = projects[projectId];
    modalContent.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <div class="media-grid">
            ${project.media.join('')}
        </div>
    `;
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}