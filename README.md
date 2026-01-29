# Lead Generation Landing Page & Admin Panel

Full-stack lead generation application with a marketing landing page and an admin panel to manage projects, clients, contact form submissions, and newsletter subscribers.

> Note: This repository is structured as a monorepo with separate `frontend` and `backend` folders.

---

## Features

### Landing Page

- Hero section with strong lead-generation call-to-action.
- "Why Choose Us" section highlighting key selling points.
- "Our Projects" section:
  - Fetches project data from the backend.
  - Displays project image, name, description, and a Read More button (non-functional).
- "Happy Clients" section:
  - Fetches client data from the backend.
  - Displays client image, name, designation, and testimonial/description.
- Contact form:
  - Fields: Full Name, Email Address, Mobile Number, City.
  - Submits data to backend; visible in admin panel.
- Newsletter subscription:
  - Accepts email.
  - Sends email to backend; visible in admin panel.
- Uses provided SVG icons, images, and shapes (by filename) for visuals and decoration.

### Admin Panel

Accessible at `/admin` on the frontend.

- Project Management:
  - Add new projects with image upload.
  - Image cropped to `450 x 350` using backend image processing.
- Client Management:
  - Add new clients with image upload.
  - Image cropped to `450 x 350`.
- Contact Form Details:
  - View all contact form responses with Full Name, Email, Mobile, City.
- Subscribed Email Addresses:
  - View list of all newsletter subscribers.

---

## Tech Stack

### Frontend

- React
- Vite
- React Router
- Axios
- Custom CSS

### Backend

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- Multer (file upload)
- Sharp (image cropping)
- dotenv, CORS

---

## Project Structure

```bash
project-root/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── utils/
│   │   └── server.js
│   ├── uploads/            # generated at runtime for images
│   ├── package.json
│   └── README.md
│
├── frontend/
│   ├── public/
│   │   └── favicon.ico
│   ├── src/
│   │   ├── assets/
│   │   │   ├── icons/
│   │   │   ├── images/
│   │   │   └── shapes/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── README.md
│
└── README.md         
