import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = "";
  password: string = "";

  constructor(
    public afAuth: AngularFireAuth,
     public route: Router,
      public alert: AlertController) { }

  ngOnInit() {
  }

  async login(){
    const{email,password} = this
    try{
      const res = await this.afAuth.signInWithEmailAndPassword(email,password)
      this.route.navigate(['/map'])
    }catch(err:any){
      console.dir(err);
      if(err.code === "auth/invalid-email"){
        alert("Error!, el nombre de usuario o contraseña es incorrecto");
      }
      if(err.code === "auth/user-not-found"){
        alert("Error!, no se encuentra usuario");
      }
    }
  }
}
