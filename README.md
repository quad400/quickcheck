# 📲 Quick Check Task Submission - React Native App

A fully responsive **loan management mobile application** built with **TypeScript**, **React Native**, and **Expo**. This was developed as part of quickcheck company task to demonstrate core mobile engineering skills like **authentication**, **state management**, **API integration**, **form validation**, **dark mode persistence**, and **secure session handling**.

> 🔐 Login | 🏠 Loan Home Page | 💼 Apply for Loan | 🌙 Dark/Light Mode | 🧠 Persistent Sessions | 🚀 Built with TypeScript

---

## Login Information
```bash
{  
   email: "test@test.com",
   password: "Test123."
}
```

---

## 📸 Demo

<img src="src/assets/screeens/Screenshot 2025-07-07 at 7.15.16 AM.png" width="250" /> 
<img src="src/assets/screeens/Screenshot 2025-07-07 at 7.15.46 AM.png" width="250" /> 
<img src="src/assets/screeens/Screenshot 2025-07-07 at 7.15.52 AM.png" width="250" />
<img src="src/assets/screeens/Screenshot 2025-07-07 at 7.15.57 AM.png" width="250" />
<img src="src/assets/screeens/Screenshot 2025-07-07 at 7.16.13 AM.png" width="250" />

📹 **Watch Demo Video**

[Click Here To Watch](https://player.cloudinary.com/embed/?cloud_name=dupox1iqn&public_id=Simulator_Screen_Recording_-_iPhone_16_Pro_Max_-_2025-07-07_at_07.02.10_jfxevl&profile=cld-default)
---

## ✅ Features

### 1. 🔐 Authentication Flow

* Login screen with **email** and **password** fields
* Basic form validation (required fields + email format + password validations)
* On success:

  * Navigates to home screen
  * Stores session token in `AsyncStorage`
  * Automatically retains user session on app restart

### 2. 🏠 Home Screen - Loan List

* Displays a list of loans (mocked data with `timestamp` query support)
* Shows:

  * **Loan Amount**
  * **Loan Status** (color-coded badge)
  * **Date Applied**
* Tap on a loan to view detailed information

### 3. 📝 Apply for Loan

* Form screen to request a new loan:

  * Fields: **amount**, **purpose**
  * Input validation before submission
* Simulated `POST` request with success/error handling
* Displays a **toast** message on success

### 4. 🌙 Dark/Light Mode

* Supports **Dark Mode** and **Light Mode**
* Stores preferred mode in `AsyncStorage`
* Automatically applies saved mode on app relaunch

### 5. 🧠 Persistent Session & UX Enhancements

* User stays logged in across sessions
* Retains dark/light mode selection
* Smooth navigation transitions
* Pull-to-refresh implemented on loan list

---

## 🛠️ Tech Stack

* **React Native**
* **TypeScript**
* **Expo**
* **Expo Router**
* **AsyncStorage**
* **Sonner Native**
* **Tanstack Query**

---

## ⚙️ Installation Guide

> Ensure you have `node`, `expo-cli`, and an emulator, simulator or physical device ready.

```bash
# 1. Clone the project
git clone https://github.com/quad400/quick-check.git
cd quick-check

# 2. Install dependencies
npm install

# 3. Prebuild Project 
npx expo prebuild

# 4. Run Project on simulator and emulator 
npx expo run:ios # simulator
npx expo run:android  # emulator
```

### 📲 Running on Device

* **iOS**: Scan QR code with Camera (Expo Go)
* **Android**: Scan with Expo Go app

---

## 📌 Notes

* All data is mocked and managed locally via `JSON`.
* Token and dark mode preference are stored securely using `AsyncStorage`.
* Simulated backend behavior for demonstration purposes (no real API calls).

---

## 🌟 Task Objectives Fulfilled

| Feature                          | Status |
| -------------------------------- | ------ |
| Authentication w/ Token Storage  | ✅      |
| Loan Listing + Status Badge      | ✅      |
| Loan Details Screen              | ✅      |
| Apply for Loan Form + Validation | ✅      |
| Pull-to-Refresh                  | ✅      |
| Toast on Submission     | ✅      |
| Dark Mode + Theme Persistence    | ✅      |
| TypeScript Usage                 | ✅      |
| Responsive Layout                | ✅      |
| Smooth Navigation                | ✅      |

---

## 🙌 Author

**Adediji Abdulquadri**
Mobile Engineer — React Native & TypeScript
[LinkedIn](https://www.linkedin.com/in/abdulquadri-adediji/) • [GitHub](https://github.com/quad400)



