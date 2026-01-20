#!/usr/bin/env bash
set -euo pipefail

# Run the GitHub MCP server, loading secrets from .env.local

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ENV_FILE="$ROOT_DIR/.env.local"

if [[ -f "$ENV_FILE" ]]; then
  # shellcheck disable=SC1090
  source "$ENV_FILE"
fi

if [[ -z "${GITHUB_PERSONAL_ACCESS_TOKEN:-}" ]]; then
  echo "Missing GITHUB_PERSONAL_ACCESS_TOKEN. Add it to $ENV_FILE" >&2
  exit 1
fi

exec npx -y @modelcontextprotocol/server-github
