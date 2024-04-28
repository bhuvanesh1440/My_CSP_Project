export interface SchemeDetails {
    s_name :string,
    s_info :string,
    q1 :string,
    ans1 :string,
    q2 :string,
    ans2 :string,
    q3:string,
    ans3:string,
    q4:string,
    ans4:string
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