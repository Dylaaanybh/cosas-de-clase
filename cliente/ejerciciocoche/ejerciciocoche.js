const coche = {
    registration: "8239nsk",
    make: "bmw",
    model: "x5",
    year: 2021,
    getMakeModel(){return this.make + " " + this.model},
    thisYearHasITV() {
        let aux = new Date().getFullYear() - this.year
        if(aux >= 10 || (aux % 2 == 0 && aux > 4)){
            return true
        }else{
            return false
        }
    },
    toString(){
        return `${this.registration} ${this.make} ${this.model} ${this.year}`;
    }
}

console.log(coche.toString());
console.log(coche.getMakeModel());
console.log(coche.thisYearHasITV());


let coche2 = {...coche,
    registration: "8239LMA",
    make: "Citroen",
    model: "C4 CACTUS",
    year: 2020
}

let coche3 = {...coche,
    registration: "8239MXE",
    make: "Ferrari",
    model: "Testarrossa",
    year: 1990
}

let garage = [coche, coche2, coche3];

console.log(garage);
console.log("Coches citroen", garage.filter(c => c.make == "Citroen").map(c => c.toString()));
console.log("Coches posteriores a 2010", garage.filter(c => c.year > 2010).map(c => c.toString()));
console.log("ITV", garage.some(c => c.thisYearHasITV()));
garage.sort((a, b) => a.year - b.year);
console.log(garage.map(c => c.toString()));
garage.sort((a, b) => a.make.toLowerCase().localeCompare(b.make.toLowerCase()));
console.log(garage.map(c => c.toString()));
garage.sort((a, b) => a.getMakeModel().toLowerCase().localeCompare(b.getMakeModel().toLowerCase()));
console.log(garage.map(c => c.toString()));

