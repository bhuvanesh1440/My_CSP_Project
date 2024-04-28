
import { Component,OnInit } from '@angular/core';

import { CRUDService,Message } from '../../chat.service';
import { InsertedSuccess, Read, SchemeDetails } from '../../schemes-details';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{
  message: Message[]=[];
  value:string | undefined
  a:string |undefined=""
  constructor(private Service: CRUDService) {}

  ngOnInit(): void{
    this.Read('All');

    this.Service.conversation.subscribe((val)=>{
      this.message =this.message.concat(val);
    });
  }

  sendMessage(){
    this.a=this.value?.toLowerCase();
    console.log(this.message);
    this.Service.getBotAnswer(this.value);
    this.value=''
  }


  
  Roll: String = '';
  GotResult: Boolean = false;
  UpdatedUser: SchemeDetails = {
    s_name :'',
    s_info :'',
    q1 :'',
    ans1 :'',
    q2 :'',
    ans2 :'',
    q3:'',
    ans3:'',
    q4:'',
    ans4:''
    
    
  };
  Results = [];
  Read(Roll: String) {
    this.Service.Read(Roll).subscribe({
      next: (Data: Read) => {
        this.Results = Data.Result;
        this.GotResult = true;
      },
      error: (Err) => {
        console.log(Err);
      },
    });
  }
  Update(RollNumber: String, Details: SchemeDetails) {
    this.Service.Update(RollNumber, Details).subscribe({
      next: (Data) => {
        console.log(Data);
        this.Read('All');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  Delete(Roll: String) {
    this.Service.Delete(Roll).subscribe({
      next: (Data: InsertedSuccess) => {
        console.log(Data.rowsAffected);
        this.Read('All');
      },
      error: (Error) => {
        console.log(Error);
      },
    });
  }

  // message: Message[]=[];
  // value:string | undefined
  // a:string |undefined=""
  // constructor(public chatService:ChatService){}

  // ngOnInit(): void{

  //   this.chatService.conversation.subscribe((val)=>{
  //     this.message =this.message.concat(val);
  //   });
  // }
  // sendMessage(){
  //   this.a=this.value?.toLowerCase();
    
  //   this.chatService.getBotAnswer(this.a);
  //   this.value=''
  // }

}






