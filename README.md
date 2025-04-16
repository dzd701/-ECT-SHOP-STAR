# ECT Shop Star - חנות מכשירים סלולריים 📱

## תיאור הפרויקט
חנות מקוונת למכירת מכשירים סלולריים ואביזרים נלווים. האתר תומך במספר שפות (עברית, אנגלית, רוסית וערבית) ומציע ממשק משתמש מודרני ונוח לשימוש.

## תכונות עיקריות 🌟
- תמיכה מלאה בריבוי שפות
- עיצוב רספונסיבי מלא
- סל קניות דינמי
- מערכת הזמנות מתקדמת
- ממשק משתמש אינטואיטיבי
- אנימציות חלקות
- תמיכה במכשירים ניידים

## טכנולוגיות 💻
- HTML5
- CSS3 (עם משתני CSS מודרניים)
- JavaScript (ES6+)
- Tailwind CSS
- Font Awesome
- EmailJS

## מבנה הפרויקט 📁
```
project/
├── index.html          # דף הבית הראשי
├── css/
│   └── styles.css      # קובץ העיצובים הראשי
├── js/
│   ├── main.js         # לוגיקה ראשית
│   ├── translations.js # קובץ תרגומים
│   └── cart.js         # לוגיקת סל הקניות
└── README.md
```

## התקנה והפעלה 🚀
1. שכפל את הפרויקט:
```bash
git clone https://github.com/your-username/ect-shop-star.git
cd ect-shop-star
```

2. פתח את `index.html` בדפדפן או השתמש בשרת מקומי:
```bash
# אם יש לך Python מותקן
python -m http.server 8000

# אם יש לך Node.js מותקן
npx serve
```

## תצורת קבצים 🔧

### styles.css
- משתני CSS גלובליים
- סגנונות בסיס
- עיצוב רספונסיבי
- אנימציות וטרנזיציות
- תמיכה במצב חשוך (dark mode)

### main.js
- ניהול DOM
- פונקציות שימושיות
- ניהול שפות
- מערכת התראות
- טיפול בטולטיפים

### translations.js
- תרגומים לכל השפות הנתמכות
- מערכת ניהול שפות
- תמיכה בהוספת שפות חדשות

## תחזוקה ועדכונים 🔄

### הוספת שפה חדשה
1. הוסף את התרגומים ב-`translations.js`:
```javascript
const translations = {
    new_lang: {
        "common.addToCart": "Your Translation",
        // ... more translations
    }
}
```

2. הוסף את השפה לבורר השפות ב-`index.html`

### הוספת מוצר חדש
1. העתק את תבנית המוצר מ-`index.html`
2. עדכן את הפרטים הרלוונטיים
3. הוסף תמונה מתאימה

## תרומה לפרויקט 🤝
1. צור fork של הפרויקט
2. צור ענף חדש (`git checkout -b feature/amazing-feature`)
3. בצע commit לשינויים שלך (`git commit -m 'Add amazing feature'`)
4. דחוף לענף (`git push origin feature/amazing-feature`)
5. פתח Pull Request

## רישיון 📝
הפרויקט מופץ תחת רישיון MIT. ראה קובץ `LICENSE` לפרטים נוספים.

## יצירת קשר 📞
- אימייל: your.email@example.com
- אתר: www.your-website.com
- טלפון: XXX-XXXXXXX

## תודות 🙏
- [Tailwind CSS](https://tailwindcss.com/)
- [Font Awesome](https://fontawesome.com/)
- [EmailJS](https://www.emailjs.com/) 