import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: "Platform Engineering & Automations — Cloud Native Services",
      description: "Leading a platform engineering initiative to build the foundation layer for cloud native service enablement, onboarding Microsoft Fabric SaaS via an Internal Developer Platform (IDP) with self-service automation. Designed and implemented an extendable foundation architecture ",
      tags: ["Python", "FastAPI", "Kafka", "MS Fabric", "OpenShift", "Harness", "Terraform", "Vault"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "GCP Platform Engineering — GKE & Middleware",
      description: "Designed secure, reusable Terraform modules for GKE clusters with embedded logging, monitoring, and enterprise policies aligned to Cloud Control Framework. Led IDP enablement for self-service cloud-native provisioning.",
      tags: ["GCP", "Terraform", "GKE", "IAM", "GitHub Copilot"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Azure IoT Platform — Serverless PaaS",
      description: "Designed Azure Serverless Architecture for an enterprise IoT platform — APIM, Event Hub, Traffic Manager, Front Door, and Blue-Green CI/CD pipeline with zero-downtime deployments.",
      tags: ["Azure Functions", "APIM", "Event Hub", "Bicep", "GitHub Actions"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Humanoid Voice System — Telecom Retail AI",
      description: "Architected a humanoid mobile application with a custom speech engine using Google Dialogflow, Android, and NLP for a major US telecom client. Winner of Infosys Project Excellence Award.",
      tags: ["Android", "Dialogflow", "NLP", "Google ML Kit"],
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Amazon Echo Show In-Store Assistant",
      description: "Built immersive retail customer experiences using Amazon Alexa Skills Kit, designing an AI-powered In-Store Assistant for Amazon Echo Show deployments.",
      tags: ["Amazon Alexa", "Alexa Skills Kit", "AWS Lambda"],
      color: "from-orange-500 to-yellow-500"
    },
    {
      title: "IBM API Connect — Canadian FinTech Platform",
      description: "Managed IBM API Gateway for a suite of identity & credit protection products across Canadian financial institutions. Led modernisation from legacy web services to cloud-native microservices.",
      tags: ["IBM API Connect", "ASP.NET MVC", "Angular 4", "OAuth2", "Identity Server"],
      color: "from-green-500 to-teal-500"
    }
  ];
}
