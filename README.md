# Sistema de Gestión Bibliotecaria - Arquitectura Fullstack Offline-First

Proyecto integrador que comprende una API REST con Next.js 16 y Firebase, junto con una aplicación móvil offline-first desarrollada en React Native y Expo SDK 58.

## Estructura del Proyecto

- `library_api/`: Backend REST, Route Handlers, autenticación con Firebase Admin SDK, control de acceso por roles (Custom Claims) y plataforma web administrativa.
- `library_app/`: Aplicación móvil con almacenamiento persistente en SQLite, cola de sincronización offline con resolución de conflictos y almacenamiento seguro de credenciales con Expo SecureStore.

## Requisitos Previos

- Node.js >= 20.x
- pnpm (`npm install -g pnpm`)
- Expo Go en dispositivo móvil o emulador