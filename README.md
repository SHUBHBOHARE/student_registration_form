# StudentHub - Student Login Application

A modern, stylish student login and dashboard application built with HTML, CSS, and JavaScript.

## Features

✨ **Modern Design**
- Beautiful gradient backgrounds
- Smooth animations and transitions
- Responsive design that works on all devices
- Professional card-based layouts

👤 **User Authentication**
- Student Registration
- Login functionality
- Session persistence (data saved in browser)
- Logout option

📊 **Student Dashboard**
- Welcome message with student name
- Statistics cards (courses, grades, assignments, achievements)
- Active courses with progress tracking
- Upcoming events and deadlines

🔐 **Data Management**
- Secure password verification
- Email validation
- Password confirmation on registration
- In-memory storage using localStorage

## Files Included

- `index.html` - Main HTML structure with login, register, and dashboard forms
- `styles.css` - Modern styling with gradients, animations, and responsive design
- `script.js` - JavaScript functionality for authentication and navigation

## How to Use

### 1. Open the Application
Simply open `index.html` in your web browser.

### 2. Demo Credentials (Pre-loaded)
Two demo accounts are available for testing:

**Account 1:**
- Email: `john@example.com`
- Password: `password123`
- Roll: `CS001`

**Account 2:**
- Email: `jane@example.com`
- Password: `password123`
- Roll: `CS002`

### 3. Register a New Account
1. Click on "Register" in the navigation bar
2. Fill in your details:
   - Full Name
   - Roll Number
   - Email
   - Password (minimum 6 characters)
   - Confirm Password
3. Click "Register"
4. Login with your new credentials

### 4. Login
1. Enter your email and password
2. Optionally check "Remember me"
3. Click "Login"
4. View your personalized dashboard

### 5. Dashboard Features
After login, you'll see:
- **Stats Section**: Overview of your academic progress
- **Recent Courses**: Your enrolled courses with progress bars
- **Upcoming Events**: Important dates and deadlines

## Technical Features

- **localStorage**: Data persists between browser sessions
- **Form Validation**: Email format check, password confirmation, minimum password length
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **CSS Animations**: Smooth transitions and page effects
- **Mobile Optimized**: Touch-friendly interface with proper spacing

## Customization

### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #5e72e4;      /* Main purple */
    --secondary-color: #825ee4;    /* Secondary purple */
    --success-color: #2dce89;      /* Green */
    /* ... more colors ... */
}
```

### Modify Dashboard Content
Edit the HTML in the `#dashboard` section of `index.html` to add:
- More course cards
- Additional statistics
- More events
- Links to external resources

### Add Real Backend
To connect with a real backend server:
1. Replace localStorage calls with API requests
2. Update `handleRegister()` to send data to your server
3. Update `handleLogin()` to authenticate against your backend
4. Implement proper session management

## Browser Compatibility

- Chrome/Chromium (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers

## Security Notes

⚠️ **Important**: This is a demonstration application using localStorage. For production:
- Never store passwords in plain text
- Use proper backend authentication
- Implement HTTPS
- Use secure session tokens
- Hash passwords with bcrypt or similar

## License

Free to use and modify for educational purposes.

## Developer Notes

The application is fully functional as-is and requires no build process or dependencies. It's a pure HTML/CSS/JavaScript solution that can be run immediately in any modern browser.
