import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import{CRUDService} from '../../user.service';
import {
  InsertedSuccess,
  UserDetails,
  UniqueConstraintError,
} from '../../user-detais';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
constructor(private Service: CRUDService) {}
ngOnInit() {}
Subscription: Subscription = new Subscription();
User: UserDetails = {
  u_name: '',
  u_mail: '',
  pass:''
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

  this.Subscription = this.Service.Insert(this.User).subscribe({
    next: (Data: InsertedSuccess | UniqueConstraintError) => {
      if ('errorNum' in Data) {
        this.ErrorMsg = `${this.User.u_name} alredy Exists`;
      } else {
        this.SuccessMsg = `${this.User.u_mail} Inserted Succesfully`;
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