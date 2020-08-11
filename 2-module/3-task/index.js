let calculator = {
  
};
calculator.read = function (c,d) {
  this.stNum = c;
  this.ndNum = d;
    this.sum = function () {
  return (this.stNum+this.ndNum);
};
    this.mul = function () {
  return (this.stNum*this.ndNum);
};
}
// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
