import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {AppConstants, ErrorCodes, ErrorMessages} from '../utils/Constants';
import {KaroBaseExcetion, GeneralException, HttpException} from '../utils/exception';
import {catchError, map, retry, timeout} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../environments/environment';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private httpHeaders;
  private httpClient;
  private baseURL = environment.BASE_URL;
  private dataService;

  constructor(http: HttpClient, dataService: DataService) {
    this.httpClient = http;
    this.dataService = dataService;
    this.buildHeaders();
  }

  private buildHeaders() {
    this.httpHeaders = new HttpHeaders({
      Authorization: 'Bearer ' + this.getAccessToken()
    });
  }

  private getAccessToken() {
    // return localStorage.getItem(AppConstants.AUTH_KEY);
    return DataService.getDataFromLocal(AppConstants.AUTH_KEY);
  }

  private buildQueryParams(paramsObject): string {
    try {
      let queryParams = '';
      if (paramsObject != null && paramsObject.length <= 0) {
        for (const key in paramsObject) {
          if (queryParams === '') {
            queryParams = '?' + key + '=' + paramsObject[key];
          } else {
            queryParams = '&' + key + '=' + paramsObject[key];
          }
        }
      }
      return queryParams;
    } catch (e) {
      throw new GeneralException(ErrorCodes.GENERAL_ERROR, 'Query param build error', paramsObject);
    }
  }

  private buildFormData(paramsObject): FormData {
    try {
      let data = new FormData();
      if (paramsObject != null) {
        if (Object.keys(paramsObject).length > 0) {
          for (const key in paramsObject) {
            data.append(key, paramsObject[key]);
          }
        }
      }
      return data;
    } catch (e) {
      throw new GeneralException(ErrorCodes.GENERAL_ERROR, 'Form data build error', paramsObject);
    }
  }

  /**
   *
   * @param url
   * @param paramsObject
   * @param enableCredentials
   * @param isCompleteUrl
   * @param respType
   * @return Json Array Or Object
   */
  public postData(url, paramsObject, enableCredentials = true, isCompleteUrl: boolean = false, respType: string = null): Observable<any> {
    try {
      const formData = this.buildFormData(paramsObject);
      let wsURL = isCompleteUrl ? url : this.baseURL + url;
      return this.httpClient.post(
        wsURL,
        formData,
        {
          headers: this.httpHeaders,
          withCredentials: enableCredentials,
          responseType: respType == null ? 'json' : respType
        }
      )
        .pipe(
          map(response => {
            if (response['response_object'] === undefined) {
              return response;
            } else {
              return response['response_object'];
            }
          }),
          catchError(ex => {
            return throwError(this.handleHttpException(ex));
          })
        );
    } catch (e) {
      if (e instanceof KaroBaseExcetion) {
        throw new HttpException(e.message, e.errorCode, e.errorObject);
      } else {
        throw new HttpException(e, ErrorCodes.GENERAL_ERROR, paramsObject);
      }
    }
  }

  /**
   *
   * @param url
   * @param paramsObject
   * @param enableCredentials
   * @param isCompleteUrl
   * @param respType
   */
  public getData(url, paramsObject, enableCredentials = true, isCompleteUrl: boolean = false, respType: string = null): Observable<any> {
    try {
      var data = null;
      let wsURL = isCompleteUrl ? url : this.baseURL + url;
      return this.httpClient.get(
        wsURL,
        {
          params: paramsObject,
          headers: this.httpHeaders,
          withCredentials: enableCredentials,
          responseType: respType == null ? 'json' : respType
        })
        .pipe(
          map(response => {
            if (response['response_object'] === undefined) {
              data = response;
            } else {
              data = response['response_object'];
            }
            return data;
          }),
          catchError(ex => {
            return throwError(this.handleHttpException(ex));
          })
        );
    } catch (e) {
      if (e instanceof KaroBaseExcetion) {
        throw new HttpException(e.message, e.errorCode, e.errorObject);
      } else {
        throw new HttpException(e, ErrorCodes.GENERAL_ERROR, paramsObject);
      }
    }
  }

  uploadFile(url: string, files: Array<File>, userID, objectType: string, documentType: string, transactionID: string, enableCredentials = false, isCompleteUrl: boolean = false, respType: string = null) {
    try {
      const formData = new FormData();

      formData.append('object_type', objectType);
      formData.append('document_type', documentType);
      formData.append('transaction_id', transactionID);
      formData.append('created_by', userID);

      for (var i = 0; i < files.length; i++) {
        formData.append("file" + i, files[i], files[i].name);
      }

      let wsURL = isCompleteUrl ? url : this.baseURL + url;

      return this.httpClient.post(
        wsURL,
        formData,
        {
          headers: this.httpHeaders,
          withCredentials: enableCredentials,
          responseType: respType == null ? 'json' : respType
        }
      )
        .pipe(
          map(response => {
            if (response['response_object'] === undefined) {
              return response;
            } else {
              return response['response_object'];
            }
          }),
          catchError(ex => {
            return throwError(this.handleHttpException(ex));
          })
        );
    } catch (e) {
      if (e instanceof KaroBaseExcetion) {
        throw new HttpException(e.message, e.errorCode, e.errorObject);
      } else {
        throw new HttpException(e, ErrorCodes.GENERAL_ERROR, null);
      }
    }
  }

  private handleHttpException(exception: HttpErrorResponse) {
    switch (exception.status) {
      case 500:
        return new GeneralException(ErrorMessages.INTERNAL_ERROR, ErrorCodes.HTTP_ERROR, null);
        break;
      case 401:
        return new GeneralException(ErrorMessages.NO_AUTH_ERROR, ErrorCodes.HTTP_ERROR, null);
        break;
      default:
        return new GeneralException(ErrorMessages.INTERNAL_ERROR, ErrorCodes.HTTP_ERROR, null);
        break;

    }
  }
}
