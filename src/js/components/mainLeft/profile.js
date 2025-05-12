function create_profile() {
  const profile = document.createElement("div");
  profile.classList.add("profile");
  profile.innerHTML = `
    <div class="profile-photo">
      <img src="${img_url}" alt="profile photo">
    </div>
    <div class="profile-description">
      <h2>${name}</h2>
      <p>${info}</p>
    </div>
    </div>
    `;
}

class Profile {
  static list = [];
  #dom = null;
  #profile = { name: null, info: null, img_src: null };
  constructor(user) {
    this.#profile.name = user.name;
    this.#profile.info = user.at;
    this.#profile.img_src = user.img_src;
    this.#build();
  }
  #build = () => {
    const profile = document.createElement("a");
    profile.classList.add("profile");

    profile.innerHTML = `
      <div class="profile-photo">
        <img src="${this.#profile.img_src}" alt="profile photo">
      </div>
      <div class="profile-description">
        <h2>${this.#profile.name}</h2>
        <p>${this.#profile.info}</p>
      </div>
    `;
    Profile.list.push(profile);
    this.#dom = profile;
  };

  get dom() {
    return this.#dom;
  }
}

export { Profile };
