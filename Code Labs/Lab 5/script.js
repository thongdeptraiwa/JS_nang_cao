function promptInput(promptText) {
    return new Promise(resolve => {
        const userInput = prompt(promptText);
        resolve(userInput);
    });
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function inputGrade(phase) {
    const grade = await promptInput(`Nhập điểm cho ${phase}:`);
    console.log(`Đã nhập điểm ${phase}: ${grade}`);
    return parseFloat(grade);
}

async function calculateAverage(grades) {
    const totalWeight = 0.1 + 0.2 + 0.3 + 0.4;
    const weightedSum = grades.lab1 * 0.1 + grades.lab2 * 0.2 + grades.lab3 * 0.3 + grades.final * 0.4;
    const average = weightedSum / totalWeight;
    return average;
}

async function main() {
    const studentName = await promptInput("Nhập họ và tên sinh viên:");
    const subject = await promptInput("Nhập tên môn học:");

    const grades = {
        lab1: await inputGrade("Lab 1"),
        lab2: await delay(3000).then(() => inputGrade("Lab 2")),
        lab3: await delay(4000).then(() => inputGrade("Lab 3")),
        final: await delay(3000).then(() => inputGrade("Thi Final")),
    };

    const average = await calculateAverage(grades);

    console.log(`Điểm trung bình của sinh viên ${studentName} môn ${subject} là: ${average.toFixed(2)}`);

    if (average < 5) {
        console.log("Học lực: Yếu");
    } else if (average < 7) {
        console.log("Học lực: Trung Bình Khá");
    } else if (average < 8.5) {
        console.log("Học lực: Khá");
    } else {
        console.log("Học lực: Giỏi");
    }
}

main();