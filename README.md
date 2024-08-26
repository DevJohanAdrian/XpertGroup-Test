# Preguntas
- **Describa qué son los CORS y cómo se pueden configurar en una aplicación:**
  * Los CORS se encargan de proporcionar una parte de la seguridad en nuestro servidor, controlando el tipo de peticiones que se pueden realizar desde el navegador, especificando qué dominios u orígenes tienen permitido el acceso, así como qué cabeceras o uso de cookies son permitidos.
  * Mi manera de implementar CORS en mis aplicaciones:
    1. Con la instalación de CORS mediante uno de los muchos gestores de paquetes como npm: `npm install cors`.
    2. Creando un archivo donde definiré la configuración de CORS para ser utilizada después. Me gusta crear una carpeta `config` donde deposito este tipo de configuraciones, para mantener mi aplicación lo más organizada posible y de fácil lectura y entendimiento, evitando sobrecargar mis archivos de entrada (index, server).
    3. Utilizo el archivo con la configuración en un `app.use()` en mi archivo de entrada, que puede llamarse `server.ts` o `server.js`.

- **Describa el ciclo de vida de un componente en Angular:**
  * Un componente en Angular posee 8 etapas en su ciclo de vida, cada ciclo o etapa se conoce como un lifecycle hook event.
  * **Constructor de clase:** El constructor de la clase del componente se ejecuta primero; es el lugar ideal para inyectar dependencias.
  * **ngOnChanges:** Solo se ejecuta cuando un valor en un input form que está en un componente cambia.
  * **ngOnInit:** Se ejecuta cuando el componente es inicializado, después de ngOnChanges.
  * **ngDoCheck:** Para la detección de cambios en Angular, se llama después de cada ciclo de ejecución de ngOnChanges. 
    1. **ngAfterContentInit:** Se ejecuta solo una vez, después de ngDoCheck, justo después de que Angular muestre contenido externo en nuestros componentes con ng-content.
    2. **ngAfterContentChecked:** Se ejecuta solo después de que Angular verifica el contenido proyectado por ngAfterContentInit y después de ngDoCheck.
    3. **ngAfterViewInit:** Se ejecuta cuando la vista del componente se inicializó por completo; se llama una única vez, después de ngDoCheck y ngAfterContentChecked.
    4. **ngAfterViewChecked:** Se llama después de ngAfterViewInit y cuando la vista del componente detecta cambios, y después de ngAfterContentChecked.
  * **ngOnDestroy():** Se ejecuta antes de la destrucción de un componente en Angular; es útil para darse de baja de los observables, event handlers o para evitar memory leaks. Se llama solo una vez.

- **Describa qué es y cómo funciona un sistema de ruteo en Angular:**
  * Un sistema de ruteo permite la creación de SPA (Single Page Application) y la manipulación de vistas sin necesidad de cargar una nueva vista.
  * Define las rutas que se utilizan en la navegación de vistas de la aplicación front-end.
  * Permite rutas con parámetros, lo que nos permite cargar componentes dinámicamente.
  * Utiliza guards que permiten o bloquean la navegación entre vistas, proporcionando rutas protegidas si no se cumplen los requerimientos del guard.
  * Facilita la carga perezosa (Lazy Loading), mejorando el rendimiento de la aplicación.

- **Describa el patrón Observable y su uso en Angular:**
  * La programación reactiva es una forma de manejar datos que se adapta bien a Angular, donde los datos se sincronizan a través de eventos. En Angular, se utiliza RxJS para esto, una librería que implementa el patrón del observable. Este patrón funciona como una relación entre un sujeto que envía información y varios observadores que reaccionan a esos datos. Es especialmente útil en aplicaciones donde varios componentes dependen de la misma fuente de datos, como en una tienda en línea donde un componente muestra los productos en el carrito y otro la cantidad total.

- **Especifique la división de capas en Express y Angular y agregue una descripción por cada una de estas:**
  * Utilizo una arquitectura de capas (Layered Architecture) para la organización del proyecto. La idea es aplicar el **principio de separación de conceptos** para separar la lógica empresarial de las rutas API de Node.js. A continuación, explico cada una de las capas:
  
  ### Express  
  1. **Capa de aplicación (Application Layer):** Todo lo relacionado con la infraestructura web.
     - Web Framework (Express)
     - Controladores: No se debe incluir lógica de negocio aquí. Cada método de ruta llama a su método en la capa de servicio y espera por la respuesta; esta es la única responsabilidad de la capa de controller.
     - Capa de validación
     - Capa de autenticación
     - Capa de autorización
     - Capa de enrutamiento
     
  2. **Capa de negocio (Business Layer):** En un mundo ideal, esta debería ser la capa encargada de especificar la lógica de negocio. Se enfoca en transformar los datos para que cumplan con los modelos de datos en el método de solicitud (request) al servidor.
     - Servicios
     - Modelos
     - Dominio
     
  3. **Capa de acceso a datos (Data Access Layer):** Los métodos en la DAL reciben variables desde la capa de servicio. Estas variables se requieren para la solicitud HTTP al servidor.
     - DAO



---

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

### Paso 4: 🛣️ Rutas

- /login
- /register
- /dashboard
- /catTable
- /cats

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



