import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio-card',
  templateUrl: './inicio-card.component.html',
  styleUrls: ['./inicio-card.component.css'],
})
export class InicioCardComponent {
  showImage = false;

  public onShowBalance= ()=>{
    this.showImage = !this.showImage;
  }
}
