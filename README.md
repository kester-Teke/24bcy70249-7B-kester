## Product Manager (Next.js, Zustand, Tailwind, shadcn/ui)

**Name:** DRAMANE TRAORE
**Roll Number:** 24BCY70270
**Experiment No:** 7

---

### 🌐 Live Demo

🔗 https://24-bcy-70270-7b-dramane-traore.vercel.app/

---

This project is a **Product Management / Cart System** built using **Next.js**, **Zustand**, and **shadcn/ui**.
It demonstrates a simple CRUD-like application with **persistent state management using localStorage** and is designed as a learning project for Experiment 7.

---

### Features

* **Create** new products dynamically
* **Read**: view a list of products in a cart layout
* **Update** product quantity
* **Delete** products from the cart
* **Dynamic Total Calculation**
* **Persistent Storage** using localStorage

---

### Tech Stack

* **Framework**: Next.js 16 (App Router)
* **UI Library**: React 19
* **Language**: TypeScript
* **Styling**: Tailwind CSS v4
* **State Management**: Zustand v5
* **Persistence**: Zustand Persist Middleware (localStorage)
* **UI Components**: shadcn/ui (Button, Input)

---

### Project Structure

```text
.
├─ app/
│  ├─ layout.tsx
│  └─ page.tsx
├─ components/
│  ├─ ProductList.tsx
│  ├─ ProductItem.tsx
│  └─ ui/
│     ├─ button.tsx
│     └─ input.tsx
├─ store/
│  └─ useProductStore.ts
├─ lib/
│  └─ utils.ts
├─ package.json
└─ README.md
```

---

### Prerequisites

* Node.js v18+
* pnpm

---

### Install & Run

```bash
pnpm install
pnpm dev
```

Open:

```
http://localhost:3000
```

---

### Notes

* Data is stored in localStorage
* To reset data:

```js
localStorage.clear()
```
