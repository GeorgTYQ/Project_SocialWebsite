class FriendList {
  #info;
  #dom;

  constructor(info) {
    this.#info = info;
    this.#build();
  }
  #build = () => {
    this.#dom = document.createElement("div");
    this.#dom.classList.add("friend-list");
    this.#info.forEach((element) => {
      this.#dom.appendChild(new Friend(element).dom);
    });
  };

  get dom() {
    return this.#dom;
  }
}

class Friend {
  #dom;
  #friendInfo;

  constructor(info) {
    this.#friendInfo = info;
    this.#build();
  }

  #build = () => {
    this.#dom = document.createElement("div");
    this.#dom.classList.add("profile");
    this.#dom.innerHTML = `
      <div class = "profile">
        <div class="profile-photo">
          <img src="${this.#friendInfo.src}" alt="profile  photo">
        </div>
        <div class="profile-description">
          <h2>${this.#friendInfo.name}</h2>
          <p>${this.#friendInfo.msg}</p>
        </div>
      </div>
      `;
  };

  get dom() {
    return this.#dom;
  }
}
export { FriendList };
