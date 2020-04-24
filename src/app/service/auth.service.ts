import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {AppConstants} from '../utils/Constants';
import {BaseService} from './base.service';
import {ApiService} from './api.service';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  private authenticateUrl = 'main/authentication/authenticate';

  constructor(apiService: ApiService, dataService: DataService) {
    super(apiService, dataService);
  }

  isCacheable(): boolean {
    return false;
  }

  objectKey(): string {
    return 'USER';
  }

  objectParentKey(): string {
    return 'parent_id';
  }

  objectPrimaryKey(): string {
    return 'user_id';
  }

  getListByIdsKey(): string {
    return 'ids';
  }

  authenticate(params): Observable<any> {
    // let user_object = {}; // user_object = param in production
    // user_object['mobile_number'] = 9717792848;
    // user_object['password'] = '1234';

    return this.postCommon(this.authenticateUrl, params, false)
      .pipe(
        map(data => {
          // localStorage.setItem(AppConstants.AUTH_KEY, data['token']);
          // localStorage.setItem(AppConstants.USER_OBJECT_KEY, JSON.stringify(data['data']));
          // localStorage.setItem(AppConstants.USER_PWD_KEY, params['password']);
          // localStorage.setItem(AppConstants.LOGIN_ID, params['mobile_number']);
          DataService.setDataInLocal(AppConstants.AUTH_KEY, data['token']);
          DataService.setDataInLocal(AppConstants.USER_OBJECT_KEY, JSON.stringify(data['data']));
          DataService.setDataInLocal(AppConstants.USER_PWD_KEY, params['password']);
          DataService.setDataInLocal(AppConstants.LOGIN_ID, params['mobile_number']);

          return data;

        }),
        catchError(ex => {
          return throwError(ex);
        })
      );
  }

  logOut() {
    // localStorage.removeItem(AppConstants.AUTH_KEY);
    // localStorage.removeItem(AppConstants.USER_OBJECT_KEY);
    // localStorage.removeItem(AppConstants.USER_PWD_KEY);
    // localStorage.removeItem(AppConstants.LOGIN_ID);

    DataService.deleteFromLocal(AppConstants.AUTH_KEY);
    DataService.deleteFromLocal(AppConstants.USER_OBJECT_KEY);
    DataService.deleteFromLocal(AppConstants.USER_PWD_KEY);
    DataService.deleteFromLocal(AppConstants.LOGIN_ID);

    /* Redirect to Login */
  }

}
