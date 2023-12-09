function selectedButtonNavigate(pathname) {
    const buttons = document.querySelectorAll(".button-navigation a");
    buttons.forEach((element, index) => {
        if (element.getAttribute("href") == pathname) {
            element.classList.remove("opacity-50")
            element.classList.add("current-selected")
        } else {
            element.classList.remove("current-selected")
            element.classList.add("opacity-50")
        }
        console.log("run")
    });


}

export { selectedButtonNavigate };