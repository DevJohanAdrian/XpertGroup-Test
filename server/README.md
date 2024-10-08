# 🚀 Features Back end

- Estructura por capas (Layered architecture)
- Swagger UI: Documentacion generada a partir de zod schemas (http://localhost:3000)
- Logging pino-http: Logging para mantener control de mensajes
- Axios: Para consumo a api cat api
- Cors: Configuraciones de origenes con CORS
- ServiceResponse: Para estandarizar las repuestas de los endpoints
- Helmet: Para no exponer informacion sensible en la cabeceras


## Guía paso a paso

### Paso 1: 🚀 Configuración inicial

- Clonar el repositorio: `git clone https://github.com/DevJohanAdrian/XpertGroup-Test.git`
- Navegar: `cd server`
- Instalar dependencias: `npm ci`

#### Paso 2: ⚙️ Configuración del entorno

- Crear `.env`: Copiar `.env.template` a `.env`
- Actualizar `.env`: Completar las variables de entorno necesarias

#### Paso 3: 🏃‍♂️ Ejecutar el proyecto

- Modo de desarrollo: `npm run dev`
- Compilación: `npm run build`
- Modo de producción: Establezca `.env` en `NODE_ENV="production"` y luego `npm run build && npm run start`



