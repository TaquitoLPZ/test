# Tienda Deportiva – Proyecto de landing page interactiva

Este proyecto consiste en una landing page interactiva para una **tienda deportiva**. Fue creado como parte de un reto de *hackathon* en el que el objetivo era diseñar una plataforma en línea atractiva que muestre los principales productos y servicios de la tienda, aplique animaciones llamativas e integre funcionalidad de carrito de compras con persistencia en **LocalStorage**.

## Características principales

- **Diseño atractivo e intuitivo:** se utiliza la librería [Bootstrap 5](https://getbootstrap.com) para maquetar la interfaz y garantizar que sea responsive. El uso de iconos de [Font Awesome](https://fontawesome.com) complementa el aspecto moderno.
- **Animaciones:** cuando se añade un producto al carrito, la imagen o el icono del producto “vuela” hacia el ícono del carrito como retroalimentación visual. El contador del carrito realiza un pequeño rebote para indicar que el artículo se añadió correctamente.
- **Carrito de compras persistente:** los productos agregados se almacenan en `localStorage` para que permanezcan al recargar la página. Un panel *offcanvas* muestra el listado de artículos con su precio y permite eliminarlos.
- **Sección de servicios:** además de los productos, la página incluye una sección que describe algunos servicios que puede ofrecer una tienda deportiva (asesoría, clases y entrenamientos, mantenimiento de equipos).

## Estructura de archivos

```
sports-store/
├── assets/
│   └── soccer.jpg      # Imagen utilizada en la sección de héroe y primer producto
├── index.html          # Página principal con la estructura de la landing page
├── style.css           # Hoja de estilos personalizada
├── script.js           # Lógica de carrito, animaciones y almacenamiento
└── README.md           # Este archivo con información del proyecto
```

## Cómo ejecutarlo localmente

1. **Clonar o descargar el repositorio.**
2. Asegúrate de tener un navegador moderno como Chrome, Firefox o Edge.
3. Abre el archivo `index.html` en tu navegador (puedes hacer doble clic o usar la opción “Abrir archivo…” en el navegador).
4. Navega por las secciones, añade productos al carrito y observa cómo se guardan y pueden eliminarse.

No se requiere ningún servidor backend; todo el comportamiento se ejecuta en el navegador.

## Personalización

- **Agregar más productos:** duplica y modifica las tarjetas de producto dentro del div con `id="product-list"` en `index.html`. Cada botón de “Añadir al carrito” utiliza los atributos `data-id`, `data-name` y `data-price` para almacenar la información.
- **Cambiar imágenes:** las imágenes se encuentran en la carpeta `assets`. Puedes reemplazar `soccer.jpg` por otra imagen y actualizar la referencia en las tarjetas y la sección de héroe.
- **Modificar precios o textos:** simplemente edita los valores en `index.html`. El script tomará el precio definido en `data-price` para calcular el total.

## Licencia

Las imágenes utilizadas son de [Pexels](https://www.pexels.com) y están etiquetadas como libres de derechos para uso comercial. Consulta los términos de cada recurso si decides sustituirlas. El resto del código es de uso educativo y puede adaptarse libremente.