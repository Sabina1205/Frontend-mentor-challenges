let accordionItem = document.querySelectorAll('.accordion-item');

accordionItem.forEach((item) => {
    let accBtn = item.querySelector(".accordion-btn");

    accBtn.addEventListener("click", () => {
        item.classList.toggle("active");
        let description = item.querySelector(".accordion-description");

        if (item.classList.contains("active")) {
            description.style.display = "block";
            item.querySelector(".plus-icon").style.display = "none";
            item.querySelector(".minus-icon").style.display = "block";
        } else {
            description.style.display = "none";
            item.querySelector(".minus-icon").style.display = "none";
            item.querySelector(".plus-icon").style.display = "block";
        }
    })
})



