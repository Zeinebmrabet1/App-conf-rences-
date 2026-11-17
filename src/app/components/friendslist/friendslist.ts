import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friendslist',
  imports: [FormsModule],
  templateUrl: './friendslist.html',
  styleUrl: './friendslist.css',
})
export class Friendslist {
  friends = [
    { name: 'Ahmed', email: 'ahmed@example.com' },
    { name: 'Sami', email: 'sami@example.com' },
    { name: 'Fatma', email: 'fatma@example.com' },
  ];
}