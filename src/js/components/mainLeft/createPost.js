export function create_post() {
  const label = document.createElement("label");
  label.textContent = "Create Post";
  label.classList.add("btn", "btn-primary");
  label.setAttribute("for", "create-post");

  return label;
}
