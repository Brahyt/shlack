import Component from '@glimmer/component';
import {action} from '@ember/object';
import {tracked} from '@glimmer/tracking';
import {inject as service} from '@ember/service';

export default class LoginFormComponent extends Component {

  @tracked
  userId = null

  @service auth

  get isDisabled(){
    return !this.userId
  }

  @action
  changeUserId(e){
    const { target } = e
    this.userId = target.value
  }

  loginWithUserId(val) {
  }

  /*
   *@param {Event & {target: HTMLFormElement}} e
   */

  @action //binds this to the object it lives on
  onLoginFormSubmit(e) {
    e.preventDefault();
    const { target } = e;
    const val = target.querySelector('select').value;
    this.auth.loginWithUserId(val)
  }
}
