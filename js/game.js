let game_W = 0, game_H = 0;

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
            for (let i = 0; i < touches.length; i++) {
                var x = evt.touches[i].pageX;
                var y = evt.touches[i].pageY;
                console.log(x, ' ', y);
            }
        })

        document.addEventListener("touchstart", evt => {
            
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

    draw() {
        
    }
}

var g = new game();
