import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  validateForm!: UntypedFormGroup;
  constructor(private fb: UntypedFormBuilder, private router: Router, private loginService : LoginService) {}

  submitForm(): void {
    this.loginService.login(this.validateForm.value).subscribe((res : any) =>{
      if(res){
        this.router.navigate(['/patients'])
        localStorage.setItem('user' ,JSON.stringify(res))
      }else{
        console.log("brug");

      }
    })
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }


  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  navigator() {
    this.router.navigate(['/register']);
  }
}
