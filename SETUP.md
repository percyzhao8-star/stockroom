# StockRoom — Setup Guide

You have **4 files** total:
```
index.html          ← landing page (teacher or student choice)
teacher.html        ← teacher dashboard
student.html        ← student trading interface
style.css           ← shared styles
firebase-config.js  ← your Firebase credentials (you'll fill this in)
```

---

## Step 1 — Create a free Firebase project (5 min)

1. Go to **https://console.firebase.google.com**
2. Click **"Add project"** → give it a name (e.g. `stockroom-myclass`)
3. Disable Google Analytics if asked (not needed) → **Create project**
4. In the left sidebar click **"Build" → "Realtime Database"**
5. Click **"Create Database"** → choose **"Start in test mode"** → **Enable**
   - *(Test mode lets anyone read/write for 30 days — fine for classroom use.
     After 30 days change the rule to `true` permanently — see note below.)*

---

## Step 2 — Get your Firebase config

1. In Firebase Console, click the **gear icon ⚙** → **"Project settings"**
2. Scroll down to **"Your apps"** → click **"</> Web"**
3. Give it a nickname (e.g. `stockroom`) → click **"Register app"**
4. You'll see a block of code like this:

```js
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "stockroom-xxxx.firebaseapp.com",
  databaseURL: "https://stockroom-xxxx-default-rtdb.firebaseio.com",
  projectId: "stockroom-xxxx",
  storageBucket: "stockroom-xxxx.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123:web:abc123"
};
```

5. Copy those values and paste them into **`firebase-config.js`**, replacing each `"YOUR_..."` placeholder.

---

## Step 3 — Fix the database rules (important!)

In the Firebase Console → Realtime Database → **Rules** tab, replace everything with:

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

Click **Publish**. This keeps it open for your class. (It's fine since there's no personal data.)

---

## Step 4 — Host on GitHub Pages (free, permanent URL)

1. Go to **https://github.com** and sign in (or create a free account)
2. Click **"+"** → **"New repository"**
3. Name it `stockroom` → set to **Public** → click **"Create repository"**
4. On the next screen, click **"uploading an existing file"**
5. Drag and drop ALL 5 files into the upload area:
   - `index.html`
   - `teacher.html`
   - `student.html`
   - `style.css`
   - `firebase-config.js`
6. Click **"Commit changes"**
7. Go to **Settings** → **Pages** (left sidebar)
8. Under "Branch" select **main** → **/ (root)** → click **Save**
9. Wait ~1 minute, then your site will be live at:
   ```
   https://YOUR-USERNAME.github.io/stockroom/
   ```

---

## How to use in class

### As the teacher:
1. Open `https://your-username.github.io/stockroom/teacher.html`
2. Enter a class name + starting cash → click **"Create Session"**
3. A **6-character code** appears — write it on the board or share via link
4. Type a stock ticker (e.g. `AAPL`) and a price → click **Update**
5. Prices push to every student instantly
6. Use **"Next Round"** to advance rounds, or change stocks anytime
7. Watch the leaderboard update live

### As a student:
1. Open `https://your-username.github.io/stockroom/` on any phone or laptop
2. Click **"I'm a Student"** → enter name + session code → **Join**
3. Buy and sell shares — portfolio value updates in real time

---

## Tips for teaching

- **Simulate news events**: "Company just announced record profits" → bump the price up and see who bought early
- **Market crash round**: spike a price high, then crash it — teaches risk management
- **Multiple stocks**: You can only show one stock at a time, but you can change the ticker every round to simulate a portfolio exercise
- **Round structure**: Each "round" = one trading period. Use "Next Round" to signal a new phase.

---

## After 30 days (Firebase rules expiry)

Go to Firebase Console → Realtime Database → Rules and make sure they still say:
```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```
If they've been locked down, republish the rules above.
