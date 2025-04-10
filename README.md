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
├── public/                       # Static public assets
├── src/
│   ├── app/                      # Manual add folder
│   │   └── store.js              # Redux store setup
│   ├── features/                 # Manual add folder
│   │   └── counter/
│   │       └── counterSlice.js   # Redux slice for counter logic
│   ├── App.js                    # Main App component
│   ├── App.css                   # Styling for the app
│   ├── index.js                  # App entry point with ReactDOM and Provider
│   └── reportWebVitals.js        # Web performance reporting (optional)
├── .gitignore                    # Git ignored files
├── package.json                  # Project metadata and dependencies
├── README.md                     # Project documentation
└── yarn.lock / package-lock.json # Dependency lock file
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
```bash
css
src/
├── app/
├── features/
```

## ✍️ Lanjut Manual Menambahkan Manual Codingan, Folder & Edit Summary

Berikut ini adalah daftar lengkap **file dan folder yang kamu tambahkan atau edit secara manual** selama proses pengembangan proyek ini. Setiap file dilengkapi dengan **penjelasan dan potongan kode penting** yang kamu buat atau ubah sendiri.

---

### 1. 📁 `src/app/store.js` ✅ **(Manual Add)**  
File ini digunakan untuk konfigurasi Redux store dan menggabungkan semua reducer.

```bash
// src/app/store.js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
```

---

### 2. 📁 `src/features/counter/counterSlice.js` ✅ **(Manual Add)**  
File ini mendefinisikan `createSlice()` untuk counter, dengan reducer dan actions.

```bash
// src/features/counter/counterSlice.js
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

---

### 3. 📄 `src/index.js` ✅ **(Manual Edit)**  
Kamu mengedit file ini untuk menyambungkan Redux ke React menggunakan `<Provider>`.

```bash
// src/index.js
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import store from './app/store'
import reportWebVitals from './reportWebVitals'
import './index.css'

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
```

---

### 4. 📄 `src/App.js` ✅ **(Manual Edit)**  
Kamu edit `App.js` untuk menampilkan UI counter dan menyambungkan dengan Redux menggunakan `useSelector()` dan `useDispatch()`.

```bash
// src/App.js
import React from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from './features/counter/counterSlice'

function App() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Redux Counter App</h1>
      <p className="count">{count}</p>
      <div className="buttons">
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
      </div>
    </div>
  )
}

export default App
```

---

### 5. 📄 `src/App.css` ✅ **(Manual Edit)**  
Kamu menambahkan styling agar UI lebih menarik.

```bash
/* src/App.css */
.App {
  text-align: center;
  padding: 2rem;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  min-height: 100vh;
}

.count {
  font-size: 4rem;
  margin: 1rem 0;
}

.buttons button {
  font-size: 1.5rem;
  margin: 0 1rem;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 10px;
  background-color: #6200ee;
  color: white;
  cursor: pointer;
  transition: background 0.3s;
}

.buttons button:hover {
  background-color: #3700b3;
}
```


6. Jalankan Project
```bash
npm start
```


7. Jika muncul halaman "Edit src/App.js and save to reload", buka "src/app.js" kamu lalu copy dan paste kode dibawah ke dalam "src/app.js" kamu 
```bash
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './features/counter/counterslice'

import './App.css'

function App() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  return (
    <div className="container">
      <h1>Redux Counter</h1>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>

      <div className="controls">
        <input
          type="number"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          onClick={() =>
            dispatch(incrementAsync(Number(incrementAmount) || 0))
          }
        >
          Add Async
        </button>
      </div>
    </div>
  )
}

export default App
```
Maka dengan itu React berhasil jalan! 🎉
---

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
```
❌ Error: 'reportWebVitals' is not defined
✅ Solusi:
Pastikan file ini diimpor dengan benar:


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


```bash

▄▄▄█████▓ ██░ ██  ▄▄▄       ███▄    █  ██ ▄█▀
▓  ██▒ ▓▒▓██░ ██▒▒████▄     ██ ▀█   █  ██▄█▒ 
▒ ▓██░ ▒░▒██▀▀██░▒██  ▀█▄  ▓██  ▀█ ██▒▓███▄░ 
░ ▓██▓ ░ ░▓█ ░██ ░██▄▄▄▄██ ▓██▒  ▐▌██▒▓██ █▄ 
  ▒██▒ ░ ░▓█▒░██▓ ▓█   ▓██▒▒██░   ▓██░▒██▒ █▄
  ▒ ░░    ▒ ░░▒░▒ ▒▒   ▓▒█░░ ▒░   ▒ ▒ ▒ ▒▒ ▓▒
    ░     ▒ ░▒░ ░  ▒   ▒▒ ░░ ░░   ░ ▒░░ ░▒ ▒░
  ░       ░  ░░ ░  ░   ▒      ░   ░ ░ ░ ░░ ░ 
          ░  ░  ░      ░  ░         ░ ░  ░   
                                             
   ▓██   ██▓ ▒█████   █    ██                
    ▒██  ██▒▒██▒  ██▒ ██  ▓██▒               
     ▒██ ██░▒██░  ██▒▓██  ▒██░               
     ░ ▐██▓░▒██   ██░▓▓█  ░██░               
     ░ ██▒▓░░ ████▓▒░▒▒█████▓                
      ██▒▒▒ ░ ▒░▒░▒░ ░▒▓▒ ▒ ▒                
    ▓██ ░▒░   ░ ▒ ▒░ ░░▒░ ░ ░                
    ▒ ▒ ░░  ░ ░ ░ ▒   ░░░ ░ ░                
    ░ ░         ░ ░     ░                    
    ░ ░                                      
```
