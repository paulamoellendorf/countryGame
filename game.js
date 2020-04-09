class Game {
    constructor(){
        this.countryList=[];
        this.randomCountry;
        this.clickedCountry;
        //this.random=this.countryList[Math.random(Math.floor()*this.countryList.length)];
 }

init(){
    for(let country in countries) {
        this.countryList.push(new Country(countries[country].nation, countries[country].x, countries[country].y, countries[country].radius, countries[country].infos));
    } 
    this.getRandomCountry();
};

     draw() {
                 
             this.countryList.forEach((country) => {
                country.display();
            });

        fill(50);
        textSize(15);
        textFont('Comic Sans MS');
        text(`Abflug nach ${this.randomCountry}`,95.00231456756592, 444.0023145675659,300,300);

            if (this.randomCountry==this.clickedCountry){
this.info();
//if(mousePressed()){
//this.info().clear();
    //this.getRandomCountry();
}
            
                
    
    }; 

    getRandomCountry() {
        //this.randomCountry = this.countryList[Math.floor(Math.random()*this.countryList.length)].nation;
      this.random=this.countryList[Math.floor(Math.random()*this.countryList.length)]
      this.randomCountry=this.random.nation;
      this.randomInfos=this.random.infos;
        console.log(this.randomCountry)
        console.log(this.randomInfos);
    };
    
    info(){
        
       image(img4, 0, 0,1252, 588);
       image(img3,200, 150,250,250);
       push();
       fill(50);
       textSize(50);
       text(`${this.randomCountry}`,727.6124100719425, 118.03125 ,300, 150);
       pop();
       push();
       textSize(25);
       text(`${this.randomInfos}`,727.6124100719425, 200.03125 ,300, 150);
       //textAlign(CENTER, CENTER);
       pop();
       push();
       fill('#FECB20');
       stroke('#FECB20')
       rect(870.7203237410072, 427.03125, 100, 55, 20);
       //circle(922.7682853717026, 448.03125, 100);
       fill('#EEAF00');
       text("Weiterreise",878.7682853717026, 448.03125,50 );
       pop();
    }

}
