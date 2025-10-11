#!/bin/bash

# Deploy contact form infrastructure
echo "Deploying contact form infrastructure..."

# Create Lambda deployment package
cd lambda
zip -r contact-handler.zip contact-handler.js package.json
mv contact-handler.zip ../terraform/
cd ../terraform

# Initialize Terraform
terraform init

# Plan deployment
terraform plan -var="notification_email=lewis.sawe@proton.me"

# Apply (uncomment when ready)
# terraform apply -var="notification_email=lewis.sawe@proton.me" -auto-approve

echo "Deployment complete!"
echo "Don't forget to confirm your email subscription in SNS!"
