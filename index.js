// Write your code here
class Breakfast {
  constructor(food,drink) {
    this.food = food;
    this.drink =drink;
  }
}
  bfast = new Breakfast('eggs', 'juice');

class Lunch {
  constructor(salad,soup,drink) {
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}
  newlunch = new Lunch('side salad', 'broccoli cheddar soup', 'iced tea');

class Dinner  {
  constructor(salad,soup,entree,dessert) {
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this.dessert = dessert;
  }
}
  newdinner = new Dinner('balsamic salad', 'consomme', 'filet mignon', 'cheesecake')
