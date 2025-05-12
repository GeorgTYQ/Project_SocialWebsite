class Request {
  #requstList = [];
  #dom = null;
  #header = null;
  constructor(request = []) {
    this.#requstList = request;
    this.#build();
  }

  #build = () => {
    this.#dom = document.createElement("div");
    this.#dom.classList.add("request-list");
    this.#header = document.createElement("h2");
    this.#header.innerText = "Requests";
    this.#dom.appendChild(this.#header);

    this.#requstList.forEach((element) => {
      this.#dom.appendChild(new RequestItem(element).dom);
    });
  };

  get dom() {
    return this.#dom;
  }
}

class RequestItem {
  #dom = null;
  #requestItem = null;
  constructor(requestItem) {
    this.#requestItem = requestItem;
    this.#build();
  }

  #build = () => {
    this.#dom = document.createElement("div");
    this.#dom.classList.add("request");
    this.#dom.innerHTML = `
      <div class = "profile">
        <div class="profile-photo">
          <img src="${this.#requestItem.src}" alt="profile  photo">
        </div>
        <div class="profile-description">
          <h2>${this.#requestItem.name}</h2>
          <p>${this.#requestItem.mutualFriendNum} mutual friends</p>
        </div>
      </div>
      `;

    this.#dom.appendChild(requestBtnGrp());
  };

  get dom() {
    return this.#dom;
  }
}

function requestBtnGrp() {
  const btnGrp = document.createElement("div");
  btnGrp.classList.add("request-btn-group");
  //Accept Btn
  const acceptBtn = document.createElement("button");
  acceptBtn.textContent = "Accept";
  acceptBtn.classList.add("btn", "btn-primary");

  //Decline Btn
  const declineBtn = document.createElement("button");
  declineBtn.textContent = "Decline";
  declineBtn.classList.add("btn", "btn-cancel");

  btnGrp.appendChild(acceptBtn);
  btnGrp.appendChild(declineBtn);
  return btnGrp;
}

export { Request };
