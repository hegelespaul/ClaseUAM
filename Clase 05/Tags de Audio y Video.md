Aquí tienes el contenido sobre las etiquetas de **audio** y **video** en Markdown:

---

## **Clase: Uso de las Etiquetas `<audio>` y `<video>` en HTML**

### **¿Qué son las Etiquetas `<audio>` y `<video>`?**
Las etiquetas `<audio>` y `<video>` de HTML5 permiten incrustar archivos de audio y video en una página web, sin necesidad de plugins adicionales. Estas etiquetas proporcionan controles básicos de reproducción (play, pause, volumen, etc.) y son altamente personalizables con atributos y propiedades de CSS y JavaScript.

---

### **Etiqueta `<audio>`**

La etiqueta `<audio>` se utiliza para incrustar un archivo de audio en la página web. Es posible incluir controles para permitir la interacción del usuario, como reproducir, pausar, ajustar el volumen, entre otros.

#### **Sintaxis Básica**

```html
<audio controls>
  <source src="audio-file.mp3" type="audio/mp3">
  Tu navegador no soporta el elemento de audio.
</audio>
```

#### **Atributos Comunes**

- **`controls`**: Muestra los controles de reproducción (play, pause, volumen).
- **`autoplay`**: El audio comienza a reproducirse automáticamente al cargar la página.
- **`loop`**: Hace que el audio se repita una vez que termine.
- **`muted`**: Silencia el audio por defecto.
- **`preload`**: Especifica si el navegador debe cargar el archivo de audio cuando la página se carga. Los valores pueden ser `auto`, `metadata`, o `none`.

#### **Ejemplo de uso con múltiples formatos**

```html
<audio controls>
  <source src="audio-file.ogg" type="audio/ogg">
  <source src="audio-file.mp3" type="audio/mp3">
  Tu navegador no soporta el elemento de audio.
</audio>
```

#### **Ejemplo con atributos adicionales**

```html
<audio controls autoplay loop muted preload="auto">
  <source src="audio-file.mp3" type="audio/mp3">
  Tu navegador no soporta el elemento de audio.
</audio>
```

---

### **Etiqueta `<video>`**

La etiqueta `<video>` se utiliza para incrustar un archivo de video en la página web. Similar a la etiqueta `<audio>`, también ofrece controles de reproducción y es compatible con múltiples formatos.

#### **Sintaxis Básica**

```html
<video controls>
  <source src="video-file.mp4" type="video/mp4">
  Tu navegador no soporta el elemento de video.
</video>
```

#### **Atributos Comunes**

- **`controls`**: Muestra los controles de reproducción (play, pause, volumen).
- **`autoplay`**: El video comienza a reproducirse automáticamente al cargar la página.
- **`loop`**: Hace que el video se repita una vez que termine.
- **`muted`**: Silencia el audio del video por defecto.
- **`poster`**: Especifica una imagen que se muestra antes de que el video comience a reproducirse (como una miniatura).
- **`preload`**: Indica si el video debe cargarse automáticamente. Los valores pueden ser `auto`, `metadata`, o `none`.

#### **Ejemplo básico**

```html
<video controls>
  <source src="video-file.mp4" type="video/mp4">
  Tu navegador no soporta el elemento de video.
</video>
```

#### **Ejemplo con múltiples fuentes**

```html
<video controls>
  <source src="video-file.webm" type="video/webm">
  <source src="video-file.mp4" type="video/mp4">
  Tu navegador no soporta el elemento de video.
</video>
```

#### **Ejemplo con atributos adicionales**

```html
<video controls autoplay loop muted poster="poster-image.jpg">
  <source src="video-file.mp4" type="video/mp4">
  Tu navegador no soporta el elemento de video.
</video>
```

---

### **Conclusión**

Las etiquetas `<audio>` y `<video>` permiten incrustar contenido multimedia de forma nativa en una página web. Puedes personalizar la experiencia del usuario mediante atributos como `controls`, `autoplay`, `loop`, y `muted`, y ofrecer soporte para múltiples formatos de archivo para garantizar la compatibilidad con diferentes navegadores.