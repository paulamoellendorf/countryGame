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
       image(img3,231, 165,250,250);
       fill(50);
       text(`${this.randomInfos}`, 508,526,300, 150);
       fill("white");
       circle(622, 523, 50);
    }


    
    
    /*play(){
        let str=this.random[country].nation;
        fill(50);
     text(str, 600, 250, 300,300);

    }*/
}
