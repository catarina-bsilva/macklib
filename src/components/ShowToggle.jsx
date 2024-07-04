function showToggle(event) {
    const nextElement = event.target.nextElementSibling;
    if (nextElement.style.display === "none" || nextElement.style.display === "") {
      nextElement.style.display = "block";
    } else {
      nextElement.style.display = "none";
    }
}

export default showToggle