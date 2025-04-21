# 🌟 Lumos

**Lumos** is a lightweight React Native app that instantly sets your device brightness to maximum as soon as the app is launched. If the brightness setting is successfully applied, the app exits automatically. If the app lacks the necessary permissions, it prompts the user to grant access.

---

## 🚀 Features

- 🔆 Instantly sets screen brightness to maximum on launch  
- 🚪 Automatically exits after applying the brightness  
- 🔐 Requests permissions if not already granted  
- 🤝 Provides haptic feedback for smoother user experience  

---

## 📱 Built With

This project uses the following React Native packages:

- [`react-native-exit-app`](https://github.com/wumke/react-native-exit-app) – for exiting the app programmatically
- [`react-native-haptic-feedback`](https://github.com/mkuczera/react-native-haptic-feedback) – for providing tactile feedback
- [`react-native-system-setting`](https://github.com/c19354837/react-native-system-setting) – to manage system settings like brightness

---

## 🛠️ Installation

1. **Clone this repository**:
   ```bash
   git clone https://github.com/your-username/lumos.git
   cd lumos
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Link native dependencies** (if using older versions of React Native):
   ```bash
   npx react-native link
   ```

4. **Run the app**:
   ```bash
   npx react-native run-android
   # or
   npx react-native run-ios
   ```

---

## 🧪 How It Works

1. When the app is opened, it checks for permission to modify system brightness.
2. If permission is granted:
   - Sets brightness to maximum
   - Triggers haptic feedback
   - Exits the app automatically
3. If permission is not granted:
   - Prompts the user to grant access via system settings

---

## 📷 Screenshots


Here’s how Lumos looks in action:

![Lumos Screenshot](images/img  (1).png)
![Lumos Screenshot](images/img  (2).png)
![Lumos Screenshot](images/img  (3).png)


---


## 🙌 Acknowledgements

Thanks to the developers of the open source libraries used in this app:

- [react-native-exit-app](https://github.com/wumke/react-native-exit-app)
- [react-native-haptic-feedback](https://github.com/mkuczera/react-native-haptic-feedback)
- [react-native-system-setting](https://github.com/c19354837/react-native-system-setting)