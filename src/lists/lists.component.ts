import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface list {
  id: number;
  title: string;
  cards: any[];
}

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.css'
})
export class ListsComponent {
  lists: list[] = []; 
  title: string = "";

  addList(title:string) {
    const newList:list = {id:this.lists.length, title, cards:[]}
    this.lists.push(newList);
    this.title="";
  }
}
