import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { WindowComponent } from './client/window/window.component';
import { InputComponent } from './client/input/input.component';
import { AppService } from './app.service';
import { CreatePlayerComponent } from './player/create/create.component';
import { CreateService } from './player/create/create.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './welcome/welcome.component';
import { PlayerAppearanceComponent } from './player/create/Appearance/appearance.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateAccountComponent } from './player/account/account.component';
import { ToastrModule } from 'ngx-toastr';
import { ManageCharactersComponent } from './player/manage/manage.component';
import { ManageCharactersService } from './player/manage/manage.service';
import { HttpService } from './_shared/http.service';
import { Safe } from './_shared/pipes/safe';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ClientService } from './client/client.service';
import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';

// configuring providers
import { ApiModule, Configuration, ConfigurationParameters } from './_shared/API';
import { BASE_PATH } from './_shared/API';
import { environment } from '../environments/environment';

const config = new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider("793354439420-ibpjjgjttf4giisssng6saaj6qm5vjkn.apps.googleusercontent.com")
    },
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider('YOUR-APP-ID')
    }
  ]);

export function provideConfig() {
return config;
}

export function apiConfigFactory (): Configuration {
    const params: ConfigurationParameters = {
      // set configuration parameters here.
    }
    return new Configuration(params);
  }

@NgModule({
    declarations: [
        AppComponent,
        CreatePlayerComponent,
        WelcomeComponent,
        PlayerAppearanceComponent,
        CreateAccountComponent,
        ManageCharactersComponent,
    ],
    entryComponents: [
        CreateAccountComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        MatStepperModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatStepperModule,
        MatRadioModule,
        MatSliderModule,
        MatExpansionModule,
        MatOptionModule,
        MatSelectModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        ApiModule.forRoot(apiConfigFactory),
        ToastrModule.forRoot({
            positionClass: 'toast-bottom-center'
        }),
        BrowserAnimationsModule,
        ReactiveFormsModule,
        SocialLoginModule
    ],
    providers: [CreateService, ManageCharactersService, HttpService,
        { provide: BASE_PATH, useValue: environment.API_BASE_PATH },
        {
            provide: AuthServiceConfig,
            useFactory: provideConfig
          }],
    bootstrap: [AppComponent]
})
export class AppModule { }
