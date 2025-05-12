class cardList {
  #dom;
  #cardList = [];

  constructor(cardList = []) {
    this.#cardList = cardList;

    this.#build();
  }

  #build = () => {
    this.#dom = document.createElement("div");
    this.#dom.classList.add("card-list");
    this.#cardList.forEach((element) => {
      this.#dom.appendChild(new Card(element).dom);
    });
  };

  get dom() {
    return this.#dom;
  }
}

class Card {
  #dom;
  #cardInfo;

  constructor(cardInfo) {
    this.#cardInfo = cardInfo;
    this.#build();
  }

  #build = () => {
    this.#dom = document.createElement("div");
    this.#dom.classList.add("info");
    this.#dom.appendChild(new infoProfile(this.#cardInfo.profile).dom);

    this.#dom.appendChild(new infoPicture(this.#cardInfo.picture).dom);

    this.#dom.appendChild(new infoControl(this.#cardInfo.control).dom);

    this.#dom.appendChild(new infoComment(this.#cardInfo.comment).dom);
  };

  get dom() {
    return this.#dom;
  }
}

class infoPicture {
  #dom;
  #pictureInfo;

  constructor(pictureInfo) {
    this.#pictureInfo = pictureInfo;
    this.#build();
  }

  #build = () => {
    this.#dom = document.createElement("div");
    this.#dom.classList.add("info-picuture");
    this.#dom.innerHTML = `

    <img width="50%" src="${this.#pictureInfo.img_src}" alt="picture">
    `;
  };

  get dom() {
    return this.#dom;
  }
}

class infoProfile {
  #dom;
  #profileInfo;

  constructor(profileInfo) {
    this.#profileInfo = profileInfo;
    this.#build();
  }

  #build = () => {
    this.#dom = document.createElement("div");
    this.#dom.classList.add("info-profile");
    this.#dom.innerHTML = `
    <div class="profile">
      <div class="profile-photo">
        <img src="${this.#profileInfo.src}" alt="profile photo">
      </div>
      <div class="profile-description">
        <h2>${this.#profileInfo.name}</h2>
        <p>${this.#profileInfo.position} , ${this.#profileInfo.time}</p>
      </div>
    </div>
    <i class="uil uil-ellipsis-h"></i>
    `;
  };
  get dom() {
    return this.#dom;
  }
}

class infoControl {
  #dom;
  #infoControl;

  constructor(infoControl) {
    this.#infoControl = infoControl;
    this.#build();
  }

  #build = () => {
    this.#dom = document.createElement("div");
    this.#dom.classList.add("info-control");
    this.#dom.innerHTML = `
      <div class="main-control">
        <i class="uil uil-heart control_heart"></i>
        <i class="uil uil-comment-dots"></i>
        <i class="uil uil-share-alt"></i>
      </div>
      <i class="uil uil-bookmark"></i>
    `;
  };
  get dom() {
    return this.#dom;
  }
}

class infoComment {
  #dom;
  #infoComment;

  constructor(infoComment) {
    this.#infoComment = infoComment;

    this.#build();
  }

  #build = () => {
    this.#dom = document.createElement("div");
    this.#dom.classList.add("info-comment");
    this.#createProfileList();
    this.#createCommentInfo();
    this.#viewAllComment();
  };

  #createProfileList = () => {
    const dom = document.createElement("div");
    dom.classList.add("profile-photo-list");
    this.#creatPhotoList(dom);
    this.#createPhotoLike(dom);
    this.#dom.appendChild(dom);
  };

  #creatPhotoList = (parentDom) => {
    this.#infoComment.img_src_list.forEach((element) => {
      const photo = document.createElement("img");
      photo.src = element;
      photo.classList.add("profile-photo");
      parentDom.appendChild(photo);
    });
  };

  #createPhotoLike = (parentDom) => {
    const dom = document.createElement("div");
    dom.classList.add("like-info");
    dom.innerHTML = `
      Liked by <strong>${
        this.#infoComment.first_people_name
      }</strong> and <strong>${
      this.#infoComment.like_peoples_number
    }</strong> others
    `;
    parentDom.appendChild(dom);
  };
  get dom() {
    return this.#dom;
  }

  #createCommentInfo = () => {
    const dom = document.createElement("div");
    dom.classList.add("comment-info");
    dom.innerHTML = `
    <p>${this.#infoComment.comment_info}</p>
    `;

    this.#dom.appendChild(dom);
  };

  #viewAllComment = () => {
    const dom = document.createElement("div");
    dom.classList.add("view-btn");
    dom.innerHTML = `
    <a href="#" class="view-comment">View all ${
      this.#infoComment.view_number
    } comments</a>
    `;
    this.#dom.appendChild(dom);
  };
}

export { cardList };
