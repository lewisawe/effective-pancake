<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Lewis Sawe - Portfolio

A cyberpunk-themed portfolio showcasing my cloud engineering and DevOps expertise.

## 🚀 Features

- **Cyberpunk Design** - Dark theme with cyan accents and glitch effects
- **Interactive Elements** - Hover effects, typing animations, and terminal-style contact form
- **Real Integrations** - Working contact form with AWS Lambda + SNS
- **Responsive** - Mobile-friendly design
- **Performance** - Optimized loading with custom loading screen

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Vite, Tailwind CSS
- **Backend**: AWS Lambda, SNS
- **Infrastructure**: Terraform
- **Deployment**: Static hosting (Vercel/Netlify recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/lewisawe/portfolio
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment**
   ```bash
   cp .env.local.example .env.local
   # Add your Gemini API key to .env.local
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

## 🚀 Deployment

### Frontend Deployment
Deploy to Vercel, Netlify, or any static hosting service:

```bash
npm run build
```

### Backend Infrastructure
Deploy the contact form Lambda function:

```bash
cd terraform
terraform init
terraform plan -var="notification_email=your-email@example.com"
terraform apply -var="notification_email=your-email@example.com"
```

## 📧 Contact Form

The contact form uses AWS Lambda + SNS for email notifications:
- Users submit via terminal-style interface
- Lambda processes and sends SNS notification
- You receive email with contact details

## 🎨 Customization

- **Personal Info**: Update `constants.ts` with your details
- **Projects**: Add your projects to the `PROJECTS` array
- **Certifications**: Add certification images to `assets/` folder
- **Blog Posts**: Update `BLOG_POSTS` with your articles
- **YouTube**: Add your video IDs to `YOUTUBE_VIDEOS`

## 📄 License

MIT License - feel free to use this as a template for your own portfolio!

## 🤝 Contributing

Found a bug or want to suggest an improvement? Feel free to open an issue or submit a PR.

---

Built with ❤️ by [Lewis Sawe](https://github.com/lewisawe)
