let game_W = 0, game_H = 0;
A = [];
class game {
    constructor() {
        this.canvas = null;
        this.context = null;
        this.init();
    }

    init() {
        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);

        this.render();
        this.loop();
        this.listenTouch();
    }

    listenTouch() {
        document.addEventListener("touchmove", evt => {
            for (let i = 0; i < evt.touches.length; i++) {
                var x = evt.touches[i].pageX;
                var y = evt.touches[i].pageY;
                A.push({x, y});
                console.log(A);
            }
        })

        document.addEventListener("touchstart", evt => {
            for (let i = 0; i < evt.touches.length; i++) {
                var x = evt.touches[i].pageX;
                var y = evt.touches[i].pageY;
                this.drawCircle(x, y);
            }
        })

        document.addEventListener("touchend", evt => {    
            this.draw();
        })
    }


    loop() {
        this.update();
        this.draw();
        setTimeout(() => this.loop(), 20);
    }

    update() {
        this.render();
    }

    render() {
        this.canvas.width = document.documentElement.clientWidth;
        this.canvas.height = document.documentElement.clientHeight;
        game_W = this.canvas.width;
        game_H = this.canvas.height;
    }

    clearScreen() {
        this.context.clearRect(0, 0, game_W, game_H);
        this.context.fillStyle = "#000000";
        this.context.fillRect(0, 0, game_W, game_H);
    }

    draw() {
        this.clearScreen();
        for (let i = 0; i < A.length; i++)
            this.drawCircle(A[i].x, A[i].y);
    }

    drawCircle(x, y) {
        this.context.strokeStyle = '#FF0000';
        this.context.beginPath();
        this.context.arc(x, y, 50, 0, 2 * Math.PI);
        this.context.stroke();
    }
}

var g = new game();
