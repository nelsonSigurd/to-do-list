import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Card {
  id: number;
  content: string;
}

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, FormsModule, DragDropModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Input() cards: Card[] = [];
  newCardContent: string = "";
  addingCard: boolean = false;

  addCard() {
    if (this.newCardContent){
      const newCard:Card = {id: this.cards.length, content: this.newCardContent}
      this.cards.push(newCard);
      this.newCardContent = "";
      this.addingCard = false;
     }
  }

  deleteCard(index: number) {
    this.cards.splice(index, 1);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.cards, event.previousIndex, event.currentIndex);
  }
}
