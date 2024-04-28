export interface UserDetails {
    u_name: String;
    u_mail: String;
    pass:string;
  }
  export interface UserLogin {
    u_name: string;
    pass:string;
  }
  export interface UniqueConstraintError {
    errorNum: Number;
    offset: Number;
  }
  export interface InsertedSuccess {
    lastRowid: String;
    rowsAffected: Number;
  }
  export interface Read {
    Result: [];
  }