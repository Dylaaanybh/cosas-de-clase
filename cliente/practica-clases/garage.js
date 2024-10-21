class Car{
    #year
    owner = null;
    constructor(registration, make, model, year){
        this.registration = registration;
        this.make = make;
        this.model = model;
        this.#year = year;
    }
    getMakeModel(){return this.make + " " + this.model}
    getYear(){return this.#year}
    setYear(year){
        if(year < this.#year) this.#year = year
    }
    getOwnerName(){
        if(this.owner == null) return "Sin dueño";
        return this.owner.name}
}
car1 = new Car("1234ABC", "Ferrari", "Testarrossa", 1990);
car2 = new Car("1234DEF", "Citroen", "C4 CACTUS", 2020);
car3 = new Car("1234GHI", "BMW", "X5", 2021);
console.log(car1);
console.log(car2);
console.log(car3);
console.log(car1.getMakeModel());
console.log(car2.getMakeModel());
console.log(car3.getMakeModel());
console.log(car1.getYear());
console.log(car2.getYear());
console.log(car3.getYear());
car1.setYear(2010);
console.log(car1.getYear());
car1.setYear(2020);
console.log(car1.getYear());



class Person{
    #dni = 'undefined'
    name

    constructor(name, dni){
        this.name = name;
        this.setDNI(dni);
    }

    setDNI(dni = ''){
        if(dni.length == 9) this.#dni = dni
    }

    getDNI(){return this.#dni}
}

const p1 = new Person("Pepe", "1234567l");
console.log(p1);
console.log(p1.getDNI());

const p2 = new Person("Pepa", "1234567l");

car1.owner = p1;
console.log(car1.owner.name);
console.log(car2.getOwnerName());