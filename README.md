# 📝 Task Item App - Test Automation

This repository contains automated UI and API tests for the [Task Item] application. The app uses a **React frontend** and **Node.js (Express) backend**, started concurrently with `npm start`.

## 📦 Project Structure

```
root/
├── client/                  # React frontend
│   └── cypress/             # Cypress tests
├── server/                  # Express backend
├── postman/                 # Postman collection
├── .github/workflows/       # GitHub Actions CI/CD
├── README.md                # Project documentation
└── Test-Plan-ToDoApp.docx   # Test strategy document
```

---

## 🚀 Setup Instructions (⏱️ ~2 minutes)

### 1. Clone the Repo

### 2. Install Root Dependencies
```bash
npm install
```

### 3. Install Client and Server Dependencies
```bash
cd client && npm install
cd ../server && npm install
```

### 4. Start Frontend and Backend Concurrently
From the **root folder**:
```bash
npm start
```

> 🌐 App is now available at `http://localhost:5000`

---

## 🧪 Running Cypress UI Tests

> Cypress is installed in the `client/` folder.

### UI Test Scripts

```bash
npm run cy:run
```

This runs:
- `ValidateLogin.cy.js`
- `CreateItem.cy.js`
- `UpdateItem.cy.js`
- `DeleteItem.cy.js`

Make sure the app is already running (`npm start`).

---

##  Running Postman API Tests

- `POST /login` – login functionality
- `GET /items` – fetch all item tasks
- `POST /items` – create new item
- `PUT /items/:id` – update a item
- `DELETE /items/:id` – delete a item

> Newman is used to run Postman collection tests.

### 1. Install Newman Globally
```bash
npm install -g newman
```

### 2. Run API Tests
```bash
npm run api:test
```

This executes the Postman collection at:
```
Postman/NodejsAPI_Backend.postman_collection.json
```

---

## GitHub Actions CI/CD

CI pipeline runs:
- `npm install`
- Starts frontend + backend with `npm start`
- Runs Cypress tests (with screenshot snapshots)
- Runs Postman API tests via Newman

### Workflow File: `.github/workflows/ci.yml`

Steps include:
- Setup Node.js
- Install dependencies
- Run app
- Wait for server to start
- Run `cy:run` and `api:test`
- Upload Cypress screenshots (artifacts)

>  No additional setup required. GitHub Actions will auto-trigger on push or pull request to `main`.

---

## Visual Snapshots

Cypress screenshots are saved automatically in GitHub Actions and can be downloaded under the **Artifacts** section for each run.

---

## Additional Notes

- All tests assume the app is running on `http://localhost:5000`.
- Cypress runs in headless mode in CI.
- Postman includes both positive and negative test cases.

---

## Author

**Ademola Oyerinde**  
Quality Assurance Engineer  