export default class UserInfo {
    constructor({nameSelector, jobSelector}) {

        this._name = document.querySelector(nameSelector);
        this._job = document.querySelector(jobSelector);
    }


    getUserInfo() {
        this._userInfo = {
            name: this._name.textContent,
            job: this._job.textContent
        }

        return this._userInfo;
    }

    setUserInfo(data) {
        this._name.textContent = data.nameProfile;
        this._job.textContent = data.jobProfile;
    }
}