function age() {
    const dateInput = document.getElementById('date').value.trim();
    const monthInput = document.getElementById('month').value.trim();
    const yearInput = document.getElementById('year').value.trim();
    const resultDisplay = document.getElementById('age');

    // Clear previous results
    resultDisplay.textContent = "";

    // Input validation
    if (!dateInput || !monthInput || !yearInput) {
        resultDisplay.textContent = "Can't calculate: all fields must be filled.";
        resultDisplay.style.color = "red";
        return;
    }

    const day = parseInt(dateInput);
    const month = parseInt(monthInput);
    const year = parseInt(yearInput);

    if (
        isNaN(day) || isNaN(month) || isNaN(year) ||
        day < 1 || day > 31 || month < 1 || month > 12 || year < 0
    ) {
        resultDisplay.textContent = "Invalid input. Please check your values.";
        resultDisplay.style.color = "red";
        return;
    }

    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    if (birthDate > today) {
        resultDisplay.textContent = "Invalid input: date is in the future.";
        resultDisplay.style.color = "red";
        return;
    }

    // Calculate age
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(year, month, 0).getDate(); // Days in the previous month
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    resultDisplay.style.color = "navy";
    resultDisplay.textContent = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
}
