#!/usr/bin/env bash
# Runs the frontend + api/ serverless functions together via `vercel dev`,
# pinned to the Node version this old CRA toolchain needs, with the OpenSSL
# legacy provider flag it requires (vercel dev ignores the flag in
# package.json's own start/build scripts, so it has to be set here).
set -e
cd "$(dirname "$0")/.."

export NODE_OPTIONS="--openssl-legacy-provider"

export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
if [ -s "$NVM_DIR/nvm.sh" ]; then
  # shellcheck disable=SC1091
  source "$NVM_DIR/nvm.sh"
  nvm use
fi

# Use the local devDependency binary directly rather than `npx vercel`:
# npx can resolve a globally-installed vercel tied to a different Node
# version (e.g. one installed under nvm's default alias) regardless of
# which Node is currently active, which silently reintroduces the crash
# this script exists to avoid.
exec ./node_modules/.bin/vercel dev
