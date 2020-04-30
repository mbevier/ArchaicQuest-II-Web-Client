import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { AccountService } from './api/account.service';
import { AlignmentService } from './api/alignment.service';
import { AreaService } from './api/area.service';
import { AttackTypesService } from './api/attackTypes.service';
import { ClassService } from './api/class.service';
import { DashboardService } from './api/dashboard.service';
import { ItemService } from './api/item.service';
import { MobService } from './api/mob.service';
import { PlayerService } from './api/player.service';
import { RaceService } from './api/race.service';
import { RoomService } from './api/room.service';
import { StatusService } from './api/status.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    AccountService,
    AlignmentService,
    AreaService,
    AttackTypesService,
    ClassService,
    DashboardService,
    ItemService,
    MobService,
    PlayerService,
    RaceService,
    RoomService,
    StatusService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
