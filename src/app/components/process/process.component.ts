import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChildren('animItem') animItems!: QueryList<ElementRef>;

  images: string[] = [
    'assets/images/process/process-1.jpg',
    'assets/images/process/process-2.jpg',
    'assets/images/process/process-3.jpg',
    'assets/images/process/process-4.jpg',
    'assets/images/process/process-5.jpg',
    'assets/images/process/process-6.jpg',
    'assets/images/process/process-7.jpg',
    'assets/images/process/process-8.jpg',
    'assets/images/process/process-9.jpg',
    'assets/images/process/process-10.jpg',
    'assets/images/process/process-11.jpg',
    'assets/images/process/process-12.jpg',
    'assets/images/process/process-13.jpg',
    'assets/images/process/process-14.jpg',
    'assets/images/process/process-15.jpg',
    'assets/images/process/process-16.jpg',
    'assets/images/process/process-17.jpg',
    'assets/images/process/process-18.jpg',
    'assets/images/process/process-19.jpg',
    'assets/images/process/process-21.jpg'
  ];

  currentSlide = 0;
  private autoPlayInterval: any;

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    this.animItems.forEach(item => {
      observer.observe(item.nativeElement);
    });
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 3000); // Change slide every 3 seconds
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }
}
