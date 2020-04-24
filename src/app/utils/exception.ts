export class KaroBaseExcetion extends Error {
  public message;
  public errorCode;
  public errorObject;

  constructor(message, errorCode, errorObject) {
    super(message);
    this.message = message;
    this.errorCode = errorCode;
    this.errorObject = errorObject;
  }
}

export class HttpException extends KaroBaseExcetion {
  constructor(message, errorCode, errorObject) {
    super(message, errorCode, errorObject);
  }
}

export class GeneralException extends KaroBaseExcetion {
  constructor(message, errorCode, errorObject) {
    super(message, errorCode, errorObject);
  }
}

export class EmptyResponseException extends KaroBaseExcetion {
  constructor(message, errorCode, errorObject) {
    super(message, errorCode, errorObject);
  }
}
