import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  styles: [`
  :host ::ng-deep button {
      margin-right: .25em;
  }
`],
  providers: [ConfirmationService, MessageService]
})
export class LoginComponent implements OnInit {
  public user:string=''
  public pass:string=''
  public displayMaximizable: boolean=false;
  constructor(private authService: AuthService, 
              private router: Router, 
              private messageService: MessageService) { }

  ngOnInit(): void {
  }


  login(){

    if(this.user=='' || this.pass==''){
      const titulo = 'Usuario o contraseña no pueden estar vacios'
      this.Fallido(titulo)
    }else{
      this.displayMaximizable = true;
      const user = { user: this.user, pass: this.pass };

      
  
      this.authService.login(user).subscribe(res => {
<<<<<<< HEAD
        if(res.ok==true){
=======
>>>>>>> 4337b0b46a5eaf3ec772c29aa164987608e3c8a7
          localStorage.setItem('token', res.token);
          localStorage.setItem('role', res.mensaje[0].Role);
          this.authService.setToken(res.token);
          this.displayMaximizable = false;
           this.router.navigate(['/inicio']);
        }else{
          this.Fallido('Usuario no encontrado')
        }
      
        

       
       
  
  
      }, (err: any) => {
        this.displayMaximizable = false;
        this.user = '';
        this.pass = '';
      });
      
    }

  }


  Fallido(titulo: any) {

    this.messageService.add({ severity: 'error', summary: 'Error', detail: titulo });
  }



  showMaximizableDialog() {

}
}
