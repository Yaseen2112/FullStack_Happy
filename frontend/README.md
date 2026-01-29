
```md
# Lead Generation Frontend

React + Vite frontend for a real estate lead generation landing page and admin panel.

## Features

- Landing page sections:
  - Hero with CTA
  - Why Choose Us
  - Our Projects (from backend)
  - Happy Clients (from backend)
  - Contact Form (POST to backend)
  - Newsletter Subscription (POST to backend)
- Admin panel (`/admin`) to:
  - Add projects with images
  - Add clients with images
  - View contact form responses
  - View newsletter subscribers
- Uses the provided SVG icons, images, and shapes mapped in `src/assets`.

## Tech Stack

- React, Vite
- React Router
- Axios
- CSS (custom)

## Environment Variables

Create `.env` in the `frontend` folder:

```env
VITE_API_BASE_URL=http://localhost:5000
Set it to your backend URL in production (e.g., Render / Railway).

Run Locally
cd frontend
npm install
npm run dev

Frontend will be available on the dev port (typically http://localhost:5173).

Landing page: /

Admin panel: /admin

Build for Production
cd frontend
npm run build

This generates a dist folder for deployment.


***
