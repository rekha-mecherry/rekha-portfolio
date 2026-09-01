import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class EducationComponent {
  education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Bharathiyar University',
      location: 'Tamil Nadu, India',
      icon: '🎓',
      highlight: true
    }
  ];

  certifications = [
    { name: 'Google Cloud Certified — Cloud Digital Leader', icon: '☁️', color: 'text-blue-400' },
    { name: 'Designing Microsoft Azure Infrastructure Solutions (AZ-305)', icon: '🔷', color: 'text-blue-300' },
    { name: 'Microsoft Certified: Azure Fundamentals (AZ-900)', icon: '🔷', color: 'text-blue-300' },
    { name: 'ArchiMate® Certification Program', icon: '🏛️', color: 'text-purple-400' },
    { name: 'Infosys Global Agile Certification', icon: '⚡', color: 'text-yellow-400' },
    { name: 'Microsoft Certified Professional — ASP.NET MVC', icon: '💻', color: 'text-green-400' }
  ];
}
