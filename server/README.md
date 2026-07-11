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

