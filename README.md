# CarShop

Este es el proyecto final del modulo de React de la certificacion fullStack de Coding Bootcamp Espol

# Descripción:

Esta aplicación web facilita la gestión del proceso de recepción de vehículos en un taller automotriz. Agiliza el registro de datos, genera órdenes de trabajo y mejora la experiencia del cliente.

# Funcionalidades:

Registro de datos del cliente:
- Nombre completo (obligatorio)
- Correo electrónico (obligatorio)
- Número de contacto (obligatorio)
- Identificación fiscal (obligatorio)
- Tipo de identificación (cédula, RUC, pasaporte) (obligatorio)
Registro de datos del vehículo:
- Marca (obligatorio)
- Modelo (obligatorio)
- Placa (obligatorio)
- Nivel de combustible
- Observaciones (abolladuras, rayones, etc.)
Selección de servicios:

-Casillas para seleccionar los servicios deseados(7 servicios disponible)
Orden de trabajo:
-Resumen de la información ingresada 
-Fecha y hora estimada de entrega
-Opción para que el cliente apruebe la orden

# Beneficios

Agiliza el proceso de recepción de vehículos
Mejora la organización y control
Optimiza la experiencia del cliente
Minimiza errores

# Tecnologías
- JavaScript
- React
- Bootstrap

# Instalación
- Clonar el repositorio: git clone https://github.com/ibajana/CarShop.git
Instalar dependencias: 
``` [npm install bootstrap]```
```[npm install bootstrap react-boostrap]```
```[npm install react-hook-form]```
Se recomienda el uso de Vite

# Uso

Accede a la aplicación desde un navegador web.
Ingresa los datos del cliente en el formulario correspondiente.
Completa los datos del vehículo.
Selecciona los servicios que el cliente desea realizar.
Revisa la orden de trabajo y aprueba si es correcta.


# Notas de Progamacion

Se uso el hook useState para manejar el estado de los componentes y realizar el renderizado condicional de los componentes segun la validacion de los formularios. Ademas se utilizo el hook reducer para controlar la posible hora de entrega del vehiculo segun la cantidad de servicios escogidos, y el useContext para utilizar los datos necesarios unicamente cuando se los requiera

Para validar los formularios se utilizó la libreria React-Hook-Form y se utilizaron expresiones regulares para comparar si un cuadro esta llenado de forma correcta.

Se utilizó React-bootstrap para los estilos de la app, pero no se agregó el modo oscuro