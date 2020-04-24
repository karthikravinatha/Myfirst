import {Injectable} from '@angular/core';
import {BaseService} from './base.service';
import {ApiService} from './api.service';
import {DataService} from './data.service';
import {State} from '../model/state.model';

@Injectable({
  providedIn: 'root'
})
export class StateService extends BaseService {

  var;
  getStateListUrl = 'masters/state/getlist';

  constructor(apiService: ApiService, dataService: DataService) {
    super(apiService, dataService);
    this.isModelEnabled = true;
  }

  isCacheable(): boolean {
    return true;
  }

  objectKey(): string {
    return 'STATE';
  }

  objectParentKey(): string {
    return '';
  }

  objectPrimaryKey(): string {
    return 'state_id';
  }

  getListByIdsKey(): string {
    return 'state_ids';
  }

  postGetListByIds(responseJson) {
    var stateList = [];
    for (var i = 0; i < responseJson.length; i++) {
      let stateListObject = new State();
      stateListObject.stateID = responseJson[i]['state_id'];
      stateListObject.stateName = responseJson[i]['state_name'];
      stateListObject.IsOperative = responseJson[i]['is_operative'];
      stateListObject.location = responseJson[i]['location'];
      stateListObject.stateCode = responseJson[i]['state_code'];
      stateList.push(stateListObject);
    }
    if (this._ids == '') {
      this.setModelInApp(stateList);
    }
    return stateList;
  }

  preGetListByIds() {
    this.url = this.getStateListUrl;
    this.enableCredentials = false;
  }
}

