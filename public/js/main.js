class Ingredient{
  constructor(nom, etat){
    this.nom = nom;
    this.etat = etat;
  }
};
class Epice {
  constructor(gout){
    this.gout = gout;
  }
  Charlotte_melange(x){
    x.etat = "ajout Epice";
    }
};

class Ustensile{
  constructor(nom){
  this.nom = nom;
  }
  Charlotte_decoupe_les_ingredient(x){
    x.etat = "coupe";
  }
};

class Element{
  constructor(nom){
    this.nom = nom;
  }
  Charlotte_melange(x){
    x.etat = "melange";
    }
};

class Poele{
  constructor(cuir){
    this.cuir = cuir;
  }
  Charlotte_fait_moi_des_oeufs(x){
    x.etat = "cuit";
  }
};

class Assiet{
  constructor(pret,servir){
    this.pret = pret
    this.servir = servir
  }
    Charlotte_sert_moi_mes_oeufs(x){
      if (x.etat == pret){
        console.log("les oeufs sont pret")
      }
    }
}

var oeuf = new Ingredient("Oeuf","Intact");
var tomate = new Ingredient ("Tomate", "Intact");
var fromage = new Ingredient ("Fromage", "Intact");
var poivre = new Epice ("poivre");
var sel = new Epice ("Sel")
var couteau = new Ustensile("Couteau");
var element = new Element("Bol");
var cuir = new Poele("cuir")

couteau.Charlotte_decoupe_les_ingredient(tomate);
couteau.Charlotte_decoupe_les_ingredient(fromage);
console.log(tomate, fromage);
poivre.Charlotte_melange(oeuf);
sel.Charlotte_melange(oeuf);
cuir.Charlotte_fait_moi_des_oeufs(oeuf);
console.log(oeuf);

console.log("Reste 4sec ;)")
setTimeout(function(){console.log("C'est pret!!!");}, 4000)
setTimeout(function(){console.log("J'arrive!!!");}, 8000)
setTimeout(function(){console.log("Attention Chaud, Bonne App :D !!!");}, 10000)