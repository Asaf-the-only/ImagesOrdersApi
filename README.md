# Order and Photo Fetching API

A Node.js/TypeScript API that allows users to:

- Fetch photos from the Pixabay API.
- Create and manage orders with details such as email, full name, address, image URLs, and frame color.

## Features

- Fetch photos from Pixabay with caching to avoid exceeding API rate limits.
- Create and retrieve orders associated with users.
- Uses MongoDB as the database.

## Installation

1. Clone the repository:
   git clone https://github.com/your-username/your-repository-name.git
   cd your-repository-name

2. Install dependencies:
   npm install

3. Create a .env file with the following content:
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/{name}
   PIXABAY_API_KEY=45640711-3b2c9c3e0dd9ac6e6a5b798be

4. Start the server:  
   npm run start

## Examples:

Fetch photos:
curl http://localhost:3000/photos/5`

Create order:
curl -X POST http://localhost:3000/orders -H "Content-Type: application/json" \
-d '{
"email": "user@domain.com",
"fullName": "Name",
"address": "Address",
"imageUrls": ["https://images.com/1.jpg", "https://images.com/2.jpg"],
"frameColor": "black",
"user": "user"
}'

Get all orders for user:
curl http://localhost:3000/orders/user
