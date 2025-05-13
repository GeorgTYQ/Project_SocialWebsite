class Highline {
  #dom = null;
  #menuInfo = [];

  constructor(menuInfo = []) {
    this.#menuInfo = menuInfo;
    this.#build();
  }

  #build = () => {
    this.#dom = document.createElement("div");
    this.#dom.classList.add("highline");
    this.#menuInfo.forEach((element) => {
      this.#dom.appendChild(new Description(element).dom);
    });
  };
  get dom() {
    return this.#dom;
  }
}

class Description {
  #dom = null;

  #highlineItem = null;

  constructor(element) {
    this.#highlineItem = element;
    this.#build();
  }

  #build = () => {
    this.#dom = document.createElement("div");
    this.#dom.classList.add("description");
    this.#dom.style.backgroundImage = `url(${this.#highlineItem.background})`;
    this.#dom.innerHTML = `
        <div class="profile-photo">
          <img src="${this.#highlineItem.img_src}" alt="profile photo">
        </div>
        <p>${this.#highlineItem.title}</p>
      </div>
    `;
  };

  get dom() {
    return this.#dom;
  }
}
export { Highline };
