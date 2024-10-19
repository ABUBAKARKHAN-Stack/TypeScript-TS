// Classes IN TS
class Player {
    height;
    weight;
    age;
    constructor(height: number, weight: number, age: number) {
        this.height = height,
            this.weight = weight,
            this.age = age
    }
}
const abubakar = new Player(5.5, 50, 16)
console.log(abubakar);
const anas = new Player(6.2, 55, 20)
console.log(anas);

 