import React from 'react';
import type { SkillCategory, Project, ExperienceItem, Certification, YouTubeVideo, BlogPost } from './types';
import { AwsIcon, DockerIcon, TerraformIcon, KubernetesIcon, JenkinsIcon, GithubActionsIcon, PrometheusIcon, GrafanaIcon, PythonIcon, BashIcon, GitIcon, LinuxIcon, AnsibleIcon, EKSIcon, EC2Icon, S3Icon, LambdaIcon, RDSIcon, CloudFormationIcon, IAMIcon, VPCIcon, SecurityIcon, DataIcon, AIIcon, CloudIcon, GoogleCloudIcon, CiscoIcon } from './components/ui/Icons';

// Fix: Replaced JSX syntax with React.createElement since this is a .ts file, not .tsx.
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Cloud (AWS)',
    skills: [
      { name: 'EC2', icon: React.createElement(EC2Icon) },
      { name: 'S3', icon: React.createElement(S3Icon) },
      { name: 'Lambda', icon: React.createElement(LambdaIcon) },
      { name: 'RDS', icon: React.createElement(RDSIcon) },
      { name: 'EKS', icon: React.createElement(EKSIcon) },
      { name: 'VPC', icon: React.createElement(VPCIcon) },
      { name: 'IAM', icon: React.createElement(IAMIcon) },
      { name: 'CloudFormation', icon: React.createElement(CloudFormationIcon) },
      { name: 'AWS General', icon: React.createElement(AwsIcon) },
    ],
  },
  {
    title: 'Containerization & Orchestration',
    skills: [
      { name: 'Docker', icon: React.createElement(DockerIcon) },
      { name: 'Kubernetes', icon: React.createElement(KubernetesIcon) },
    ],
  },
  {
    title: 'Infrastructure as Code',
    skills: [
      { name: 'Terraform', icon: React.createElement(TerraformIcon) },
      { name: 'Ansible', icon: React.createElement(AnsibleIcon) },
    ],
  },
  {
    title: 'CI/CD',
    skills: [
      { name: 'Jenkins', icon: React.createElement(JenkinsIcon) },
      { name: 'GitHub Actions', icon: React.createElement(GithubActionsIcon) },
    ],
  },
   {
    title: 'Monitoring & Logging',
    skills: [
      { name: 'Prometheus', icon: React.createElement(PrometheusIcon) },
      { name: 'Grafana', icon: React.createElement(GrafanaIcon) },
    ],
  },
  {
    title: 'Tools & Scripting',
    skills: [
      { name: 'Python', icon: React.createElement(PythonIcon) },
      { name: 'Bash', icon: React.createElement(BashIcon) },
      { name: 'Git', icon: React.createElement(GitIcon) },
      { name: 'Linux', icon: React.createElement(LinuxIcon) },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'AWS Game Challenge - Serverless Puzzle Game',
    description: 'Built a serverless puzzle game using AWS Lambda, API Gateway, and S3. Implemented real-time scoring with DynamoDB and deployed using CloudFormation for infrastructure as code.',
    tags: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'S3', 'CloudFormation'],
    repoUrl: 'https://github.com/lewisawe',
  },
  {
    title: 'Plants vs Zombies - Redis Challenge',
    description: 'Developed a real-time multiplayer tower defense game using Redis for state management and real-time communication. Deployed on AWS ECS with Terraform for infrastructure automation.',
    tags: ['Redis', 'Node.js', 'AWS ECS', 'Terraform', 'Docker'],
    repoUrl: 'https://github.com/lewisawe',
  },
  {
    title: 'Kiro Typing Extension',
    description: 'Created a browser extension for typing practice with real-time feedback and progress tracking. Features include customizable difficulty levels and performance analytics.',
    tags: ['JavaScript', 'Browser Extension', 'Chrome API', 'HTML/CSS'],
    repoUrl: 'https://github.com/lewisawe',
  },
  {
    title: 'Chaos Engineering with AWS FIS',
    description: 'Implemented chaos engineering practices using AWS Fault Injection Simulator to test system resilience. Automated failure scenarios and monitoring with CloudWatch dashboards.',
    tags: ['AWS FIS', 'Chaos Engineering', 'CloudWatch', 'Python', 'Terraform'],
    repoUrl: 'https://github.com/lewisawe',
  },
  {
    title: 'Threads and Ink - E-commerce Platform',
    description: 'Built a full-stack e-commerce platform with Next.js frontend and serverless backend. Features include payment integration, inventory management, and responsive design.',
    tags: ['Next.js', 'React', 'AWS Lambda', 'Stripe', 'Tailwind CSS'],
    repoUrl: 'https://github.com/lewisawe',
  },
  {
    title: 'Guardian Lambda - Security Automation',
    description: 'Developed a serverless security monitoring system using AWS Lambda and API Gateway. Automated threat detection and response with real-time alerting capabilities.',
    tags: ['AWS Lambda', 'Security', 'API Gateway', 'Python', 'CloudWatch'],
    repoUrl: 'https://github.com/lewisawe',
  },
];


