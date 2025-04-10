# 🚀 Redux Counter App with React & Redux Toolkit

A learning project to build a counter app using **React** and **Redux Toolkit**, including real setup experience, errors, and how to solve them.

---

## 🧑‍💻 Made by Fari Noveri  
📅 Release Date: 10 April 2025  

---

## 📁 Project Structure
```bash
reduxtoolkit/
├── node_modules/                 # Dependency packages (auto-generated)
├── public/                      # Static public assets
├── src/
│   ├── app/
│   │   └── store.js             # Redux store setup
│   ├── features/
│   │   └── counter/
│   │       └── counterSlice.js  # Redux slice for counter logic
│   ├── App.js                   # Main App component
│   ├── App.css                  # Styling for the app
│   ├── index.js                 # App entry point with ReactDOM and Provider
│   └── reportWebVitals.js       # Web performance reporting (optional)
├── .gitignore                   # Git ignored files
├── package.json                 # Project metadata and dependencies
├── README.md                    # Project documentation
└── yarn.lock / package-lock.json# Dependency lock file
```


---

## 🔧 Setup React + Redux

### 1. Inisialisasi Project React

```bash
npx create-react-app reduxtoolkit
cd reduxtoolkit
```
Jika hanya muncul node_modules dan package.json setelah setup, itu normal. Lanjut ke langkah berikutnya.

2. Install Redux Toolkit dan React-Redux
```bash
npm install @reduxjs/toolkit react-redux
```

3. Buat Folder Manual (Jika Belum Ada)
Jika folder src/app/ tidak ada, buat manual:

css
src/
├── app/
├── features/

4. Jalankan Project
```bash
npm start
```
Jika muncul halaman "Edit src/App.js and save to reload", artinya React berhasil jalan! 🎉

🐞 Beberapa Error & Solusi
❌ Error: 'ReactDOM' is not defined
```bash
Line 8:14:  'ReactDOM' is not defined         no-undef
```
✅ Solusi:
Pastikan kamu sudah mengimpor createRoot dan gunakan ini:

```bash
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root'))
root.render(<App />)
❌ Error: 'reportWebVitals' is not defined
✅ Solusi:
Pastikan file ini diimpor dengan benar:
```

> ⚠️ **Warning:** `'createRoot' is defined but never used`  
> Pastikan kamu sudah menggunakan `createRoot(...)` untuk merender aplikasimu.

✨ Counter Logic (Redux Slice)
```bash
src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const selectCount = (state) => state.counter.value
export default counterSlice.reducer
```

🎨 Styling (CSS)
Tambahkan styling ke App.css agar tampilan lebih menarik:
```bash
body {
  font-family: 'Segoe UI', sans-serif;
  background-color: #f0f2f5;
  display: flex;
  justify-content: center;
  padding: 50px;
}

.counter-container {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  text-align: center;
}

.counter-container button {
  margin: 0.5rem;
  padding: 10px 20px;
  font-size: 18px;
}
```

☁️ Push ke GitHub
Inisialisasi git:

```bash
git init
git add .
git commit -m "Initial commit"
```

Tambahkan remote dan push:

```bash
git remote add origin https://github.com/yourusername/redux-counter.git
```
```bash
git branch -M main
```
```bash
git push -u origin main
```

Kalau git init sudah pernah dilakukan, dan kamu ingin mengulang dari awal:
```bash
# Batalkan git
Remove-Item -Recurse -Force .git    # PowerShell
rm -rf .git                         # Git Bash
```



▄▄▄█████▓ ██░ ██  ▄▄▄       ███▄    █  ██ ▄█▀   ▓██   ██▓ ▒█████   █    ██ 
▓  ██▒ ▓▒▓██░ ██▒▒████▄     ██ ▀█   █  ██▄█▒     ▒██  ██▒▒██▒  ██▒ ██  ▓██▒
▒ ▓██░ ▒░▒██▀▀██░▒██  ▀█▄  ▓██  ▀█ ██▒▓███▄░      ▒██ ██░▒██░  ██▒▓██  ▒██░
░ ▓██▓ ░ ░▓█ ░██ ░██▄▄▄▄██ ▓██▒  ▐▌██▒▓██ █▄      ░ ▐██▓░▒██   ██░▓▓█  ░██░
  ▒██▒ ░ ░▓█▒░██▓ ▓█   ▓██▒▒██░   ▓██░▒██▒ █▄     ░ ██▒▓░░ ████▓▒░▒▒█████▓ 
  ▒ ░░    ▒ ░░▒░▒ ▒▒   ▓▒█░░ ▒░   ▒ ▒ ▒ ▒▒ ▓▒      ██▒▒▒ ░ ▒░▒░▒░ ░▒▓▒ ▒ ▒ 
    ░     ▒ ░▒░ ░  ▒   ▒▒ ░░ ░░   ░ ▒░░ ░▒ ▒░    ▓██ ░▒░   ░ ▒ ▒░ ░░▒░ ░ ░ 
  ░       ░  ░░ ░  ░   ▒      ░   ░ ░ ░ ░░ ░     ▒ ▒ ░░  ░ ░ ░ ▒   ░░░ ░ ░ 
          ░  ░  ░      ░  ░         ░ ░  ░       ░ ░         ░ ░     ░     
                                                 ░ ░                       

