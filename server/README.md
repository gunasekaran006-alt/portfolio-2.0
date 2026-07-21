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


# Day 66: Employee Management CRUD API

## Overview
This module implements a complete **Create, Read, Update, and Delete (CRUD)** system for managing employee records. It follows a clean architecture by separating business logic (Controllers), data schema definitions (Models), and request routing (Routes).

## Core Engineering Principles
* **RESTful Semantics:** Proper utilization of HTTP verbs (`GET`, `POST`, `PUT`, `DELETE`) to perform resource-based operations.
* **State Management:** Implementation of in-memory data arrays to simulate robust backend state transitions.
* **Atomic Operations:** Ensuring predictable API behavior for record manipulation, including index-based deletion and object-based updates.
* **Decoupled Architecture:** Full isolation of concerns, allowing for future seamless migration to persistent databases like MongoDB.

## Technical Highlights
* **ID Generation:** Utilization of `Date.now()` for unique, timestamp-based record identification.
* **Middleware Integration:** Effective use of `express.json()` for structured request body parsing.
* **Route Modularity:** Organized endpoint management, enabling easy scaling and maintenance of the employee directory.

## API Endpoints
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/employees` | Retrieves the full list of employees. |
| `POST` | `/employees` | Registers a new employee profile with ID generation. |
| `PUT` | `/employees/:id` | Executes partial updates to existing employee data. |
| `DELETE` | `/employees/:id` | Removes a specific employee from the registry. |

## Prerequisites
* **Runtime:** Node.js (v18+)
* **Framework:** Express.js (v5+)
* **Tooling:** Nodemon for development-phase hot-reloading.

--------------------------------------

# Day 67: Express Authentication System

## Overview
A secure authentication module implementing registration and multi-factor authentication (PIN verification).

## Engineering Principles
* **Environment Security:** Use of `dotenv` to manage sensitive server configurations, preventing hard-coding.
* **Identity Verification:** Multi-stage authentication flow (Credential validation + PIN verification).
* **Security Decoupling:** Authentication logic is isolated within the `security/` layer, ensuring modular and testable code.

## API Endpoints
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/auth/register` | Creates a new user with a generated 4-digit login PIN. |
| `POST` | `/auth/login` | Authenticates user credentials and validates the PIN via request headers. |


---------------------------------

# Day 70: MongoDB Database Integration & Mongoose Modeling

## Overview
Transitioned from in-memory data persistence to a robust **MongoDB** database, utilizing **Mongoose ODM** for schema definition and validation.

## Technical Architecture
* **ODM Layer:** Implemented Mongoose to enforce data structure via Schemas, ensuring type safety and validation (Enum status support).
* **Asynchronous Connection:** Robust connection handling with error management and process termination monitoring.
* **Schema-based Persistence:** Decoupled model architecture, preparing the application for scalable data retrieval and management.

## Engineering Principles
* **Data Integrity:** Used Enums in task schemas to restrict status transitions (`not-started`, `in-progress`, `completed`).
* **Environment Security:** Secured database connection strings using `.env` configurations to prevent credential exposure.
* **Scalable Modeling:** Mongoose models provide a foundation for complex queries and relations in future features.

## Tech Stack
* **Database:** MongoDB
* **ODM:** Mongoose
* **Environment:** dotenv


-----------------------------------------------

# Day 71: MongoDB CRUD Operations & Relationship Modeling

## Overview
Implemented advanced MongoDB CRUD operations and established a **One-to-Many relationship** between `Users` and `Tasks` collections using `ObjectId` references.

## Core Learning Outcomes
* **Data Modeling:** Mastered defining relational schemas in Mongoose.
* **CRUD Mastery:** Executed advanced query patterns including `insertMany`, `updateMany`, and `deleteMany`.
* **Relationship Management:** Implemented foreign-key-like behavior using `ObjectId` to link user-specific tasks.

## Concepts Covered
* **Create:** `insertOne`, `insertMany`
* **Read:** `find`, `findOne` with filtering.
* **Update:** `updateOne` and `updateMany` using `$set` operators.
* **Delete:** `deleteOne` and `deleteMany` for data maintenance.

-----------------------------------------------

# Day 72: Mongoose CRUD & Robust Error Handling

## Overview
Engineered a comprehensive RESTful API for task management with full CRUD (Create, Read, Update, Delete) functionality and professional error-handling mechanisms.

## Technical Highlights
* **Controller-Route Architecture:** Decoupled logic using Mongoose queries for cleaner, scalable code.
* **Resilient API:** Implemented comprehensive `try-catch` blocks to ensure graceful error handling and API stability.
* **Mongoose Integration:** Utilized powerful Mongoose methods (`findByIdAndUpdate`, `findByIdAndDelete`) for atomic database operations.

## Engineering Principles
* **State Management:** Transitioned from volatile local arrays to persistent MongoDB storage.
* **Standardized Responses:** Maintained consistent JSON response structures for both success and server error scenarios.

-------------------------------------------

# Day 73: MongoDB Aggregation Pipelines & Query Optimization

## Overview
Successfully mastered advanced data analysis using MongoDB Aggregation frameworks and optimized database read performance through strategic Indexing and execution profiling.

## Key Concepts Covered
* **Aggregation Framework:** Implemented pipeline stages like `$count`, `$group`, and `$sort` for real-time document summarization and grouping.
* **Database Indexing:** Created single-field indexes (`createIndex`) to transition lookup operations from resource-heavy scans to targeted pointer lookups.
* **Query Performance Analysis:** Utilized `.explain("executionStats")` to audit backend query execution metrics, comparing execution time, keys examined, and document traversal counts.
* **Scan Comparison (`COLLSCAN` vs `IXSCAN`):** Built diagnostic endpoints to contrast unoptimized full-collection scans with optimized index-backed searches.

## Practical Implementation Highlights
* **Analytics API:** Developed a backend route to aggregate task counts and status distributions dynamically.
* **Performance Lab UI:** Integrated interactive comparative cards in the backend laboratory interface to visually verify execution stages and speed gains.

## Tech Stack
* Node.js & Express.js
* MongoDB & Mongoose ODM
* Bootstrap UI (Frontend Lab)

--------------------------