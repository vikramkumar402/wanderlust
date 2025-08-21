# Wanderlust Project Summary

## Project Overview
**Wanderlust** is a full-stack web application built with Node.js, Express, and MongoDB. It's a listing/rental platform similar to Airbnb where users can view, create, and manage property listings.

## Technology Stack
- **Backend**: Node.js with Express.js framework
- **Database**: MongoDB (with Mongoose ODM)
- **Frontend**: EJS templating engine with Bootstrap styling
- **Authentication**: Passport.js with local strategy
- **Session Management**: Express-session with connect-flash

## Project Structure
```
wanderlust/
├── app.js                 # Main application file
├── package.json          # Dependencies and scripts
├── models/               # Database models
├── routes/               # Route handlers
├── views/                # EJS templates
├── public/               # Static files (CSS, JS, images)
├── utils/                # Utility functions
└── classroom/            # Additional route modules
```

## Key Dependencies
```json
{
  "express": "^4.19.2",
  "mongoose": "^8.0.0",
  "ejs": "^3.1.10",
  "passport": "^0.7.0",
  "passport-local": "^1.0.0",
  "joi": "^17.13.3"
}
```

## Main Issue Encountered

### Problem: MongoDB Connection Timeout
**Error**: `Operation 'listings.find()' buffering timed out after 10000ms`

### Root Cause
- MongoDB was not installed or running locally
- Application configured to connect to `mongodb://127.0.0.1:27017/wanderlust`
- Without database connection, all listing operations fail

### Impact
- Homepage loads but shows timeout error
- Cannot view listings, create accounts, or perform any database operations
- Application essentially non-functional without database

## Solutions Implemented

### Solution Options Provided:

#### Option 1: Local MongoDB Installation
1. Download MongoDB Community Server from official website
2. Install with Windows Service option enabled
3. Start MongoDB service: `net start MongoDB`
4. No code changes required

#### Option 2: MongoDB Atlas (Cloud Database) - Recommended
1. Create free MongoDB Atlas account
2. Set up free cluster (512MB storage)
3. Get connection string from Atlas dashboard
4. Update `app.js` line 20:
   ```javascript
   const MONGO_URL = `mongodb+srv://username:password@cluster.mongodb.net/wanderlust`;
   ```

#### Option 3: Docker Container
```bash
docker run -d -p 27017:27017 --name mongodb mongo
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or Atlas account)

### Installation Steps
1. Extract project files
2. Install dependencies: `npm install`
3. Set up MongoDB (choose one option above)
4. Start application: `npm start`
5. Access at: `http://localhost:8080`

### Environment Configuration
For production deployment, consider:
- Environment variables for database URL
- Secure session secret
- HTTPS configuration
- MongoDB Atlas for cloud database

## Features
- User authentication (signup/login)
- Property listing management
- Review system
- Session-based authentication
- Flash messaging
- Responsive design

## Next Steps
1. Choose and implement database solution
2. Seed database with sample listings
3. Test all functionality
4. Deploy to production (optional)

---
*Generated on: ${new Date().toLocaleDateString()}*