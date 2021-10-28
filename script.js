const accordions = document.querySelectorAll(".accordion")

function remove() {
  accordions.forEach((item) => item.classList.remove("accordion-expanded"))
}

accordions.forEach((item) =>
  item.addEventListener("click", function () {
    if (this.classList.contains("accordion-expanded")) {
      this.classList.remove("accordion-expanded")
    } else {
      remove()
      this.classList.add("accordion-expanded")
    }
  })
)
