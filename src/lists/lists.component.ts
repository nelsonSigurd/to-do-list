import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardsComponent } from '../cards/cards.component';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';

interface list {
  id: number;
  title: string;
  cards: any[];
}

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [CommonModule, FormsModule, CardsComponent, DragDropModule],
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

  deleteList(index:number) {
    this.lists.splice(index, 1);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.lists, event.previousIndex, event.currentIndex);
  }
}
