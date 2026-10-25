import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {
  bio = [
    "Accomplished Technical Leader and Enterprise & Cloud Solutions Architect with 20+ years of experience across Financial, Telecom, and Insurance domains. Proven expertise in platform engineering, enterprise architecture, web & microservices architecture and enterprise integration, designing and delivering cloud native solutions, IaC & DevOps, API Management, event driven messaging & streaming platforms and Conversational AI solutions.",
    "Currently leading platform engineering and AI automation initiatives for highly regulated environment, combining hands on technical leadership with strategic vision to deliver compliant, enterprise solutions, while improving developer experience and cloud adoption."
  ];

  highlights = [
    { icon: '☁️', title: 'GCP Platform Engineering', detail: 'Secure Terraform modules, GKE onboarding, Cloud Control Framework compliance, Sentinel & Prisma policies' },
    { icon: '🔷', title: 'Azure Cloud Architecture', detail: 'Serverless PaaS IoT platform, Event Hub, Service Bus, APIM, Traffic Manager, Blue-Green CI/CD' },
    { icon: '🔗', title: 'Enterprise Integration', detail: 'Azure APIM, IBM API Connect, Pub/Sub, Event Hub, Service Bus — geo-redundant API platforms' },
    { icon: '🏛️', title: 'Enterprise Architecture', detail: 'TOGAF, BIAN/BPPA, ArchiMate, BizzDesign — driving cloud migration & business rationalisation' },
    { icon: '🤖', title: 'Conversational & Agentic AI', detail: 'Dialogflow, Alexa Skills, Microsoft Cognitive Services, GenAI & Agentic AI architectures' },
    { icon: '🛡️', title: 'DevSecOps & IaC', detail: 'Terraform, Bicep, ARM, Azure DevOps, GitHub Actions, GitOps — multi-region cloud architectures' }
  ];

  experience = [
    { role: "Lead Platform Engineer [Public Cloud]", company: "Wells Fargo", duration: "Current" },
    { role: "Cloud Architect / Systems Architect", company: "Previous Roles", duration: "20+ Years" }
  ];
}
