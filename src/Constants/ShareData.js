export class ShareData {
  static instancce = null;
  accessToken = '';
  static getInstance = () => {
    if (this.instancce === null) {
      this.instancce = new ShareData();
    }
    return this.instancce;
  };
  setLoginData = loginData => {
    this.accessToken = loginData.access_token;
  };
}
