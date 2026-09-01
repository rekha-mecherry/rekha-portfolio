import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class SkillsComponent {
  categories = [
    {
      name: 'Google Cloud Platform (GCP)',
      skills: ['GKE (Kubernetes)', 'Cloud Run', 'Pub/Sub', 'Cloud Functions', 'Cloud Storage', 'Artifact Registry', 'Cloud Scheduler', 'Cloud Logging', 'Cloud Monitoring', 'IAM', 'VPC & Networking', 'Anthos Service Mesh (Istio)', 'Anthos Config Management (GitOps)', 'Dialogflow', 'Firestore', 'Terraform Modules', 'Cloud Control Framework', 'IDP Adoption']
    },
    {
      name: 'Microsoft Azure',
      skills: ['APIM', 'Event Hub', 'Event Grid', 'Service Bus', 'Functions', 'Logic Apps', 'Storage Accounts', 'Application Gateway', 'Traffic Manager', 'Front Door', 'VNet Integration', 'Private Endpoints', 'IoT Hub', 'AKS', 'WebApps', 'Cognitive Services', 'Bot Framework', 'QnA Maker', 'Azure Entra ID', 'Landing Zones', 'Blueprints']
    },
    {
      name: 'AWS',
      skills: ['Lambda', 'S3', 'DynamoDB', 'Lex', 'IAM', 'Amplify Framework', 'Alexa Presentation Language', 'Rekognition', 'AppSync (GraphQL)']
    },
    {
      name: 'IaC & DevSecOps',
      skills: ['Terraform', 'Terraform Enterprise', 'Terraform Test Framework', 'Bicep', 'ARM Templates', 'Azure DevOps', 'GitHub Actions', 'GitOps', 'YAML Pipelines', 'PowerShell', 'Blue-Green Deployments', 'Cloud Adoption Framework', 'Landing Zones']
    },
    {
      name: 'Enterprise Integration & Messaging',
      skills: ['Azure APIM', 'IBM API Connect', 'Apigee', 'Azure Event Hub', 'Azure Service Bus', 'Google Pub/Sub', 'Logic Apps', 'Event-Driven Architecture', 'Geo-Redundant API Platforms', 'Policy-Driven CI/CD']
    },
    {
      name: 'API & OpenAPI Architecture',
      skills: ['OpenAPI / Swagger', 'REST', 'GraphQL', 'WCF', 'gRPC', 'API Governance', 'API Versioning', 'Developer Onboarding', 'API Security Policies']
    },
    {
      name: 'GenAI & Agentic AI',
      skills: ['Autonomous Agents', 'Orchestrators', 'Tool Use Patterns', 'Google ADK', 'GitHub Copilot', 'GenAI Architectures', 'Agentic Workflows', 'Domain-Specific AI']
    },
    {
      name: 'Conversational AI',
      skills: ['Google Dialogflow', 'Amazon Alexa Skills', 'Microsoft Cognitive Services', 'Microsoft Bot Framework', 'QnA Maker', 'Speech-to-Text', 'Text-to-Speech', 'MLKIT', 'CoreML']
    },
    {
      name: 'Cloud Security & Governance',
      skills: ['Defence-in-Depth', 'Principle of Least Privilege', 'RBAC', 'IAM', 'Azure Entra ID / AAD', 'OAuth 2.0', 'OpenID Connect', 'OIDC', 'SSO', 'Identity Server', 'OPA', 'Cloud Nine Controls (C9)', 'CIS Benchmarks', 'Sentinel Policies', 'Prisma Policies', 'SAST', 'DAST', 'SCA', 'OWASP']
    },
    {
      name: 'Enterprise Architecture',
      skills: ['TOGAF', 'BIAN/BPPA', 'Open Group ArchiMate', 'BizzDesign Enterprise Studio', 'Cloud Migration Strategy', 'Application Rationalisation', 'Vendor Onboarding', 'Security Assessments']
    },
    {
      name: 'Web & Microservices',
      skills: ['ASP.NET Core', 'C#', 'MVC', '.NET', 'Web API', 'Microservices', 'GraphQL', 'OpenAPI', 'Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS3', 'Node.js', 'Python', 'WCF', 'DNN', 'Entity Framework', 'Dapper']
    },
    {
      name: 'Database',
      skills: ['SQL Server', 'Oracle', 'PostgreSQL', 'Cosmos DB', 'Firestore']
    },
    {
      name: 'Business Intelligence',
      skills: ['ETL', 'SSIS', 'SSRS', 'SSAS', 'RDLC']
    },
    {
      name: 'Project Management',
      skills: ['Agile Scrum', 'Kanban', 'JIRA', 'Confluence']
    },
    {
      name: 'Development Tools',
      skills: ['VS Code', 'GitHub Copilot', 'Visual Studio', 'Fxcop', 'ReSharper', 'Coverity', 'IBM AppScan', 'Fiddler', 'Postman']
    }
  ];
}

