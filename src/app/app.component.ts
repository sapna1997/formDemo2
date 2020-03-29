import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: string = "";
  onMouseMove(event: MouseEvent) {
    this.data = "abc";
  }

  public text: String = 'Welcome angular demo';
  public xb = true;




  mouseMove() {
    this.xb = false;

  }
}
