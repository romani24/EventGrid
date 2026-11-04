<div align="center">

# 🎟️ EventGrid

**A bold editorial platform for discovering events and choosing tickets.**

[![Live Demo](https://img.shields.io/badge/Live_Demo-Open-4559ff?style=for-the-badge)](https://event-grid-demo.russetmole8193.chatgpt.site)
![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

</div>

## Features

- Event search and category filters
- Saved events
- Editorial responsive card layout
- Ticket tier and quantity selection
- Simulated ticket confirmation flow

## Architecture

```text
src/
├── app/                 # Page composition and global styles
├── features/
│   ├── discovery/       # Events, search, filters and saved state
│   └── tickets/         # Ticket selection and confirmation
└── shared/              # Reusable navigation components
```

## Run locally

```bash
npm install
npm run dev
```

All events, venues, prices and tickets are fictional. No payment is collected.
