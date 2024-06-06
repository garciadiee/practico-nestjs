### Gestor de Tareas con NestJS

El proyecto consiste en una aplicación sencilla para la administración de tareas, utilizando NestJS. La aplicación permite llevar a cabo operaciones como creación, lectura, actualización y eliminación de tareas.

#### Decisiones de Diseño

**Base de Datos:** Se utilizo SQLite debido a su fácil configuración y su idoneidad para proyectos de demostración.

**Validación:** Implementamos la validación de datos de entrada empleando class-validator y DTOs (Objetos de Transferencia de Datos).

**Documentación:** Para documentar la API y simplificar su uso, se ha integrado Swagger.

#### Cómo Probar la API

1. Clonamos el repositorio y navegamos hasta el directorio del proyecto.
2. Instalamos las dependencias ejecutando el siguiente comando:


    npm install


3. Para iniciar el servidor, ejecutar:


    npm run start


4. Acceder a la documentación de la API a través de:

    GET http://localhost:3000/api

#### Rutas de la API

- **GET** `http://localhost:3000/tasks`: Obtiene todas las tareas.
  
- **GET** `http://localhost:3000/tasks/id`: Obtiene una tarea específica.

- **POST** `http://localhost:3000/tasks`: Crea una nueva tarea. Ejemplo de cuerpo de la solicitud:


    {
        "title": "Nueva Tarea",
        "description": "Descripción de la nueva tarea"
    }
    

- **PATCH** `http://localhost:3000/tasks/id`: Actualiza una tarea existente. Ejemplo de cuerpo de la solicitud:


    {
        "title": "Tarea Actualizada",
        "description": "Descripción actualizada",
        "status": "Estado Designado, ejemplos; 'Pendiente', 'Realizada', 'En Progreso'"
    }


- **DELETE** `http://localhost:3000/tasks/id`: Elimina una tarea existente.

Reemplaza ":id" en las rutas con el identificador de cualquier tarea ya creada.