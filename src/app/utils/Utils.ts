import {AppComponent} from '../app.component';
import {isDevMode} from '@angular/core';
import * as CryptoJS from 'crypto-js';

export class Utils {
  public static pageSize = 15;

  static getCurrentFY() {
    return 2019;
  }

  static convertDate(input) {
    if (input == undefined || input == '') {
      return '';
    }
    let d = new Date(input);
    let dt = d.getDate();
    let mn = d.getMonth() + 1;
    let yy = d.getFullYear();
    return dt + '/' + mn + '/' + yy;

  }

  static convertDateFromServerToSystem(input) { // input is always in the form dd/mm/yyyy
    if (input == undefined || input == '') {
      return new Date();
    }
    var splitted = input.split('/');
    let d = new Date(Number(splitted[2]), Number(splitted[1]) - 1, Number(splitted[0]));

    return d;
  }

  static replaceChar(str, pos, replaceWith) {
    str = this.setCharAt(str, pos, replaceWith);
    return str;
  }

  static setCharAt(str, index, chr) {
    if (index > str.length - 1) {
      return str;
    }
    return str.substr(0, index) + chr + str.substr(index + 1);
  }

  static convertDateToUtc(date: Date) {
    return new Date(date.getTime() + (date.getTimezoneOffset() * 60000));
  }

  // static getWarehouseNameByID(_id) {
  //   console.log(AppComponent.warehouseList);
  //   console.log('warehouse id is ' + _id);

  //   if (_id == null || _id == 'undefined' || _id == '') {
  //     return null;
  //   }
  //   return AppComponent.warehouseList.find(x => x.whId == _id);
  // }

  static getUniqueIds(array) {
    let Ids: string = '';
    array.forEach(function concatenate(item) {
      // if (Ids == '') {
      //   Ids = item ;
      // } else {
      Ids = Ids + ',' + item;
      // }
    });
    return Ids;
  }

  static debugPrint(message?: any) {
    if (isDevMode()) {
      console.log(message);
    }
  }

  static encryptString(str) {
    let encryptedData = '';
    if (str != null && str != '') {
      encryptedData = CryptoJS.AES.encrypt(str.trim(), '1234').toString();
    }
    return encryptedData;
  }

  static decryptString(str) {
    let decryptedData = '';
    if (str != null && str != '') {
      decryptedData = CryptoJS.AES.decrypt(str, '1234').toString(CryptoJS.enc.Utf8);
    }
    return decryptedData;
  }

  static convertKgToTons(val) {
    try {
      let num = val / 1000
      return num;
    } catch (e) {
      return 0;
    }
  }

  static getPaymentStatus() {
    var arr = [];
    this.addObjToStatusArr(arr, 'Open', 'OPEN');
    this.addObjToStatusArr(arr, 'Closed', 'CLOSED');
    return arr;
  }

  static addObjToStatusArr(arr, str, value) {
    var obj = {};
    obj['name'] = str;
    obj['id'] = value;
    arr.push(obj);
  }

  static isPDF(fileName: String) {
    var type = this.getMimeType(fileName).toString();
    if (type.toLowerCase() == 'pdf') {
      return true;
    } else {
      return false;
    }
  }

  static isXLS(fileName: String) {
    var type = this.getMimeType(fileName).toString();
    if (type.toLowerCase() == 'xls' || type.toLowerCase() == 'xlsx' || type == 'csv') {
      return true;
    } else {
      return false;
    }
  }

  static isImg(fileName: String) {
    var arr = ['jpg', 'jpeg', 'gif', 'png', 'pjpeg', 'ttif', 'icon', 'tif'];
    var type = this.getMimeType(fileName).toString();
    if (arr.indexOf(type.toLowerCase()) > -1) {
      return true;
    } else {
      return false;
    }
  }

  static getMimeType(fileName: String) {
    var type = '';
    var arr = fileName.split('.');
    if (arr.length > 0) {
      type = arr[1];

    }
    return type;
  }

  static setDefaultImgByName(fileName: String): String {
    var src = '';
    if (this.isPDF(fileName)) {
      src = 'assets/pdf.png';
    } else if (this.isXLS(fileName)) {
      src = 'assets/xls.png';
    } else if (this.isImg(fileName)) {
      src = 'assets/no-image.png';
    } else {
      src = 'assets/doc.png';
    }
    return src;
  }
}
