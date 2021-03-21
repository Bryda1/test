const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.shadowColor = '#d59';//цвет тени контура
ctx.shadowBlur = 10;//тень контура
ctx.lineJoin = 'bevel';//скругления контура указывается словами
//"bevel" || "round" || "miter";
ctx.lineWidth = 10;//толщина контура
ctx.strokeStyle =  '#38f';//цвет контура
ctx.strokeRect(30, 30, 160, 90);