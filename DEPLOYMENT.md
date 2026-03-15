# SERENIT — Deployment Guide

## Project Structure

```
serenit-source/
├── artifacts/
│   ├── serenit/          # React + Vite frontend
│   └── api-server/       # Express API backend
├── lib/
│   └── db/               # (unused — kept for reference)
├── package.json          # pnpm workspace root
└── pnpm-workspace.yaml
```

---

## Prerequisites

- **Node.js** 20+
- **pnpm** 9+ (`npm install -g pnpm`)
- **Resend account** — free at [resend.com](https://resend.com) (3,000 emails/month free)

No database required.

---

## Local Development

### 1. Install dependencies
```bash
pnpm install
```

### 2. Set environment variables
Create a `.env` file in the project root:
```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
PORT=3001
```

### 3. Start both servers
```bash
# Terminal 1 — API server (default port 3001)
pnpm --filter @workspace/api-server run dev

# Terminal 2 — Frontend (default port 5173)
pnpm --filter @workspace/serenit run dev
```

Open `http://localhost:5173` in your browser.

---

## Resend Setup (Email)

Contact form submissions are sent directly to `info@serenit.org` via Resend.

1. Sign up at [resend.com](https://resend.com)
2. Go to **API Keys** → create a new key
3. Set `RESEND_API_KEY` in your environment

**Important — sending from your own domain:**  
The `from` address is `info@serenit.org` — domain is verified in Resend.

---

## Production Deployment

### Option A — Single VPS / Server (e.g. DigitalOcean, Linode)

1. **Build the frontend**
   ```bash
   pnpm --filter @workspace/serenit run build
   ```
   Output goes to `artifacts/serenit/dist/`

2. **Serve the frontend** with Nginx or Caddy, pointing root at `artifacts/serenit/dist/`

3. **Start the API server**
   ```bash
   NODE_ENV=production RESEND_API_KEY=re_xxx pnpm --filter @workspace/api-server run start
   ```
   Use **PM2** to keep it running:
   ```bash
   pm2 start "pnpm --filter @workspace/api-server run start" --name serenit-api
   ```

4. **Proxy `/api/*`** in your Nginx config to the API server:
   ```nginx
   location /api/ {
     proxy_pass http://localhost:3001;
   }
   location / {
     root /path/to/artifacts/serenit/dist;
     try_files $uri $uri/ /index.html;
   }
   ```

---

### Option B — Railway (Recommended)

Railway handles both services from the same repo. Each gets its own `railway.toml` (already included).

**Step 1 — Create a Railway project**
1. Go to [railway.app](https://railway.app) → New Project → Deploy from GitHub repo
2. Connect your GitHub and select this repository

**Step 2 — API Service**
1. Railway auto-detects the root `railway.toml` — if not, add a service and set **Root Directory** to `artifacts/api-server`
2. Go to the service **Variables** tab and add:
   ```
   RESEND_API_KEY = re_xxxxxxxxxxxxxxxxxxxx
   ```
3. Deploy — the API will be live at a `*.railway.app` URL

**Step 3 — Frontend Service**
1. In the same project, click **+ New Service** → GitHub repo (same repo)
2. Set **Root Directory** to `artifacts/serenit`
3. The `railway.toml` inside handles the build and serve automatically
4. Add an environment variable:
   ```
   VITE_API_URL = https://your-api-service.railway.app
   ```

**Step 4 — Custom domain (optional)**
In each service → Settings → Domains → add `serenit.org` (frontend) and `api.serenit.org` (API)

---

### Option C — Vercel (frontend) + Render (API)

1. Import repo to **Vercel**; set build command and output dir as above.
2. Deploy api-server to **Render** as a web service; set `RESEND_API_KEY`.
3. Set `VITE_API_URL` in Vercel to point to your Render API URL.

---

## Environment Variables Reference

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | Yes | Resend API key for sending contact form emails |
| `PORT` | No | API server port (default 3001) |
| `NODE_ENV` | No | Set to `production` in prod |

---

## Contact Form

When a visitor submits the contact form, an email is sent to `info@serenit.org` with:
- Sender name & email (as Reply-To)
- Company (if provided)
- Their message

No database is used — submissions go directly to your inbox.
