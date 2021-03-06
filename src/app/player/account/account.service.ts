import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/_shared/http.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

import { ApiModule, AccountService as AccountWebService } from '../../_shared/API';

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    env = `${environment.coreServicesURI}`;
    public signUpForm = this._formBuilder.group({
        username: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
        password: ['', [Validators.required, Validators.minLength(6)]],
    });

    public loginForm = this._formBuilder.group({
        email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
        password: ['', [Validators.required, Validators.minLength(6)]],
    });

    constructor(
        private _http: HttpService,
        private _formBuilder: FormBuilder,
        private _toast: ToastrService,
        private _router: Router,
        private _accountWebService : AccountWebService
    ) { }

    toggleSignUpButton(button: any) {
        button.disabled = !button.disabled;
    }


    signUp(data, button) {
        this._accountWebService.accountPost(data).subscribe(
            response => {
                this._toast.success("Success!");

                /*
                   TODO:
                   Hash username instead and save that in the DB on login.
                   Return hash to frontend, hash is valid for the session.
                   Invalidate hash after x time, using hash is far safer.
                   In the mean time don't smite me :D
                */
                sessionStorage.setItem('id', response);

                this._router.navigate(['/account/create-character']);
            },
            err => {
                this._toast.error(err.error);
                this.toggleSignUpButton(button);
            }
        );
    }

    login(data, button) {
        return this._accountWebService.accountLogin(data)
        .subscribe(
            response => {
                console.log(response);
                this._toast.success("Login Success!");

                /*
                   TODO:
                   Hash username instead and save that in the DB on login.
                   Return hash to frontend, hash is valid for the session.
                   Invalidate hash after x time, using hash is far safer.
                   In the mean time don't smite me :D
                */
                sessionStorage.setItem('id', response);

                this._router.navigate(['/account/manage-characters']);
            },
            err => {
                this._toast.error(err.error);
                this.toggleSignUpButton(button);
            }
        );
  
    }


}
