export default class UserInfo {
    constructor({nameInput, jobInput}) {

        this._name = document.querySelector(nameInput);
        this._job = document.querySelector(jobInput);
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