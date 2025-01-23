function switchTab(tab) {
    const arTab = document.getElementById("arTab");
    const vrTab = document.getElementById("vrTab");
    const arContent = document.getElementById("arContent");
    const vrContent = document.getElementById("vrContent");

    if (tab === "ar") {
        arTab.classList.add("arvr-custom-active-tab");
        arTab.classList.remove("arvr-custom-inactive-tab");
        vrTab.classList.add("arvr-custom-inactive-tab");
        vrTab.classList.remove("arvr-custom-active-tab");
        arContent.classList.remove("d-none");
        vrContent.classList.add("d-none");
    } else {
        vrTab.classList.add("arvr-custom-active-tab");
        vrTab.classList.remove("arvr-custom-inactive-tab");
        arTab.classList.add("arvr-custom-inactive-tab");
        arTab.classList.remove("arvr-custom-active-tab");
        vrContent.classList.remove("d-none");
        arContent.classList.add("d-none");
    }
}