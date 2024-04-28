import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
// import { SchemeDetails } from './schemes-details';
import { HttpClient, HttpHeaders ,HttpParams} from '@angular/common/http';
import {
  InsertedSuccess,
  Read,
    UniqueConstraintError,
    SchemeDetails,
    
} from './schemes-details';
import { Observable } from 'rxjs';
export class Message{
  constructor(public author:string,public content:string){}
}
@Injectable({
  providedIn: 'root',
})


export class CRUDService {

  constructor(private http: HttpClient) {}
  conversation =new Subject<Message[]>();
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });


  FoodHeaders = new HttpHeaders({
    'X-RapidAPI-Key': '9d95c08d75mshae57f7f480c131ap1443f3jsn5525ed1bd303',
    'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com',
  });


  
  private url = 'http://localhost:4000/';
  // User: UserLogin = {
  //   u_name: '',
  //   pass: '',
  // };
  Results=[];
  a=[];
  b:String='';
  getBotAnswer(msg:any){
    const usermsg =new Message('user',msg);
    this.conversation.next([usermsg]);
    this.Read(msg).subscribe({
      next: (result: Read) => {
        
        this.a=result.Result;
        console.log(this.a[0]);
        this.b=this.a[0];
        console.log(this.b[1]);
        const botmsg1 = new Message('bot', this.b[1].toString());
        const botmsg2 = new Message('bot', this.b[2].toString());
        const botmsg3 = new Message('bot', this.b[3].toString());
        const botmsg4 = new Message('bot', this.b[4].toString());
        const botmsg5 = new Message('bot', this.b[5].toString());
        const botmsg6 = new Message('bot', this.b[6].toString());
        const botmsg7 = new Message('bot', this.b[7].toString());
        const botmsg8 = new Message('bot', this.b[8].toString());
        setTimeout(() => {
          this.conversation.next([botmsg1]);
          
        }, 1000);
        setTimeout(() => {
          this.conversation.next([botmsg2]);
          
        }, 1500);
        setTimeout(() => {
          this.conversation.next([botmsg3]);
          
        }, 2000);
        setTimeout(() => {
          this.conversation.next([botmsg4]);
          
        }, 2500);
        setTimeout(() => {
          this.conversation.next([botmsg5]);
          
        }, 3000);
        setTimeout(() => {
          this.conversation.next([botmsg6]);
          
        }, 3500);
        setTimeout(() => {
          this.conversation.next([botmsg7]);
          
        }, 4000);

      },
      error: (error: any) => {
        // Handle error if necessary
      }
    }); 
  }





  
  Insert(
    Details: SchemeDetails
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'Schemes/Insert',
      Details,
      { headers: this.headers }
    );
  }
  Read(s_name: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}Schemes/Read${s_name}`);
  }
  Delete(RollNumber: String): Observable<InsertedSuccess> {
    console.log(`${this.url}Schemes/Delete${RollNumber}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}Schemes/Delete${RollNumber}`
    );
  }
  Update(s_name: String, Details: SchemeDetails) {
    console.log("hi");
    console.log(s_name);
    
    return this.http.put(`${this.url}Schemes/Update${s_name}`, Details, {
      headers: this.headers,
    });
  }























  // constructor() { }
  // conversation =new Subject<Message[]>();
  // messageMap:any={
  //   "hi":"hello",
  //   "hai":"Hello",
  //   "who are you?":"my name is bhuvi AI",
  //   "default":"I can't understand.can you please repeat,otherwise contact with bhuvanesh"
  // }
  // getBotAnswer(msg:any){
  //   const usermsg =new Message('user',msg);
  //   this.conversation.next([usermsg]);
  //   const botmsg = new Message('bot',this.getBotMessage(msg));
  //   setTimeout(()=>{
  //     this.conversation.next([botmsg]);
  //   },1000);
  // }
  // getBotMessage(question:string){
  //   let answer =this.messageMap[question];
  //   return answer || this.messageMap['default']

  // }
}

