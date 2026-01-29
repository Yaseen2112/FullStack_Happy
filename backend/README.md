# Lead Generation Backend

Node.js + Express + MongoDB backend for the lead generation landing page and admin panel.

## Features

- REST APIs for:
  - Projects (image upload + 450x350 cropping)
  - Clients (image upload + 450x350 cropping)
  - Contact form submissions
  - Newsletter subscribers
- Image upload handled with Multer and processed with Sharp.
- MongoDB Atlas database using Mongoose models.

## Tech Stack

- Node.js, Express
- MongoDB Atlas, Mongoose
- Multer, Sharp
- CORS, dotenv

## Environment Variables

Create a `.env` file inside the `backend` folder:

```env
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000

Run Locally
cd backend
npm install
npm run dev

Server will run on http://localhost:5000.

Key routes:

GET /api/projects

POST /api/projects (multipart/form-data with image)

GET /api/clients

POST /api/clients (multipart/form-data with image)

GET /api/contacts

POST /api/contacts

GET /api/subscribers

POST /api/subscribers




