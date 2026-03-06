var gl;

function init() {
    let canvas = document.getElementById("myCanvas");
    gl = canvas.getContext("webgl2");
    if (!gl) {
        alert("WebGL 2 no disponible");
        return;
    }

    // Configuración base de WebGL
    gl.clearColor(0.01, 0.01, 0.03, 1.0);
    gl.enable(gl.DEPTH_TEST);

    window.onresize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
        render();
    };
    window.onresize();
}

function render() {
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    // En el sprint 1 solo limpiamos el color de fondo para comprobar que WebGL funciona.
    requestAnimationFrame(render);
}

window.onload = init;
