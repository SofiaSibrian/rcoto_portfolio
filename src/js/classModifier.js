const classModifier = (id, elements) => {
  // debugger;
  // Remove Class for all elements but current
  elements.forEach(element => {
    if (element.id !== id) {
      element.classList.remove("selected");
    } else {
      element.classList.add("selected");
    }
  });
};

export default classModifier;
