# **How Old Are You?** – Age Calculator

## **Description**
**How Old Are You?** is an intuitive and easy-to-use web application that helps users calculate their exact age in years, months, and days based on their date of birth. It provides real-time calculations and ensures input validation, displaying clear error messages when necessary. The app offers a clean interface, optimized for all screen sizes, making it a great tool for anyone curious about their age.

## **Features**

- **User-friendly Interface**: A sleek, minimalistic, and responsive design.
- **Input Validation**: Ensures users enter a valid date, month, and year.
- **Error Handling**: Displays error messages if any field is left empty or contains invalid data.
- **Real-time Calculation**: Shows the calculated age immediately after the user clicks the "Calculate Age" button.
- **Responsive Design**: Works perfectly across desktop, tablet, and mobile devices.

## **Tech Stack**

- **HTML**: Used for the structure and content of the application.
- **CSS**: Applied for styling the user interface and ensuring responsiveness.
- **JavaScript**: Handles the logic for age calculation and input validation.

## **How It Works**

### **Input Fields:**
- **Date**: Enter the day of birth (1-31).
- **Month**: Enter the month of birth (1-12).
- **Year**: Enter the year of birth (e.g., 2000).

### **Calculation Process:**
1. Upon clicking the **"Calculate Age"** button, the app calculates the age based on the current date and the user’s input.
2. If any input is invalid (empty fields, incorrect date, or future dates), an error message is shown.
3. Once validated, the app displays the calculated age in years, months, and days.

### **Error Handling:**
- **Empty Fields**: If any of the fields are left empty, an error message will prompt the user to fill them.
- **Invalid Input**: If an invalid date is entered (e.g., day 32 or month 13), an error message will appear.
- **Future Date**: If the entered birthdate is in the future, the app will notify the user that the input is invalid.

### **Age Output:**
Once the input is validated, the age is calculated and displayed as:
- "You are 25 years, 2 months, and 17 days old."

## **Screenshots**

### 1. **Home Page (Before Input)**

This is the initial page where users enter their date of birth.

![Home Page](./screenshots/home_page.png)

### 2. **Error Message (Missing Input)**
If any input field is left empty, this error message will appear.

![Error Message - Missing Input](./screenshots/error_missing_input.png)

### 3. **Invalid Date Example**
If an invalid date, such as day "32", is entered, the app will show an error message.

![Error Message - Invalid Date](./screenshots/error_invalid_date.png)

### 4. **Future Date Error Example**  
If a future date is entered, the app will show an error message indicating that the date cannot be in the future.  

![Error Message - Future Date](./screenshots/error_future_date.png)

### 5. **Age Calculation Result**
Once the input is valid, the calculated age in years, months, and days will be displayed.

![Age Calculation Result](./screenshots/age_result.png)   
- **Input:**
  - **Date**: 14
  - **Month**:11
  - **Year**: 2004
- **Output**: "You are 20 years, 0 months, and 9 days old."

## **How to Use**

1. Open the `index.html` file in any modern web browser (Chrome, Firefox, Safari, etc.).
2. Enter the **Date**, **Month**, and **Year** of your birth.
   - Ensure that all fields are filled in correctly.
   - The day should be a valid day (1-31), the month (1-12), and the year in a proper format (e.g., 2000).
3. Click the **"Calculate Age"** button.
4. The app will display your **age** in years, months, and days, or show an error message if the input is invalid.


## **Customization**

You can easily customize the design and functionality of the app:

1. **Styling**: Modify the `style.css` file to change the appearance (colors, fonts, layout).
2. **JavaScript Logic**: Update the `app.js` file to enhance the logic, such as adding more date validation or extra features (e.g., counting days until the next birthday).
3. **Input Fields**: Add more fields if you want a more detailed calculation, such as time of birth.


## **Contributing**

We welcome contributions! Here's how you can help:

1. **Fork the Repository**: Fork this repository to your own GitHub account.
2. **Make Changes**: Work on your changes in a separate branch.
3. **Create a Pull Request**: Once you’re done, submit a pull request with your changes.

---

### **Acknowledgments**

- **Icon Credits**: [Icons8](https://icons8.com/icons)
- **Resources**: The age calculation logic was inspired by [Age Calculator API](https://age-calculator.net).

---

Feel free to contribute, fork, or use this project in your own projects!
