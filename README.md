# MLOps @ UVG

Repositorio del sitio web del curso **Machine Learning Engineering (MLE/MLOps)** de la Universidad del Valle de Guatemala.

🌐 **Sitio web:** https://prof-aro-uvg.github.io/mlops/

El sitio reúne el material del curso: talleres, laboratorios, casos de estudio y proyectos.

## Contenido del curso

| Sección | Contenido |
| --- | --- |
| [Talleres](https://prof-aro-uvg.github.io/mlops/sitio_web/talleres/) | GitHub Pages, GitHub Actions, MLflow, ambientes virtuales de Python, Docker y Terraform |
| [Casos de estudio](https://prof-aro-uvg.github.io/mlops/sitio_web/casos-de-estudio/) | Análisis de aplicaciones reales de Machine Learning en producción |
| [Laboratorios](https://prof-aro-uvg.github.io/mlops/sitio_web/laboratorios/) | Prácticas guiadas (próximamente) |
| [Proyectos](https://prof-aro-uvg.github.io/mlops/sitio_web/proyectos/) | Proyectos del curso (próximamente) |

## Estructura del repositorio

```
.
├── index.html                  # Redirige la raíz del sitio a sitio_web/
├── sitio_web/
│   ├── index.html              # Página principal
│   ├── assets/
│   │   ├── css/style.css       # Estilos (tema claro/oscuro)
│   │   └── js/main.js          # Botón de cambio de tema
│   ├── talleres/               # index.html + PDFs de talleres (T1–T6)
│   ├── casos-de-estudio/       # index.html + PDFs de casos (C1…)
│   ├── laboratorios/
│   └── proyectos/
└── .github/workflows/static.yml  # Despliegue a GitHub Pages
```

El sitio es HTML y CSS estático, sin dependencias ni paso de compilación.

## Agregar material nuevo

1. Copia el PDF en la carpeta de la sección, por ejemplo `sitio_web/talleres/T7-Kubernetes.pdf`.
2. En el `index.html` de esa sección, duplica una tarjeta existente dentro de `<div class="grid">` y actualiza el enlace, el código, el título y la descripción:

   ```html
   <a class="card" href="T7-Kubernetes.pdf">
       <div class="card-top"><span class="badge">T7</span><span class="tag">PDF</span></div>
       <h3>Taller de Kubernetes</h3>
       <p>Orquestación de contenedores para desplegar modelos a escala.</p>
       <span class="card-link">Abrir material &rarr;</span>
   </a>
   ```

3. Para material que aún no está disponible (como los laboratorios y proyectos), usa una tarjeta sin enlace:

   ```html
   <div class="card is-pending">
       <div class="card-top"><span class="badge">L2</span><span class="tag">Próximamente</span></div>
       <h3>Lab 2</h3>
       <p>Práctica de laboratorio del curso.</p>
   </div>
   ```

4. Si cambia el número de elementos disponibles, actualiza el contador de esa sección en `sitio_web/index.html` (por ejemplo, `6 disponibles`).

## Vista previa local

Abre `sitio_web/index.html` en el navegador, o levanta un servidor local desde la raíz del repositorio:

```bash
python3 -m http.server 8000
# luego visita http://localhost:8000/sitio_web/
```

## Despliegue

Cada push a `main` ejecuta el workflow [`static.yml`](.github/workflows/static.yml), que publica el repositorio completo en GitHub Pages. También se puede ejecutar manualmente desde la pestaña **Actions** (*Run workflow*).
