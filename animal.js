class Animal{
    // public, private, protected... premenné :D
    _dead = false;
    constructor(name,colour,news){
        this.name = name;
        this.colour = colour;
        this.news = news;
        this.informWorld('sa narodil.')
    }

    informWorld(message){
        this.news.innerHTML += ("<br>" + this.constructor.name 
                        + ' ' + this.name + " " +message)
    }

    die(){
        if(this._dead){
            this.informWorld('už nemože zomrieť znova')
        }else{
            this._dead = true;
            this.informWorld('zomrelo/a');
        }
        
    }

    isAlive(){
        if(this._dead){
            this.informWorld('nežije')
        }else{
            this.informWorld('žije')
        }
    }

    makeSound(){
        if(this._dead){
            this.informWorld('...+...');
        }else{
            this.informWorld(':muuu');
        }
        
    }


}