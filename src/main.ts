document.addEventListener('DOMContentLoaded', () => {
    const shareButton = document.querySelectorAll('.share-button') as NodeListOf<HTMLElement>;
    const shareTab = document.getElementById("share-tab") as HTMLElement;

    if (!shareButton || !shareTab) {
        console.error("Required element not found");
        return;
    }

    shareButton.forEach((button) => {
        button.addEventListener('click', () => {
            shareTab.classList.toggle("active");
        })
    })
});

