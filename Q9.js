// Q9 - Fitness App Analytics
class FitnessAnalytics {
  constructor(data = []) {
    if (!Array.isArray(data)) throw new Error('Data must be an array');
    this.data = data;
  }

  // users with steps > 7000
  getActiveUsers() {
    if (this.data.length === 0) throw new Error('Dataset is empty');
    return this.data.filter(u => u.steps > 7000).map(u => u.user);
  }

  // average calories using reduce
  getAverageCalories() {
    if (this.data.length === 0) throw new Error('Dataset is empty');
    const total = this.data.reduce((acc, u) => acc + u.calories, 0);
    return total / this.data.length;
  }

  // map to summary messages
  getUserSummary() {
    if (this.data.length === 0) throw new Error('Dataset is empty');
    return this.data.map(u => `${u.user} walked ${u.steps} steps and burned ${u.calories} calories`);
  }
}

// Test dataset
const dataset = [
  { user: 'A', steps: 8000, calories: 300 },
  { user: 'B', steps: 12000, calories: 500 },
  { user: 'C', steps: 4000, calories: 200 }
];

const analytics = new FitnessAnalytics(dataset);

console.log('Active users:', analytics.getActiveUsers());
console.log('Average calories:', analytics.getAverageCalories());
console.log('User summary:', analytics.getUserSummary());

// Error case
try {
  new FitnessAnalytics([]).getActiveUsers();
} catch (err) {
  console.error('Error:', err.message);
}