export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Network and Systems Administrator',
    company: 'Eloho',
    period: 'May 2024 - Present',
    description: [
      'Architected and deployed scalable network infrastructure, achieving 99.8% uptime across enterprise systems',
      'Reduced incident response time by 40% through proactive monitoring and rapid issue resolution protocols',
      'Implemented comprehensive security and monitoring solutions, resulting in 25% improvement in system reliability',
      'Led monthly system upgrade cycles and conducted technical training sessions for cross-functional IT teams',
    ],
  },
  {
    role: 'IT Support Technician',
    company: 'Elpris LTD, Eldoret, Kenya',
    period: 'January 2022 - April 2024',
    description: [
      'Designed and implemented automated monitoring systems, reducing system downtime by 60%',
      'Deployed multi-layered security frameworks to safeguard sensitive client data and ensure compliance',
      'Managed relationships with 15+ enterprise and SMB clients, maintaining 95% client satisfaction rate',
      'Delivered tailored IT solutions for educational institutions and small businesses, improving operational efficiency by 30%',
    ],
  },
  {
    role: 'DevOps Engineer',
    company: 'HNG Internship (Remote)',
    period: 'November 2022 - December 2022',
    description: [
      'Optimized AWS resource allocation and cost management, achieving 35% reduction in cloud infrastructure expenses',
      'Streamlined deployment workflows using Docker containerization and automated CI/CD pipelines',
      'Maintained 99.5% system uptime while implementing performance optimizations',
      'Collaborated with distributed development teams on critical infrastructure automation projects',
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: 'AWS Certified Security - Specialty',
    issuer: 'Amazon Web Services',
    url: 'https://www.credly.com/users/lewisawe',
    icon: React.createElement('img', { src: '/assets/AWSsecuritySpeciality.png', alt: 'AWS Security Specialty', className: 'w-12 h-12 object-contain' }),
  },
  {
    name: 'AWS Certified CloudOps Engineer - Associate',
    issuer: 'Amazon Web Services',
    url: 'https://www.credly.com/users/lewisawe',
    icon: React.createElement('img', { src: '/assets/AWSCloudOpsEngineer.png', alt: 'AWS CloudOps Engineer', className: 'w-12 h-12 object-contain' }),
  },
  {
    name: 'AWS Certified Solutions Architect - Associate',
    issuer: 'Amazon Web Services',
    url: 'https://www.credly.com/users/lewisawe',
    icon: React.createElement('img', { src: '/assets/AWSsolutionsArchitect.png', alt: 'AWS Solutions Architect', className: 'w-12 h-12 object-contain' }),
  },
  {
    name: 'AWS Certified Developer - Associate',
    issuer: 'Amazon Web Services',
    url: 'https://www.credly.com/users/lewisawe',
    icon: React.createElement('img', { src: '/assets/AWSDeveloperAssociate.png', alt: 'AWS Developer Associate', className: 'w-12 h-12 object-contain' }),
  },
  {
    name: 'AWS Certified Data Engineer - Associate',
    issuer: 'Amazon Web Services',
    url: 'https://www.credly.com/users/lewisawe',
    icon: React.createElement('img', { src: '/assets/awsDataEng.png', alt: 'AWS Data Engineer', className: 'w-12 h-12 object-contain' }),
  },
  {
    name: 'Google Certified Cloud Engineer - Associate',
    issuer: 'Google Cloud',
    url: 'https://www.credly.com/users/lewisawe',
    icon: React.createElement('img', { src: '/assets/googleCloudEng.png', alt: 'Google Cloud Engineer', className: 'w-12 h-12 object-contain' }),
  },
  {
    name: 'Cisco Certified Network Associate (CCNA)',
    issuer: 'Cisco',
    url: 'https://www.credly.com/users/lewisawe',
    icon: React.createElement('img', { src: '/assets/cisco_ccna_R_26S.png', alt: 'Cisco CCNA', className: 'w-12 h-12 object-contain' }),
  },
  {
    name: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services',
    url: 'https://www.credly.com/users/lewisawe',
    icon: React.createElement('img', { src: '/assets/AIPractioner.png', alt: 'AWS AI Practitioner', className: 'w-12 h-12 object-contain' }),
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    url: 'https://www.credly.com/users/lewisawe',
    icon: React.createElement('img', { src: '/assets/cloudPractitioner.png', alt: 'AWS Cloud Practitioner', className: 'w-12 h-12 object-contain' }),
  },
];

export const YOUTUBE_VIDEOS: YouTubeVideo[] = [
    { title: 'The AWS Developer Toolbox: Your Ultimate Cloud Companion', id: 'vlbSit2Keao' },
    { title: 'Your Cloud Bill is burning money, here is why', id: 'pKbv21MHRd0' },
    { title: 'Decentralised Authentication with AWS Cognito', id: 'wnGywzFIN0k' },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Creating a Flood Awareness PSA with AWS Nova Canvas',
    description: 'Learn how to leverage AWS Nova Canvas for creating impactful public service announcements and visual content for social good.',
    url: 'https://lewisawe.hashnode.dev/creating-a-flood-awareness-psa-with-aws-nova-canvas',
    date: '2024-08-15',
    tags: ['AWS', 'Nova Canvas', 'AI', 'Social Impact'],
  },
  {
    title: 'I Built Hackerman with Amazon Q',
    description: 'A deep dive into building an AI-powered assistant using Amazon Q, exploring its capabilities and practical implementation.',
    url: 'https://lewisawe.hashnode.dev/i-built-hackerman-with-amazon-q',
    date: '2024-07-28',
    tags: ['AWS', 'Amazon Q', 'AI', 'Development'],
  },
  {
    title: 'AWS Cost Optimization: Stop Burning Money in the Cloud',
    description: 'Practical strategies to reduce your AWS bill without sacrificing performance. Learn about right-sizing, reserved instances, and cost monitoring.',
    url: 'https://lewisawe.hashnode.dev/',
    date: '2024-06-10',
    tags: ['AWS', 'Cost Optimization', 'FinOps', 'Cloud'],
  },
];