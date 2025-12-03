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
      title: 'Advanced Paper Pasting Techniques',
      description: 'We utilize various expert pasting methods to achieve outstanding strength, precision, and durability, suitable for packaging, crafts, and commercial manufacturing. Our team uses high-quality adhesives and machinery to ensure seamless, bubble-free, and long-lasting results.',
      icon: 'fas fa-layer-group'
    },
    {
      title: 'Custom Paper Bag Manufacturing',
      description: 'We paste premium paper bags in different sizes, thicknesses, and designs for retail shops, events, restaurants, gifting, and product packaging. Options include laminated, kraft, rope-handle, flat-handle, tags and customized printed bags.',
      icon: 'fas fa-shopping-bag'
    },
    {
      title: 'Multi-Layer Paper Sheet Pasting',
      description: 'Ideal for strengthening materials for box making, packaging, and reinforcement purposes. We provide single-layer to multi-layer pasting depending on the strength and thickness required.',
      icon: 'fas fa-copy'
    },
    {
      title: 'Specialized Packaging Solutions',
      description: 'We offer tailor-made paper-based packaging options designed to support branding, product protection, sustainability goals, and commercial presentation.',
      icon: 'fas fa-box-open'
    },
    {
      title: 'Custom Cutting & Finishing',
      description: 'Precise trimming, folding, and finishing services ensure professional-grade results for all types of paper products, enhancing both quality and presentation.',
      icon: 'fas fa-cut'
    },
    {
      title: 'Bulk & Commercial Orders',
      description: 'We handle high-volume production for businesses while maintaining efficiency, quality, and timely delivery.',
      icon: 'fas fa-truck-loading'
    }
  ];

  whyChooseUs = [
    {
      title: 'Quality Assurance',
      description: 'Committed to excellence, we guarantee high-quality products that meet international standards.',
      icon: 'fas fa-check-circle'
    },
    {
      title: 'Customer Focus',
      description: 'Our client-centric approach ensures personalized service and timely delivery.',
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
