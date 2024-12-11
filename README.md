# Proyecto: prueba_sngular

Este proyecto utiliza **React** junto con **Vite** para el desarrollo de una aplicación moderna, rápida y eficiente.
Además, cuenta con herramientas para pruebas, estilos y buenas prácticas en el código.

---

## Tecnologías utilizadas

### Dependencias principales

| **Librería** | **Versión** | **Descripción**                                              |
|--------------|-------------|--------------------------------------------------------------|
| `react`      | ^18.3.1     | Biblioteca principal para crear interfaces de usuario.       |
| `react-dom`  | ^18.3.1     | Manejo de React con el DOM.                                  |
| `sonner`     | ^1.7.1      | Librería para mostrar notificaciones elegantes y accesibles. |

### Dependencias de desarrollo

| **Librería**                  | **Versión** | **Descripción**                                                       |
|-------------------------------|-------------|-----------------------------------------------------------------------|
| `vite`                        | ^6.0.1      | Herramienta para compilación y desarrollo rápido de proyectos.        |
| `vite-tsconfig-paths`         | ^5.1.4      | Soporte para importar archivos usando rutas configuradas en tsconfig. |
| `typescript`                  | ~5.6.2      | Lenguaje con tipado estático para JavaScript.                         |
| `jest`                        | ^29.7.0     | Corredor de pruebas unitarias.                                        |
| `ts-jest`                     | ^29.2.5     | Integración de Jest con TypeScript.                                   |
| `@types/jest`                 | ^29.5.14    | Tipos de TypeScript para Jest.                                        |
| `eslint`                      | ^9.15.0     | Herramienta para encontrar y corregir problemas en el código.         |
| `eslint-plugin-react-hooks`   | ^5.0.0      | Reglas de ESLint para React Hooks.                                    |
| `eslint-plugin-react-refresh` | ^0.4.14     | Reglas de ESLint para React Refresh.                                  |
| `tailwindcss`                 | ^3.4.16     | Framework de utilidad para diseñar estilos con CSS.                   |
| `postcss`                     | ^8.4.49     | Herramienta para procesar CSS con plugins.                            |
| `autoprefixer`                | ^10.4.20    | Agrega prefijos específicos de navegador a CSS automáticamente.       |

---

## Requisitos previos

- **Node.js** instalado (versión recomendada: **16.x** o superior).
- **npm** o **yarn** como gestor de paquetes.

---

## Instalación del proyecto

Sigue estos pasos para instalar y ejecutar el proyecto en tu entorno local:

### 1. Clonar el repositorio

```bash
    git clone <URL_DEL_REPOSITORIO>
```

### 2. Acceder al directorio del proyecto

```bash
    cd prueba_sngular
```

### 3. Instalar dependencias

```bash
    npm install
```

O si prefieres usar **Yarn**:

```bash
    yarn install
```

---

## Scripts disponibles

### Desarrollo local

Inicia el servidor de desarrollo con Vite:

```bash
    npm run dev
```

Esto abrirá automáticamente el proyecto en `http://localhost:5173`.

### Construcción del proyecto

Genera los archivos optimizados para producción:

```bash
    npm run build
```

Los archivos resultantes estarán en la carpeta **dist**.

### Previsualizar la versión de producción

Ejecuta el servidor para visualizar la versión de producción:

```bash
    npm run preview
```

### Ejecutar pruebas unitarias

Corre las pruebas usando Jest:

```bash
    npm run test
```

### Linter para verificar el código

Revisa y corrige errores en el código:

```bash
    npm run lint
```

---

## Estructura del proyecto

La estructura básica del proyecto es la siguiente:

```
prueba_sngular/
├── src/                       # Código fuente
│   ├── components/            # Componentes de React
│   ├── core/                  # Lógica de negocio
│   ├── __tests__/             # Pruebas unitarias
│   ├── App.tsx                # Componente principal
│   └── main.tsx               # Punto de entrada
├── public/                    # Archivos estáticos
├── package.json               # Configuración del proyecto y dependencias
├── tsconfig.json              # Configuración de TypeScript
├── vite.config.ts             # Configuración de Vite
└── README.md                  # Documentación del proyecto
```

---

## Personalización de Tailwind CSS

Tailwind está configurado mediante los archivos:

- `tailwind.config.js`: Configura las opciones del framework.
- `postcss.config.js`: Procesador de estilos con PostCSS y Autoprefixer.

Puedes empezar a usar clases de Tailwind en tus componentes React de la siguiente manera:

```jsx
function Example() {
  return <div className="bg-blue-500 text-white p-4 rounded-md">Hola Mundo</div>;
}
```

Disfruta la experiencia 🚀

