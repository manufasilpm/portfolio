import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  name = 'Manu PM';
  role = 'Java Full Stack Developer';
  experience = 4;
  email = 'manu@example.com';
  github = 'https://github.com/<your-username>';
  linkedin = 'https://linkedin.com/in/<your-username>';

  skills = [
    'Java 11+', 'Spring Boot', 'Microservices', 'REST APIs',
    'Angular', 'TypeScript', 'MySQL', 'MongoDB', 'Docker', 'Kubernetes'
  ];

  projects = [
    {
      name: 'E-Commerce Management System',
      desc: 'A full-stack application for managing products, sales, and users using Spring Boot & Angular.',
      tech: 'Spring Boot, Angular, MySQL, JWT, REST'
    },
    {
      name: 'Real-time Notification Service',
      desc: 'Implemented Kafka-based event notifications for product updates and order tracking.',
      tech: 'Spring Boot, Kafka, WebSocket, Redis'
    }
  ];
}
