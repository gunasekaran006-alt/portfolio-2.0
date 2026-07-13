# Backend Initialization Lab - Day 62

This module covers the foundational setup of an Express.js server, moving from manual Node.js scripts to automated development workflows.

## Workflow Integration
- **Framework:** Express.js (v5.2.1)
- **Execution:** Utilizing `node --watch` (2026 Standard) for hot-reloading without external dependencies like Nodemon.
- **Environment:** CommonJS module system.

## Server Specs
- **Port:** 8080
- **Primary Script:** `main.js`

## Commands
- **Dev Mode:** `npm run dev`
- **Production Start:** `npm start`


-------------------------------------------

# Day 63: Node.js Built-in Modules Lab

This module demonstrates the core functionality of Node.js built-in modules, effectively managing system events, file operations, and OS-level diagnostics.

## 📁 Project Structure
- `main.js`: Main entry point and Express routing logic.
- `SystemLab.js`: Modularized logic containing Events, File System, and OS diagnostics.
- `system_log.txt`: Generated log file for system diagnostics.

## 🛠 Modules Integrated
1. **Events Module (`EventEmitter`):**
   - Implemented `chatEvents` for real-time messaging simulation.
   - Implemented `paymentEvent` with `.once()` constraint to ensure idempotency in payment processing.

2. **File System (`fs`):**
   - Automated system logging into `entri.txt` and `system_log.txt`.
   - Asynchronous file handling with callback error management.

3. **Operating System (`os`):**
   - Real-time hardware monitoring.
   - Formatted Network Interface output using `JSON.stringify(..., null, 2)`.

## 🚀 API Endpoints
| Endpoint | Description |
| :--- | :--- |
| `GET /` | Root verification endpoint. |
| `GET /system-status` | Returns OS health, memory stats, and logs network info to terminal. |
| `GET /test-events` | Triggers Chat and Payment event logic. |
| `GET /create-file` | Creates/Updates the `entri.txt` system file. |

## ⚙️ Commands
- **Start Development:** `npm run dev`
  *(Note: This uses `node --watch` to monitor changes in real-time.)*

## 💡 Pro-Tip
The OS Network Interface is logged in a formatted JSON structure to the terminal for debugging purposes.


----------------------------------------------

நிச்சயமாக, உங்கள் **Day 64 - MVC Express Architecture** பயிற்சிக்கான தொழில்முறை (Professional) README கோப்பு இதோ. இதை உங்கள் `server` ஃபோல்டரில் `README.md` என்ற பெயரில் சேமிக்கவும்.

---

### README.md

```markdown
# MVC Express API Architecture - Day 64

## Overview
This module demonstrates the transition from a monolithic script structure to a scalable **Model-View-Controller (MVC)** architectural pattern. The focus is on decoupling business logic from routing, ensuring the application remains maintainable and extensible.

## Engineering Principles Implemented
* **Separation of Concerns (SoC):** Business logic is abstracted into the `controller/` layer, while request handling is isolated within the `routes/` layer.
* **RESTful API Standardization:** Enforced standardized URI structures (e.g., `/api/products/...`) to ensure predictable endpoint behavior.
* **Modular Codebase:** Leveraged Express Router to create plug-and-play route modules, preventing clutter in the main application entry point.
* **Scalable Data Handling:** Prepared for integration with database models, maintaining a clean architecture for future ORM/ODM implementation.

## Project Structure
```text
server/
├── controller/
│   └── products.controller.js  # Contains core API logic (CRUD functions)
├── routes/
│   └── products.routes.js      # Defines API endpoints and connects to controllers
└── main.js                     # Application entry point & middleware initialization

```

## API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/products/all-products` | Fetches the complete product catalog. |
| `POST` | `/api/products/create` | Initializes a new product entry in the system. |
| `PUT` | `/api/products/edit` | Updates existing product information. |
| `DELETE` | `/api/products/delete` | Removes a specific product asset from the system. |

## Prerequisites

* **Runtime:** Node.js (v18+)
* **Framework:** Express.js (v5+)
* **Tooling:** Nodemon for hot-reloading during development.


----------------------------------------------

# Day 65: Express API & In-Memory Data Persistence

## Overview
This module transitions from static routing to a dynamic **Model-View-Controller (MVC)** framework, incorporating in-memory data management for real-time API simulation.

## Engineering Principles
* **Stateful API Design:** Implementing `in-memory` storage to simulate database interactions before integrating production-grade persistence layers.
* **REST Payload Handling:** Utilizing `express.json()` middleware for robust JSON serialization and deserialization of incoming client requests.
* **Controller Layer Abstraction:** Decoupling business logic from routes to ensure high testability and maintainability.
* **Standardized JSON Schema:** Enforcing consistent object structures for data communication between the client and server.

## API Endpoints
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/products/products` | Retrieves all product records currently stored in the memory layer. |
| `POST` | `/api/products/create` | Dynamically initializes a product record with unique ID generation. |

## Technical Implementation
* **Model Layer:** Manages the temporary array-based database.
* **Controller Layer:** Contains CRUD logic, including input validation and ID generation.
* **Route Layer:** Exposes API endpoints and connects HTTP methods to controller logic.


--------------------------------------------