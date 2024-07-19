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
  imports: [CommonModule, FormsModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Input() cards: Card[] = [];
  newCardContent: string = "";

  addCard() {
    if (this.newCardContent){
      const newCard:Card = {id: this.cards.length, content: this.newCardContent}
      this.cards.push(newCard);
      this.newCardContent = "";
     }
  }

  deleteCard(index: number) {
    this.cards.splice(index, 1);
  }
}
