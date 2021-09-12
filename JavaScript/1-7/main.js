class Taiyaki {
  constructor(name){
    this.name = name;
  }
  info(){
    console.log(`中身は${this.name}です`);
  }
}
let anko = new Taiyaki('あんこ');
anko.info();
let cream = new Taiyaki('クリーム');
cream.info();
let cheese = new Taiyaki('チーズ');
cheese.info();