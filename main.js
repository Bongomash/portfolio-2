//Grades array opg
// 1 create an array holding 8 grades
const grades = [93, 89, 84,62, 22, 81, 71, 76]

// 2 log out how many grades are - level 1
console.log(grades)

// 3 Classify each grade into a categorie
function classifyGrades(grade) {
    if (grade>=90) {
        return "A";
    } else if (grade >= 80 && grade < 90) {
        return "B";
    } else if (grade >= 70 && grade < 80){
        return "C";
    } else if (grade >= 60 && grade < 70) {
        return "D";
    } else if (grade < 60){
        return "F"
    }}

// 4 Evaluate overall class performance - level 2
function calculateAverageGrade(grades) {
    let total = 0;
    for (let i = 0; i < grades.length; i++) {
        total += grades[i];
    }
    return total / grades.length;
}
const averageGrade = calculateAverageGrade(grades)


function evaluatePerformance(averageGrade) {
    if (averageGrade >= 90) {
        return "Excellent";
    }   else if (averageGrade >= 80 && averageGrade < 90) {
        return "good";
    } else if (averageGrade >= 70 && averageGrade <80){
        return "Satisfactory";
    } else {
        return "Needs Improvement";
    }
}


//5. find the highest and lowest grade
const highestGrade = Math.max(...grades);
const lowestGrade = Math.min(...grades)

//6. output
console.log("Grades")
grades.forEach((grade) => {
    console.log(`${grade}: ${classifyGrades(grade)}`);
});

console.log(`Class Performance: ${evaluatePerformance(averageGrade)}`);
console.log(`Highest Grade: ${highestGrade}, Classification: ${classifyGrades(highestGrade)}`);
console.log(`Lowest Grade: ${lowestGrade}, Classification: ${classifyGrades(lowestGrade)}`);
console.log("the average grade is ", averageGrade)



//treasure hunter
//1. island Setup
const island = ['-','T','_','-','T']

//level 1: Log out how many moves there are in the island
console.log(`Total moves: ${island.length}`);

// Level 2: For each move, log whether the treasure is found or not
for (let i = 0; i < island.length; i++) {
    if (island[i] === 'T') {
        console.log(`Tresure Found at move ${i + 1} :)`);
    } else {
        console.log(`No treasure found at move ${i + 1} :(`);
    }
}

// level 3: Count and log how many treasures are on the island
let treasureCount = 0;
for (let i = 0; i < island.length; i++) {
    if (island[i] === 'T') {
        treasureCount++;
    }
}
console.log(`Total treasures found: ${treasureCount}`);


//Startup name generator
// Array 1: First part of the startup name
const firstWords = ["Cyber", "Eco", "Wise", "Green", "Prime", "Luminous", "Nano", "Swift", "Nova", "Virtual"];

// Array 2: Second part of the startup name
const secondWords = ["Insight", "Technologies", "Platforms", "Studios", "Motion", "Center", "Grid", "Ventures", "Factory", "Route"];

function randomStartupName(){
    const randomIndexFirstWord = Math.floor(Math.random() * firstWords.length);
    const randomIndexSecondWord = Math.floor(Math.random() * secondWords.length);

    const firstWordRandom = firstWords[randomIndexFirstWord];
    const secondWordRandom = secondWords[randomIndexSecondWord];

    return `${firstWordRandom} ${secondWordRandom}`
}

console.log("Your new startup name is:", randomStartupName());