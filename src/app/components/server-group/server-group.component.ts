import { Component } from '@angular/core';

@Component({
  selector: 'app-server-group',
  templateUrl: './server-group.component.html',
  styleUrls: ['./server-group.component.css'],
})
export class ServerGroupComponent {
  addServerFormVisible: boolean = false;
  newServerName: string = '';

  onAddServer() {
    this.addServerFormVisible = !this.addServerFormVisible;
  }

  onSubmitNewServer(event: any) {
    event.preventDefault();
    this.newServerName = (<HTMLInputElement>event.target).value;
    console.log(this.newServerName);
  }
}
