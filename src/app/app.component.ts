import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListsComponent } from '../lists/lists.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'to-do-list';
}
