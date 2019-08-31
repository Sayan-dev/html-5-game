class scene2 extends Phaser.Scene{
    constructor(){
        super('playGame')
    }

    create(){
        var height=config.height*10;
        this.background = this.add.tileSprite(0, 0, config.width, height, "background").setOrigin(0, 0);
        var newH=height;
        while(newH>0){
        newH=newH-600;
        this.cloud1=this.add.image(config.width/3-10,newH,"cloud1").setScale(0.25);
        this.cloud2=this.add.image(config.width-20,newH-300,"cloud2").setScale(0.25);
        this.cloud3=this.add.image(config.width-20,height-500,"cloud3").setScale(0.25);
        
        };
        this.cameras.main.setBounds(0,0,config.width,height);
        this.physics.world.setBounds(0,0,config.width,height);

        this.plane1=this.physics.add.image(config.width/2,height-100,"plane1").setScale(0.25);
        
        this.cameras.main.startFollow(this.plane1);
        this.cameras.main.followOffset.set(0, 250);


        

      
        //this.add.text(config.width/2-50,config.height/3,"We are in the second scene");
    }
    update(){
        var cursors;
        var plane1=this.plane1;
        cursors=this.input.keyboard.createCursorKeys();

        
        plane1.y-=6;
        this.cameras.main.followOffset.y = 250;   
        
        if(cursors.left.isDown){
            plane1.x-=6;
        }
        else if(cursors.right.isDown){
            plane1.x+=6;
        }
        
    }
}