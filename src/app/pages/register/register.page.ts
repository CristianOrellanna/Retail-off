import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {

  email: string = ""
  password: string = ""

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  register(e:Event){
    this.authService.register(this.email, this.password)
    .then((res:any) =>{
      console.log(res)
      this.router.navigate(['/map'])
    })
    .catch((err:any) =>{
      alert('error al agregar nuevo usuario: ' + err)
    })
  }
}
