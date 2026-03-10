FROM ubuntu:24.04

ENV DEBIAN_FRONTEND=noninteractive
ENV LANG=C.UTF-8
ENV LC_ALL=C.UTF-8

RUN apt-get update && apt-get install -y \
    ruby-full build-essential zlib1g-dev git curl \
    && rm -rf /var/lib/apt/lists/*

ENV GEM_HOME="/usr/local/bundle"
ENV PATH="$GEM_HOME/bin:$PATH"

RUN gem install jekyll bundler

WORKDIR /workspaces/my-site