import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Race } from '../Interface/race.interface';
import { Data } from 'src/app/_shared/interface/data.interface';
import { HttpService } from 'src/app/_shared/http.service';
import { Player } from '../Interface/player.interface';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

import { ApiModule, AccountService as AccountWebService, AccountViewModel } from '../../_shared/API';

@Injectable({
    providedIn: 'root'
})
export class ManageCharactersService {

    public createPlayerForm = this._formBuilder.group({
        id: [''],
        name: ['', Validators.required],
    });

    env = `${environment.coreServicesURI}`;
    constructor(private _http: HttpService, private _formBuilder: FormBuilder, 
        private _router: Router, private _accountService : AccountWebService) { }

    GetCharacters(id: string): Observable<AccountViewModel> {
        return this._accountService.accountGetProfile(id);
        console.log('Getting characters for ' + id);
        var characters;
        this._accountService.accountGetProfile(id).subscribe(
            response => {
                console.log(response);
                characters = JSON.stringify(response);
            },
            err => {
                console.log(err);
            }
        );

        console.log('return');
        console.log(characters);
        return of(characters);
    }

    PlayCharacter(id: string) {
        this._router.navigate(['/play']);
        sessionStorage.setItem('characterId', id);
    }


}
