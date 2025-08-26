# NG Conf Perú 2025 - Más allá del SSR: revalidación de contenido con ISR en Angular 🚀

## 📖 Descripción

Este repositorio contiene el código desarrollado para la charla **“Más allá del SSR: revalidación de contenido con ISR en Angular”**, presentada en la **NG Conf Perú 2025**.  
Durante la sesión se explicó cómo aplicar **Incremental Static Regeneration (ISR)** en **Angular 19** utilizando la librería **@rx-angular/isr**, partiendo de un ejemplo básico y avanzando hacia un escenario con **Redis** como base de datos externa para gestionar la caché e invalidar páginas desde el backend.

---

## 📌 Temas tratados

- Diferencias entre **SSR, SSG e ISR** y criterios de elección.
- Implementación de **ISR en Angular 19** con **@rx-angular/isr**.
- Estrategias de revalidación:
  - ⏳ Por tiempo (TTL).
  - ⚡ Por evento (invalidación desde backend).
- Integración de **Redis** para controlar la caché y revalidaciones.
- Ejemplos prácticos de revalidación automática y métricas de caché.

---

## 🔨 Tecnologías utilizadas

- **Angular 19** con `@angular/ssr`
- **@rx-angular/isr**
- **Redis 7.x** para cache e invalidación
