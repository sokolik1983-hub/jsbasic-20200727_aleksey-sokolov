let calculator = {
  
};
calculator.read = function (c,d) {
  calculator.stNum = c;
  calculator.ndNum = d;
  calculator.sum = function () {
  return (calculator.stNum+calculator.ndNum);
};
    calculator.mul = function () {
  return (calculator.stNum*calculator.ndNum);
};
}
// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
