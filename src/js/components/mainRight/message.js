function create_message_primary() {
  const message = document.createElement("div");
  message.classList.add("message");
  message.innerHTML = message.innerHTML = `
  <!-- Message Tittle -->
  <div class="message-title">
    <h2>Message</h2>
    <i class="uil uil-edit"></i>
  </div>
  <!-- Search Bar -->
  <div class="search-bar">
    <i class="uil uil-search-alt"></i>
    <input type="search" name="navbar-search" id="navbar-search" placeholder="Search Message">
  </div>
  <!-- Function Panel -->
  <div class="function-panel">
    <span class="active">Primary</span>
    <span>General</span>
    <span>Requests</span>
  </div>
  `;

  const function_panel = message.querySelector(".function-panel");
  function_panel.addEventListener("click", (e) => {
    const active = function_panel?.querySelector(".active");
    if (active) {
      active.classList.remove("active");
    }

    e.target.classList.add("active");
  });

  return message;
}

export { create_message_primary };
