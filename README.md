# 🚀 Features Front end

- Angular: Version de angular 18.2.1. generado por angular CLI 
- Bootstrap: Como framework css
- NG-bootstrap: Para componentes compatibles con Angular y Bootstrap


## Guía paso a paso

### Paso 1: 🚀 Configuración inicial

- Clonar el repositorio: `git clone https://github.com/DevJohanAdrian/XpertGroup-Test.git`
- Navegar: `cd client/mi-proyecto-angular`
- Instalar dependencias: `npm ci`


#### Paso 2: 🏃‍♂️ Ejecutar el proyecto

- Modo de desarrollo: `npm run start` para salida en puerto local (http://localhost:4200/)
- Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.


---

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



