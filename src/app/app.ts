import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from './components/navbar/navbar';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Friendslist } from './components/friendslist/friendslist';
import { Notifications } from './components/notifications/notifications';
import { Profile } from './components/profile/profile';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    Header,
    Footer,
    Friendslist,
    Notifications,
    Profile
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projetA');
}