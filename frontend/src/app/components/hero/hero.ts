import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent {
  title = 'Rekha Mecherry';
  tagline = 'Systems Architect & Lead Platform Engineer';
  architectTypes = ['Enterprise', 'Cloud', 'Solution', 'Platform', 'Application', 'Integration'];
  industries = 'Financial · Telecom · Insurance';
  description = '20+ years designing distributed cloud systems across Azure & GCP — specialising in Platform Engineering, IaC Automation, Enterprise API Ecosystems, DevSecOps, and Conversational AI.';
}
