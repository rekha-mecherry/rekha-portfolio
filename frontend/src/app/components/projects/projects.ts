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
      title: "Self-Service Infrastructure Provisioning Engine (IDP)",
      description: "Architecting and leading an automated self-service infrastructure provisioning engine within an Internal Developer Portal (IDP), leveraging Python + FastAPI to orchestrate and execute cloud service provisioning. Enables business teams with secure self-service, driving 65% time savings and accelerating cloud adoption.",
      tags: ["Python", "FastAPI", "Kafka", "OpenShift", "Harness", "Terraform", "Vault", "IDP"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Agentic AI Multi-Agent Orchestrator — Cloud Provisioning",
      description: "Prototyping an Agentic AI multi-agent orchestrator leveraging Azure AI Foundry to automate dynamic provisioning of cloud services. Focuses on intelligent orchestration and adaptive workflows using Agentic AI to boost automation efficiency and enterprise scalability.",
      tags: ["Agentic AI", "Azure AI Foundry", "Multi-Agent Systems", "LLMs", "Copilot", "Python"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "GCP Platform Engineering — GKE & Middleware",
      description: "Engineered and provisioned secure core cloud-native services using Terraform, Sentinel, and Vault modules. Established fine-grained IAM permissions and Archetype configurations for automated, secure Google Kubernetes Engine (GKE) deployments.",
      tags: ["GCP", "Terraform", "GKE", "Vault", "Sentinel", "IAM", "GitHub Copilot"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Enterprise Architecture Modeling & Rationalization",
      description: "Defined, designed, and modeled current and future-state technology roadmaps using OpenGroup ArchiMate and BizzDesign Enterprise Studio. Guided business teams on application rationalization, cloud migrations, and third-party vendor security reviews.",
      tags: ["ArchiMate 3.1", "BizzDesign", "TOGAF", "BIAN", "BPPA", "Security Assessments"],
      color: "from-violet-500 to-purple-500"
    },
    {
      title: "Azure IoT Platform — Serverless PaaS & High Resilience",
      description: "Designed Azure Serverless Architecture for an enterprise IoT platform — APIM Gateway with dedicated VNets, Event Hub, Front Door, and zero-downtime Blue-Green CI/CD pipelines. Implemented multi-region disaster recovery and cross-region PostgreSQL replication.",
      tags: ["Azure Functions", "APIM", "Event Hub", "Bicep", "ARM", "GitHub Actions", "PostgreSQL"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Humanoid Temi Robot Conversational Retail Assistant",
      description: "Architected an autonomous humanoid Temi Robot retail application with a custom speech engine using Google Dialogflow, Android via Temi SDK, and NLP for a major US telecom client. Winner of the prestigious Infosys Project Excellence Award.",
      tags: ["Android", "Temi SDK", "Dialogflow", "NLP", "Google ML Kit", "Python"],
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Amazon Echo Show In-Store Voice Assistant",
      description: "Built immersive multimodal retail customer experiences using Amazon Alexa Skills Kit and Alexa Presentation Framework (APL), designing an AI-powered In-Store Assistant deployed across Amazon Echo Show devices.",
      tags: ["Amazon Alexa", "Alexa SDK", "APL", "AWS Lambda", "DynamoDB"],
      color: "from-orange-500 to-yellow-500"
    },
    {
      title: "IBM API Connect — Canadian FinTech Modernization",
      description: "Governed IBM API Connect gateway administration for a suite of identity & credit protection products across Canadian financial institutions. Led the modernisation of legacy monolithic web services into secure, OpenAPI-compliant .NET microservices with OAuth2 and Identity Server.",
      tags: ["IBM API Connect", "ASP.NET Core", "Microservices", "OAuth2", "Identity Server", "Angular 4"],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Global Benefit Suite Portal & Healthcare LOB Platform",
      description: "Supervised offshore product development for critical healthcare and employee benefits systems over 6 years. Architected and deployed the Global Benefit Suite Portal across 3 continents, high-throughput distributed WCF services, and MS BI analytical dashboards.",
      tags: ["ASP.NET MVC", "C#", "WCF", "SQL Server", "SSIS/SSRS", "Agile Scrum"],
      color: "from-cyan-500 to-emerald-500"
    }
  ];
}
