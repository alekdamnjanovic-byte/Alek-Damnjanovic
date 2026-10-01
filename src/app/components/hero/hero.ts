import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit, OnDestroy {
  displayText = signal('');

  private readonly roles = [
    'Software Engineer',
    'Full-Stack Developer',
    'Problem Solver',
    'CS Student',
  ];
  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timer: ReturnType<typeof setTimeout> | null = null;

  ngOnInit() {
    this.type();
  }

  ngOnDestroy() {
    if (this.timer) clearTimeout(this.timer);
  }

  private type() {
    const currentRole = this.roles[this.roleIndex];
    if (!this.isDeleting) {
      this.displayText.set(currentRole.slice(0, ++this.charIndex));
      if (this.charIndex === currentRole.length) {
        this.isDeleting = true;
        this.timer = setTimeout(() => this.type(), 1800);
        return;
      }
    } else {
      this.displayText.set(currentRole.slice(0, --this.charIndex));
      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      }
    }
    this.timer = setTimeout(() => this.type(), this.isDeleting ? 60 : 100);
  }
}
