// Codex, 2026-09-06. Git deployments use live mode only on Vercel production.
import { spawnSync } from 'node:child_process';

const result = spawnSync(process.execPath, ['node_modules/astro/astro.js', 'build'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    PUBLIC_SITE_MODE: process.env.VERCEL_ENV === 'production' ? 'live' : 'preview',
    PUBLIC_CONTACT_MODE: 'email',
  },
});
if (result.error) throw result.error;
process.exit(result.status ?? 1);
