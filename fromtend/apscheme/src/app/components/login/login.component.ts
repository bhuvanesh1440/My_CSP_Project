import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CRUDService } from '../../user.service';
import { InsertedSuccess, Read, UserDetails,UserLogin } from '../../user-detais';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    
  }
  constructor(private router: Router,private Service: CRUDService) {}
  navigateToAbout() {
    this.router.navigate(['/register']);
    this.router.navigate(['/main']);
  }

  Roll: String = '';
  GotResult: Boolean = false;
  User: UserLogin = {
    u_name: '',
    pass: '',
  };
  u_name:string='';
  pass:string='';
  a:string='';
  b:string='';
  UpdatedUser: UserDetails = {
    u_name: '',
    u_mail: '',
    pass:'' 
  };
  Results = [];
  Read() {
    
    this.a=this.u_name;
  this.b=this.pass;
    this.Service.Read(this.u_name).subscribe({
          next: (Data: Read) => {
          this.Results = Data.Result;
          this.GotResult = true;
          console.log(this.Results); 
          if(this.Results[0]==this.pass){
            this.router.navigate(['/main']);
            console.log("hiiiiiiiiiii")
          }else{
              alert("Invalid username or Password");
            }
          
        },
        error: (Err) => {
          console.log(Err);
        },
      });
      console.log("hi");
     
      
      if(this.Results[0] == this.pass){
        this.router.navigate(['/main']);
        console.log("hiiiiiiiiiii")
      }
      // else{
      //   alert("Invalid username or Password");
      // }

    }

  }
    
    // this.Service.Read(this.User.u_name,this.User.pass).subscribe({
    //   next: (Data: Read) => {
    //     this.Results = Data.Result;
    //     this.GotResult = true;
    //   },
    //   error: (Err) => {
    //     console.log(Err);
    //   },
    // });
  //   this.a=this.u_name;
  // this.b=this.pass;
  //   this.Service.Read(this.User.u_name,this.User.pass).subscribe({
    //   next: (Data: Read) => {
    //     this.Results = Data.Result;
    //     this.GotResult = true;
    //   },
    //   error: (Err) => {
    //     console.log(Err);
  //   //   },
  //   this.Service.Update(RollNumber, Details).subscribe({
  //     next: (Data) => {
  //       console.log(Data);
        
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //   });
  // }
  // Delete(Roll: String) {
  //   this.Service.Delete(Roll).subscribe({
  //     next: (Data: InsertedSuccess) => {
  //       console.log(Data.rowsAffected);
        
  //     },
  //     error: (Error) => {
  //       console.log(Error);
  //     },
  //   });
  // }

// }













