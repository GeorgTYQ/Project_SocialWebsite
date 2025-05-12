class Sidebar {
  #dom = null;
  #name = null;
  #icon = null; // It will be icon list
  #menulist = [];
  constructor(data = []) {
    this.#menulist = data;
    this.#build();
  }

  #build = () => {
    this.#dom = document.createElement("div");
    this.#dom.classList.add("sidebar");
    this.#menulist.forEach((element) => {
      this.#dom.appendChild(new Menu(element).dom);
    });
  };
  get dom() {
    return this.#dom;
  }
}

class Menu {
  #dom = null;
  #menuInfo = {};
  constructor(menuInfo) {
    this.#menuInfo = menuInfo;
    this.#build();
  }

  #build = () => {
    this.#dom = document.createElement("a");
    this.#dom.classList.add("menu-item");
    this.#dom.innerHTML = `
      <span>
        <i class="${this.#menuInfo.icon_class_list.join(" ")}"></i>
      </span>
      <h2>
        ${this.#menuInfo.name}
      </h2>
    `;
  };

  get dom() {
    return this.#dom;
  }
}

export { Sidebar };
