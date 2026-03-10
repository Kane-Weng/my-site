# Personal Robotics Portfolio

This repo contains the source code for my personal website.

## Tools
- **Framework**: Build with **Jekyll**, a Ruby-based static site generator
- **Theme**: `Minimal Mistakes`
- **Hosting**: GitHub Pages
- **Content and Styling**: Markdown with Sass (SCSS)
- **Docker**: handle Ruby and Jekyll dependencies

## Setup for local testing

### Prerequisites
- **Docker** & **Docker Compose** installed
- `Dockerfile` & `docker-compose.yml` in the project root

### Workflow
To start the development environment and the site server:
```bash
docker compose up
```
What this command does:
* Builds the image if not exist
* Mounts local files into the container (changes got sync)
* Installs any missing gems from your `Gemfile`
* Start the Jekyll server with live-reloading

Preview: Open [http://localhost:4000/my-site/](http://localhost:4000/my-site/) for local testing

### Docker development commands
```bash
# Run in background
docker compose up -d

# View background logs
docker compose logs -f

# Complete reset
docker compose down
```

## Reference

Jekyll docs: [here ~](https://jekyllrb.com/docs/)