export default class UserInfo {
    constructor(userName, jobInput) {
        this._name = document.querySelector(userName);
        this._job = document.querySelector(jobInput);

    }

    getUserInfo() {
        const userData = {
            name: this._name.textContent,
            profession: this._job.textContent
        }
        return userData;
    }

    setUserInfo(userName, jobInput) {
        this._name.textContent = userName;
        this._job.textContent = jobInput;
    }
}
