/// <reference path="webgl.d.ts" /> 

window.onload = () => { 
    var canvas = <HTMLCanvasElement> document.createElement("canvas"); 
    document.body.appendChild(canvas); 

    var gl = canvas.getContext("experimental-webgl", {}); 

    gl.clearColor(1,0,0,1);
    gl.clear(gl.COLOR_BUFFER_BIT); 
}


