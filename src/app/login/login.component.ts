import { Component, OnInit} from '@angular/core';
import { LogginService } from '../../Servises/loggin.service';
import {  Router } from '@angular/router';
import { CheckConService } from '../../Servises/check-con.service';
import { LoggedUser } from '../model/logged-user';
import { ClientType } from '../model/ClientType';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  public  loggedUser:LoggedUser = new LoggedUser(0,ClientType.CUSTOMER,"","");
  public loging:boolean = false;
  public erorr:string[] = [];


  constructor(public logginServise:LogginService, private router:Router,private check:CheckConService,
    private toast: ToastrService
  ) { }

  // ngOnInit() {

  //   this.check.checkCon().subscribe(()=>{
     
  //   }, () =>{
  //     this.router.navigate(["serverIsDown"]);
  //   });
  // }
    
   public loggin(){
   
      this.logginServise.login(this.loggedUser).subscribe(c =>{
        
        this.toast.success("succfully logined!"," Login ");
        console.log(`token: ${c.data.token}`);
        localStorage.setItem('token', c.data.token);

        switch (c.data.role) {
          case ClientType.ADMIN:
            this.logginServise.ifLoggdIn(this.loggedUser);
            this.router.navigate(["adminPersonalArea"]);
            break;
            case ClientType.COMPANY:
            this.logginServise.ifLoggdIn(this.loggedUser);
            this.router.navigate(["comapnyPersonalArea"]);
            break;
            case ClientType.CUSTOMER:
            this.logginServise.ifLoggdIn(this.loggedUser);
            this.router.navigate(["home"]);
            break;
         
        }
      },err => {
        

      
        this.showToast('error', `${err.message}`,"Login");
       
        if( err.error.find( (x: string) => x.includes("I")  ))  {
          this.erorr.push("Please choose a type")
          alert( this.erorr)
          
        }else{
          alert(err.messages)
        } 


        this.erorr.splice(0,this.erorr.length)

      });
     // for toast
      }
      showToast(type: 'success' | 'info'|'error', message: string,title:string): void {
        console.warn("gjdsklajgldjglkjasdgjdjsagldasjgjk");
        switch (type) {
          case 'success':
            this.toast.success(message, title, {
              timeOut: 3000,
            });
            break;
          case 'error':
            this.toast.error(message, title, {
              timeOut: 3000,
            });
            break;
          case 'info':
            this.toast.info(message, title);
            break;
          default:
            console.error(`Unsupported toast type: ${type}`);
        }
      }
    
      
    
  };



  



