import React from 'react';

export const QUESTION_BANK = [
  // DOMAIN 1: Cloud Concepts (26% of exam)
  {
    id: 1,
    domain: 1,
    text: "What are the main benefits of cloud computing? (Select TWO)",
    options: [
      "Trade capital expense for variable expense",
      "Maintain physical data centers",
      "Benefit from massive economies of scale",
      "Manage hardware infrastructure",
      "Limited global reach"
    ],
    correct: [0, 2],
    type: "multiple",
    explanation: "Trading CapEx for OpEx and benefiting from economies of scale are key cloud advantages."
  },
  {
    id: 2,
    domain: 1,
    text: "Which AWS design principle supports the ability to automatically scale resources?",
    options: ["Elasticity", "Durability", "Availability", "Resiliency"],
    correct: [0],
    type: "single",
    explanation: "Elasticity allows systems to automatically scale resources up or down based on demand."
  },
  {
    id: 3,
    domain: 1,
    text: "What is the advantage of deploying an application across multiple Availability Zones?",
    options: [
      "Reduces latency for global users",
      "Increases fault tolerance",
      "Reduces costs",
      "Improves network speed"
    ],
    correct: [1],
    type: "single",
    explanation: "Multiple AZs provide high availability and fault tolerance against data center failures."
  },
  {
    id: 4,
    domain: 1,
    text: "Which describes the ability to acquire resources as needed and release when no longer needed?",
    options: ["Scalability", "Elasticity", "Agility", "Reliability"],
    correct: [1],
    type: "single",
    explanation: "Elasticity is the ability to dynamically provision and de-provision resources."
  },
  {
    id: 5,
    domain: 1,
    text: "What does 'pay-as-you-go' pricing mean in AWS?",
    options: [
      "Pay monthly subscription fees",
      "Pay only for what you use",
      "Pay upfront for reserved capacity",
      "Pay based on number of users"
    ],
    correct: [1],
    type: "single",
    explanation: "Pay-as-you-go means you pay only for the resources you consume without upfront commitments."
  },
  {
    id: 6,
    domain: 1,
    text: "Which of the following are pillars of the AWS Well-Architected Framework? (Select TWO)",
    options: [
      "Performance Efficiency",
      "Cost Optimization",
      "Server Management",
      "Hardware Procurement",
      "Physical Security"
    ],
    correct: [0, 1],
    type: "multiple",
    explanation: "The six pillars are: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability."
  },
  {
    id: 7,
    domain: 1,
    text: "What is an AWS Region?",
    options: [
      "A single data center",
      "A geographical area with multiple Availability Zones",
      "A virtual private cloud",
      "A content delivery network"
    ],
    correct: [1],
    type: "single",
    explanation: "An AWS Region is a physical location with multiple isolated Availability Zones."
  },
  {
    id: 8,
    domain: 1,
    text: "What is an Availability Zone?",
    options: [
      "A geographical region",
      "One or more discrete data centers with redundant resources",
      "A content delivery point",
      "A virtual network"
    ],
    correct: [1],
    type: "single",
    explanation: "An AZ consists of one or more data centers with redundant power, networking, and connectivity."
  },
  {
    id: 9,
    domain: 1,
    text: "Which principle allows AWS to offer lower variable costs compared to traditional infrastructure?",
    options: [
      "Economies of scale",
      "Reserved capacity",
      "Spot instances",
      "Dedicated hosts"
    ],
    correct: [0],
    type: "single",
    explanation: "AWS's massive scale allows them to achieve higher economies of scale and pass savings to customers."
  },
  {
    id: 10,
    domain: 1,
    text: "What does 'high availability' mean in cloud computing?",
    options: [
      "System is always accessible with minimal downtime",
      "System has fast performance",
      "System is cheap to operate",
      "System can scale automatically"
    ],
    correct: [0],
    type: "single",
    explanation: "High availability means the system remains operational and accessible with minimal interruptions."
  },
  {
    id: 11,
    domain: 1,
    text: "Which is a benefit of moving to the AWS Cloud in terms of improving speed and agility?",
    options: [
      "Increased time to market",
      "Provision resources in minutes instead of weeks",
      "Limited global deployment",
      "Manual scaling only"
    ],
    correct: [1],
    type: "single",
    explanation: "AWS enables rapid resource provisioning, reducing time from weeks to minutes."
  },
  {
    id: 12,
    domain: 1,
    text: "What is the purpose of AWS Edge Locations?",
    options: [
      "Host EC2 instances",
      "Cache content closer to users",
      "Store backup data",
      "Run database queries"
    ],
    correct: [1],
    type: "single",
    explanation: "Edge Locations cache content for CloudFront CDN to reduce latency for end users."
  },
  {
    id: 13,
    domain: 1,
    text: "Which advantage allows companies to focus on projects that differentiate their business?",
    options: [
      "Stop spending money running data centers",
      "Increase speed and agility",
      "Go global in minutes",
      "Benefit from economies of scale"
    ],
    correct: [0],
    type: "single",
    explanation: "By eliminating data center management, companies can focus on their core business innovations."
  },
  {
    id: 14,
    domain: 1,
    text: "What type of cloud deployment uses both on-premises and cloud resources?",
    options: ["Public cloud", "Private cloud", "Hybrid cloud", "Multi-cloud"],
    correct: [2],
    type: "single",
    explanation: "Hybrid cloud combines on-premises infrastructure with cloud services."
  },
  {
    id: 15,
    domain: 1,
    text: "Which statement describes fault tolerance?",
    options: [
      "System can scale automatically",
      "System continues operating despite component failures",
      "System has low latency",
      "System has high performance"
    ],
    correct: [1],
    type: "single",
    explanation: "Fault tolerance means the system remains operational even when components fail."
  },

  // DOMAIN 2: Security and Compliance (25% of exam)
  {
    id: 16,
    domain: 2,
    text: "Under the AWS Shared Responsibility Model, which tasks are customer responsibilities? (Select TWO)",
    options: [
      "Patching guest operating systems",
      "Physical security of data centers",
      "Configuring security groups",
      "Maintaining networking infrastructure",
      "Managing hardware disposal"
    ],
    correct: [0, 2],
    type: "multiple",
    explanation: "Customers manage security 'in' the cloud: OS patches, security groups, and application security."
  },
  {
    id: 17,
    domain: 2,
    text: "Which service protects web applications from common web exploits?",
    options: ["AWS Shield", "AWS WAF", "Amazon GuardDuty", "AWS Inspector"],
    correct: [1],
    type: "single",
    explanation: "AWS WAF (Web Application Firewall) protects against SQL injection, XSS, and other web exploits."
  },
  {
    id: 18,
    domain: 2,
    text: "What is the purpose of AWS Identity and Access Management (IAM)?",
    options: [
      "Monitor network traffic",
      "Manage user access and permissions",
      "Encrypt data at rest",
      "Scan for vulnerabilities"
    ],
    correct: [1],
    type: "single",
    explanation: "IAM manages user identities, authentication, and authorization to AWS resources."
  },
  {
    id: 19,
    domain: 2,
    text: "Which AWS service provides DDoS protection?",
    options: ["AWS WAF", "AWS Shield", "Amazon GuardDuty", "AWS Config"],
    correct: [1],
    type: "single",
    explanation: "AWS Shield provides managed DDoS protection, with Standard and Advanced tiers."
  },
  {
    id: 20,
    domain: 2,
    text: "What is the principle of least privilege?",
    options: [
      "Grant all permissions by default",
      "Grant only the permissions required to perform a task",
      "Grant administrator access to all users",
      "Grant read-only access to everyone"
    ],
    correct: [1],
    type: "single",
    explanation: "Least privilege means granting only the minimum permissions necessary for a task."
  },
  {
    id: 21,
    domain: 2,
    text: "Which service helps detect unusual account activity and potential threats?",
    options: ["AWS Inspector", "Amazon GuardDuty", "AWS Config", "AWS CloudTrail"],
    correct: [1],
    type: "single",
    explanation: "Amazon GuardDuty is a threat detection service that monitors for malicious activity."
  },
  {
    id: 22,
    domain: 2,
    text: "What does AWS CloudTrail do?",
    options: [
      "Monitors application performance",
      "Records AWS API calls for your account",
      "Manages user permissions",
      "Encrypts data in transit"
    ],
    correct: [1],
    type: "single",
    explanation: "CloudTrail logs all API calls made in your AWS account for auditing and compliance."
  },
  {
    id: 23,
    domain: 2,
    text: "Which service helps ensure AWS resource configurations comply with company policies?",
    options: ["AWS Config", "AWS CloudTrail", "AWS Inspector", "AWS Trusted Advisor"],
    correct: [0],
    type: "single",
    explanation: "AWS Config continuously monitors and records resource configurations for compliance."
  },
  {
    id: 24,
    domain: 2,
    text: "What is AWS Artifact?",
    options: [
      "A deployment service",
      "A portal for compliance reports and agreements",
      "A monitoring tool",
      "A database service"
    ],
    correct: [1],
    type: "single",
    explanation: "AWS Artifact provides on-demand access to AWS compliance reports and agreements."
  },
  {
    id: 25,
    domain: 2,
    text: "Which service provides automated security assessments for EC2 instances?",
    options: ["AWS Inspector", "Amazon GuardDuty", "AWS Config", "AWS Shield"],
    correct: [0],
    type: "single",
    explanation: "AWS Inspector automatically assesses applications for vulnerabilities and deviations."
  },
  {
    id: 26,
    domain: 2,
    text: "What is an IAM role?",
    options: [
      "A permanent user account",
      "A set of permissions that can be assumed temporarily",
      "A physical security token",
      "A database credential"
    ],
    correct: [1],
    type: "single",
    explanation: "IAM roles provide temporary credentials and permissions that can be assumed by users or services."
  },
  {
    id: 27,
    domain: 2,
    text: "Which feature should be enabled for the AWS root account? (Select TWO)",
    options: [
      "Multi-Factor Authentication (MFA)",
      "Access keys for programmatic access",
      "Delete the root account",
      "Avoid using it for everyday tasks",
      "Share credentials with team"
    ],
    correct: [0, 3],
    type: "multiple",
    explanation: "Root account should have MFA enabled and should not be used for daily operations."
  },
  {
    id: 28,
    domain: 2,
    text: "What does Amazon Macie do?",
    options: [
      "Monitors network traffic",
      "Discovers and protects sensitive data in S3",
      "Manages encryption keys",
      "Scans EC2 for vulnerabilities"
    ],
    correct: [1],
    type: "single",
    explanation: "Amazon Macie uses machine learning to discover, classify, and protect sensitive data in S3."
  },
  {
    id: 29,
    domain: 2,
    text: "Which service manages encryption keys in AWS?",
    options: ["AWS IAM", "AWS KMS", "AWS Certificate Manager", "AWS Secrets Manager"],
    correct: [1],
    type: "single",
    explanation: "AWS Key Management Service (KMS) creates and manages encryption keys."
  },
  {
    id: 30,
    domain: 2,
    text: "Under the Shared Responsibility Model, who is responsible for S3 bucket permissions?",
    options: ["AWS", "Customer", "Both AWS and customer", "Third-party auditor"],
    correct: [1],
    type: "single",
    explanation: "Customers are responsible for configuring access controls and permissions for their S3 buckets."
  },
  {
    id: 31,
    domain: 2,
    text: "What is AWS Security Hub?",
    options: [
      "A firewall service",
      "A centralized security and compliance view",
      "An encryption service",
      "A VPN service"
    ],
    correct: [1],
    type: "single",
    explanation: "Security Hub provides a comprehensive view of security alerts and compliance status across AWS accounts."
  },
  {
    id: 32,
    domain: 2,
    text: "Which compliance program certifies AWS data centers for payment card processing?",
    options: ["HIPAA", "PCI DSS", "SOC 2", "ISO 27001"],
    correct: [1],
    type: "single",
    explanation: "PCI DSS (Payment Card Industry Data Security Standard) certifies environments for card processing."
  },
  {
    id: 33,
    domain: 2,
    text: "What is the purpose of IAM policies?",
    options: [
      "Monitor user activity",
      "Define permissions for users, groups, and roles",
      "Encrypt data",
      "Backup user data"
    ],
    correct: [1],
    type: "single",
    explanation: "IAM policies are JSON documents that define permissions for AWS identities."
  },
  {
    id: 34,
    domain: 2,
    text: "Which service helps secure secrets like database passwords?",
    options: ["AWS IAM", "AWS KMS", "AWS Secrets Manager", "AWS Config"],
    correct: [2],
    type: "single",
    explanation: "AWS Secrets Manager helps protect and rotate secrets throughout their lifecycle."
  },
  {
    id: 35,
    domain: 2,
    text: "What is a security group in AWS?",
    options: [
      "A collection of IAM users",
      "A virtual firewall for EC2 instances",
      "An encryption protocol",
      "A compliance framework"
    ],
    correct: [1],
    type: "single",
    explanation: "Security groups act as virtual firewalls controlling inbound and outbound traffic for instances."
  },

  // DOMAIN 3: Technology (33% of exam)
  {
    id: 36,
    domain: 3,
    text: "Which service allows you to run code without provisioning servers?",
    options: ["Amazon EC2", "AWS Lambda", "Amazon ECS", "AWS Batch"],
    correct: [1],
    type: "single",
    explanation: "AWS Lambda is a serverless compute service that runs code in response to events."
  },
  {
    id: 37,
    domain: 3,
    text: "What type of database is Amazon DynamoDB?",
    options: ["Relational", "NoSQL", "Graph", "In-memory"],
    correct: [1],
    type: "single",
    explanation: "DynamoDB is a fully managed NoSQL database service with single-digit millisecond performance."
  },
  {
    id: 38,
    domain: 3,
    text: "Which service provides object storage in AWS?",
    options: ["Amazon EBS", "Amazon EFS", "Amazon S3", "Amazon RDS"],
    correct: [2],
    type: "single",
    explanation: "Amazon S3 (Simple Storage Service) provides scalable object storage."
  },
  {
    id: 39,
    domain: 3,
    text: "What is Amazon EC2?",
    options: [
      "Object storage service",
      "Virtual server in the cloud",
      "Content delivery network",
      "Database service"
    ],
    correct: [1],
    type: "single",
    explanation: "EC2 (Elastic Compute Cloud) provides resizable virtual servers in the cloud."
  },
  {
    id: 40,
    domain: 3,
    text: "Which storage option is best for frequently accessed data with low latency requirements?",
    options: ["Amazon S3 Glacier", "Amazon EBS", "Amazon S3 Standard", "AWS Backup"],
    correct: [1],
    type: "single",
    explanation: "Amazon EBS provides persistent block storage with low latency for EC2 instances."
  },
  {
    id: 41,
    domain: 3,
    text: "What is Amazon RDS?",
    options: [
      "A NoSQL database",
      "Managed relational database service",
      "Object storage",
      "Message queue"
    ],
    correct: [1],
    type: "single",
    explanation: "RDS is a managed service that makes it easy to set up, operate, and scale relational databases."
  },
  {
    id: 42,
    domain: 3,
    text: "Which service distributes incoming application traffic across multiple targets?",
    options: ["Amazon Route 53", "AWS Auto Scaling", "Elastic Load Balancing", "Amazon CloudFront"],
    correct: [2],
    type: "single",
    explanation: "Elastic Load Balancing automatically distributes traffic across multiple targets."
  },
  {
    id: 43,
    domain: 3,
    text: "What is Amazon CloudFront?",
    options: [
      "A database service",
      "Content delivery network (CDN)",
      "Virtual private cloud",
      "Monitoring service"
    ],
    correct: [1],
    type: "single",
    explanation: "CloudFront is a CDN that delivers content to users with low latency and high transfer speeds."
  },
  {
    id: 44,
    domain: 3,
    text: "Which service provides a fully managed message queuing service?",
    options: ["Amazon SNS", "Amazon SQS", "Amazon Kinesis", "AWS Step Functions"],
    correct: [1],
    type: "single",
    explanation: "Amazon SQS (Simple Queue Service) is a fully managed message queuing service."
  },
  {
    id: 45,
    domain: 3,
    text: "What is Amazon VPC?",
    options: [
      "Virtual server",
      "Isolated virtual network",
      "Storage service",
      "Database engine"
    ],
    correct: [1],
    type: "single",
    explanation: "VPC (Virtual Private Cloud) lets you provision a logically isolated section of AWS."
  },
  {
    id: 46,
    domain: 3,
    text: "Which service monitors AWS resources and applications?",
    options: ["AWS CloudTrail", "Amazon CloudWatch", "AWS Config", "AWS X-Ray"],
    correct: [1],
    type: "single",
    explanation: "CloudWatch collects monitoring and operational data in the form of logs and metrics."
  },
  {
    id: 47,
    domain: 3,
    text: "What is AWS Elastic Beanstalk?",
    options: [
      "Container orchestration service",
      "Platform service for deploying applications",
      "Serverless compute service",
      "Database migration tool"
    ],
    correct: [1],
    type: "single",
    explanation: "Elastic Beanstalk is a PaaS that makes it easy to deploy and scale web applications."
  },
  {
    id: 48,
    domain: 3,
    text: "Which service provides DNS services?",
    options: ["Amazon CloudFront", "AWS Direct Connect", "Amazon Route 53", "AWS VPN"],
    correct: [2],
    type: "single",
    explanation: "Route 53 is a scalable Domain Name System (DNS) web service."
  },
  {
    id: 49,
    domain: 3,
    text: "What type of storage is Amazon EBS?",
    options: ["Object storage", "Block storage", "File storage", "Archive storage"],
    correct: [1],
    type: "single",
    explanation: "EBS provides persistent block-level storage volumes for use with EC2 instances."
  },
  {
    id: 50,
    domain: 3,
    text: "Which S3 storage class is designed for long-term archive with retrieval times of hours?",
    options: ["S3 Standard", "S3 Intelligent-Tiering", "S3 Glacier Deep Archive", "S3 One Zone-IA"],
    correct: [2],
    type: "single",
    explanation: "S3 Glacier Deep Archive is the lowest-cost storage for long-term retention and digital preservation."
  },
  {
    id: 51,
    domain: 3,
    text: "What is Amazon Aurora?",
    options: [
      "NoSQL database",
      "MySQL and PostgreSQL-compatible relational database",
      "Data warehouse",
      "In-memory cache"
    ],
    correct: [1],
    type: "single",
    explanation: "Aurora is a MySQL and PostgreSQL-compatible relational database built for the cloud."
  },
  {
    id: 52,
    domain: 3,
    text: "Which service automatically scales EC2 capacity?",
    options: ["Elastic Load Balancing", "AWS Auto Scaling", "Amazon CloudWatch", "AWS CloudFormation"],
    correct: [1],
    type: "single",
    explanation: "AWS Auto Scaling monitors applications and automatically adjusts capacity."
  },
  {
    id: 53,
    domain: 3,
    text: "What is Amazon Redshift used for?",
    options: [
      "NoSQL database",
      "Data warehousing and analytics",
      "Object storage",
      "In-memory caching"
    ],
    correct: [1],
    type: "single",
    explanation: "Redshift is a fast, fully managed data warehouse for analyzing data using SQL."
  },
  {
    id: 54,
    domain: 3,
    text: "Which service provides a pub/sub messaging service?",
    options: ["Amazon SQS", "Amazon SNS", "Amazon MQ", "AWS AppSync"],
    correct: [1],
    type: "single",
    explanation: "SNS (Simple Notification Service) is a pub/sub messaging service for application-to-application and application-to-person communication."
  },
  {
    id: 55,
    domain: 3,
    text: "What is AWS CloudFormation?",
    options: [
      "Monitoring service",
      "Infrastructure as Code service",
      "Database service",
      "Content delivery network"
    ],
    correct: [1],
    type: "single",
    explanation: "CloudFormation allows you to model and provision AWS resources using templates."
  },
  {
    id: 56,
    domain: 3,
    text: "Which service provides in-memory caching?",
    options: ["Amazon RDS", "Amazon ElastiCache", "Amazon DynamoDB", "Amazon Aurora"],
    correct: [1],
    type: "single",
    explanation: "ElastiCache is a fully managed in-memory caching service supporting Redis and Memcached."
  },
  {
    id: 57,
    domain: 3,
    text: "What is Amazon EFS?",
    options: [
      "Block storage",
      "Object storage",
      "Managed file storage for EC2",
      "Archive storage"
    ],
    correct: [2],
    type: "single",
    explanation: "EFS (Elastic File System) provides scalable file storage for use with EC2 instances."
  },
  {
    id: 58,
    domain: 3,
    text: "Which service helps migrate databases to AWS?",
    options: ["AWS DataSync", "AWS Database Migration Service", "AWS Transfer Family", "AWS Snow Family"],
    correct: [1],
    type: "single",
    explanation: "AWS DMS helps migrate databases to AWS with minimal downtime."
  },
  {
    id: 59,
    domain: 3,
    text: "What is Amazon Lightsail?",
    options: [
      "Serverless compute",
      "Simplified virtual private server service",
      "Container orchestration",
      "Data warehouse"
    ],
    correct: [1],
    type: "single",
    explanation: "Lightsail provides easy-to-use virtual private servers with simple management."
  },
  {
    id: 60,
    domain: 3,
    text: "Which service runs Docker containers on AWS?",
    options: ["AWS Lambda", "Amazon ECS", "AWS Batch", "Amazon EC2"],
    correct: [1],
    type: "single",
    explanation: "ECS (Elastic Container Service) is a fully managed container orchestration service."
  },
  {
    id: 61,
    domain: 3,
    text: "What is AWS Fargate?",
    options: [
      "Virtual machine service",
      "Serverless compute for containers",
      "Database service",
      "Content delivery network"
    ],
    correct: [1],
    type: "single",
    explanation: "Fargate is a serverless compute engine for containers that works with ECS and EKS."
  },
  {
    id: 62,
    domain: 3,
    text: "Which storage class provides instant retrieval with lower cost than S3 Standard?",
    options: ["S3 Glacier", "S3 Standard-IA", "S3 One Zone-IA", "S3 Intelligent-Tiering"],
    correct: [1],
    type: "single",
    explanation: "S3 Standard-IA (Infrequent Access) offers lower cost for infrequently accessed data with millisecond access."
  },
  {
    id: 63,
    domain: 3,
    text: "What is Amazon Kinesis used for?",
    options: [
      "Static website hosting",
      "Real-time data streaming",
      "Batch processing",
      "Database backups"
    ],
    correct: [1],
    type: "single",
    explanation: "Kinesis collects, processes, and analyzes real-time streaming data."
  },
  {
    id: 64,
    domain: 3,
    text: "Which service provides managed Kubernetes?",
    options: ["Amazon ECS", "Amazon EKS", "AWS Fargate", "AWS Batch"],
    correct: [1],
    type: "single",
    explanation: "EKS (Elastic Kubernetes Service) is a managed Kubernetes service."
  },
  {
    id: 65,
    domain: 3,
    text: "What is AWS Systems Manager?",
    options: [
      "Database management tool",
      "Operational management service for AWS resources",
      "Monitoring service",
      "Deployment service"
    ],
    correct: [1],
    type: "single",
    explanation: "Systems Manager provides visibility and control of your infrastructure on AWS."
  },
  {
    id: 66,
    domain: 3,
    text: "Which service provides a GraphQL API?",
    options: ["Amazon API Gateway", "AWS AppSync", "Amazon Route 53", "AWS Lambda"],
    correct: [1],
    type: "single",
    explanation: "AWS AppSync makes it easy to build GraphQL APIs with real-time updates."
  },
  {
    id: 67,
    domain: 3,
    text: "What is Amazon Athena?",
    options: [
      "Database service",
      "Query service for S3 data using SQL",
      "Data warehouse",
      "ETL service"
    ],
    correct: [1],
    type: "single",
    explanation: "Athena is an interactive query service to analyze data in S3 using standard SQL."
  },
  {
    id: 68,
    domain: 3,
    text: "Which service helps transfer large amounts of data into AWS using physical devices?",
    options: ["AWS Direct Connect", "AWS Snow Family", "AWS DataSync", "AWS Transfer Family"],
    correct: [1],
    type: "single",
    explanation: "AWS Snow Family provides physical devices to migrate petabytes of data into AWS."
  },
  {
    id: 69,
    domain: 3,
    text: "What is AWS Glue?",
    options: [
      "Data warehouse",
      "ETL (Extract, Transform, Load) service",
      "Database service",
      "Analytics service"
    ],
    correct: [1],
    type: "single",
    explanation: "AWS Glue is a fully managed ETL service for preparing and loading data for analytics."
  },
  {
    id: 70,
    domain: 3,
    text: "Which service provides dedicated network connection from on-premises to AWS?",
    options: ["AWS VPN", "AWS Direct Connect", "Amazon VPC", "AWS Transit Gateway"],
    correct: [1],
    type: "single",
    explanation: "AWS Direct Connect establishes a dedicated network connection from your premises to AWS."
  },

  // DOMAIN 4: Billing and Pricing (16% of exam)
  {
    id: 71,
    domain: 4,
    text: "Which tool provides visualization of AWS costs and usage over time?",
    options: ["AWS Budgets", "AWS Cost Explorer", "AWS Pricing Calculator", "AWS Organizations"],
    correct: [1],
    type: "single",
    explanation: "Cost Explorer visualizes, understands, and manages AWS costs and usage over time."
  },
  {
    id: 72,
    domain: 4,
    text: "Which support plan provides access to a Technical Account Manager?",
    options: ["Basic", "Developer", "Business", "Enterprise"],
    correct: [3],
    type: "single",
    explanation: "Only the Enterprise support plan includes a dedicated Technical Account Manager (TAM)."
  },
  {
    id: 73,
    domain: 4,
    text: "What is the AWS Free Tier?",
    options: [
      "Unlimited free usage",
      "Limited free usage of AWS services for 12 months",
      "Free enterprise support",
      "Free data transfer"
    ],
    correct: [1],
    type: "single",
    explanation: "AWS Free Tier offers limited free usage of many services for 12 months for new customers."
  },
  {
    id: 74,
    domain: 4,
    text: "Which pricing model offers the most significant discount for EC2?",
    options: ["On-Demand", "Reserved Instances", "Spot Instances", "Dedicated Hosts"],
    correct: [2],
    type: "single",
    explanation: "Spot Instances can provide up to 90% discount compared to On-Demand pricing."
  },
  {
    id: 75,
    domain: 4,
    text: "What are the characteristics of AWS Reserved Instances? (Select TWO)",
    options: [
      "Significant discount compared to On-Demand",
      "Can be interrupted by AWS",
      "Require 1 or 3 year commitment",
      "No upfront payment required",
      "Highest cost option"
    ],
    correct: [0, 2],
    type: "multiple",
    explanation: "Reserved Instances offer discounts up to 75% for 1 or 3 year commitments."
  },
  {
    id: 76,
    domain: 4,
    text: "Which service helps set custom cost and usage budgets?",
    options: ["AWS Cost Explorer", "AWS Budgets", "AWS Pricing Calculator", "AWS Billing Dashboard"],
    correct: [1],
    type: "single",
    explanation: "AWS Budgets allows you to set custom budgets and receive alerts when costs exceed thresholds."
  },
  {
    id: 77,
    domain: 4,
    text: "What is AWS Organizations used for?",
    options: [
      "Monitor costs",
      "Centrally manage multiple AWS accounts",
      "Deploy applications",
      "Manage IAM users"
    ],
    correct: [1],
    type: "single",
    explanation: "AWS Organizations helps centrally manage and govern multiple AWS accounts."
  },
  {
    id: 78,
    domain: 4,
    text: "Which support plan is recommended for production workloads?",
    options: ["Basic", "Developer", "Business", "Enterprise"],
    correct: [2],
    type: "single",
    explanation: "Business and Enterprise plans are recommended for production workloads."
  },
  {
    id: 79,
    domain: 4,
    text: "What is AWS Trusted Advisor?",
    options: [
      "Cost optimization tool only",
      "Service that provides recommendations across multiple categories",
      "Security monitoring service",
      "Backup service"
    ],
    correct: [1],
    type: "single",
    explanation: "Trusted Advisor provides best practice recommendations for cost optimization, security, performance, and fault tolerance."
  },
  {
    id: 80,
    domain: 4,
    text: "Which pricing model allows you to pay only when instances are running?",
    options: ["Reserved Instances", "On-Demand Instances", "Spot Instances", "Savings Plans"],
    correct: [1],
    type: "single",
    explanation: "On-Demand Instances allow you to pay for compute capacity by the hour with no long-term commitments."
  },
  {
    id: 81,
    domain: 4,
    text: "What is consolidated billing in AWS Organizations?",
    options: [
      "Individual bills for each account",
      "Single bill combining usage from multiple accounts",
      "Automatic payment processing",
      "Cost allocation tags"
    ],
    correct: [1],
    type: "single",
    explanation: "Consolidated billing combines usage from multiple accounts into a single bill with potential volume discounts."
  },
  {
    id: 82,
    domain: 4,
    text: "Which tool helps estimate the cost of AWS services before using them?",
    options: ["AWS Cost Explorer", "AWS Pricing Calculator", "AWS Budgets", "AWS Cost and Usage Report"],
    correct: [1],
    type: "single",
    explanation: "AWS Pricing Calculator helps estimate monthly AWS bills based on expected usage."
  },
  {
    id: 83,
    domain: 4,
    text: "What are AWS Savings Plans?",
    options: [
      "Free tier benefits",
      "Flexible pricing model with commitment to usage",
      "One-time purchase discounts",
      "Monthly subscription service"
    ],
    correct: [1],
    type: "single",
    explanation: "Savings Plans offer flexible pricing with significant savings in exchange for usage commitment."
  },
  {
    id: 84,
    domain: 4,
    text: "Which AWS service is always free?",
    options: ["Amazon EC2", "Amazon S3", "AWS IAM", "Amazon RDS"],
    correct: [2],
    type: "single",
    explanation: "AWS IAM is always free with no additional charges for its use."
  },
  {
    id: 85,
    domain: 4,
    text: "What is the benefit of using tags for cost allocation?",
    options: [
      "Improve security",
      "Track and categorize costs by project or department",
      "Increase performance",
      "Automate deployments"
    ],
    correct: [1],
    type: "single",
    explanation: "Cost allocation tags help organize and track AWS costs by categorizing resources."
  },
  {
    id: 86,
    domain: 4,
    text: "Which support plan provides 24/7 access to Cloud Support Engineers?",
    options: ["Basic", "Developer", "Business", "All plans"],
    correct: [2],
    type: "single",
    explanation: "Business and Enterprise plans provide 24/7 access to Cloud Support Engineers."
  },
  {
    id: 87,
    domain: 4,
    text: "What is the AWS Total Cost of Ownership (TCO) Calculator used for?",
    options: [
      "Calculate current AWS costs",
      "Compare costs of running infrastructure on-premises vs AWS",
      "Set budget alerts",
      "Estimate future usage"
    ],
    correct: [1],
    type: "single",
    explanation: "TCO Calculator helps compare the cost of on-premises infrastructure to AWS cloud."
  },
  {
    id: 88,
    domain: 4,
    text: "Which service provides detailed cost and usage data?",
    options: ["AWS Cost Explorer", "AWS Cost and Usage Report", "AWS Budgets", "AWS Pricing Calculator"],
    correct: [1],
    type: "single",
    explanation: "AWS Cost and Usage Report provides the most comprehensive cost and usage data available."
  },
  {
    id: 89,
    domain: 4,
    text: "What happens when you exceed AWS Free Tier limits?",
    options: [
      "Account is suspended",
      "Standard pay-as-you-go rates apply",
      "No additional charges",
      "Automatic upgrade to paid tier"
    ],
    correct: [1],
    type: "single",
    explanation: "When Free Tier limits are exceeded, standard usage rates apply automatically."
  },
  {
    id: 90,
    domain: 4,
    text: "Which factors affect S3 costs? (Select TWO)",
    options: [
      "Storage class used",
      "Number of IAM users",
      "Number of requests",
      "EC2 instance type",
      "VPC configuration"
    ],
    correct: [0, 2],
    type: "multiple",
    explanation: "S3 costs are based on storage class, amount of data stored, and number/type of requests."
  },

  // Additional questions for comprehensive coverage
  {
    id: 91,
    domain: 1,
    text: "What is the benefit of using multiple Availability Zones for deploying applications?",
    options: [
      "Lower costs",
      "Improved fault tolerance and high availability",
      "Faster performance",
      "Simplified management"
    ],
    correct: [1],
    type: "single",
    explanation: "Multiple AZs protect against single data center failures, improving availability and fault tolerance."
  },
  {
    id: 92,
    domain: 1,
    text: "Which cloud deployment model combines on-premises infrastructure with cloud services?",
    options: ["Public", "Private", "Hybrid", "Community"],
    correct: [2],
    type: "single",
    explanation: "Hybrid cloud integrates on-premises data centers with cloud infrastructure."
  },
  {
    id: 93,
    domain: 1,
    text: "What does 'infrastructure as code' mean?",
    options: [
      "Writing application code",
      "Managing infrastructure through machine-readable files",
      "Coding security policies",
      "Programming network routes"
    ],
    correct: [1],
    type: "single",
    explanation: "Infrastructure as code manages infrastructure using configuration files rather than manual processes."
  },
  {
    id: 94,
    domain: 1,
    text: "Which advantage allows customers to stop guessing capacity needs?",
    options: [
      "Scalability and elasticity",
      "Global reach",
      "Cost savings",
      "Security"
    ],
    correct: [0],
    type: "single",
    explanation: "Scalability and elasticity allow automatic adjustment of capacity based on actual demand."
  },
  {
    id: 95,
    domain: 1,
    text: "What is the main benefit of AWS's global infrastructure?",
    options: [
      "Lower costs",
      "Deploy applications close to end users worldwide",
      "Simplified billing",
      "Reduced security risks"
    ],
    correct: [1],
    type: "single",
    explanation: "Global infrastructure allows deploying applications in multiple geographic regions for lower latency."
  },
  {
    id: 96,
    domain: 2,
    text: "What should you do with unused IAM user access keys?",
    options: [
      "Share them with team members",
      "Rotate them annually",
      "Delete or deactivate them",
      "Store them in documentation"
    ],
    correct: [2],
    type: "single",
    explanation: "Unused access keys should be deleted or deactivated to follow security best practices."
  },
  {
    id: 97,
    domain: 2,
    text: "Which service automatically analyzes and identifies AWS resources that are shared externally?",
    options: ["AWS IAM Access Analyzer", "Amazon GuardDuty", "AWS Config", "AWS CloudTrail"],
    correct: [0],
    type: "single",
    explanation: "IAM Access Analyzer helps identify resources shared with external entities."
  },
  {
    id: 98,
    domain: 2,
    text: "What is AWS Certificate Manager used for?",
    options: [
      "Manage IAM certificates",
      "Provision and manage SSL/TLS certificates",
      "Certificate exam preparation",
      "Compliance certifications"
    ],
    correct: [1],
    type: "single",
    explanation: "AWS Certificate Manager provisions, manages, and deploys SSL/TLS certificates."
  },
  {
    id: 99,
    domain: 2,
    text: "Under the Shared Responsibility Model, who manages AWS infrastructure security?",
    options: ["Customer", "AWS", "Third-party auditor", "Both AWS and customer"],
    correct: [1],
    type: "single",
    explanation: "AWS is responsible for security 'of' the cloud - the infrastructure that runs AWS services."
  },
  {
    id: 100,
    domain: 2,
    text: "What is the purpose of AWS Network Firewall?",
    options: [
      "Monitor API calls",
      "Protect VPC with managed firewall service",
      "Manage SSL certificates",
      "Scan for malware"
    ],
    correct: [1],
    type: "single",
    explanation: "AWS Network Firewall provides network traffic filtering for Amazon VPC."
  },
  {
    id: 101,
    domain: 3,
    text: "Which service provides fully managed Docker container registry?",
    options: ["Amazon ECS", "Amazon ECR", "Amazon EKS", "AWS Fargate"],
    correct: [1],
    type: "single",
    explanation: "Amazon ECR (Elastic Container Registry) is a fully managed container registry."
  },
  {
    id: 102,
    domain: 3,
    text: "What is AWS Step Functions?",
    options: [
      "Database service",
      "Workflow orchestration service",
      "Monitoring service",
      "Storage service"
    ],
    correct: [1],
    type: "single",
    explanation: "Step Functions coordinates multiple AWS services into serverless workflows."
  },
  {
    id: 103,
    domain: 3,
    text: "Which service provides managed message broker for Apache ActiveMQ and RabbitMQ?",
    options: ["Amazon SQS", "Amazon SNS", "Amazon MQ", "Amazon Kinesis"],
    correct: [2],
    type: "single",
    explanation: "Amazon MQ is a managed message broker service for ActiveMQ and RabbitMQ."
  },
  {
    id: 104,
    domain: 3,
    text: "What is AWS Global Accelerator?",
    options: [
      "CDN service",
      "Network service that improves availability and performance",
      "Database acceleration",
      "Compute optimization"
    ],
    correct: [1],
    type: "single",
    explanation: "Global Accelerator improves application availability and performance using AWS global network."
  },
  {
    id: 105,
    domain: 3,
    text: "Which service provides managed Apache Spark and Hadoop?",
    options: ["AWS Glue", "Amazon EMR", "Amazon Athena", "AWS Data Pipeline"],
    correct: [1],
    type: "single",
    explanation: "Amazon EMR (Elastic MapReduce) provides managed big data frameworks including Spark and Hadoop."
  },
  {
    id: 106,
    domain: 3,
    text: "What is AWS Outposts?",
    options: [
      "Edge computing service",
      "Fully managed service that extends AWS infrastructure to on-premises",
      "Content delivery network",
      "Database service"
    ],
    correct: [1],
    type: "single",
    explanation: "AWS Outposts brings AWS infrastructure and services to on-premises facilities."
  },
  {
    id: 107,
    domain: 3,
    text: "Which service provides managed workflows for big data processing?",
    options: ["AWS Step Functions", "AWS Data Pipeline", "Amazon EMR", "AWS Glue"],
    correct: [1],
    type: "single",
    explanation: "AWS Data Pipeline processes and moves data between different AWS compute and storage services."
  },
  {
    id: 108,
    domain: 3,
    text: "What is Amazon QuickSight?",
    options: [
      "Monitoring service",
      "Business intelligence and visualization service",
      "Database service",
      "Security service"
    ],
    correct: [1],
    type: "single",
    explanation: "Amazon QuickSight is a cloud-powered business intelligence service for creating visualizations."
  },
  {
    id: 109,
    domain: 3,
    text: "Which service provides managed time-series database?",
    options: ["Amazon DynamoDB", "Amazon Timestream", "Amazon RDS", "Amazon Neptune"],
    correct: [1],
    type: "single",
    explanation: "Amazon Timestream is a fast, scalable, fully managed time-series database."
  },
  {
    id: 110,
    domain: 3,
    text: "What is AWS App Runner?",
    options: [
      "Container orchestration",
      "Fully managed service to deploy containerized web apps",
      "Serverless compute",
      "Database migration"
    ],
    correct: [1],
    type: "single",
    explanation: "AWS App Runner makes it easy to deploy containerized web applications and APIs at scale."
  },
  {
    id: 111,
    domain: 4,
    text: "Which pricing option requires no upfront payment?",
    options: ["All Upfront Reserved Instances", "Partial Upfront Reserved Instances", "On-Demand Instances", "Spot Instances"],
    correct: [2],
    type: "single",
    explanation: "On-Demand Instances have no upfront costs - you pay only for what you use."
  },
  {
    id: 112,
    domain: 4,
    text: "What is AWS Compute Savings Plans?",
    options: [
      "EC2 discount program",
      "Flexible pricing model for compute usage across EC2, Lambda, and Fargate",
      "Storage discount",
      "Network transfer discount"
    ],
    correct: [1],
    type: "single",
    explanation: "Compute Savings Plans provide savings on compute usage regardless of instance family, size, or region."
  },
  {
    id: 113,
    domain: 4,
    text: "Which factors affect EC2 pricing? (Select TWO)",
    options: [
      "Instance type",
      "Number of IAM users",
      "Region",
      "S3 bucket names",
      "CloudWatch metrics"
    ],
    correct: [0, 2],
    type: "multiple",
    explanation: "EC2 pricing varies by instance type and the region where instances are deployed."
  },
  {
    id: 114,
    domain: 4,
    text: "What is the AWS Partner Network (APN)?",
    options: [
      "AWS employee network",
      "Global community of partners that leverage AWS",
      "Internal AWS communication tool",
      "Customer support forum"
    ],
    correct: [1],
    type: "single",
    explanation: "APN is a global community of partners that build solutions and services on AWS."
  },
  {
    id: 115,
    domain: 4,
    text: "Which support plan provides access to AWS Support API?",
    options: ["Basic", "Developer", "Business", "All plans"],
    correct: [2],
    type: "single",
    explanation: "Business and Enterprise support plans include access to the AWS Support API."
  },
  {
    id: 116,
    domain: 1,
    text: "What is serverless computing?",
    options: [
      "Running servers without OS",
      "Cloud provider manages server infrastructure",
      "Virtual private servers",
      "Dedicated physical servers"
    ],
    correct: [1],
    type: "single",
    explanation: "Serverless computing allows running code without provisioning or managing servers."
  },
  {
    id: 117,
    domain: 1,
    text: "Which represents the concept of 'agility' in cloud computing?",
    options: [
      "Manual capacity planning",
      "Quick access to IT resources and faster innovation",
      "Physical hardware ownership",
      "Long procurement cycles"
    ],
    correct: [1],
    type: "single",
    explanation: "Agility means reduced time to make resources available to developers from weeks to minutes."
  },
  {
    id: 118,
    domain: 2,
    text: "What is AWS Systems Manager Parameter Store?",
    options: [
      "Database parameter configuration",
      "Secure storage for configuration data and secrets",
      "EC2 instance parameters",
      "Network parameter settings"
    ],
    correct: [1],
    type: "single",
    explanation: "Parameter Store provides secure, hierarchical storage for configuration data and secrets."
  },
  {
    id: 119,
    domain: 2,
    text: "Which service helps detect and respond to security findings?",
    options: ["AWS Security Hub", "AWS Config", "AWS CloudTrail", "AWS Systems Manager"],
    correct: [0],
    type: "single",
    explanation: "Security Hub aggregates and prioritizes security findings from multiple AWS services."
  },
  {
    id: 120,
    domain: 3,
    text: "What is Amazon EventBridge?",
    options: [
      "Load balancer",
      "Serverless event bus service",
      "Database service",
      "Storage gateway"
    ],
    correct: [1],
    type: "single",
    explanation: "EventBridge is a serverless event bus that connects applications using events."
  },
  {
    id: 121,
    domain: 3,
    text: "Which service provides managed Apache Kafka?",
    options: ["Amazon MQ", "Amazon MSK", "Amazon SQS", "Amazon Kinesis"],
    correct: [1],
    type: "single",
    explanation: "Amazon MSK (Managed Streaming for Apache Kafka) is a fully managed Apache Kafka service."
  },
  {
    id: 122,
    domain: 3,
    text: "What is AWS Transit Gateway?",
    options: [
      "API gateway",
      "Network transit hub connecting VPCs and on-premises networks",
      "Storage gateway",
      "Database gateway"
    ],
    correct: [1],
    type: "single",
    explanation: "Transit Gateway connects VPCs and on-premises networks through a central hub."
  },
  {
    id: 123,
    domain: 3,
    text: "Which service provides managed blockchain networks?",
    options: ["AWS Lambda", "Amazon Managed Blockchain", "Amazon DynamoDB", "AWS Step Functions"],
    correct: [1],
    type: "single",
    explanation: "Amazon Managed Blockchain creates and manages scalable blockchain networks."
  },
  {
    id: 124,
    domain: 3,
    text: "What is AWS Storage Gateway?",
    options: [
      "S3 bucket",
      "Hybrid cloud storage service connecting on-premises to AWS",
      "Database service",
      "CDN service"
    ],
    correct: [1],
    type: "single",
    explanation: "Storage Gateway connects on-premises software appliances with cloud-based storage."
  },
  {
    id: 125,
    domain: 3,
    text: "Which service provides managed graph database?",
    options: ["Amazon DynamoDB", "Amazon Neptune", "Amazon RDS", "Amazon DocumentDB"],
    correct: [1],
    type: "single",
    explanation: "Amazon Neptune is a fully managed graph database service."
  },
  {
    id: 126,
    domain: 4,
    text: "What determines data transfer costs in AWS?",
    options: [
      "Data transfer into AWS is free, outbound data transfer is charged",
      "All data transfer is free",
      "Both inbound and outbound are charged equally",
      "Only inter-region transfer is charged"
    ],
    correct: [0],
    type: "single",
    explanation: "Data transfer into AWS is typically free, while outbound data transfer incurs charges."
  },
  {
    id: 127,
    domain: 4,
    text: "Which service helps optimize AWS costs through recommendations?",
    options: ["AWS Cost Explorer", "AWS Trusted Advisor", "AWS Budgets", "AWS Organizations"],
    correct: [1],
    type: "single",
    explanation: "Trusted Advisor provides cost optimization recommendations along with other best practices."
  },
  {
    id: 128,
    domain: 1,
    text: "What is a local zone in AWS?",
    options: [
      "Same as Availability Zone",
      "Extension of AWS Region closer to end users",
      "On-premises data center",
      "Edge location"
    ],
    correct: [1],
    type: "single",
    explanation: "Local Zones place AWS compute, storage, and other services closer to large population centers."
  },
  {
    id: 129,
    domain: 1,
    text: "Which design principle focuses on automating security best practices?",
    options: [
      "Manual security reviews",
      "Security by obscurity",
      "Implement security at all layers",
      "Minimal logging"
    ],
    correct: [2],
    type: "single",
    explanation: "Implementing security at all layers is a key AWS Well-Architected principle."
  },
  {
    id: 130,
    domain: 2,
    text: "What is Amazon Detective?",
    options: [
      "Threat detection service",
      "Security investigation and analysis service",
      "Compliance auditing tool",
      "Vulnerability scanner"
    ],
    correct: [1],
    type: "single",
    explanation: "Detective analyzes and visualizes security data to investigate potential security issues."
  },
  {
    id: 131,
    domain: 2,
    text: "Which feature helps enforce MFA for AWS console access?",
    options: [
      "Security groups",
      "IAM policies",
      "Network ACLs",
      "VPC endpoints"
    ],
    correct: [1],
    type: "single",
    explanation: "IAM policies can be configured to require MFA for console access."
  },
  {
    id: 132,
    domain: 3,
    text: "What is Amazon MemoryDB for Redis?",
    options: [
      "Cache service",
      "Redis-compatible durable in-memory database",
      "Relational database",
      "NoSQL database"
    ],
    correct: [1],
    type: "single",
    explanation: "MemoryDB is a durable, in-memory database compatible with Redis."
  },
  {
    id: 133,
    domain: 3,
    text: "Which service provides managed Apache Cassandra?",
    options: ["Amazon DynamoDB", "Amazon Keyspaces", "Amazon DocumentDB", "Amazon Neptune"],
    correct: [1],
    type: "single",
    explanation: "Amazon Keyspaces (for Apache Cassandra) is a scalable, managed Cassandra-compatible database."
  },
  {
    id: 134,
    domain: 3,
    text: "What is AWS Wavelength?",
    options: [
      "CDN service",
      "Service that brings AWS to 5G network edge",
      "Satellite communication service",
      "IoT service"
    ],
    correct: [1],
    type: "single",
    explanation: "Wavelength embeds AWS compute and storage within 5G networks for ultra-low latency."
  },
  {
    id: 135,
    domain: 3,
    text: "Which service provides managed Apache Airflow?",
    options: ["AWS Glue", "AWS Step Functions", "Amazon MWAA", "AWS Data Pipeline"],
    correct: [2],
    type: "single",
    explanation: "Amazon MWAA (Managed Workflows for Apache Airflow) is a managed orchestration service."
  },
  {
    id: 136,
    domain: 3,
    text: "What is AWS Backup?",
    options: [
      "S3 replication",
      "Centralized backup service across AWS services",
      "Database backup only",
      "EC2 snapshot service"
    ],
    correct: [1],
    type: "single",
    explanation: "AWS Backup centralizes and automates data backup across AWS services."
  },
  {
    id: 137,
    domain: 4,
    text: "What is AWS Marketplace?",
    options: [
      "Physical goods marketplace",
      "Digital catalog of third-party software solutions",
      "AWS training marketplace",
      "Job marketplace"
    ],
    correct: [1],
    type: "single",
    explanation: "AWS Marketplace is a digital catalog of software listings from independent vendors."
  },
  {
    id: 138,
    domain: 4,
    text: "Which report provides the most granular cost and usage data?",
    options: ["AWS Cost Explorer", "AWS Cost and Usage Report", "AWS Budgets", "Billing Dashboard"],
    correct: [1],
    type: "single",
    explanation: "Cost and Usage Report provides the most comprehensive and detailed cost information."
  },
  {
    id: 139,
    domain: 1,
    text: "What is the difference between scalability and elasticity?",
    options: [
      "They are the same",
      "Scalability is manual, elasticity is automatic",
      "Scalability adds resources, elasticity reduces them",
      "No significant difference"
    ],
    correct: [1],
    type: "single",
    explanation: "Scalability can be manual or automatic; elasticity specifically refers to automatic scaling up and down."
  },
  {
    id: 140,
    domain: 1,
    text: "Which is NOT a pillar of the AWS Well-Architected Framework?",
    options: [
      "Cost Optimization",
      "Sustainability",
      "Speed",
      "Security"
    ],
    correct: [2],
    type: "single",
    explanation: "The six pillars are: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability."
  },
  {
    id: 141,
    domain: 2,
    text: "What is AWS Resource Access Manager (RAM)?",
    options: [
      "Memory management service",
      "Service to share AWS resources across accounts",
      "IAM role manager",
      "Database access control"
    ],
    correct: [1],
    type: "single",
    explanation: "RAM enables sharing of AWS resources across AWS accounts."
  },
  {
    id: 142,
    domain: 2,
    text: "Which service helps maintain compliance evidence?",
    options: ["AWS CloudTrail", "AWS Audit Manager", "AWS Config", "AWS Inspector"],
    correct: [1],
    type: "single",
    explanation: "AWS Audit Manager helps continuously audit AWS usage and automate evidence collection."
  },
  {
    id: 143,
    domain: 3,
    text: "What is Amazon AppFlow?",
    options: [
      "Application deployment service",
      "Integration service for SaaS applications and AWS services",
      "Network flow logs",
      "Data warehouse"
    ],
    correct: [1],
    type: "single",
    explanation: "AppFlow is a fully managed integration service for securely transferring data between SaaS apps and AWS."
  },
  {
    id: 144,
    domain: 3,
    text: "Which service provides managed Microsoft SQL Server?",
    options: ["Amazon Aurora", "Amazon RDS", "Amazon Redshift", "Amazon DynamoDB"],
    correct: [1],
    type: "single",
    explanation: "Amazon RDS supports multiple database engines including Microsoft SQL Server."
  },
  {
    id: 145,
    domain: 3,
    text: "What is AWS IoT Core?",
    options: [
      "Edge computing service",
      "Managed cloud service for IoT devices",
      "Container service",
      "Machine learning service"
    ],
    correct: [1],
    type: "single",
    explanation: "IoT Core connects IoT devices to the cloud and other devices."
  },
  {
    id: 146,
    domain: 3,
    text: "Which service provides fully managed MongoDB-compatible database?",
    options: ["Amazon DynamoDB", "Amazon DocumentDB", "Amazon RDS", "Amazon Neptune"],
    correct: [1],
    type: "single",
    explanation: "Amazon DocumentDB is a fully managed MongoDB-compatible document database."
  },
  {
    id: 147,
    domain: 3,
    text: "What is AWS Application Discovery Service?",
    options: [
      "Application marketplace",
      "Helps plan migration by collecting data about on-premises data centers",
      "Service discovery for microservices",
      "Application monitoring"
    ],
    correct: [1],
    type: "single",
    explanation: "Application Discovery Service helps plan migrations by gathering information about on-premises data centers."
  },
  {
    id: 148,
    domain: 4,
    text: "What is a Reserved Instance Marketplace?",
    options: [
      "Buy new Reserved Instances",
      "Sell unused Reserved Instances to other AWS customers",
      "Trade Reserved Instances",
      "Rent Reserved Instances"
    ],
    correct: [1],
    type: "single",
    explanation: "RI Marketplace allows selling unused Standard Reserved Instances to other AWS customers."
  },
  {
    id: 149,
    domain: 1,
    text: "What is AWS's design principle regarding failure?",
    options: [
      "Avoid failure at all costs",
      "Design for failure and nothing fails",
      "Failures are acceptable",
      "Manual recovery only"
    ],
    correct: [1],
    type: "single",
    explanation: "AWS recommends designing systems to automatically handle component failures."
  },
  {
    id: 150,
    domain: 1,
    text: "Which concept allows treating infrastructure like software?",
    options: [
      "Software-defined networking",
      "Infrastructure as Code",
      "DevOps",
      "Continuous integration"
    ],
    correct: [1],
    type: "single",
    explanation: "Infrastructure as Code enables version control and automated deployment of infrastructure."
  },
  {
    id: 151,
    domain: 2,
    text: "What is AWS Firewall Manager?",
    options: [
      "EC2 firewall",
      "Centralized firewall management across accounts",
      "Network monitoring",
      "VPN service"
    ],
    correct: [1],
    type: "single",
    explanation: "Firewall Manager centrally configures and manages firewall rules across accounts."
  },
  {
    id: 152,
    domain: 2,
    text: "Which compliance program is for healthcare data?",
    options: ["PCI DSS", "HIPAA", "SOC 2", "FedRAMP"],
    correct: [1],
    type: "single",
    explanation: "HIPAA (Health Insurance Portability and Accountability Act) governs healthcare data protection."
  },
  {
    id: 153,
    domain: 3,
    text: "What is Amazon Managed Grafana?",
    options: [
      "Database service",
      "Managed visualization service for operational metrics",
      "Container service",
      "Storage service"
    ],
    correct: [1],
    type: "single",
    explanation: "Amazon Managed Grafana is a fully managed service for Grafana visualizations."
  },
  {
    id: 154,
    domain: 3,
    text: "Which service provides managed Prometheus?",
    options: [
      "CloudWatch",
      "Amazon Managed Service for Prometheus",
      "X-Ray",
      "CloudTrail"
    ],
    correct: [1],
    type: "single",
    explanation: "Amazon Managed Service for Prometheus is a Prometheus-compatible monitoring service."
  },
  {
    id: 155,
    domain: 3,
    text: "What is AWS Proton?",
    options: [
      "Particle physics service",
      "Automated infrastructure deployment for container and serverless apps",
      "Networking service",
      "Database service"
    ],
    correct: [1],
    type: "single",
    explanation: "AWS Proton is an automated delivery service for container and serverless applications."
  },
  {
    id: 156,
    domain: 3,
    text: "Which service provides managed ETL workflows?",
    options: [
      "AWS Glue",
      "Amazon EMR",
      "AWS Data Pipeline",
      "All of the above"
    ],
    correct: [3],
    type: "single",
    explanation: "All three services can perform ETL operations, though each has different use cases."
  },
  {
    id: 157,
    domain: 3,
    text: "What is AWS Lake Formation?",
    options: [
      "Data warehouse",
      "Service to build and manage data lakes",
      "Database service",
      "Analytics service"
    ],
    correct: [1],
    type: "single",
    explanation: "Lake Formation makes it easy to set up, secure, and manage data lakes."
  },
  {
    id: 158,
    domain: 3,
    text: "Which service provides distributed tracing for applications?",
    options: [
      "CloudWatch",
      "CloudTrail",
      "AWS X-Ray",
      "Config"
    ],
    correct: [2],
    type: "single",
    explanation: "AWS X-Ray helps analyze and debug distributed applications."
  },
  {
    id: 159,
    domain: 4,
    text: "What is an AWS Free Tier service that is always free?",
    options: [
      "Amazon EC2 (750 hours/month)",
      "AWS Lambda (1M requests/month)",
      "Amazon S3 (5GB storage)",
      "Amazon RDS (750 hours/month)"
    ],
    correct: [1],
    type: "single",
    explanation: "AWS Lambda offers 1M free requests per month permanently, not just for 12 months."
  },
  {
    id: 160,
    domain: 4,
    text: "Which tool helps compare Reserved Instance vs On-Demand costs?",
    options: [
      "AWS Pricing Calculator",
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Trusted Advisor"
    ],
    correct: [0],
    type: "single",
    explanation: "AWS Pricing Calculator can model different purchasing options to compare costs."
  },
  {
    id: 161,
    domain: 1,
    text: "What does the 'cattle not pets' philosophy mean?",
    options: [
      "Servers are disposable and replaceable",
      "Servers need individual care",
      "Manual server management",
      "Physical server ownership"
    ],
    correct: [0],
    type: "single",
    explanation: "Treating servers as cattle means they are interchangeable and can be automatically replaced."
  },
  {
    id: 162,
    domain: 1,
    text: "How many Availability Zones does an AWS Region typically have?",
    options: [
      "1",
      "2 or more (typically 3 or more)",
      "Always exactly 3",
      "10 or more"
    ],
    correct: [1],
    type: "single",
    explanation: "AWS Regions have at least 2 AZs, with most having 3 or more for high availability."
  },
  {
    id: 163,
    domain: 2,
    text: "What is AWS Control Tower?",
    options: [
      "Server management tool",
      "Service to set up and govern secure multi-account AWS environment",
      "Monitoring service",
      "Deployment service"
    ],
    correct: [1],
    type: "single",
    explanation: "Control Tower automates setup of a well-architected multi-account environment."
  },
  {
    id: 164,
    domain: 2,
    text: "Which service provides DDoS attack visibility and reporting?",
    options: [
      "AWS WAF",
      "AWS Shield Advanced",
      "Amazon GuardDuty",
      "AWS Security Hub"
    ],
    correct: [1],
    type: "single",
    explanation: "AWS Shield Advanced provides detailed attack diagnostics and DDoS Response Team support."
  },
  {
    id: 165,
    domain: 3,
    text: "What is Amazon Elastic Transcoder?",
    options: [
      "Code conversion service",
      "Media file conversion service",
      "Language translation",
      "Data transformation"
    ],
    correct: [1],
    type: "single",
    explanation: "Elastic Transcoder converts media files from source format into versions for playback on devices."
  },
  {
    id: 166,
    domain: 3,
    text: "Which service provides managed OpenSearch (formerly Elasticsearch)?",
    options: [
      "Amazon RDS",
      "Amazon OpenSearch Service",
      "Amazon CloudSearch",
      "Amazon Kendra"
    ],
    correct: [1],
    type: "single",
    explanation: "Amazon OpenSearch Service makes it easy to deploy, operate, and scale OpenSearch clusters."
  },
  {
    id: 167,
    domain: 3,
    text: "What is AWS Amplify?",
    options: [
      "Audio amplification service",
      "Platform for building mobile and web applications",
      "Network amplifier",
      "Storage service"
    ],
    correct: [1],
    type: "single",
    explanation: "AWS Amplify is a complete solution for building and deploying full-stack applications."
  },
  {
    id: 168,
    domain: 3,
    text: "Which service provides managed Apache Flink?",
    options: [
      "Amazon Kinesis Data Analytics",
      "AWS Glue",
      "Amazon EMR",
      "AWS Data Pipeline"
    ],
    correct: [0],
    type: "single",
    explanation: "Kinesis Data Analytics for Apache Flink provides managed streaming data processing."
  },
  {
    id: 169,
    domain: 3,
    text: "What is AWS CodeDeploy?",
    options: [
      "Code editor",
      "Automated deployment service",
      "Version control",
      "Code compilation"
    ],
    correct: [1],
    type: "single",
    explanation: "CodeDeploy automates code deployments to any instance, including EC2 and on-premises."
  },
  {
    id: 170,
    domain: 4,
    text: "What is a Convertible Reserved Instance?",
    options: [
      "Can be converted to Spot Instance",
      "Can change instance family, OS, and tenancy",
      "Can be converted to On-Demand",
      "One-way conversion only"
    ],
    correct: [1],
    type: "single",
    explanation: "Convertible RIs provide flexibility to change instance attributes during the term."
  },
  {
    id: 171,
    domain: 1,
    text: "What is loose coupling in cloud architecture?",
    options: [
      "Components are tightly integrated",
      "Components are independent and can fail without affecting others",
      "All services run on one server",
      "Manual coordination required"
    ],
    correct: [1],
    type: "single",
    explanation: "Loose coupling means components interact through well-defined interfaces and can operate independently."
  },
  {
    id: 172,
    domain: 1,
    text: "Which Well-Architected pillar focuses on environmental impact?",
    options: [
      "Cost Optimization",
      "Operational Excellence",
      "Sustainability",
      "Performance Efficiency"
    ],
    correct: [2],
    type: "single",
    explanation: "The Sustainability pillar focuses on minimizing environmental impacts of cloud workloads."
  },
  {
    id: 173,
    domain: 2,
    text: "What is the AWS Acceptable Use Policy?",
    options: [
      "Employee code of conduct",
      "Policy describing prohibited uses of AWS services",
      "Data retention policy",
      "Pricing policy"
    ],
    correct: [1],
    type: "single",
    explanation: "The Acceptable Use Policy describes prohibited uses of the AWS services."
  },
  {
    id: 174,
    domain: 2,
    text: "Which service provides managed Active Directory?",
    options: [
      "AWS IAM",
      "AWS Directory Service",
      "Amazon Cognito",
      "AWS SSO"
    ],
    correct: [1],
    type: "single",
    explanation: "AWS Directory Service provides managed Microsoft Active Directory."
  },
  {
    id: 175,
    domain: 3,
    text: "What is Amazon Comprehend?",
    options: [
      "Data compression",
      "Natural language processing service",
      "Database service",
      "Network analyzer"
    ],
    correct: [1],
    type: "single",
    explanation: "Amazon Comprehend uses machine learning to find insights and relationships in text."
  },
  {
    id: 176,
    domain: 3,
    text: "Which service provides managed machine learning model deployment?",
    options: [
      "Amazon SageMaker",
      "AWS Deep Learning AMIs",
      "Amazon Rekognition",
      "Amazon Comprehend"
    ],
    correct: [0],
    type: "single",
    explanation: "Amazon SageMaker provides everything needed to build, train, and deploy ML models."
  },
  {
    id: 177,
    domain: 3,
    text: "What is AWS Device Farm?",
    options: [
      "IoT device management",
      "Application testing service on real devices",
      "Hardware marketplace",
      "Device inventory"
    ],
    correct: [1],
    type: "single",
    explanation: "AWS Device Farm tests mobile and web applications on real devices in the AWS Cloud."
  },
  {
    id: 178,
    domain: 3,
    text: "Which service provides image and video analysis?",
    options: [
      "Amazon Comprehend",
      "Amazon Rekognition",
      "Amazon Textract",
      "Amazon Transcribe"
    ],
    correct: [1],
    type: "single",
    explanation: "Amazon Rekognition analyzes images and videos for objects, people, text, and activities."
  },
  {
    id: 179,
    domain: 3,
    text: "What is AWS CodeCommit?",
    options: [
      "Code deployment",
      "Managed source control service (Git)",
      "Code review tool",
      "IDE"
    ],
    correct: [1],
    type: "single",
    explanation: "CodeCommit is a fully managed source control service that hosts Git repositories."
  },
  {
    id: 180,
    domain: 4,
    text: "What happens to data transfer between services in the same Availability Zone?",
    options: [
      "Always charged",
      "Free when using private IP addresses",
      "Double charges",
      "50% discount"
    ],
    correct: [1],
    type: "single",
    explanation: "Data transfer within the same AZ using private IP addresses is free."
  },
  {
    id: 181,
    domain: 1,
    text: "What is immutable infrastructure?",
    options: [
      "Infrastructure that never changes",
      "Replace servers instead of updating them",
      "Permanent physical servers",
      "Static IP addresses"
    ],
    correct: [1],
    type: "single",
    explanation: "Immutable infrastructure means servers are replaced rather than modified after deployment."
  },
  {
    id: 182,
    domain: 2,
    text: "What is Amazon Cognito?",
    options: [
      "Machine learning service",
      "User authentication and authorization service",
      "Database service",
      "Monitoring service"
    ],
    correct: [1],
    type: "single",
    explanation: "Amazon Cognito provides authentication, authorization, and user management for web and mobile apps."
  },
  {
    id: 183,
    domain: 2,
    text: "Which service discovers sensitive data in AWS?",
    options: [
      "Amazon Macie",
      "AWS Config",
      "Amazon Inspector",
      "AWS Security Hub"
    ],
    correct: [0],
    type: "single",
    explanation: "Amazon Macie discovers and protects sensitive data like PII using machine learning."
  },
  {
    id: 184,
    domain: 3,
    text: "What is Amazon Polly?",
    options: [
      "Polling service",
      "Text-to-speech service",
      "Survey tool",
      "Voting system"
    ],
    correct: [1],
    type: "single",
    explanation: "Amazon Polly converts text into lifelike speech using deep learning."
  },
  {
    id: 185,
    domain: 3,
    text: "Which service extracts text from documents?",
    options: [
      "Amazon Comprehend",
      "Amazon Textract",
      "Amazon Rekognition",
      "Amazon Transcribe"
    ],
    correct: [1],
    type: "single",
    explanation: "Amazon Textract automatically extracts text and data from scanned documents."
  },
  {
    id: 186,
    domain: 3,
    text: "What is AWS CodeBuild?",
    options: [
      "Code editor",
      "Managed build service that compiles code",
      "Source control",
      "Deployment service"
    ],
    correct: [1],
    type: "single",
    explanation: "CodeBuild is a fully managed build service that compiles source code and runs tests."
  },
  {
    id: 187,
    domain: 3,
    text: "Which service converts speech to text?",
    options: [
      "Amazon Polly",
      "Amazon Transcribe",
      "Amazon Translate",
      "Amazon Comprehend"
    ],
    correct: [1],
    type: "single",
    explanation: "Amazon Transcribe automatically converts speech to text."
  },
  {
    id: 188,
    domain: 3,
    text: "What is AWS CodePipeline?",
    options: [
      "Data pipeline",
      "Continuous delivery service",
      "Network pipeline",
      "Storage pipeline"
    ],
    correct: [1],
    type: "single",
    explanation: "CodePipeline is a continuous delivery service for fast and reliable application updates."
  },
  {
    id: 189,
    domain: 4,
    text: "What is the main difference between All Upfront and No Upfront Reserved Instances?",
    options: [
      "Performance difference",
      "Payment structure and discount level",
      "Region availability",
      "Instance types available"
    ],
    correct: [1],
    type: "single",
    explanation: "All Upfront provides the highest discount, No Upfront spreads costs but offers lower discount."
  },
  {
    id: 190,
    domain: 4,
    text: "Which AWS service incurs no charge?",
    options: [
      "Amazon EC2",
      "Amazon VPC",
      "Amazon RDS",
      "Amazon S3"
    ],
    correct: [1],
    type: "single",
    explanation: "Amazon VPC itself has no additional charge, though resources within it may incur charges."
  },
  {
    id: 191,
    domain: 1,
    text: "What is meant by 'disposable resources' in cloud?",
    options: [
      "Resources are wasted",
      "Resources can be easily created and terminated",
      "Low-quality resources",
      "Temporary storage only"
    ],
    correct: [1],
    type: "single",
    explanation: "Disposable resources can be launched and terminated easily without significant impact."
  },
  {
    id: 192,
    domain: 1,
    text: "Which describes a monolithic architecture?",
    options: [
      "Independent microservices",
      "Single tightly-coupled application",
      "Distributed system",
      "Serverless architecture"
    ],
    correct: [1],
    type: "single",
    explanation: "Monolithic architecture has all components tightly integrated into a single application."
  },
  {
    id: 193,
    domain: 2,
    text: "What is AWS Single Sign-On (AWS SSO / IAM Identity Center)?",
    options: [
      "Password manager",
      "Centralized access management for multiple AWS accounts",
      "VPN service",
      "API gateway"
    ],
    correct: [1],
    type: "single",
    explanation: "AWS SSO (now IAM Identity Center) provides single sign-on access to multiple AWS accounts."
  },
  {
    id: 194,
    domain: 2,
    text: "What is encryption at rest?",
    options: [
      "Encrypting data during transmission",
      "Encrypting data stored on disk",
      "Encrypting API calls",
      "Encrypting network traffic"
    ],
    correct: [1],
    type: "single",
    explanation: "Encryption at rest protects data stored on disks from unauthorized access."
  },
  {
    id: 195,
    domain: 3,
    text: "What is Amazon Translate?",
    options: [
      "Code translation",
      "Language translation service",
      "Data transformation",
      "Format conversion"
    ],
    correct: [1],
    type: "single",
    explanation: "Amazon Translate provides neural machine translation for text between languages."
  },
  {
    id: 196,
    domain: 3,
    text: "Which service provides managed real-time streaming data?",
    options: [
      "Amazon SQS",
      "Amazon Kinesis",
      "AWS Batch",
      "AWS Step Functions"
    ],
    correct: [1],
    type: "single",
    explanation: "Amazon Kinesis makes it easy to collect, process, and analyze real-time streaming data."
  },
  {
    id: 197,
    domain: 3,
    text: "What is AWS Batch?",
    options: [
      "Managed batch processing service",
      "Data warehouse",
      "Message queue",
      "File storage"
    ],
    correct: [0],
    type: "single",
    explanation: "AWS Batch runs batch computing workloads on AWS."
  },
  {
    id: 198,
    domain: 3,
    text: "Which service provides intelligent document search?",
    options: [
      "Amazon Kendra",
      "Amazon CloudSearch",
      "Amazon Comprehend",
      "Amazon Textract"
    ],
    correct: [0],
    type: "single",
    explanation: "Amazon Kendra is an intelligent search service powered by machine learning."
  },
  {
    id: 199,
    domain: 3,
    text: "What is AWS CloudShell?",
    options: [
      "Terminal emulator",
      "Browser-based shell for AWS management",
      "Virtual desktop",
      "Container shell"
    ],
    correct: [1],
    type: "single",
    explanation: "AWS CloudShell is a browser-based shell that makes it easy to manage AWS resources."
  },
  {
    id: 200,
    domain: 4,
    text: "What is EC2 Savings Plans?",
    options: [
      "Discount on EC2 only",
      "Flexible pricing for EC2, Fargate, and Lambda usage",
      "Storage discount",
      "Network discount"
    ],
    correct: [1],
    type: "single",
    explanation: "Savings Plans provide flexible pricing for EC2, Fargate, and Lambda with commitment."
  },
  {
    id: 201,
    domain: 1,
    text: "What is a microservices architecture?",
    options: [
      "Small applications only",
      "Application built as independent, loosely coupled services",
      "Monolithic application",
      "Single-server deployment"
    ],
    correct: [1],
    type: "single",
    explanation: "Microservices architecture structures an application as collection of loosely coupled services."
  },
  {
    id: 202,
    domain: 1,
    text: "What does RTO stand for in disaster recovery?",
    options: [
      "Recovery Time Objective",
      "Real-Time Operations",
      "Return to Operations",
      "Rapid Transfer Operations"
    ],
    correct: [0],
    type: "single",
    explanation: "RTO is the maximum acceptable time that an application can be offline."
  },
  {
    id: 203,
    domain: 1,
    text: "What does RPO stand for in disaster recovery?",
    options: [
      "Rapid Protection Operations",
      "Recovery Point Objective",
      "Real-time Processing Operations",
      "Return Protection Operations"
    ],
    correct: [1],
    type: "single",
    explanation: "RPO is the maximum acceptable amount of data loss measured in time."
  },
  {
    id: 204,
    domain: 2,
    text: "What is encryption in transit?",
    options: [
      "Encrypting stored data",
      "Encrypting data as it moves over networks",
      "Encrypting databases",
      "Encrypting files"
    ],
    correct: [1],
    type: "single",
    explanation: "Encryption in transit protects data as it moves between locations over networks."
  },
  {
    id: 205,
    domain: 2,
    text: "What is AWS Secrets Manager rotation?",
    options: [
      "Manual password changes",
      "Automatic secret credential rotation",
      "Log rotation",
      "Key pair rotation"
    ],
    correct: [1],
    type: "single",
    explanation: "Secrets Manager can automatically rotate secrets on a schedule."
  },
  {
    id: 206,
    domain: 3,
    text: "What is Amazon Forecast?",
    options: [
      "Weather prediction",
      "Time-series forecasting service using ML",
      "Resource prediction",
      "Cost forecasting"
    ],
    correct: [1],
    type: "single",
    explanation: "Amazon Forecast uses machine learning to deliver accurate forecasts based on time-series data."
  },
  {
    id: 207,
    domain: 3,
    text: "Which service provides personalized recommendations?",
    options: [
      "Amazon Personalize",
      "Amazon Forecast",
      "Amazon Kendra",
      "Amazon Comprehend"
    ],
    correct: [0],
    type: "single",
    explanation: "Amazon Personalize creates personalized product and content recommendations."
  },
  {
    id: 208,
    domain: 3,
    text: "What is AWS App Mesh?",
    options: [
      "Application marketplace",
      "Service mesh for microservices",
      "Mobile app builder",
      "Network mesh"
    ],
    correct: [1],
    type: "single",
    explanation: "App Mesh provides application-level networking for microservices."
  },
  {
    id: 209,
    domain: 3,
    text: "Which service provides fraud detection?",
    options: [
      "Amazon Fraud Detector",
      "Amazon GuardDuty",
      "Amazon Macie",
      "Amazon Detective"
    ],
    correct: [0],
    type: "single",
    explanation: "Amazon Fraud Detector uses machine learning to identify potentially fraudulent activity."
  },
  {
    id: 210,
    domain: 3,
    text: "What is AWS PrivateLink?",
    options: [
      "VPN service",
      "Private connectivity between VPCs and services",
      "Direct Connect alternative",
      "Private subnet"
    ],
    correct: [1],
    type: "single",
    explanation: "PrivateLink provides private connectivity between VPCs, AWS services, and on-premises."
  },
  {
    id: 211,
    domain: 4,
    text: "What is the benefit of volume discounts with consolidated billing?",
    options: [
      "Individual account discounts",
      "Combined usage across accounts for volume tiers",
      "Separate billing only",
      "No volume discounts"
    ],
    correct: [1],
    type: "single",
    explanation: "Consolidated billing combines usage across accounts to reach volume discount tiers faster."
  },
  {
    id: 212,
    domain: 4,
    text: "Which support plan provides less than 15-minute response for business-critical issues?",
    options: [
      "Business",
      "Enterprise",
      "Developer",
      "Basic"
    ],
    correct: [1],
    type: "single",
    explanation: "Enterprise support provides 15-minute response time for business-critical system down issues."
  },
  {
    id: 213,
    domain: 1,
    text: "What is the purpose of AWS Local Zones?",
    options: [
      "Backup locations",
      "Place resources closer to end users for low latency",
      "Development environments",
      "Cost savings"
    ],
    correct: [1],
    type: "single",
    explanation: "Local Zones place compute and storage closer to end users for single-digit millisecond latency."
  },
  {
    id: 214,
    domain: 1,
    text: "What is the shared responsibility model boundary for S3?",
    options: [
      "AWS manages everything",
      "AWS manages infrastructure, customer manages data and access controls",
      "Customer manages everything",
      "Third party manages security"
    ],
    correct: [1],
    type: "single",
    explanation: "For S3, AWS secures the infrastructure while customers secure their data and configure access."
  },
  {
    id: 215,
    domain: 2,
    text: "What is the principle of defense in depth?",
    options: [
      "Single security layer",
      "Multiple layers of security controls",
      "Physical security only",
      "Network security only"
    ],
    correct: [1],
    type: "single",
    explanation: "Defense in depth uses multiple security layers so if one fails, others still provide protection."
  },
  {
    id: 216,
    domain: 2,
    text: "What is a VPC endpoint?",
    options: [
      "VPN connection point",
      "Private connection to AWS services without internet gateway",
      "Public IP address",
      "Load balancer endpoint"
    ],
    correct: [1],
    type: "single",
    explanation: "VPC endpoints enable private connections to AWS services without using public internet."
  },
  {
    id: 217,
    domain: 3,
    text: "What is Amazon Connect?",
    options: [
      "VPN service",
      "Cloud contact center service",
      "Network connection",
      "Database connection pooling"
    ],
    correct: [1],
    type: "single",
    explanation: "Amazon Connect is a cloud-based contact center service."
  },
  {
    id: 218,
    domain: 3,
    text: "Which service provides code recommendations?",
    options: [
      "AWS CodeCommit",
      "Amazon CodeGuru",
      "AWS CodeBuild",
      "AWS CodeDeploy"
    ],
    correct: [1],
    type: "single",
    explanation: "Amazon CodeGuru provides intelligent recommendations for improving code quality."
  },
  {
    id: 219,
    domain: 3,
    text: "What is AWS DataSync?",
    options: [
      "Database synchronization",
      "Data transfer service for moving data to AWS",
      "Data backup",
      "Data replication"
    ],
    correct: [1],
    type: "single",
    explanation: "DataSync simplifies, automates, and accelerates moving data between on-premises and AWS."
  },
  {
    id: 220,
    domain: 3,
    text: "Which service manages API creation and publishing?",
    options: [
      "AWS Lambda",
      "Amazon API Gateway",
      "AWS AppSync",
      "Amazon CloudFront"
    ],
    correct: [1],
    type: "single",
    explanation: "API Gateway creates, publishes, maintains, monitors, and secures REST and WebSocket APIs."
  },
  {
    id: 221,
    domain: 4,
    text: "What are Spot Instances best suited for?",
    options: [
      "Critical databases",
      "Fault-tolerant, flexible, stateless workloads",
      "Production web servers",
      "Long-running critical processes"
    ],
    correct: [1],
    type: "single",
    explanation: "Spot Instances are ideal for fault-tolerant workloads that can handle interruptions."
  },
  {
    id: 222,
    domain: 4,
    text: "What is the minimum commitment period for Reserved Instances?",
    options: [
      "6 months",
      "1 year",
      "2 years",
      "5 years"
    ],
    correct: [1],
    type: "single",
    explanation: "Reserved Instances require a commitment of either 1 year or 3 years."
  },
  {
    id: 223,
    domain: 1,
    text: "What is the benefit of decoupling application components?",
    options: [
      "Reduced costs",
      "Components can scale and fail independently",
      "Faster performance",
      "Simpler management"
    ],
    correct: [1],
    type: "single",
    explanation: "Decoupling allows components to operate independently, improving resilience and scalability."
  },
  {
    id: 224,
    domain: 1,
    text: "What is AWS's recommendation for testing?",
    options: [
      "Test in production only",
      "Test at scale in isolated environments",
      "Manual testing only",
      "Skip testing in cloud"
    ],
    correct: [1],
    type: "single",
    explanation: "AWS recommends creating test environments that mirror production for comprehensive testing."
  },
  {
    id: 225,
    domain: 2,
    text: "What is AWS CloudHSM?",
    options: [
      "Cloud monitoring",
      "Hardware security module in AWS Cloud",
      "Security management",
      "Encryption software"
    ],
    correct: [1],
    type: "single",
    explanation: "CloudHSM provides hardware security modules in the AWS Cloud for cryptographic operations."
  },
  {
    id: 226,
    domain: 2,
    text: "What is a Network ACL?",
    options: [
      "Subnet-level firewall",
      "Instance-level firewall",
      "Application firewall",
      "DNS filter"
    ],
    correct: [0],
    type: "single",
    explanation: "Network ACLs are stateless firewalls that control traffic at the subnet level."
  },
  {
    id: 227,
    domain: 3,
    text: "What is Amazon SageMaker Canvas?",
    options: [
      "Drawing tool",
      "No-code ML model building",
      "Code editor",
      "Data visualization"
    ],
    correct: [1],
    type: "single",
    explanation: "SageMaker Canvas provides no-code machine learning for business analysts."
  },
  {
    id: 228,
    domain: 3,
    text: "Which service provides desktop virtualization?",
    options: [
      "Amazon WorkSpaces",
      "AWS AppStream",
      "Amazon Connect",
      "AWS Cloud9"
    ],
    correct: [0],
    type: "single",
    explanation: "Amazon WorkSpaces is a managed, secure Desktop-as-a-Service (DaaS) solution."
  },
  {
    id: 229,
    domain: 3,
    text: "What is AWS Cloud9?",
    options: [
      "Cloud storage",
      "Cloud-based IDE",
      "Database service",
      "Monitoring tool"
    ],
    correct: [1],
    type: "single",
    explanation: "AWS Cloud9 is a cloud-based integrated development environment (IDE)."
  },
  {
    id: 230,
    domain: 3,
    text: "Which service streams desktop applications?",
    options: [
      "Amazon WorkSpaces",
      "AWS AppStream 2.0",
      "Amazon Connect",
      "AWS Amplify"
    ],
    correct: [1],
    type: "single",
    explanation: "AppStream 2.0 streams desktop applications securely to a web browser."
  },
  {
    id: 231,
    domain: 3,
    text: "What is AWS IoT Greengrass?",
    options: [
      "Environmental monitoring",
      "Edge computing for IoT devices",
      "Green energy service",
      "Plant monitoring"
    ],
    correct: [1],
    type: "single",
    explanation: "IoT Greengrass extends AWS to edge devices for local computation and messaging."
  },
  {
    id: 232,
    domain: 4,
    text: "What is the difference between Standard and Convertible Reserved Instances?",
    options: [
      "No difference",
      "Convertible allows changing instance attributes",
      "Standard is more expensive",
      "Convertible has shorter terms"
    ],
    correct: [1],
    type: "single",
    explanation: "Convertible RIs can be exchanged for different instance families, OS, or tenancy."
  },
  {
    id: 233,
    domain: 4,
    text: "What is AWS Cost Anomaly Detection?",
    options: [
      "Security monitoring",
      "ML service to detect unusual spending patterns",
      "Performance monitoring",
      "Compliance checking"
    ],
    correct: [1],
    type: "single",
    explanation: "Cost Anomaly Detection uses ML to identify unusual spending and root causes."
  },
  {
    id: 234,
    domain: 1,
    text: "What is the advantage of automation in the cloud?",
    options: [
      "Higher costs",
      "Consistency, speed, and reduced human error",
      "More complexity",
      "Slower deployments"
    ],
    correct: [1],
    type: "single",
    explanation: "Automation improves consistency, accelerates deployments, and reduces human error."
  },
  {
    id: 235,
    domain: 1,
    text: "What is meant by 'design for failure'?",
    options: [
      "Accept failures without recovery",
      "Build systems assuming components will fail",
      "Avoid redundancy",
      "Single points of failure"
    ],
    correct: [1],
    type: "single",
    explanation: "Designing for failure means architecting systems to handle component failures gracefully."
  },
  {
    id: 236,
    domain: 2,
    text: "What is the purpose of service control policies (SCPs)?",
    options: [
      "Control EC2 services",
      "Set permission guardrails for AWS Organizations",
      "Database policies",
      "Network policies"
    ],
    correct: [1],
    type: "single",
    explanation: "SCPs define maximum available permissions for accounts in an organization."
  },
  {
    id: 237,
    domain: 2,
    text: "What is AWS License Manager?",
    options: [
      "Software licensing purchase",
      "Track and manage software licenses",
      "AWS certification manager",
      "Open source license checker"
    ],
    correct: [1],
    type: "single",
    explanation: "License Manager helps manage software licenses from vendors across AWS and on-premises."
  },
  {
    id: 238,
    domain: 3,
    text: "What is Amazon Lex?",
    options: [
      "Legal service",
      "Conversational AI service for chatbots",
      "Text analysis",
      "Language translation"
    ],
    correct: [1],
    type: "single",
    explanation: "Amazon Lex builds conversational interfaces using voice and text."
  },
  {
    id: 239,
    domain: 3,
    text: "Which service provides robotic process automation?",
    options: [
      "AWS RoboMaker",
      "Amazon Augmented AI",
      "AWS IoT",
      "Amazon SageMaker"
    ],
    correct: [0],
    type: "single",
    explanation: "AWS RoboMaker provides tools to develop, test, and deploy robotics applications."
  },
  {
    id: 240,
    domain: 3,
    text: "What is AWS Ground Station?",
    options: [
      "Physical AWS location",
      "Satellite ground station as a service",
      "Data center",
      "Network point of presence"
    ],
    correct: [1],
    type: "single",
    explanation: "Ground Station provides satellite ground station as a service for satellite communications."
  },
  {
    id: 241,
    domain: 3,
    text: "Which service provides quantum computing?",
    options: [
      "AWS Lambda",
      "Amazon Braket",
      "Amazon SageMaker",
      "AWS Batch"
    ],
    correct: [1],
    type: "single",
    explanation: "Amazon Braket helps explore and experiment with quantum computing."
  },
  {
    id: 242,
    domain: 3,
    text: "What is AWS Snowball Edge?",
    options: [
      "Data transfer device with compute capabilities",
      "Network edge router",
      "Security appliance",
      "IoT gateway"
    ],
    correct: [0],
    type: "single",
    explanation: "Snowball Edge is a data migration device with onboard compute and storage capabilities."
  },
  {
    id: 243,
    domain: 4,
    text: "What is the AWS Free Tier duration for most services?",
    options: [
      "6 months",
      "12 months",
      "24 months",
      "Forever"
    ],
    correct: [1],
    type: "single",
    explanation: "Most AWS Free Tier services are available for 12 months from account creation."
  },
  {
    id: 244,
    domain: 4,
    text: "Which billing alert service is free?",
    options: [
      "AWS Budgets (first 2 budgets)",
      "Cost Explorer",
      "Cost and Usage Report",
      "Trusted Advisor (Basic checks)"
    ],
    correct: [0],
    type: "single",
    explanation: "The first two AWS Budgets are free, additional budgets cost $0.02/day."
  },
  {
    id: 245,
    domain: 1,
    text: "What is Infrastructure as a Service (IaaS)?",
    options: [
      "Managed applications",
      "Virtualized computing resources over internet",
      "Serverless computing",
      "Desktop as a service"
    ],
    correct: [1],
    type: "single",
    explanation: "IaaS provides virtualized computing resources like servers, storage, and networking."
  },
  {
    id: 246,
    domain: 1,
    text: "What is Platform as a Service (PaaS)?",
    options: [
      "Physical servers",
      "Platform for deploying applications without managing infrastructure",
      "Desktop applications",
      "Network services"
    ],
    correct: [1],
    type: "single",
    explanation: "PaaS provides a platform for developers to build and deploy applications without infrastructure management."
  },
  {
    id: 247,
    domain: 1,
    text: "What is Software as a Service (SaaS)?",
    options: [
      "Downloadable software",
      "Software delivered over internet on subscription basis",
      "Open source software",
      "On-premises software"
    ],
    correct: [1],
    type: "single",
    explanation: "SaaS delivers software applications over the internet, typically subscription-based."
  },
  {
    id: 248,
    domain: 2,
    text: "What should you do if AWS access keys are exposed?",
    options: [
      "Ignore it",
      "Immediately rotate or delete the keys",
      "Wait 30 days",
      "Change password only"
    ],
    correct: [1],
    type: "single",
    explanation: "Exposed access keys should be immediately rotated or deleted to prevent unauthorized access."
  },
  {
    id: 249,
    domain: 2,
    text: "What is AWS Nitro System?",
    options: [
      "Networking protocol",
      "Underlying platform for EC2 instances",
      "Database engine",
      "Container runtime"
    ],
    correct: [1],
    type: "single",
    explanation: "Nitro System is the underlying platform that powers EC2 instances for better security and performance."
  },
  {
    id: 250,
    domain: 3,
    text: "What is Amazon Monitron?",
    options: [
      "Security monitoring",
      "End-to-end system for equipment monitoring",
      "Network monitor",
      "Cost monitoring"
    ],
    correct: [1],
    type: "single",
    explanation: "Amazon Monitron is an end-to-end system for monitoring industrial equipment."
  },
  {
    id: 251,
    domain: 3,
    text: "Which service provides industrial data collection?",
    options: [
      "AWS IoT SiteWise",
      "Amazon CloudWatch",
      "AWS IoT Core",
      "Amazon Kinesis"
    ],
    correct: [0],
    type: "single",
    explanation: "AWS IoT SiteWise collects, organizes, and analyzes industrial equipment data."
  },
  {
    id: 252,
    domain: 3,
    text: "What is Amazon Honeycode?",
    options: [
      "Security testing",
      "No-code app builder",
      "Password manager",
      "Encryption service"
    ],
    correct: [1],
    type: "single",
    explanation: "Amazon Honeycode allows building applications without programming knowledge."
  },
  {
    id: 253,
    domain: 4,
    text: "What determines S3 Glacier retrieval costs?",
    options: [
      "Storage duration",
      "Retrieval speed and amount of data",
      "Number of files",
      "Bucket location"
    ],
    correct: [1],
    type: "single",
    explanation: "Glacier retrieval costs depend on the speed (expedited, standard, bulk) and data amount."
  },
  {
    id: 254,
    domain: 4,
    text: "What is the benefit of using Instance Savings Plans?",
    options: [
      "Storage discounts",
      "Flexible compute discounts with instance family commitment",
      "Network discounts",
      "Database discounts"
    ],
    correct: [1],
    type: "single",
    explanation: "Instance Savings Plans provide discounts for specific instance family usage in a region."
  },
  {
    id: 255,
    domain: 1,
    text: "What is the AWS Well-Architected Tool?",
    options: [
      "Deployment tool",
      "Review tool for workload architecture against best practices",
      "Monitoring tool",
      "Cost calculator"
    ],
    correct: [1],
    type: "single",
    explanation: "Well-Architected Tool helps review workloads against AWS architectural best practices."
  },
  {
    id: 256,
    domain: 1,
    text: "What is event-driven architecture?",
    options: [
      "Manual processing",
      "Architecture where components react to events",
      "Batch processing only",
      "Scheduled tasks only"
    ],
    correct: [1],
    type: "single",
    explanation: "Event-driven architecture uses events to trigger and communicate between services."
  },
  {
    id: 257,
    domain: 2,
    text: "What is AWS Signer?",
    options: [
      "Document signing",
      "Code signing service for AWS Lambda",
      "Certificate authority",
      "Authentication service"
    ],
    correct: [1],
    type: "single",
    explanation: "AWS Signer is a managed code-signing service to ensure trust and integrity of code."
  },
  {
    id: 258,
    domain: 3,
    text: "What is Amazon Managed Blockchain Ethereum?",
    options: [
      "Cryptocurrency wallet",
      "Ethereum node management service",
      "Trading platform",
      "Mining service"
    ],
    correct: [1],
    type: "single",
    explanation: "This service creates and manages Ethereum nodes for blockchain applications."
  },
  {
    id: 259,
    domain: 3,
    text: "Which service provides game development platform?",
    options: [
      "AWS GameLift",
      "Amazon Lumberyard",
      "AWS Lambda",
      "Amazon EC2"
    ],
    correct: [0],
    type: "single",
    explanation: "AWS GameLift provides managed game server hosting with automatic scaling."
  },
  {
    id: 260,
    domain: 3,
    text: "What is AWS Migration Hub?",
    options: [
      "Migration marketplace",
      "Tracking service for application migrations",
      "Data transfer service",
      "Migration training"
    ],
    correct: [1],
    type: "single",
    explanation: "Migration Hub provides single location to track migrations across multiple AWS tools."
  },
  {
    id: 261,
    domain: 4,
    text: "What happens after 12 months of AWS Free Tier?",
    options: [
      "Account is deleted",
      "Standard pay-as-you-go rates apply",
      "Automatic upgrade required",
      "Services stop working"
    ],
    correct: [1],
    type: "single",
    explanation: "After Free Tier expires, standard pricing automatically applies to all usage."
  },
  {
    id: 262,
    domain: 4,
    text: "Which service helps with cost optimization recommendations?",
    options: [
      "AWS Compute Optimizer",
      "AWS Budgets",
      "AWS Pricing Calculator",
      "Cost Explorer"
    ],
    correct: [0],
    type: "single",
    explanation: "Compute Optimizer recommends optimal AWS resources based on utilization metrics."
  },
  {
    id: 263,
    domain: 1,
    text: "What is the benefit of using AWS global infrastructure?",
    options: [
      "Single data center",
      "Low latency and high availability worldwide",
      "Higher costs",
      "Limited locations"
    ],
    correct: [1],
    type: "single",
    explanation: "AWS's global infrastructure enables low-latency access and high availability across the world."
  },
  {
    id: 264,
    domain: 2,
    text: "What is AWS IAM Access Analyzer?",
    options: [
      "Performance analyzer",
      "Identifies resources shared with external entities",
      "Cost analyzer",
      "Log analyzer"
    ],
    correct: [1],
    type: "single",
    explanation: "IAM Access Analyzer helps identify resources accessible from outside your organization."
  },
  {
    id: 265,
    domain: 3,
    text: "What is AWS SimSpace Weaver?",
    options: [
      "Web server",
      "Spatial simulation service",
      "Data warehouse",
      "Network simulator"
    ],
    correct: [1],
    type: "single",
    explanation: "SimSpace Weaver enables large-scale spatial simulations across distributed systems."
  },
  {
    id: 266,
    domain: 3,
    text: "Which service provides end-user computing?",
    options: [
      "Amazon WorkSpaces and AppStream",
      "AWS Lambda",
      "Amazon EC2",
      "AWS Fargate"
    ],
    correct: [0],
    type: "single",
    explanation: "WorkSpaces and AppStream provide virtual desktops and application streaming for end users."
  },
  {
    id: 267,
    domain: 4,
    text: "What is AWS Service Catalog?",
    options: [
      "Service documentation",
      "Create and manage approved IT service catalogs",
      "Marketplace alternative",
      "Service directory"
    ],
    correct: [1],
    type: "single",
    explanation: "Service Catalog allows organizations to create catalogs of approved IT services."
  },
  {
    id: 268,
    domain: 4,
    text: "What is the AWS billing cycle?",
    options: [
      "Weekly",
      "Monthly",
      "Quarterly",
      "Annually"
    ],
    correct: [1],
    type: "single",
    explanation: "AWS bills customers monthly based on actual usage during the billing period."
  }
];

export const FULL_POOL = QUESTION_BANK;

export default FULL_POOL;
