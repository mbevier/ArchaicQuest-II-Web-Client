import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { ClientService } from './client.service';
import { HostListener } from '@angular/core';

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.scss']
})
export class ClientComponent implements AfterViewChecked {

    @HostListener('window:keyup', ['$event'])
    keyEvent(event: KeyboardEvent) {
      console.log(event);
      //TODO:  Move mapping to a preferences map
      switch (event.which)
      {
          case 101:
                {
                    this.clientService.sendToServer("Look");
                    break;
                }
          case 104:
                {
                    this.clientService.sendToServer("North");
                    break;
                }
          case 98:
                {
                    this.clientService.sendToServer("South");
                    break;
                }
          case 102:
                {
                    this.clientService.sendToServer("East");
                    break;
                }
          case 100:
                {
                    this.clientService.sendToServer("West");
                    break;
                }
          case 105:
                {
                    this.clientService.sendToServer("Up");
                    break;
                }
          case 99:
                {
                    this.clientService.sendToServer("Down");
                    break;
                }
          case 107:
                {
                    this.clientService.sendToServer("Scan All");
                    break;
                } 
          case 96:
                {
                    this.clientService.sendToServer("Where");
                    break;
                }          
      }
    }

    container: HTMLElement;
    values = '';
    constructor(private clientService: ClientService) { }

    ngAfterViewChecked () {
        this.container = document.getElementById("js-client-window");           
        this.container.scrollTop = this.container.scrollHeight;     
      }
}
