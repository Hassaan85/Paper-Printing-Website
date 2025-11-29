import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @ViewChild('heroContent') heroContent!: ElementRef;

  mouseX = 0;
  mouseY = 0;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.mouseX = (e.clientX / window.innerWidth) - 0.5;
    this.mouseY = (e.clientY / window.innerHeight) - 0.5;
  }

  get parallaxStyle() {
    return {
      transform: `translate(${this.mouseX * 20}px, ${this.mouseY * 20}px)`
    };
  }

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
