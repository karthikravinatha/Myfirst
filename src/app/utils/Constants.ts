export class ErrorCodes {
  public static GENERAL_ERROR = 'ERROR001';
  public static HTTP_ERROR = 'ERROR002';
}

export class ErrorMessages {
  public static INTERNAL_ERROR = 'Internal Error!';
  public static NO_RESP_ERROR = 'No Response from the server';
  public static NO_DATA_ERROR = 'No Data';
  public static NO_AUTH_ERROR = 'Not Authorised';
}

export class HttpMethod {
  public static GET = 'GET';
  public static POST = 'POST';
  public static PUT = 'PUT';
  public static DELETE = 'DELETE';
}

export class AppConstants {
  public static AUTH_KEY = 'AUTH_KEY';
  public static USER_OBJECT_KEY = 'USER_OBJECT_KEY';
  public static USER_PWD_KEY = 'USER_PWD_KEY';
  public static LOGIN_ID = 'LOGIN_ID_KEY';
}

export class AppObjects {
  public static WH = '_OWarehouse';
  public static City = '_OCity';
  public static State = '_OState';
  public static Recycler = '_ORecycler';
  public static LSP = '_OSLP';
  public static Category = '_Category';
}

export class GRNStatus {
  public static PENDING = "PENDING";
  public static RCVD = "RECEIVED";
  public static RECEIVEDATWH = "RECEIVEDATWH";
}

export class POEs {
  public static INWARD = 'SELLERINV';
  public static OUTWARD = 'KAROINV';
  public static COLCENTRE = 'COLCENTRE';
  public static WORKSHOP = 'WORKSHOP';
  public static VAULT = 'VAULT';
  public static TICKET = 'TICKET';
}

export class WorkShopTypes {
  public static WSIND = 'WSIND';
  public static WSBPS = 'WSBPS';
  public static WSFELICIT = 'WSFELICIT';
}

export class EntityTypes {
  public static SCHOOL = 'ENTSCHOOL';
  public static PRODUCER = 'ENTPRODUCER';


  public static KARO = "ENTKARO";
  public static EWASTE_PICKER = "ENTWP";
  public static GOVT_BODY = "ENTGOV";
  public static REPAIR_SHOP = "ENTRSO";
  public static AGGREGATOR = "ENTAGG";
  public static BULK_CONSUMER = "ENTBC";
  public static EP = "ENTNGO";
  public static EP_SCHOOL = "ENTNGOSCHOOL";
  public static RECYCLER = "ENTRECYCLER";
  public static MEDIA = "ENTMP";
  public static MARKETING = "ENTMPRP";
  public static PCB = "ENTPCB";
  public static LOGISTIC = "ENTLOG";
  public static COLLCETION_POINT = "ENTCOLPOINT";
  public static COLLCETION_CENTRE = "ENTCOLCENTRE";
}

export class Actions {
  public static add = 'ADD';
  public static edit = 'EDIT';
  public static view = 'VIEW';
  public static delete = 'DELETE';
}
