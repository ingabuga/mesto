export default class UserInfo {
    constructor({nameSelector, jobSelector}) {

        this._name = document.querySelector(nameSelector);
        this._job = document.querySelector(jobSelector);
        this._avatar = document.querySelector('.profile__avatar');
    }


    getUserInfo() {
        this._userInfo = {
            name: this._name.textContent,
            job: this._job.textContent
        }

        return this._userInfo;
    }

    setUserInfo(name, about, avatar) {
        // this._name.textContent = data.nameProfile;
        // this._job.textContent = data.jobProfile;
        this._name.textContent = name;
        this._job.textContent = about;
        this._avatar.src = avatar;
    }
}