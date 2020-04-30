import {
    Component,
    OnInit,
    ViewEncapsulation
} from "@angular/core";

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService, FacebookLoginProvider,GoogleLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    encapsulation: ViewEncapsulation.None,
    styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
    signinForm: FormGroup;
    user: SocialUser;
    loggedIn: boolean;  
    title = "WhoPK-Client";




    constructor(private fb: FormBuilder, private authService: AuthService) { } 

    ngOnInit() {
        this.signinForm = this.fb.group({
          email: ['', Validators.required],
          password: ['', Validators.required]
        });    this.authService.authState.subscribe((user) => {
          this.user = user;
          this.loggedIn = (user != null);
          console.log(this.user);
        });
      }  

      signInWithFB(): void {
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
      }
      signInWithGoogle(): void {
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
      }
      signOut(): void {
        this.authService.signOut();
      }

}
