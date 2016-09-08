import { observable, action } from 'mobx';

class App {
  @observable isFetching = false;
  @observable headerColor = 'white';

  @observable schoolForm = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    program: '',
    school: {
      first: true,
      second: false,
    },
    anonymous: true,
  }

  @action headerSetColor(color) {
    this.headerColor = color;
  }

  @action setSchoolData(data) {
    this.schoolForm = { ...data };
  }
}

export default new App();
