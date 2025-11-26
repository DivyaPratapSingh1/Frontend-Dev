class Employee{
  constructor(id,name,dept,salary){
    this.id=id;
    this.name=name;
    this.dept=dept;
    this.salary=salary;
  }
  getAnnualSalary(){
    return this.salary*12;
  }
  applyBonus(percent){
    this.salary=this.salary+(this.salary*(percent/100));
  }
}

const emp=[
  new Employee(1,"A","HR",20000),
  new Employee(2,"B","IT",30000),
  new Employee(3,"C","IT",50000),
  new Employee(4,"D","Sales",25000),
  new Employee(5,"E","HR",22000)
];

const total=emp.reduce((a,b)=>a+b.getAnnualSalary(),0);
console.log(total);
