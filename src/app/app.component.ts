import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title = 'drawer-expansions';

  newState = 'close';

  openDrawer(): void {

    if (this.newState === 'close') {
      this.newState = 'open';
    } else {
      this.newState = 'close';
    }
  }
}
