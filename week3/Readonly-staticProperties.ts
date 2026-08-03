//read only
class Car {
  readonly brand: string
  readonly year: number

  constructor(brand: string, year: number) {
    this.brand = brand
    this.year = year
  }

  showDetails(): string {
    return `${this.brand} - ${this.year}`
  }
}

const car1 = new Car("Tesla", 2024)
console.log(car1.showDetails())

//static
class MathUtils {
  static readonly PI: number = 3.14159

  static calculateCircleArea(radius: number): number {
    return MathUtils.PI * radius * radius
  }
}

console.log(MathUtils.PI) 
console.log(MathUtils.calculateCircleArea(5)) 
