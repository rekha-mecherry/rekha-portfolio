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
    "Systems Architect & Cloud Platform Lead with 20+ years of experience designing distributed systems and cloud solutions across web, microservices, BI, and Conversational AI domains.",
    "Currently working as Lead Platform Engineer [Public Cloud], leading the design, provisioning, and security hardening of GCP platforms using enterprise-grade Terraform IaC automation. Strong focus on security, compliance, and delivering standardised platform archetypes across Azure and GCP.",
    "Proven expertise in platform engineering, middleware, and enterprise integration — building reusable cloud-native services, API ecosystems, and event-driven messaging/streaming platforms.",
    "Strong knowledge of cloud security principles including Defence-in-Depth, Principle of Least Privilege, and DevSecOps practices. Hands-on experience with AAD/EntraID, RBAC, IAM, OAuth 2.0 and OpenID Connect.",
    "Currently upskilling in GenAI and Agentic AI, focusing on autonomous agent design, orchestrators, tool-use patterns, and domain-specific AI use cases."
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
