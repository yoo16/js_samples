    //layer
    this.layerIndex = 1;
    this.layers = [];
    this.addCanvas = function (layer_id, width, height) {
        const wrap = document.getElementById(layer_id);
        if (wrap) {
            const canvas = document.createElement('canvas');
            canvas.classList.add('canvas');
            canvas.setAttribute('width', width);
            canvas.setAttribute('height', height);
            canvas.style.zIndex = this.layerIndex;
            wrap.appendChild(canvas);
            // this.layers.push(canvas);
            this.layerIndex++;
            return canvas;
        }
    }
    this.drawTestLayer = function (layer_id) {
        const canvas = this.addCanvas(layer_id, 500, 300);
        const ctx = canvas.getContext('2d');
        ctx.fillText('layer' + this.zIndex, this.zIndex * 20, this.zIndex * 20);
        ctx.fillStyle = this.style.boardColor;
        ctx.fillRect(0, 0, this.cellSize, this.cellSize);
    }