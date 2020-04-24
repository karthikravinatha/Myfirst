import {KaroBaseExcetion} from '../utils/exception';
import {AppConstants} from '../utils/Constants';
import {Utils} from '../utils/Utils';
import {Router} from '@angular/router';
import {Inject} from '@angular/core';
import {StateService} from '../../app/service/state.service';
import {State} from '../../app/model/state.model';
import {DataService} from "../service/data.service";

export class BaseComponent {

  @Inject(Router) public baseRouter: Router;

  constructor() {
    this.checkAuthentication();
  }

  protected handleExcception(exception: Error) {
    console.log(exception);
    if (exception instanceof KaroBaseExcetion) {

    } else {

    }
  }

  protected checkAuthentication() {
    // const authKey = localStorage.getItem(AppConstants.AUTH_KEY);
    const authKey = DataService.getDataFromLocal(AppConstants.AUTH_KEY);
    if (authKey == '' || authKey == null) {
      this.redirectToLogin();
    } else {
      const userData = DataService.getDataFromLocal(AppConstants.USER_OBJECT_KEY);
      if (userData == '' || userData == null) {
        this.redirectToLogin();
      } else {
        const userObject = JSON.parse(userData);
        let exp: string = userObject['expires_on']; // String
        exp = Utils.replaceChar(exp, 10, 'T');
        const expDate = new Date(exp); // By passing exp string

        /* Get Current date and time (UTC) */
        const curDate = Utils.convertDateToUtc(new Date());

        if (curDate > expDate) {
          /* Either auto login or ask to login */
          this.redirectToLogin();
        }
      }
    }
  }

  private redirectToLogin() {

    // localStorage.removeItem(AppConstants.AUTH_KEY);
    // localStorage.removeItem(AppConstants.USER_OBJECT_KEY);
    // localStorage.removeItem(AppConstants.USER_PWD_KEY);
    // localStorage.removeItem(AppConstants.LOGIN_ID);

    DataService.deleteFromLocal(AppConstants.AUTH_KEY);
    DataService.deleteFromLocal(AppConstants.USER_OBJECT_KEY);
    DataService.deleteFromLocal(AppConstants.USER_PWD_KEY);
    DataService.deleteFromLocal(AppConstants.LOGIN_ID);

    this.baseRouter.navigate(['login']);
  }

  private autoLogin() {
    return;
  }

  protected getLoggerInUser() {
    return JSON.parse(DataService.getDataFromLocal(AppConstants.USER_OBJECT_KEY));
  }

  protected isProducerLogin() {
    let isPLogin = false;
    return isPLogin;
  }

  protected isKaroLogin() {

  }

  protected getLoggedInUserId() {
    // const userData = JSON.parse(localStorage.getItem(AppConstants.USER_OBJECT_KEY));
    const userData = JSON.parse(DataService.getDataFromLocal(AppConstants.USER_OBJECT_KEY));
    return userData.user_id;
  }

  protected getLoggedInEntityId() {
    const userData = JSON.parse(DataService.getDataFromLocal(AppConstants.USER_OBJECT_KEY));
    // const userData = JSON.parse(localStorage.getItem(AppConstants.USER_OBJECT_KEY));
    return userData.entity_id;
  }

  protected getLoggedInUserInfo() {
    const userData = JSON.parse(DataService.getDataFromLocal(AppConstants.USER_OBJECT_KEY));
    // const userData = JSON.parse(localStorage.getItem(AppConstants.USER_OBJECT_KEY));
    return userData;
  }

}
