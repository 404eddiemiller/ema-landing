// Post-build script: compute SHA-256 hashes of all inline scripts
// and update the CSP header in vercel.json to replace 'unsafe-inline'

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';
import { createHash } from 'crypto';

const DIST_DIR = 'dist';
const VERCEL_JSON = 'vercel.json';

// Recursively find all HTML files
function findHtmlFiles(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      files.push(...findHtmlFiles(full));
    } else if (entry.endsWith('.html')) {
      files.push(full);
    }
  }
  return files;
}

// Extract inline script content (excluding JSON-LD and scripts with src)
function extractInlineScripts(html) {
  const scripts = [];
  // Match <script> tags that are NOT type="application/ld+json" and have no src
  const regex = /<script(?![^>]*\bsrc\b)(?![^>]*type\s*=\s*["']application\/ld\+json["'])[^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const content = match[1].trim();
    if (content) scripts.push(content);
  }
  return scripts;
}

// Compute SHA-256 hash in CSP format
function computeHash(content) {
  const hash = createHash('sha256').update(content, 'utf8').digest('base64');
  return `'sha256-${hash}'`;
}

// Main
const htmlFiles = findHtmlFiles(DIST_DIR);
console.log(`Found ${htmlFiles.length} HTML files`);

const allHashes = new Set();
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const scripts = extractInlineScripts(html);
  for (const script of scripts) {
    allHashes.add(computeHash(script));
  }
}

console.log(`Found ${allHashes.size} unique inline script hashes`);

// Read vercel.json
const config = JSON.parse(readFileSync(VERCEL_JSON, 'utf8'));

// Find and update the CSP header
for (const rule of config.headers) {
  for (const header of rule.headers) {
    if (header.key === 'Content-Security-Policy') {
      // Replace 'unsafe-inline' in script-src with hashes
      const hashList = [...allHashes].join(' ');
      header.value = header.value.replace(
        /script-src\s+'self'\s+'unsafe-inline'/,
        `script-src 'self' ${hashList}`
      );
      console.log('Updated script-src with hashes');
    }
  }
}

writeFileSync(VERCEL_JSON, JSON.stringify(config, null, 2) + '\n');
console.log('vercel.json updated');
