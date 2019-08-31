class scene1 extends Phaser.Scene{
    constructor(){
        super('bootGame');
    }
    preload(){
        this.load.image("background","images/cloud1-0.png");
        this.load.image("cloud1","images/cloud1-1.png");
        this.load.image("cloud2","images/cloud1-1.png");
        this.load.image("cloud3","images/cloud1-1.png");

        //the plane
        this.load.image("plane1","images/plane1.png");
    }
    loadingScene(){
        this.scene.start("playGame");
    }
    create(){
        this.add.text(config.width/2-50,config.height/2,"Tap to Start");
        this.input.on("pointerdown",e=>{
            this.loadingScene();
        },this);

        
    }
}