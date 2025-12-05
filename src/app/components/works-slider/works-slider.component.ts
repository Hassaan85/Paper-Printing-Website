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
    //   { title: '', category: '', image: 'linear-gradient(45deg, #0a192f, #4a148c)' },
    { title: '', category: '', image: 'url(assets/images/product-packaging-02.png)' },
    { title: '', category: '', image: 'url(assets/images/product-packaging.png)' },
    { title: '', category: '', image: 'url(assets/images/corporate-folder.png)' },
    { title: '', category: '', image: 'url(assets/images/image-3.png)' },
    { title: '', category: '', image: 'url(assets/images/image-4.png)' },
    { title: '', category: '', image: 'url(assets/images/image-5.png)' },
    { title: '', category: '', image: 'url(assets/images/image-6.png)' },
    { title: '', category: '', image: 'url(assets/images/image-7.png)' },
 //   { title: '', category: '', image: 'url(assets/images/image-8.png)' },
    { title: '', category: '', image: 'url(assets/images/image-9.png)' },
    { title: '', category: '', image: 'url(assets/images/image-10.png)' },
    { title: '', category: '', image: 'url(assets/images/image-11.png)' },
    { title: '', category: '', image: 'url(assets/images/image-12.png)' },
    { title: '', category: '', image: 'url(assets/images/image-13.png)' },
    { title: '', category: '', image: 'url(assets/images/image-14.png)' },
    { title: '', category: '', image: 'url(assets/images/image-15.png)' },
    { title: '', category: '', image: 'url(assets/images/image-16.png)' },
    { title: '', category: '', image: 'url(assets/images/image-17.png)' },
    //   { title: '', category: '', image: 'url(assets/images/paper.png)' }
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
