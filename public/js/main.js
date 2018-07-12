class Ingredient{
  constructor(etat){
    this.etat=etat;
  }
};
class Epice {
  constructor(etat)
}

class Ustensile{
  constructor(nom){
  this.nom = nom;
  }
  Charllote_decoupe_les_ingredient(x){
    x.etat = "coupe";
  }
};

class Bol{
  constructor(melange){
    this.melange = melange
  }
    Charlotte_melange(y){
      y.
    }
};

class Poele extends Bol{
  constructor(nom,content,decouper,cuir){
    this.nom=nom;
    this.content=content;
    this.decouper=decouper;
    this.cuir=cuir;
  }
    Charlotte_fait_moi_des_oeufs(){

    }
};

class Assiet extends Poele{
  constructor(nom,content,decouper,cuir,servir){
    this.nom=nom;
    this.content=content;
    this.decouper=decouper;
    this.cuir=cuir;
    this.servir=servir;
  }
    Charlotte_sert_moi_mes_oeufs(){

    }
}

var oeuf = new Ingredient("Oeuf","Intact");
var tomate = new Ingredient ("Tomate", "Intact");
var fromage = new Ingredient ("Fromage", "Intact");

var couteau = new Ustensile("Couteau")
couteau.Charllote_decoupe_les_ingredient(tomate)
