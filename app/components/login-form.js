import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class LoginFormComponent extends Component {
  loginWithUserId(val) {
    console.log(val);
  }

  /*
   *@param {Event & {target: HTMLFormElement}} e
   */

  @action //binds this to the object it lives on
  onLoginFormSubmit(e) {
    e.preventDefault();
    const { target } = e;
    const val = target.querySelector('select').value;
    this.loginWithUserId(val);
  }
}
