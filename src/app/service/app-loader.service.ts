import {Injectable} from '@angular/core';
import {StateService} from './state.service';
//import {CityService} from './city.service';
//import {CategoryService} from './category.service';
import {State} from '../model/state.model';
import {AppModule} from '../app.module';
import {AppComponent} from '../app.component';
//import {StakeholderService} from './stakeholder.service';
//import {WarehouseService} from './warehouse.service';
//import {UserService} from './user.service';
import {AuthService} from './auth.service';
//import {FileService} from './file.service';
import {AppObjects, GRNStatus, POEs} from '../utils/Constants';
//import {Warehouse} from '../model/warehouse.model';
// import {InvoiceService} from './invoice.service';

@Injectable({
  providedIn: 'root'
})
export class AppLoaderService {


  constructor(
    public stateService: StateService, 
    // public cityService: CityService,
    // public categoryService: CategoryService, 
    // public stakeholderService: StakeholderService,
    // public warehouseService: WarehouseService, 
    // public userService: UserService,
    // public fileService: FileService
    ) 
    {
  }

  getMasters() {
    this.getState();
    // this.getCity();
    // this.getCategory();
  }

  // getMasterWithAuth() {
  //   this.getLSPList();
  //   this.getRecyclerList();
  //   this.getWH();
  //   this.getKaroUsers();
  // }

  getState() {
    try {
      this.stateService.getListByIds('').subscribe(data => {
      }, error => {
      });
    } catch (error) {
    }
  }

  // getCity() {
  //   try {
  //     this.cityService.getListByIds('').subscribe(data => {
  //       AppComponent.citylist = data;
  //     }, error => {

  //     });
  //   } catch (error) {

  //   }
  // }

  // getCategory() {
  //   try {
  //     this.categoryService.getListByIds('').subscribe(data => {
  //       AppComponent.allCategories = data;
  //       // this.authenticate() ;
  //     }, error => {

  //     });
  //   } catch (error) {

  //   }
  // }


  // getWH() {
  //   try {
  //     console.log('getting warehouse');
  //     var params = {};
  //     params['logistic_partner_id'] = '';
  //     params['state_id'] = '';
  //     params['city_id'] = '';
  //     params['status'] = '';
  //     this.warehouseService.getWarehouseList(params).subscribe(data => {
  //         AppComponent.warehouseList = data;
  //       },
  //       error1 => {
  //
  //       });
  //   } catch (e) {
  //   }
  // }
  //
  // getRecyclerList() {
  //   try {
  //     var params = {};
  //     params['entity_type'] = 'ENTRECYCLER';
  //     params['state_id'] = '';
  //     params['city_id'] = '';
  //     params['from_date'] = '';
  //     params['to_date'] = '';
  //     params['enrollment_status'] = '';
  //     params['entity_name_search_key'] = '';
  //     params['hierarchy_type'] = '';
  //     params['fy'] = '';
  //     this.stakeholderService.getEntityObjectList(params).subscribe(data => {
  //       AppComponent.recyclerList = data;
  //     }, error1 => {
  //
  //     });
  //   } catch (e) {
  //
  //   }
  // }
  //
  // getLSPList() {
  //   try {
  //     var params = {};
  //     params['entity_type'] = 'ENTLOG';
  //     params['state_id'] = '';
  //     params['city_id'] = '';
  //     params['from_date'] = '';
  //     params['to_date'] = '';
  //     params['enrollment_status'] = '';
  //     params['entity_name_search_key'] = '';
  //     params['hierarchy_type'] = '';
  //     params['fy'] = '';
  //     this.stakeholderService.getEntityObjectList(params).subscribe(data => {
  //       AppComponent.lspList = data;
  //     }, error1 => {
  //
  //     });
  //   } catch (e) {
  //
  //   }
  // }
  //
  // getKaroUsers() {
  //   try {
  //     var params = {};
  //     params['entity_id'] = 1;
  //     this.userService.getUserByEntity(params).subscribe(data => {
  //       AppComponent.karoUserList = data;
  //     }, error1 => {
  //     });
  //   } catch (e) {
  //   }
  // }
  //
  //
  // getInwardPOEDocList() {
  //   try {
  //     let params = {
  //       'object_type': POEs.INWARD,
  //     };
  //     this.fileService.getDocumentListMultiple(params).subscribe(
  //       data => {
  //         AppComponent.inwardPOEs = data;
  //       },
  //       error1 => {
  //       }
  //     );
  //   } catch (e) {
  //   }
  // }


  // getOutwardPOEDocList() {
  //   try {
  //     let params = {
  //       'object_type': POEs.OUTWARD,
  //     };
  //     this.fileService.getDocumentListMultiple(params).subscribe(
  //       data => {
  //         AppComponent.outwardPOEs = data;
  //       },
  //       error1 => {
  //       }
  //     );
  //   } catch (e) {
  //   }
  // }
  //
  // getRecyclerPrice() {
  //   try {
  //     let params = {
  //       'recycler_id': '',
  //     };
  //     this.invoiceService.getRecyclerPrice(params).subscribe(
  //       data => {
  //         AppComponent.outwardPOEs = data;
  //       },
  //       error1 => {
  //       }
  //     );
  //   } catch (e) {
  //   }
  // }
}

