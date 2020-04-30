import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as signalR from '@aspnet/signalr';
import { BehaviorSubject } from 'rxjs';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';

@Injectable({
    providedIn: 'root'
})
export class ClientService {
    // private host = environment.coreServicesURI;
    private connection: signalR.HubConnection;
    private connectionId: string;
    private characterId: string;
    public connected = false;
    public data: string[] = [];
    public $data: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(this.data);
    env = `${environment.coreServicesURI}`;
    constructor() {
        this.initHub();
    }

    private initHub() {
        this.updateWindow('', '<div>Connecting to ArchaicQuest, please wait.</div>');
        this.characterId = sessionStorage.getItem('characterId');
        this.connectToHub();

    }

    private connectToHub() {
		this.connection = new HubConnectionBuilder().withUrl("${env.coreHubsURI}").build();
        this.connection
            .start()
            .then(x => {
                this.connected = true;
                this.createEvents();
                this.connectionId = this.connection['connection'].connectionId;
                this.connection.send('welcome', this.connectionId);
                this.connection.send('AddCharacter', this.connectionId, this.characterId);
            })
            .catch(err => console.error(err.toString()));
    }

    private createEvents() {
        this.connection.on('SendMessage', (sender, message) => {
            console.log('send message', sender + ' ' + message);
            this.updateWindow(sender, message);

        });

        this.connection.on('SendAction', (sender, message) => {

            console.log('send action', sender + ' ' + message);
            this.updateWindow(sender, message);

        });
    }

    private eventChange() {
        this.$data.next(this.data);
    }


    public updateWindow(sender: string = '', message: string = '') {
        this.data.push(sender + ' ' + message);
        this.eventChange();
    }

    public sendToServer(message: string) {
        this.updateWindow('', `<p class="echo">${message}</p>`);
        this.connection.send('SendToServer', message, this.connectionId).catch(err => { });
    }

    public returnConnection() {
        return this.connection;
    }
}
