export default class UserInfo {
    constructor({nameSelector, jobSelector, avatarSelector}) {

        this._name = document.querySelector(nameSelector);
        this._job = document.querySelector(jobSelector);
        this._avatar = document.querySelector(avatarSelector);
        // this._avatar = avatar;
    }


    getUserInfo() {
        this._userInfo = {
            name: this._name.textContent,
            job: this._job.textContent
        }

        return this._userInfo;
    }

    setUserInfo(name, about) {
        this._name.textContent = name;
        this._job.textContent = about;
    }

    setUserAvatar(avatar) {
        this._avatar.src = avatar;
      }
}