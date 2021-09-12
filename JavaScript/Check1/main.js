let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓
for(i=0;i<numbers.length;i++){
  if(numbers[i] % 2 == 0){
    num = numbers[i];
    isEven();
  }
}
function isEven() {
    console.log(num + 'は偶数です');
}

class Car {
  constructor(gas,number){
    this.gas = gas;
    this.number = number;
  }
  getsNumGas(){
    console.log(`ガソリンは${this.gas}です。ナンバーは${this.number}です`);
  }
}
regular = new Car('レギュラー',777);
regular.getsNumGas();
haioku = new Car('ハイオク',0003);
haioku.getsNumGas();