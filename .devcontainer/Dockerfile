FROM ubuntu:24.04

# Prevent interactive prompts during apt install
ENV DEBIAN_FRONTEND=noninteractive

# Install Ruby and Jekyll prerequisites
RUN apt-get update && apt-get install -y \
    ruby-full \
    build-essential \
    zlib1g-dev \
    git \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Set up Gem environment for the default 'vscode' user or root
# We use /usr/local/bundle to keep it simple in a container
ENV GEM_HOME="/usr/local/bundle"
ENV PATH="$GEM_HOME/bin:$PATH"

ENV LANG=C.UTF-8
ENV LC_ALL=C.UTF-8

# Install Jekyll and Bundler
RUN gem install jekyll bundler

# Set the workspace
WORKDIR /workspaces/my-jekyll-site