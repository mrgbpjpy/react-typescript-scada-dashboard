# React + TypeScript SCADA Dashboard

A small SCADA-style dashboard built with React, TypeScript, and Vite. It simulates live telemetry updates and derives an active alarm list from sensor status.

Live demo: https://react-typescript-scada-dashboard.vercel.app/

## What It Does

- Displays a grid of sensors (ID, value, status)
- Simulates telemetry changes every ~2 seconds
- Derives alarms from any sensor in `WARNING` / `CRITICAL`

Status thresholds (see `src/utils/evaluateStatus.ts`):

- `OK`: < 85
- `WARNING`: 85-99
- `CRITICAL`: >= 100

## Tech Stack

- React 19 + TypeScript
- Vite (dev server + build)
- ESLint (flat config)
- Deployed on Vercel

## Getting Started

Prereqs: Node.js + npm

```bash
npm ci
npm run dev
```

Build and preview locally:

```bash
npm run build
npm run preview
```

## Project Structure

- `src/App.tsx` - initializes sensors, updates telemetry on an interval, computes alarms
- `src/services/telemetryService.ts` - randomizes sensor values and re-evaluates status
- `src/utils/evaluateStatus.ts` - status thresholds
- `src/components/` - UI components (`SensorGrid`, `SensorCard`, `AlarmList`)
- `src/models/` - TypeScript models (`Sensor`, `Alarm`, `Telemetry`)

## Customize

- Add/remove sensors: edit the initial `sensors` state in `src/App.tsx`
- Change update rate: adjust the `setInterval` in `src/App.tsx`
- Change thresholds: edit `src/utils/evaluateStatus.ts`
