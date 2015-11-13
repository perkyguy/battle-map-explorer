/*
battle-map-explorer version 1.0

This code is released into the public domain - attribution is appreciated but not required.
Made by Byron Knoll.

https://github.com/byronknoll/battle-map-explorer
*/

window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(p,g){window.setTimeout(p,1E3/60)}}();function BattleMapExplorer(){}
BattleMapExplorer.run=function(p,g,E,x){function w(a,b){for(var c=0;c<segments.length-y;++c)if(VisibilityPolygon.doLineSegmentsIntersect(k,l,a,b,segments[c][0][0],segments[c][0][1],segments[c][1][0],segments[c][1][1]))return;k=a;l=b;f=!0}function F(){var a=canvas.getContext("2d");if(!G){if(H){G=!0;var b=n.width,c=n.height;E.push([[-1,-1],[b+1,-1],[b+1,c+1],[-1,c+1]]);segments=VisibilityPolygon.convertToSegments(E);segments=VisibilityPolygon.breakIntersections(segments);for(b=0;b<x.length;++b)segments.push(x[b]);
y=x.length}a.save()}else if(f){f=!1;z&&(w(k-5,l),f=!0);A&&(w(k+5,l),f=!0);B&&(w(k,l-5),f=!0);C&&(w(k,l+5),f=!0);var b=r/2,c=t/2,e=Math.min(r,t)/2;a.restore();a.save();a.clearRect(0,0,r,t);a.beginPath();a.arc(b,c,e,0,2*Math.PI,!0);a.clip();var h=VisibilityPolygon.compute([k,l],segments);a.beginPath();var m=b-k,g=c-l;a.moveTo(h[0][0]+m,h[0][1]+g);for(var d=1;d<h.length;++d)a.lineTo(h[d][0]+m,h[d][1]+g);a.clip();var h=k-e,d=l-e,u=2*e,v=2*e,p=b-e,q=c-e;0>h&&(p-=h,u+=h,h=0);0>d&&(q-=d,v+=d,d=0);h+u>=n.width&&
(u=n.width-h-1);d+v>=n.height&&(v=n.height-d-1);a.drawImage(n,h,d,u,v,p,q,u,v);for(d=segments.length-y;d<segments.length;++d)a.beginPath(),a.lineWidth=10,a.strokeStyle="black",a.moveTo(segments[d][0][0]+m,segments[d][0][1]+g),a.lineTo(segments[d][1][0]+m,segments[d][1][1]+g),a.stroke(),a.beginPath(),a.lineWidth=6,a.strokeStyle="white",a.moveTo(segments[d][0][0]+m,segments[d][0][1]+g),a.lineTo(segments[d][1][0]+m,segments[d][1][1]+g),a.stroke();a.beginPath();a.lineWidth=2;a.strokeStyle="black";a.fillStyle=
"white";a.fillRect(b-2,c-25,4,20);a.rect(b-2,c-25,4,20);a.stroke();a.fillRect(b-2,c+5,4,20);a.rect(b-2,c+5,4,20);a.stroke();a.fillRect(b-25,c-2,20,4);a.rect(b-25,c-2,20,4);a.stroke();a.fillRect(b+5,c-2,20,4);a.rect(b+5,c-2,20,4);a.stroke();m=a.createRadialGradient(b,c,10,b,c,e);m.addColorStop(0,"rgba(0,0,0,0)");m.addColorStop(.7,"rgba(0,0,0,0)");m.addColorStop(1,"rgba(0,0,0,1)");a.fillStyle=m;a.fillRect(b-e,c-e,2*e,2*e)}requestAnimFrame(F)}var r=window.innerWidth,t=window.innerHeight;canvas.getContext("2d").canvas.width=
r;canvas.getContext("2d").canvas.height=t;var f=!0,y=0,G=!1,k=g[0],l=g[1],z=!1,A=!1,B=!1,C=!1,I=0,J=0,q=0,D=0;g=new Hammer(document.getElementById("canvas"));g.get("pan").set({direction:Hammer.DIRECTION_ALL});var n=new Image,H=!1;n.onload=function(){H=!0};n.src=p;requestAnimFrame(F);window.onresize=function(a){r=window.innerWidth;t=window.innerHeight;canvas.getContext("2d").canvas.width=r;canvas.getContext("2d").canvas.height=t;f=!0};document.addEventListener("touchmove",function(a){a.preventDefault()},
!1);document.onkeydown=function(a){if(87==a.keyCode||38==a.keyCode)f=B=!0;else if(65==a.keyCode||37==a.keyCode)f=z=!0;else if(68==a.keyCode||39==a.keyCode)f=A=!0;else if(83==a.keyCode||40==a.keyCode)f=C=!0};document.onkeyup=function(a){87==a.keyCode||38==a.keyCode?(B=!1,f=!0):65==a.keyCode||37==a.keyCode?(z=!1,f=!0):68==a.keyCode||39==a.keyCode?(A=!1,f=!0):83==a.keyCode||40==a.keyCode?(C=!1,f=!0):32==a.keyCode&&console.log("["+k+","+l+"]")};g.on("pan",function(a){var b=a.center.x,c=a.center.y,e=a.deltaX;
a=a.deltaY;b-=e;c-=a;if(b!=I||c!=J)D=q=0;I=b;J=c;b=e;c=a;e-=q;a-=D;q=b;D=c;w(k-e,l-a)})};