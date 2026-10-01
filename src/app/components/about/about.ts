import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readonly stats = [
    { value: '3+',  label: 'Years Coding'       },
    { value: '15+', label: 'Projects Completed'  },
    { value: '5',   label: 'Technologies Learned' },
    { value: '∞',   label: 'Curiosity'            },
  ];
}
