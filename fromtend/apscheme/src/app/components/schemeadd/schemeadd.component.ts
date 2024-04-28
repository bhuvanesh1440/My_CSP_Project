import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import{CRUDService} from '../../chat.service';
import {
  InsertedSuccess,
  SchemeDetails,
  UniqueConstraintError,
} from '../../schemes-details';


@Component({
  selector: 'app-schemeadd',
  templateUrl: './schemeadd.component.html',
  styleUrls: ['./schemeadd.component.css']
})
export class SchemeaddComponent  implements OnInit, OnDestroy {
  constructor(private Service: CRUDService) {}
  ngOnInit() {}
  Subscription: Subscription = new Subscription();
  User:  SchemeDetails = {
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
  SuccessMsg = '';
  ErrorMsg = '';
  Insert() {
    this.ErrorMsg = '';
    this.SuccessMsg = '';
  
    //   this.Subscription = this.Service.Insert(this.User).subscribe(
    //     (data)=>{
    //       if(data){
    //         console.log(data);
    //       }
    //       else{
    //         console.log("Failed");
    //       }
    //     }
    //   )
    // }
    console.log(this.User);
    this.Subscription = this.Service.Insert(this.User).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.User.s_name} alredy Exists`;
        } else {
          this.SuccessMsg = `${this.User.s_name} Inserted Succesfully`;
        }
      },
      error: (Error) => {
        console.log(Error);
      },
    });
    // this the another syntax for the Subscribe Its advanced Handling everything
  }
  
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
  }


