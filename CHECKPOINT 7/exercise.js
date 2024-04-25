let operation = function (num1, num2, num3, num4) {
    return (num1 + num2) * (num3 + num4);
  };
  
  result = operation (1, 5, 7, 9);
  console.log(result)
  
  if (result > 50) {
  console.log('¡El número es mayor que 50!');
  } else {
  console.log('¡El número es menor que 50!');
  }
