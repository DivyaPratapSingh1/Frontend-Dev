// Q1 - Student Result Processing (reduce + Classes)
class Student {
  constructor(name, marks = []) {
    this.name = name;
    this.marks = marks;
  }

  // Calculate average using reduce()
  calculateAverage() {
    if (!this.marks.length) return 0;
    const sum = this.marks.reduce((acc, m) => acc + m, 0);
    return sum / this.marks.length;
  }

  // Return grade based on average
  getGrade() {
    const avg = this.calculateAverage();
    if (avg >= 85) return 'A';
    if (avg >= 70) return 'B';
    if (avg >= 50) return 'C';
    return 'F';
  }
}

// Test 3 students
const s1 = new Student('Aman', [90, 85, 88]);
const s2 = new Student('Bina', [72, 68, 75]);
const s3 = new Student('Chirag', [45, 50, 40]);

console.log(s1.name, 'avg=', s1.calculateAverage(), 'grade=', s1.getGrade());
console.log(s2.name, 'avg=', s2.calculateAverage(), 'grade=', s2.getGrade());
console.log(s3.name, 'avg=', s3.calculateAverage(), 'grade=', s3.getGrade());
