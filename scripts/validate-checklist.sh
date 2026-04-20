#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SITE_URL="${SITE_URL:-https://brichs.xyz}"
RUN_REMOTE_CHECKS="${RUN_REMOTE_CHECKS:-0}"

pass() { printf "[PASS] %s\n" "$1"; }
fail() { printf "[FAIL] %s\n" "$1"; }

status=0

check_file_exists() {
  local path="$1"
  local msg="$2"
  if [[ -f "$ROOT_DIR/$path" ]]; then
    pass "$msg"
  else
    fail "$msg (missing $path)"
    status=1
  fi
}

check_no_match() {
  local file="$1"
  local pattern="$2"
  local msg="$3"
  if rg -n "$pattern" "$ROOT_DIR/$file" >/dev/null 2>&1; then
    fail "$msg"
    rg -n "$pattern" "$ROOT_DIR/$file" || true
    status=1
  else
    pass "$msg"
  fi
}

check_match() {
  local file="$1"
  local pattern="$2"
  local msg="$3"
  if rg -n "$pattern" "$ROOT_DIR/$file" >/dev/null 2>&1; then
    pass "$msg"
  else
    fail "$msg"
    status=1
  fi
}

check_http_ok() {
  local url="$1"
  local msg="$2"
  local code
  code="$(curl -s -o /dev/null -w "%{http_code}" "$url")"
  if [[ "$code" == "200" ]]; then
    pass "$msg"
  else
    fail "$msg (HTTP $code)"
    status=1
  fi
}

echo "Running local checks from: $ROOT_DIR"

check_file_exists "index.html" "Main page exists"
check_file_exists "sitemap.xml" "Sitemap exists"
check_file_exists "_headers" "Headers file exists"
check_file_exists "og-image.svg" "OG image asset exists"

check_no_match "sitemap.xml" "index-improved\\.html" "Sitemap does not include removed page"
check_match "index.html" "og:image\" content=\"https://brichs\\.xyz/og-image\\.svg" "Open Graph image points to existing asset"
check_match "index.html" "twitter:image\" content=\"https://brichs\\.xyz/og-image\\.svg" "Twitter image points to existing asset"
check_match "index.html" "prefers-reduced-motion" "Reduced-motion support is present"
check_match "index.html" "aria-live=\"off\"" "Main typed content does not spam live region"
check_match "index.html" "\"knowsLanguage\"" "Schema uses validator-friendly language property"
check_match "_headers" "Strict-Transport-Security" "HSTS header is configured"
check_match "_headers" "Content-Security-Policy" "CSP header is configured"

if [[ "$RUN_REMOTE_CHECKS" == "1" ]]; then
  echo "Running optional remote checks against: $SITE_URL"
  check_http_ok "$SITE_URL/" "Homepage is reachable"
  check_http_ok "$SITE_URL/sitemap.xml" "Sitemap endpoint is reachable"
  check_http_ok "$SITE_URL/og-image.svg" "OG image endpoint is reachable"
else
  echo "Skipping remote checks (set RUN_REMOTE_CHECKS=1 to enable)."
fi

if [[ "$status" -eq 0 ]]; then
  echo "All checks passed."
else
  echo "One or more checks failed."
fi

exit "$status"
