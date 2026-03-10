# Personal Robotics Portfolio

This repo contains the source code for my personal website.

## Tools
- **Framework**: Build with **Jekyll**, a Ruby-based static site generator
- **Theme**: `Minimal Mistakes`
- **Hosting**: GitHub Pages
- **Content and Styling**: Markdown with Sass (SCSS)

## Setup for local testing

### Prerequisites (included in the Dockerfile)
```bash
# Install Dependency
sudo apt-get install ruby-full build-essential zlib1g-dev

# Setup gem installation directory
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

# Install Jekyll and Bundler
gem install jekyll bundler
```

### Build site
```bash
# Build the specific version in Gemfile.lock
bundle install
```

```bash
# Build the site and make it available on a local server.
bundle exec jekyll serve
```

Browse to [http://localhost:4000/my-site/](http://localhost:4000/my-site/) for local testing

## Reference

Jekyll docs: [here ~](https://jekyllrb.com/docs/)