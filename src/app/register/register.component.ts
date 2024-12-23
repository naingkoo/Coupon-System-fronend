import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';
import { ClientType } from '../models/ClientType';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  isLoading = false;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private toast: ToastrService,
  ) {
    this.registerForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.minLength(3)]],
        phone: ['', [Validators.required]], // Assuming 10-digit phone numbers
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  ngOnInit(): void {
    console.log('RegisterComponent initialized');
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      return { passwordMismatch: true };
    }
    return null;
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.isLoading = true;
      const user = {
        name: this.registerForm.value.username,
        phone: this.registerForm.value.phone,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        role: ClientType.CUSTOMER, // Assuming a default role
      };
      console.log(user);
      this.userService.registerUser(user).subscribe({
        next: (response: any) => {
          // Specify 'any' explicitly if response type isn't defined yet
          this.successMessage = 'Registration successful!';
          this.errorMessage = null;
          this.registerForm.reset();
          this.toast.success('User registered successfully, please login', "Sign Up");
          this.router.navigate(["login"])
        },
        error: (error: any) => {
          // Specify 'any' explicitly for error as well
          this.toast.success(`${error.message}`, "Sign Up");
          this.successMessage = null;
          this.errorMessage = 'Failed to register user. Please try again.';
          console.error('Error during registration:', error);
        },
        complete: () => {
          this.isLoading = false;
        },
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
