// Get all details element
const details = document.querySelectorAll("details");

// Onclick
details.forEach((event) => {
  event.addEventListener("click", () => {
    // Close details that are not event
    details.forEach((detail) => {
      if (detail !== event) {
        detail.removeAttribute("open");
      }
    });
  });
});
