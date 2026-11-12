<div align="center">

<img src="docs/media/hero.svg" alt="Task Planner — a React task app with routing, Redux and JWT auth" width="100%">

<p>
  <a href="https://task-planner-eta.vercel.app"><img alt="Live" src="https://img.shields.io/badge/live-open%20the%20planner-6d8cff?style=for-the-badge&labelColor=070b16"></a>
  <img alt="Redux Toolkit" src="https://img.shields.io/badge/Redux%20Toolkit-persist-4ee6b0?style=for-the-badge&labelColor=070b16">
  <img alt="React Router" src="https://img.shields.io/badge/React%20Router-protected%20routes-ffb547?style=for-the-badge&labelColor=070b16">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-6d8cff?style=for-the-badge&labelColor=070b16">
</p>

<p><em>A task planner built to practise modern React: routing, global state,<br>
asynchronous requests and authentication with JSON Web Tokens.</em></p>

</div>

<img src="docs/media/divider.svg" width="100%" alt="">

## What it practises

| | |
|---|---|
| **Components** | A component-based layout: app bar, layout, task, form, list and counter. |
| **Routing** | Pages with React Router, including restricted and private routes. |
| **Global state** | Redux Toolkit slices, persisted with redux-persist. |
| **Async** | `createAsyncThunk` with Axios against a REST backend. |
| **Auth** | Register, log in and log out with JWT; only signed-in users reach their tasks. |
| **Forms** | Formik with Yup validation, toast feedback and light motion. |

```mermaid
flowchart LR
  R[Register / Login] --> J[JWT] --> S[(Redux store · persisted)]
  S --> PR{Private route}
  PR -- signed in --> T[Tasks page<br/>add · toggle · delete · counter]
  PR -- not signed in --> R
  T --> API[REST backend · Axios thunks]
```

<img src="docs/media/divider.svg" width="100%" alt="">

## Türkçe özet

**Task Planner**, modern React kavramlarını pekiştirmek için yapılmış bir görev planlayıcı: React Router ile sayfa yönetimi, Redux Toolkit ile global durum, `createAsyncThunk` ile backend istekleri ve JWT ile kimlik doğrulama. Korumalı rotalar sayesinde görevlere yalnızca giriş yapmış kullanıcılar ulaşabiliyor. GoIT Full Stack eğitimi sırasında hazırlandı.

<img src="docs/media/divider.svg" width="100%" alt="">

## Development

```sh
npm install
npm run dev      # http://localhost:5173
npm run build
```

```
src/components/   AppBar, Layout, Task, TaskForm, TaskList, TaskCounter
src/pages/        Home, Register, Login, Tasks
src/redux/        auth and tasks slices, operations, store
```

<div align="center">
<br>
<a href="https://github.com/kutluhangil"><img src="docs/media/signature.svg" width="100%" alt="Built by kutluhangil"></a>
<sub>A learning project from the GoIT Full Stack programme.</sub>
</div>
