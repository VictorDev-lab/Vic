# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview
Hybrid static site + Express API server for entrepreneurial projects. The Express server serves both API endpoints and static files from the `public/` directory.

## Architecture

### Server Architecture
- **Single Server Model**: `api/server.js` uses Express to serve both API routes (`/api/*`) and static files
- The server acts as both the API backend and static file server (not separate processes in production)
- Static files are served via `express.static(publicDir)` middleware
- Fallback route sends `index.html` for non-API routes (SPA-style routing)

### Frontend-Backend Integration
- Frontend and API share the same origin when deployed via the single server
- `public/js/main.js` uses `API_BASE = ''` (empty string) for same-origin API calls
- Authentication uses JWT tokens stored in localStorage
- No CORS issues in production since everything runs on one server

### Directory Structure
```
api/              - Express server with API endpoints
public/           - Static HTML/CSS/JS files served by Express
  css/, js/       - Compiled/runtime frontend assets
src/              - Source components (not currently built/compiled)
  components/     - Reusable HTML fragments
  styles/         - Utility CSS
```

### Key Concepts
- `public/js/main.js` has server-side code accidentally mixed in (lines 1-12) - this is legacy/dead code that should be in `api/server.js`
- `src/components/` HTML fragments are meant for client-side inclusion but the mechanism in `main.js:40` tries to load `/components/header.html` which doesn't exist in `public/`
- The site currently loads without the component system working

## Development Commands

### Running the Application
```bash
# Start API server only (serves both API and static files on port 4000)
npm start

# Development mode with auto-reload for API changes
npm run dev:watch

# Run both API server and separate static file server (for development)
npm run dev
```

### Code Quality
```bash
# Lint JavaScript files
npm run lint

# Format all files with Prettier
npm run format
```

### Testing
```bash
# No tests currently configured
npm test
```

## Environment Variables
- `PORT` - Server port (default: 4000)
- `JWT_SECRET` - Secret for JWT signing (default: 'dev-secret' in development)

## API Endpoints
- `GET /api/projects` - Returns list of projects
- `POST /api/login` - Demo authentication (email: demo@example.com, password: password)
- `POST /api/contact` - Contact form submission (logs to console)

## Common Development Patterns

### Adding New API Endpoints
Add routes in `api/server.js` before the static file middleware and fallback route. Keep `/api/*` prefix for all API routes.

### Modifying Static Content
Edit files directly in `public/` directory. Changes are immediately visible (no build step for HTML/CSS/JS).

### Working with Components
The `src/components/` directory contains HTML fragments, but the build/inclusion system is incomplete. Components need to be manually copied or a build process needs to be added.

## Node.js Version
Requires Node.js >= 18 (specified in package.json engines)
