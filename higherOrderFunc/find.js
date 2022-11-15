// find
// find(): it takes a callback function with parameter and then checks the condition. It returns the first element which satisfies the condition.

const ages = [24, 22, 25, 32, 35, 18]
const ageWithFindMethod = ages.find((age) => age > 20)
console.log(ageWithFindMethod); // 24

const names = ['Emran', 'Hossain', 'Rony', 'Jony']
const namesLengthWithFind = names.find((name) => name.length > 5)
console.log(namesLengthWithFind); // Hossain


const namesWithScores = [
  { name: "Emran", score: 95 },
  { name: "Hossain", score: 80 },
  { name: "Nusaiba", score: 50 },
  { name: "Rony", score: 85 },
  { name: "Jony", score: 100 },
];

const scoreWithFind = namesWithScores.find((nameScore) => nameScore.score > 80)
console.log(scoreWithFind); //{ name: 'Emran', score: 95 }

