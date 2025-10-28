# Freelance Hub - Backend


This repository is a scaffold for a modular Express + MongoDB REST API (MERN backend) implementing auth, roles, and CRUD.


## Setup
1. Copy `.env.example` to `.env` and fill values.
2. `npm install`
3. `npm run dev`


## Endpoints (examples)
- POST /api/auth/signup -> { email, password, role }
- POST /api/auth/login -> { email, password }
- POST /api/projects -> (auth) create project
- GET /api/projects -> list projects
- PUT /api/projects/:id -> (auth + owner/admin) update
- DELETE /api/projects/:id -> (auth + admin) delete




// Notes & next steps
// - Add request validation
// - Add seed script to create an admin user
// - Add proposal module (freelancer proposals) following same pattern
// - Add pagination and filtering for projects


// End of scaffold