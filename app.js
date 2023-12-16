const tabsEl = document.querySelectorAll(".tab");
const tabContainerEl = document.querySelector(".answer");

let tabContent = {
    1: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building.",
    2: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building.",
    3: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building.",
    4: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building."
};

tabsEl.forEach(tabEl => {
    tabEl.addEventListener("click", () => {
        tabsEl.forEach(el => {
            el.classList.remove(".answer");
        })
        tabEl.classList.add(".answer");

        tabContainerEl.textContent = tabContent[tabEl.innerText];
    });
});



