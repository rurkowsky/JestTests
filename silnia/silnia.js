const sil = function silnia(num) {
 
  let a = "error liczba ujemna";
  if (num < 0) {
    return a;
  }

   if ((num == 0) || (num == 1))
    return 1;
  else
    return (num * silnia(num - 1));

};


module.exports = sil;
