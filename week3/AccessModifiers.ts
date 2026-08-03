class Employee {
  public name: string
  private salary: number
  protected department: string

  constructor(name: string, salary: number, department: string) {
    this.name = name
    this.salary = salary
    this.department = department
  }

  public getDetails(): string {
    return `Employee: ${this.name}, Department: ${this.department}`
  }

  private calculateAnnualSalary(): number {
    return this.salary * 12
  }

  public showAnnualSalary(): string {
    return `${this.name}'s annual salary is ${this.calculateAnnualSalary()}`
  }
}

class Manager extends Employee {
  private teamSize: number

  constructor(name: string, salary: number, department: string, teamSize: number) {
    super(name, salary, department)
    this.teamSize = teamSize
  }

  public getManagerInfo(): string {
    return `Manager: ${this.name}, Department: ${this.department}, Team Size: ${this.teamSize}`
  }
}

const emp = new Employee("Tejaswini", 50000, "Engineering")
console.log(emp.getDetails())
console.log(emp.showAnnualSalary())

const mgr = new Manager("Reshma", 80000, "Engineering", 10)
console.log(mgr.getManagerInfo())
