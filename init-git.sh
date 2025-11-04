#!/bin/bash

# Git Initialization Script for Coolify Deployment
# This script initializes git and prepares your project for deployment

echo "🚀 Initializing Git repository..."
echo ""

# Initialize git if not already initialized
if [ ! -d .git ]; then
    git init
    echo "✅ Git repository initialized"
else
    echo "ℹ️  Git repository already exists"
fi

# Add all files
git add .
echo "✅ Files staged for commit"

# Create initial commit
git commit -m "Initial commit: DRH Media website ready for Coolify deployment"
echo "✅ Initial commit created"

echo ""
echo "📝 Next steps:"
echo ""
echo "1. Create a repository on GitHub/GitLab/Gitea"
echo "2. Add the remote:"
echo "   git remote add origin YOUR_REPOSITORY_URL"
echo ""
echo "3. Push to your repository:"
echo "   git push -u origin main"
echo ""
echo "4. Deploy on Coolify:"
echo "   - Go to your Coolify dashboard"
echo "   - Create new project"
echo "   - Connect your repository"
echo "   - Click Deploy!"
echo ""
echo "🎉 Your website will be live in minutes!"

