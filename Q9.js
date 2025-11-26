// Q9 ES6 class version
class Person {
    constructor(name){
        this.name = name;
    }
    showName(){
        console.log(this.name);
    }
}

class Student extends Person{
    constructor(name, branch){
        super(name);
        this.branch = branch;
    }
    showBranch(){
        console.log(this.branch);
    }
}

let s = new Student("Aman","CSE");
s.showName();
s.showBranch();
