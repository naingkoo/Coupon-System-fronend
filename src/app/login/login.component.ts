import { Component, OnInit} from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { LoggedUser } from '../models/logged-user';
import { ClientType } from '../models/ClientType';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../core/auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginError: string = '';

  public  loggedUser:LoggedUser = new LoggedUser(0,ClientType.CUSTOMER,"","");
  public loging:boolean = false;
  public erorr:string[] = [];


  constructor(public authService:AuthService, private router:Router,
    private toast: ToastrService, //TODO make toastr service
    private fb: FormBuilder,
    private route:ActivatedRoute
  ) { }

  // ngOnInit() {

  //   this.check.checkCon().subscribe(()=>{

  //   }, () =>{
  //     this.router.navigate(["serverIsDown"]);
  //   });
  // }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  //here is start from zue
  onSubmit(): void {
    if (this.loginForm.valid) {
      this.loggedUser.email = this.loginForm.value.email;
      this.loggedUser.password = this.loginForm.value.password;
      this.loggin();
    } else {
      this.loginForm.markAllAsTouched(); // Highlight validation errors
    }
  }

  public onGoogleLogin() {}

  public goToRegister() {}

  // here is end from zue 
   public loggin(){
   
      this.authService.login(this.loggedUser).subscribe(c =>{
        this.toast.success("succfully logined!"," Login ");
        localStorage.setItem('token', c.data.token);

        switch (c.data.role) {
          case ClientType.ADMIN:
            this.authService.ifLoggdIn(this.loggedUser);
            const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/adm-dashboard';
            this.router.navigate([returnUrl]);
            break;
          case ClientType.CUSTOMER:
            this.authService.ifLoggdIn(this.loggedUser);
            const returnUrl1 = this.route.snapshot.queryParams['returnUrl'] || '/home';
            this.router.navigate([returnUrl1]);
            break;
            
         
        }
      },err => {
        

      
        this.showToast('error', `${err.message}`,"Login");
       
        if( err.error.find( (x: string) => x.includes("I")  ))  {
          this.erorr.push("Please choose a type")
          alert( this.erorr)
          
        }else{
           this.loginError = 'Invalid email or password. Please try again.';
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



  



