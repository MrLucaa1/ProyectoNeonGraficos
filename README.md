# Graficos WebGL: Neon Night Drive
Proyecto "Neon Night Drive" de conducir un coche entre la ciudad en ambientacion Neon. 

## Nombres de los integrantes y de sus Usuarios GitHub
Luca Vella  -- MrLucaa1

 ## Objetivo y Explicacion Tecnica Extendida del Proyecto

El objetivo principal ha sido aprender y aplicar conceptos avanzados de graficos por computadora sin depender de motores graficos de alto nivel como Unity o Unreal Engine.

A nivel tecnico esto es lo que queria remarcar:

Renderizado Nativo y Pipeline WebGL

Se utiliza directamente la API de WebGL, gestionando manualmente los buffers de vertices (VBOs), buffers de indices (IBOs) y atributos de vertice para enviar la geometria a la GPU y dibujarla en pantalla.

Shaders Personalizados (GLSL)

El sistema grafico utiliza Vertex Shaders y Fragment Shaders escritos en GLSL. En ellos se realizan calculos de iluminacion, mezcla de colores ambiente y simulacion de reflejos mediante operaciones vectoriales en GPU para lograr la estetica neon caracteristica del proyecto.

Edificios 

Los edificios se generan de forma procedural mediante la funcion generateBuildings(), que crea un corredor urbano a lo largo del eje Z antes de comenzar el renderizado del juego.

El mundo se divide en franjas de aproximadamente 15 unidades de profundidad. En cada franja se generan varios edificios con dimensiones variables, incluyendo ancho, altura y profundidad. Estos valores se calculan utilizando Math.random() para introducir variacion en la arquitectura de la ciudad.

Para garantizar que la carretera central permanezca libre, la posicion lateral de los edificios en el eje X se restringe mediante un margen dinamico calculado con la formula:

minX = 3.0 + (width / 2) + 0.5

Este margen asegura que el borde interior del edificio siempre quede fuera del area de circulacion, evitando que las estructuras invadan el carril del vehiculo.

Ademas, para romper la repeticion visual de bloques identicos, se introduce una variacion estructural mediante una prueba probabilistica. Aproximadamente un 30% de los edificios generan estructuras adicionales mas estrechas sobre sus tejados, creando una silueta urbana mas variada.

Durante el renderizado se aplica una optimizacion mediante distance culling. El bucle principal solo envia a la GPU aquellos edificios que se encuentran dentro de un rango aproximado de ±500 unidades en el eje Z respecto a la posicion del vehiculo. Los edificios fuera de ese rango se descartan temporalmente para reducir el numero de operaciones de renderizado.

Colisiones

Las colisiones se gestionan mediante la funcion checkCollision(pos), que implementa un sistema basado en Axis-Aligned Bounding Boxes (AABB). Este metodo utiliza cajas de colision alineadas con los ejes cartesianos para detectar intersecciones entre el coche y los edificios.

Para reducir el coste computacional, el sistema se simplifica a 2D, ignorando el eje Y, ya que el vehiculo no puede cambiar de altura. De este modo, las comprobaciones solo se realizan en el plano X-Z.

El coche se representa mediante una caja de colision ligeramente mas pequena que su modelo visual para mejorar la jugabilidad. Estas dimensiones se definen mediante dos semi-medidas:

carHalfW = 0.65
carHalfL = 1.05

Cada edificio calcula su propia caja de colision a partir de su escala. Durante la comprobacion se obtienen sus semi-dimensiones reales dividiendo su escala entre dos:

halfWidth  = scaleX / 2
halfLength = scaleZ / 2

El algoritmo recorre la lista de edificios almacenados en memoria y compara las distancias absolutas entre el centro del coche y el centro de cada edificio. Si la distancia en el eje X es menor que la suma de sus semi-anchos y, simultaneamente, la distancia en el eje Z es menor que la suma de sus semi-longitudes, se considera que existe una colision.

Cuando se detecta una interseccion, el sistema cancela el movimiento del vehiculo estableciendo:

carSpeed = 0

Esto impide que el coche atraviese las estructuras del entorno.

Efectos Visuales (VFX)

El proyecto incluye varios efectos visuales implementados directamente en shaders.

Niebla volumetrica

La niebla se calcula en el Fragment Shader interpolando el color final del pixel con el color de la niebla en funcion de la distancia a la camara (profundidad en el eje Z).

Sistema de lluvia 3D

La lluvia se renderiza mediante un shader independiente que dibuja lineas verticales simulando gotas. El movimiento infinito se consigue utilizando la funcion mod en GLSL sobre la posicion vertical de las particulas, lo que permite reciclar continuamente los vertices sin necesidad de generar nuevas gotas.

Matematicas de Camara y Movimiento

El sistema de camara utiliza transformaciones matriciales clasicas de graficos 3D. En cada fotograma se actualizan las matrices Model, View y Projection mediante la libreria gl-matrix.

El control de camara permite movimiento en tercera persona, incluyendo rotacion libre mediante los angulos yaw y pitch, controlados con el raton.
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
