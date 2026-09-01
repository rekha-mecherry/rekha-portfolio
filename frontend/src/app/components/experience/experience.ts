import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class ExperienceComponent {

  highlights = [
    {
      icon: '🏆',
      title: 'Project Excellence Award',
      detail: 'Awarded by Infosys for the implementation of a humanoid voice system — a cutting-edge Conversational AI solution for a major US telecom client.'
    },
    {
      icon: '🛡️',
      title: 'Azure IoT Platform Security',
      detail: 'Secured the Azure cloud platform for an IoT product; received formal appreciation from leadership for outstanding contributions to the account.'
    },
    {
      icon: '⭐',
      title: 'Star of the Month & Team of the Quarter',
      detail: 'Recognised multiple times with Star of the Month and Team of the Quarter awards for exceptional individual and team performance.'
    },
    {
      icon: '🚀',
      title: '6-Year Offshore Product Leadership',
      detail: 'Successfully led offshore product development for Health & Benefit LOB projects over 6 years, earning accolades from senior onshore leaders.'
    }
  ];

  timeline = [
    { company: 'Wells Fargo', location: 'Bangalore', role: 'Senior Systems Architect', period: 'Nov 2022 – Present', current: true },
    { company: 'Infosys', location: 'Trivandrum', role: 'Senior Technology Architect', period: 'Sep 2019 – Nov 2022', current: false },
    { company: 'Finastra', location: 'Trivandrum', role: 'Expert Software Architect', period: 'Jan 2017 – Aug 2019', current: false },
    { company: 'Mercer India Pvt. Ltd.', location: 'Gurgaon', role: 'Project Manager [Tech.]', period: 'Aug 2008 – Dec 2016', current: false },
    { company: 'Adasoft India Pvt. Ltd.', location: 'Gurgaon', role: 'Systems Engineer', period: 'Apr 2007 – Aug 2008', current: false },
    { company: 'KG Information Systems (P) Limited', location: 'Coimbatore', role: 'Software Engineer', period: 'Oct 2000 – Oct 2003', current: false }
  ];

  workExperience = [
    {
      title: 'Compute & Middleware Engineer',
      subtitle: 'Lead Software Engineer',
      period: 'Aug 2024 – Present',
      domain: 'GCP Platform Engineering',
      tools: ['Terraform', 'VSCode', 'GitHub Copilot', 'GKE', 'Terraform Test Framework'],
      color: 'from-blue-500 to-cyan-500',
      colorBorder: 'border-blue-500/30',
      colorBadge: 'bg-blue-500/10 text-blue-300',
      points: [
        'Developed native GCP services and middleware modules with embedded centralised logging, monitoring, and enterprise policies aligned to Cloud Control Framework and industry security benchmarks.',
        'Validated and designed IAM access permissions for Google Kubernetes Engine (GKE) modules, enforcing standardised access controls and governance for secure automation.',
        'Extended platform modules using the Terraform test framework, implementing unit and integration testing to improve reliability and compliance.',
        'Leading the enablement of self-service provisioning for cloud-native services through an Internal Developer Portal (IDP), driving secure, consistent, and scalable platform adoption.',
        'Leveraged GitHub Copilot for coding, testing, and documentation; actively involved in cloud service activation processes aligned to enterprise procedures.'
      ]
    },
    {
      title: 'Enterprise / Domain Architect',
      subtitle: 'Enterprise Architecture',
      period: 'Nov 2022 – Aug 2024',
      domain: 'Enterprise Architecture & Governance',
      tools: ['Open Group ArchiMate', 'BizzDesign Enterprise Studio', 'TOGAF', 'BIAN/BPPA'],
      color: 'from-purple-500 to-violet-500',
      colorBorder: 'border-purple-500/30',
      colorBadge: 'bg-purple-500/10 text-purple-300',
      points: [
        'Designed and delivered Business, Application, and Technology architectures using ArchiMate and BizzDesign Enterprise Studio.',
        'Contributed to application portfolio rationalisation, cloud migration assessments, and definition of target-state architectures to support enterprise modernisation initiatives.',
        'Ensured alignment of business capabilities with technology roadmaps; participated in vendor architecture reviews and security assessments to maintain compliance with enterprise standards.'
      ]
    },
    {
      title: 'PaaS/IaaS & DevOps Architect / Consultant',
      subtitle: 'IoT Platform & Innovation Projects',
      period: 'Sep 2019 – Oct 2022',
      domain: 'Azure Cloud | Conversational AI | Biometrics',
      tools: ['Azure Functions', 'APIM', 'Event Hub', 'Azure DevOps', 'Bicep', 'ARM', 'Terraform', 'PowerShell', 'Dialogflow', 'Android', 'CoreML', 'Google ML Kit', 'TensorFlow Lite'],
      color: 'from-orange-500 to-rose-500',
      colorBorder: 'border-orange-500/30',
      colorBadge: 'bg-orange-500/10 text-orange-300',
      points: [
        'Designed and delivered Azure Serverless Architecture for an enterprise IoT platform — Azure Functions, APIM Gateway, Event Hub, Azure Storage, and VNet-secured APIM policies.',
        'Implemented Traffic Manager, Azure Front Door, and Application Gateway for global load balancing and high availability.',
        'Designed DR and BCP for serverless workloads with multi-region failover, custom APIM policies, and cross-region replication for Azure PostgreSQL supporting analytics and disaster recovery.',
        'Built a Blue-Green deployment CI/CD pipeline for Azure Functions using GitHub Actions, Bicep, and ARM templates, ensuring zero-downtime releases.',
        'Architected a humanoid mobile application with a custom speech engine using Google Dialogflow, Android, and NLP for a major US telecom client — enhancing retail customer engagement.',
        'Built retail experiences using Amazon Alexa, designing an In-Store Assistant for Amazon Echo Show.',
        'Contributed to a telecom pilot implementing Face Biometrics Authentication on edge devices using CoreML, Google ML Kit, and TensorFlow Lite for real-time identity verification in low-latency environments.'
      ]
    },
    {
      title: 'Product Architect & API Gateway Administrator',
      subtitle: 'Web Application Product',
      period: 'Apr 2017 – Aug 2019',
      domain: 'FinTech | API Management | Web Modernisation',
      tools: ['ASP.NET MVC', 'C#', 'Angular 4', 'NGRX', 'WebAPI', 'Dapper', 'TDD', 'VSTS', 'GIT', 'OAuth2', 'Identity Server', 'IBM API Connect'],
      color: 'from-green-500 to-teal-500',
      colorBorder: 'border-green-500/30',
      colorBadge: 'bg-green-500/10 text-green-300',
      points: [
        'Managed IBM API Gateway (API Connect) for a suite of identity & credit protection products used across Canadian financial institutions, ensuring secure access and compliance.',
        'Led modernisation initiatives converting legacy web services into microservices, supporting cloud migration to scalable, cloud-native architectures.',
        'Delivered OpenAPI-driven architectures standardising API governance, documentation, versioning, and developer onboarding.'
      ]
    }
  ];
}
