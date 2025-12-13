import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements AfterViewInit {
  @ViewChildren('animItem') animItems!: QueryList<ElementRef>;

  services = [
    {
      title: 'SERVICES_PAGE.ITEMS.SERVICE_1.TITLE',
      description: 'SERVICES_PAGE.ITEMS.SERVICE_1.DESC',
      icon: 'fas fa-layer-group'
    },
    {
      title: 'SERVICES_PAGE.ITEMS.SERVICE_2.TITLE',
      description: 'SERVICES_PAGE.ITEMS.SERVICE_2.DESC',
      icon: 'fas fa-shopping-bag'
    },
    {
      title: 'SERVICES_PAGE.ITEMS.SERVICE_3.TITLE',
      description: 'SERVICES_PAGE.ITEMS.SERVICE_3.DESC',
      icon: 'fas fa-copy'
    },
    {
      title: 'SERVICES_PAGE.ITEMS.SERVICE_4.TITLE',
      description: 'SERVICES_PAGE.ITEMS.SERVICE_4.DESC',
      icon: 'fas fa-box-open'
    },
    {
      title: 'SERVICES_PAGE.ITEMS.SERVICE_5.TITLE',
      description: 'SERVICES_PAGE.ITEMS.SERVICE_5.DESC',
      icon: 'fas fa-cut'
    },
    {
      title: 'SERVICES_PAGE.ITEMS.SERVICE_6.TITLE',
      description: 'SERVICES_PAGE.ITEMS.SERVICE_6.DESC',
      icon: 'fas fa-truck-loading'
    }
  ];

  whyChooseUs = [
    {
      title: 'SERVICES_PAGE.WHY_CHOOSE_US.REASONS.REASON_1.TITLE',
      description: 'SERVICES_PAGE.WHY_CHOOSE_US.REASONS.REASON_1.DESC',
      icon: 'fas fa-check-circle'
    },
    {
      title: 'SERVICES_PAGE.WHY_CHOOSE_US.REASONS.REASON_2.TITLE',
      description: 'SERVICES_PAGE.WHY_CHOOSE_US.REASONS.REASON_2.DESC',
      icon: 'fas fa-users'
    }
  ];

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
}
