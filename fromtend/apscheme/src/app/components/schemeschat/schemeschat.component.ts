import { Component,OnInit,OnDestroy } from '@angular/core';
import { CRUDService } from '../../chat.service';
import { InsertedSuccess, Read, SchemeDetails } from '../../schemes-details';


@Component({
  selector: 'app-schemeschat',
  templateUrl: './schemeschat.component.html',
  styleUrls: ['./schemeschat.component.css']
})
export class SchemeschatComponent  implements OnInit{

  ngOnInit(): void {
    this.Read('All');
   }
  constructor(private Service: CRUDService) {}
  Roll: String = '';
  s_name :String='';
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
  Results2= [];
  a=[];
  Read(s_name: String) {
    this.Service.Read(s_name).subscribe({
      next: (Data: Read) => {
        this.Results = Data.Result;
        this.GotResult = true;
      },
      error: (Err) => {
        console.log(Err);
      },
    });
  }
  Read1(s_name: String) {
    this.Service.Read(s_name).subscribe({
      next: (Data: Read) => {
        this.Results2 = Data.Result;
        this.GotResult = true;
        for (let i = 0; i < this.Results2.length; i++) {
          this.a=this.Results2[i];
          console.log(this.a);
          
        }
        this.s_name=this.a[0];
        this.UpdatedUser.s_name=this.a[0];
        this.UpdatedUser.s_info=this.a[1];
        this.UpdatedUser.q1=this.a[2];
        this.UpdatedUser.ans1=this.a[3];
        this.UpdatedUser.q2=this.a[4];
        this.UpdatedUser.ans2=this.a[5];
        this.UpdatedUser.q3=this.a[6];
        this.UpdatedUser.ans3=this.a[7];
        this.UpdatedUser.q4=this.a[8];
        this.UpdatedUser.ans4=this.a[9];


      },
      error: (Err) => {
        console.log(Err);
      },
    });
  }
  Update(scheme: String, Details: SchemeDetails) {
    console.log(this.UpdatedUser.s_name);
    this.Service.Update(this.s_name, Details).subscribe({
      
      next: (Data) => {
        console.log(Data);
        this.Read('All');
        
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  Delete(s_name: String) {
    this.Service.Delete(s_name).subscribe({
      next: (Data: InsertedSuccess) => {
        console.log(Data.rowsAffected);
        this.Read('All');
      },
      error: (Error) => {
        console.log(Error);
      },
    });
  }


}











