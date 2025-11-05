import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  name = 'Manu  Fasil P M';
  role = 'Java Full Stack Developer';
  experience = 4;
  email = 'manufasilpm@gmail.com';
  github = 'https://github.com/manufasilpm';
  linkedin = 'https://linkedin.com/in/manufasil';
  resumeUrl = 'assets/Manu_PM_Resume.pdf';  // <-- Place your resume here
  isDarkMode = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }

  skills = [
    'Java 11+', 'Spring Boot', 'Microservices', 'REST APIs',
    'Angular', 'TypeScript', 'MySQL', 'MongoDB', 'Docker', 'Kubernetes'
  ];

  projects = [
    {
      name: 'E-Commerce Management System',
      desc: 'A full-stack application using Spring Boot and Angular with JWT authentication.',
      tech: 'Spring Boot, Angular, MySQL'
    },
    {
      name: 'Real-time Notification Service',
      desc: 'Implemented Kafka-based event-driven system for real-time updates.',
      tech: 'Spring Boot, Kafka, WebSocket, Redis'
    }
  ];
}
