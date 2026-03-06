# Graficos WebGL: Neon Night Drive
Proyecto "Neon Night Drive" de conducir un coche entre la ciudad en ambientacion Neon. 

## Nombres de los integrantes y de sus Usuarios GitHub
Luca Vella  -- MrLucaa1

## Objetivo y Explicación Técnica Extendida del Proyecto

Este proyecto es un **infinite runner** de conducción desarrollado de forma nativa con **WebGL 2.0**, HTML5 y JavaScript. El objetivo principal ha sido aprender y aplicar conceptos avanzados de gráficos por computadora sin depender de motores gráficos de alto nivel como Unity o Unreal Engine.

A nivel técnico, el proyecto destaca por los siguientes aspectos desarrollados desde cero:
- **Renderizado Nativo y Pipeline WebGL:** Uso directo de la API de WebGL, gestionando buffers de vértices (VBOs), índices (IBOs) y atributos para dibujar la geometría en pantalla.
- **Shaders Personalizados (GLSL):** Implementación de *Vertex* y *Fragment Shaders* a medida. Se gestionan cálculos de iluminación, colores ambiente, y reflexiones simuladas a través de cálculos vectoriales en la GPU para lograr la estética Neon característica del proyecto.
- **Generación Procedural y Optimización:** Los edificios y obstáculos se generan de forma infinita a los lados de la carretera. Para mantener el rendimiento fluido, los elementos arquitectónicos se calculan en base a distancias relativas usando algoritmos de distribución aleatoria sin sobrecargar la memoria.
- **Sistema de Colisiones Matemático:** Implementación de cálculo espacial continuo basado en cajas delimitadoras (AABB - Axis-Aligned Bounding Box). Esto detecta en tiempo real el impacto del vehículo con el entorno dinámico, calculando las dimensiones a partir de la escala de las matrices de los modelos 3D.
- **Efectos Visuales (VFX) Avanzados:** 
  - **Niebla Volumétrica:** Calculada en tiempo de fragmento interpolando el color del pixel con el color de la niebla en base a la distancia (profundidad en Z) respecto a la cámara.
  - **Sistema de Lluvia 3D:** Un shader independiente que renderiza líneas simulando gotas. Las gotas utilizan una función módulo (`mod`) en GLSL sobre su trayectoria vertical, dando el efecto infinito de caída libre sin malgastar vértices.
- **Matemáticas de Cámara y Movimiento:** Uso intensivo de transformaciones algebraicas en tiempo real actualizando las matrices Modelo, Vista y Proyección (`gl-matrix`). Además de incluir movimiento en tercera persona, se procesa la orientación de cámara ('pitch' y 'yaw') controlada libremente por el ratón.

## Plan de Sprints

| 1 | Planificación inicial y bases de WebGL. |
| 2 | Modelos básicos, shaders esenciales y movimiento del jugador. |
| 3 | Generación procedural de entorno y sistema colisiones. |
| 4 | Efectos climáticos (lluvia, niebla), ajustes de cámara y presentación final. |

## Bitacora de trabajo 

| Fecha | Trabajo realizado | 
|--------|----------------------|
| 15/02/2026 | Creacion de la idea del proyecto | 
| 22/02/2026 | Creados el repositorio con el ReadME |  
| 23/02/2026 | Movimiento basico y graficos de referencia de coche y del ambiente incorporados |
| 24/02/2026 | Movimiento de camara, edificios, colisiones y la niebla con lluvia|
| 03/03/2026 | Pulido de ultimos detalles y actualización técnica |  

## Resultados Finales

### Capturas del trabajo realizado
[![image.png](https://i.postimg.cc/PfS4Vhdv/image.png)](https://postimg.cc/F1J31Mdh)
 Ambientacion Neon con UI*

[![image.png](https://i.postimg.cc/hjp9YbRP/image.png)](https://postimg.cc/Hc8ccMLf)
 Niebla*

[![image.png](https://i.postimg.cc/dtzGgVpF/image.png)](https://postimg.cc/6yf7vtBb)
 Lluvia*
