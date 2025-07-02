# AgiFlow

Este proyecto es una aplicación web construida con [Next.js](https://nextjs.org/) y [React](https://react.dev/), utilizando [pnpm](https://pnpm.io/) como gestor de paquetes.

## Requisitos previos

- [Node.js](https://nodejs.org/) (recomendado v18 o superior)
- [pnpm](https://pnpm.io/) (recomendado v8 o superior)

## Instalación

1. Clona el repositorio:

   ```bash
   git clone <URL-del-repositorio>
   cd AgiFlow
   ```

2. Instala las dependencias:

   ```bash
   pnpm install
   ```

## Comandos principales

- `pnpm dev`: Inicia el servidor de desarrollo en [http://localhost:3000](http://localhost:3000)
- `pnpm build`: Genera la build de producción
- `pnpm start`: Inicia la aplicación en modo producción (requiere haber ejecutado `pnpm build` antes)
- `pnpm lint`: Ejecuta el linter para revisar el código

## Despliegue

1. Construye la aplicación:

   ```bash
   pnpm build
   ```

2. Inicia el servidor en producción:

   ```bash
   pnpm start
   ```

Puedes desplegar la aplicación en cualquier plataforma que soporte Node.js, como Vercel, Netlify, o servidores propios.

## Estructura del proyecto

- `/app`: Páginas y layouts principales de la aplicación
- `/components`: Componentes reutilizables de UI
- `/hooks`: Hooks personalizados
- `/lib`: Funciones utilitarias
- `/public`: Archivos estáticos
- `/styles`: Archivos de estilos globales

## Tecnologías principales

- Next.js 15
- React 19
- Tailwind CSS
- Radix UI
- TypeScript

## Notas adicionales

- El archivo `next.config.mjs` contiene configuraciones personalizadas para Next.js.
- El proyecto utiliza Tailwind CSS para estilos y utilidades.
- Para desarrollo, puedes modificar los archivos en `/app` y `/components`.

---

Si tienes dudas o encuentras algún problema, por favor abre un issue o contacta al mantenedor del repositorio. 