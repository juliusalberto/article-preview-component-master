"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const shareButton = document.querySelectorAll('.share-button');
    const shareTab = document.getElementById("share-tab");
    if (!shareButton || !shareTab) {
        console.error("Required element not found");
        return;
    }
    shareButton.forEach((button) => {
        button.addEventListener('click', () => {
            shareTab.classList.toggle("active");
        });
    });
});
