# React + TypeScript Internal Operations Dashboard (SCADA-Inspired)

A **React + TypeScript internal tooling dashboard** inspired by SCADA systems and designed to model how engineers monitor, debug, and reason about live operational data.

This project intentionally focuses on **developer productivity, correctness, and safety**—the same principles required when building internal tools that support production systems at scale.

**Live Demo:** https://react-typescript-scada-dashboard.vercel.app/

---

## Why This Project Exists

Internal engineering tools are often more critical than customer-facing UIs. They must be:
- Correct under pressure
- Easy to reason about
- Safe to evolve
- Clear about system state

This dashboard simulates a real-world operational scenario where engineers observe telemetry, detect anomalies, and respond to derived alerts—mirroring the workflows used by platform and commerce engineering teams.

---

## Key Design Principles

### 1. Type Safety as a First-Class Feature
All telemetry, alarms, and UI boundaries are defined using explicit TypeScript models.  
This prevents category errors, reduces runtime failures, and makes system behavior easier to understand and evolve.

### 2. Derived State Over Stored State
Alarm data is **computed from telemetry**, not stored independently.

Benefits:
- Eliminates duplicated state
- Prevents data drift
- Guarantees alarms always reflect the current system truth

This mirrors real production systems where alerts are derived from metrics rather than manually maintained.

### 3. Localized, Intentional State Management
Global state management (Redux, Zustand, etc.) is intentionally avoided.

Why:
- The data flow is explicit and predictable
- The system is easier to debug
- Components remain easy to reason about

State complexity should scale *only* when the problem demands it.

### 4. Clear Separation of Concerns
- Telemetry generation and evaluation logic live outside UI components
- UI components focus purely on rendering
- Business rules are centralized and testable

This structure supports safe iteration and future migrations.

---

## What the Dashboard Demonstrates

- Real-time telemetry updates (simulated every ~2 seconds)
- Clear visualization of system state across multiple sensors
- Automatic derivation of alarms based on thresholds
- Deterministic status evaluation logic

### Status Thresholds

Defined in `src/utils/evaluateStatus.ts`:

| Status     | Value Range |
|------------|-------------|
| OK         | < 85        |
| WARNING    | 85–99       |
| CRITICAL  | ≥ 100       |

---

## Technology Stack

- **React 19** – Component-based UI architecture
- **TypeScript** – Strongly typed data contracts
- **Vite** – Fast local development and builds
- **ESLint (Flat Config)** – Consistent code quality
- **Vercel** – Production deployment

---

## Project Structure

```
src/
├── App.tsx                  # Application entry, orchestration, derived alarms
├── services/
│   └── telemetryService.ts  # Telemetry simulation and evaluation logic
├── utils/
│   └── evaluateStatus.ts    # Centralized status thresholds
├── components/
│   ├── SensorGrid.tsx
│   ├── SensorCard.tsx
│   └── AlarmList.tsx
└── models/
    ├── Sensor.ts
    ├── Alarm.ts
    └── Telemetry.ts
```

This layout reflects how internal tools are typically structured: clear domains, explicit data contracts, and minimal coupling.

---

## Getting Started

### Prerequisites
- Node.js
- npm

### Install & Run
```bash
npm ci
npm run dev
```

### Build & Preview
```bash
npm run build
npm run preview
```

---

## Extensibility Ideas

This project is intentionally minimal, but designed to scale:

- Replace simulated telemetry with WebSockets or streaming APIs
- Add audit logging for configuration changes
- Introduce role-based views for operators vs engineers
- Integrate GraphQL or REST backends
- Add safe configuration editing with validation

---

## Why This Matters for Internal Tooling Teams

This project reflects how I approach building internal platforms:
- Favor correctness over cleverness
- Make system behavior obvious
- Design for debugging first
- Optimize for engineers who rely on the tool daily

These principles scale whether supporting a SCADA system, commerce platform, or global revenue infrastructure.

---

## License

MIT
