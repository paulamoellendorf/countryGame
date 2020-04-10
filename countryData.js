let countries = {
	USA: {
    nation:"USA",
		x: 228,
		y: 245,
		radius: 60,
		//height:,
		infos: "Hello!!! So begrüßt man sich hier in den Vereinigten Staaten von Amerika. Wir befinden uns im drittgrößten Staat der Welt – sowohl von der Fläche als auch nach Einwohnern. Der englische Name United States of America wird bei uns häufig zu USA abgekürzt. Manche sagen auch einfach Amerika, obwohl das nicht ganz richtig ist, denn Amerika ist der Name des gesamten Kontinents. Da dieses Land so groß ist, gibt es hier viele unterschiedlcihe Klimazonen. So ist es im Bundesstaat Alaska beispielsweise eisig kalt und auf der Insel Hawaii tropisch heiß. Aber auch für viele Tiere wie Bären, Krokodile, Bisons und Weißkopfseeadler ist dieses Land ein wichtiges zu Hause.",
	},
	Germany: {
		nation:"Deutschland",
		x: 605,
		y: 201,
		radius: 15,
		infos: "Guten Tag! So begrüßen wir uns hier in Deutschland. Aber das kann sich auch von Region zu Region unterscheiden. So begrüßt man sich in Norddeutschland oft mit moin! und in Süddeutschland mit Servus oder Griaß di! Deutschland besteht aus 16 Bundesländern, darunter ist auch unsere Hauptstadt Berlin. Hier hat der Bundestag seinen Sitz im Reichstags Gebäude. Auf Wiedersehen, Ade, Servus und Pfiaddi!!    ",
	},
	France: {
		nation:"Frankreich",
		x: 580,
		y: 220,
		radius: 17,
		infos:"Bonjour de France! Das ist französich und heißt so viel wie Guten Tag aus Frankreich! Die Hauptstadt Paris ist weltweit wegen ihrer Kultur bekannt und wegen des Eiffelturms. In Paris und Umgebung wohnt etwa jeder fünfte Franzose, und alle wichtigen Autobahnen und Eisenbahnen führen nach Paris. Seit hunderten von Jahren schauten die Menschen in Europa nach Frankreich. Die französische Kultur galt als besonders fein und vorbildhaft: die Kleidung, die Literatur, der Wein oder auch das Essen wie einer der über 1000 Käsesorten. Auf Wiedersehen und gute Weiterreise oder wie der Franzose sagen würde Au revoir et bon voyage! ",
	},
	Brazil: {
		nation:"Brasilien",
		x: 403,
		y: 420,
		radius: 50,
		infos:"Willkomen in Brasilien, dem größten Land in Südamerika! Hier leben etwa zwei-einhalb Mal so viele Menschen wie in Deutschland! Der längste Fluss des Landes, der Amazonas ist von dem Amazonas-Regenwald umgeben. Das ist der größte Wald der Welt. Dieser ist jedoch in den letzten hundert Jahren sehr geschrumpft. Unzählige Bäume wurden gefällt, um Platz für Häuser oder den Anbau von Soja und Weiden für Rinder zu schaffen. Das hat zur Folge, das zahlreicher Tiere ihren natürlichen Lebensraum verlieren.! ",
	},
	Canada:{
		nation:"Kanada",
		x:188,
		y:168,
		radius:70,
		infos:"In Kanada angekommen, können wir die Kanadiar auf Englisch begrüßen mit Hello! How are you? aber auch auf französisch mit Bonjour!!! Ca va?. Das liegt daran, das Frankreich, aber auch Großbritannien einst ihre Kolonien hier hatten. In den großen Waldregionen wachsen die Symbole des Landes heran. Die Ahornbäume, deren süßen Saft du sicher auch schon oft kosten durftest. In Deutschland ist dieser unter Ahornsirup, in Kanada unter der maple sirup bekannt. Die charakteristischen Blätter des Ahornbaume findest du auf der kanadischen Flagge.",
	},
	Australia:{
		nation:"Australien",
		x:1025.3333740234375 ,
		y:460.33333587646484,
		radius:50,
		infos:"G'day mate!!! So begrüßen sich die Australier gerne. Das heist so viel wie Hi, alles klar?. Puhh das war aber eine lange Reise. Wenn du nach Australien reisen willst, dauert der Flug etwa 24 Stunden. Da Australien nicht wie Deutschland auf der Nordhalbkugel, sondern auf der Südhalbkugel der Erde liegt, sind auch die Jahreszeiten umgekehrt zu unseren. Der Sommer dauert hier von November bis April. Australien ist nicht nur ein Land, sondern sogar ein ganzer Kontinent - der kleinste Kontinent der Erde. Hier haben die Kängurus ihr zu Hause.",
	},
	Russia:{
		nation:"Russland",
		x:883,
		y:148,
		radius:90,
		infos:"Russland ist ein Land der Superlative. Es ist das größte Land der Erde! Hier ist das Klima von Region zu Region unterschiedlich. In manchen Orten sind Temperaturen von -50 Grad Celsius keine Seltenheit. Die Uschanka, eine Kopfbedeckung, hilft den Russen sich auch bei diesen extremen Wetterverhältnissen  warm zu halten. Obwohl es im Winter so kalt wird, kann es Sommer trotzdem bis zu 30 Grad warm werden. Auf Wiedersehen! oder wie man auf russisch sagt До свидания - ausgesprochen werden diese Worte in etwa so: Do svidaniya  ",
	},
	Namibia:{
		nation:"Namibia",
		x:629.6666870117188,
		y:454,
		radius:15,
		infos:"",

	},
	Argentinien:{
		nation:"Argentinien",
		x:350.3333435058594,
		y:500.6666717529297,
		radius:30,
		infos:"Buenas dìas!!! In Argentinien spricht die Mehrheit der Bevölkerung auf Spanisch. Empanada ist nur eine der zahlreichen Spezialitäten in Argentinien. Man geht davon aus, dass die Empanada das erste Mal von Immigranten aus Nordspanien zubereitet wurde. Der ursprünglich mit Teig zubereitete Kuchen entwickelte sich über die Zeit weiter den charakteristischen Teigtaschen mit einer großen Auswahl an Füllungen. Jetzt bist du an der Reihe: bereite deine eigene Empanada zu: https://www.lecker.de/empanadas-mit-haehnchenfuellung-4239.html - buen provecho!  ",
	},

	}








class Country {
	constructor(countryName, xCord,yCord, radius, infos) {
        this.nation = countryName;
        this.x = xCord;
		this.y = yCord;
		this.radius = radius;
		//this.height=height;
		this.infos = infos;
    }
  display(){
	  push();
	noFill ();
	stroke('#F1956E');
circle(this.x, this.y,this.radius);
pop();
//ellipse(this.x, this.y, this.radius, this.height);
  }
 clicked(){

	 //let d=dist(mouseX, mouseY, this.x, this.y);
	 //if(d<=this.radius){
		//game.clickedCountry = this.nation;
	  let d=dist(mouseX, mouseY, this.x, this.y);
	  if(d<=this.radius){
		  game.clickedCountry = this.nation;
  } 
}
}
