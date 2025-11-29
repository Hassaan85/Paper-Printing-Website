import { Component, OnInit, OnDestroy } from '@angular/core';

interface Work {
  title: string;
  category: string;
  image: string; // Using placeholders or colors for now
}

@Component({
  selector: 'app-works-slider',
  templateUrl: './works-slider.component.html',
  styleUrls: ['./works-slider.component.scss']
})
export class WorksSliderComponent implements OnInit, OnDestroy {
  works: Work[] = [
    { title: 'Premium Brochure', category: 'Offset Printing', image: 'linear-gradient(45deg, #0a192f, #4a148c)' },
    { title: 'Luxury Business Cards', category: 'Digital Printing', image: 'linear-gradient(45deg, #004d40, #009688)' },
    { title: 'Product Packaging', category: 'Packaging', image: 'linear-gradient(45deg, #ffd700, #f7e7ce)' },
    { title: 'Corporate Folder', category: 'Stationery', image: 'linear-gradient(45deg, #0f52ba, #020c1b)' },
    { title: 'Event Invitation', category: 'Custom', image: 'linear-gradient(45deg, #4a148c, #ffd700)' }
  ];

  currentIndex = 0;
  intervalId: any;
  touchStartX = 0;
  touchEndX = 0;

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.intervalId = setInterval(() => {
      this.next();
    }, 4000);
  }

  stopAutoPlay() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.works.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.works.length) % this.works.length;
  }

  setIndex(index: number) {
    this.currentIndex = index;
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  onTouchStart(e: TouchEvent) {
    this.touchStartX = e.changedTouches[0].screenX;
    this.stopAutoPlay();
  }

  onTouchEnd(e: TouchEvent) {
    this.touchEndX = e.changedTouches[0].screenX;
    this.handleSwipe();
    this.startAutoPlay();
  }

  handleSwipe() {
    if (this.touchEndX < this.touchStartX - 50) {
      this.next();
    }
    if (this.touchEndX > this.touchStartX + 50) {
      this.prev();
    }
  }
}
