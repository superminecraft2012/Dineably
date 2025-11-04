# Deployment Guide for Coolify

This guide will help you deploy your Next.js application to Coolify.

## Prerequisites

- A running Coolify instance
- Git repository (GitHub, GitLab, Gitea, etc.)
- Your code pushed to the repository

## Step-by-Step Deployment

### 1. Prepare Your Repository

Make sure all files are committed and pushed:

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### 2. Create a New Project in Coolify

1. Log in to your Coolify dashboard
2. Click on "New Project" or "Add Resource"
3. Select "Public Repository" or "Private Repository"

### 3. Configure the Project

**Repository Settings:**
- Repository URL: Your Git repository URL
- Branch: `main` (or your default branch)
- Build Pack: Select "Dockerfile"

**Port Configuration:**
- Port: `3000` (This is where Next.js runs)

**Build Configuration:**
- Coolify will automatically detect the Dockerfile
- No additional build commands needed

### 4. Deploy

1. Click "Deploy" or "Start Deployment"
2. Coolify will:
   - Clone your repository
   - Build the Docker image
   - Start the container
   - Expose it on your domain

### 5. Set Up Domain (Optional)

1. Go to your project settings in Coolify
2. Add your domain or subdomain
3. Coolify will automatically handle SSL/HTTPS with Let's Encrypt

## Environment Variables

If you need to add environment variables:

1. Go to your project in Coolify
2. Navigate to "Environment Variables"
3. Add your variables (e.g., API keys, database URLs)
4. Redeploy the application

Example:
```
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
DATABASE_URL=postgresql://...
```

## Automatic Deployments

To enable automatic deployments on push:

1. In Coolify, go to your project settings
2. Enable "Auto Deploy"
3. Coolify will automatically redeploy when you push to your repository

## Troubleshooting

### Build Fails

- Check the build logs in Coolify
- Ensure all dependencies are in `package.json`
- Verify the Dockerfile is correct

### App Not Starting

- Check if port 3000 is correctly exposed
- Review container logs in Coolify
- Ensure `output: 'standalone'` is in `next.config.js`

### 404 Errors

- Make sure the build completed successfully
- Check that all required files are in the repository
- Verify the Next.js routing configuration

## Performance Optimization

For production, consider:

1. **Caching**: Configure CDN or reverse proxy caching
2. **Resources**: Adjust container resources in Coolify if needed
3. **Database**: Use connection pooling if using a database
4. **Images**: Use Next.js Image optimization features

## Monitoring

Monitor your application:

1. Check container logs in Coolify
2. Set up uptime monitoring
3. Monitor resource usage (CPU, RAM)

## Updating the Application

To deploy updates:

```bash
git add .
git commit -m "Update: description of changes"
git push origin main
```

If auto-deploy is enabled, Coolify will automatically rebuild and redeploy.
If not, click "Deploy" in the Coolify dashboard.

## Support

For Coolify-specific issues, refer to:
- [Coolify Documentation](https://coolify.io/docs)
- [Coolify Discord](https://discord.gg/coolify)

For Next.js issues:
- [Next.js Documentation](https://nextjs.org/docs)

