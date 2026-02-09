// Database simulation (in-memory)
let students = JSON.parse(localStorage.getItem('students')) || [];
let currentStudent = null;

// Form Display Functions
function showLogin() {
    document.getElementById('loginForm').classList.add('active');
    document.getElementById('registerForm').classList.remove('active');
    document.getElementById('dashboard').classList.remove('active');
}

function showRegister() {
    document.getElementById('registerForm').classList.add('active');
    document.getElementById('loginForm').classList.remove('active');
    document.getElementById('dashboard').classList.remove('active');
}

function showDashboard() {
    document.getElementById('dashboard').classList.add('active');
    document.getElementById('loginForm').classList.remove('active');
    document.getElementById('registerForm').classList.remove('active');
}

// Handle Registration
function handleRegister(event) {
    event.preventDefault();

    const name = document.getElementById('registerName').value.trim();
    const roll = document.getElementById('registerRoll').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirm').value;

    // Validation
    if (!name || !roll || !email || !password) {
        alert('Please fill in all fields');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return;
    }

    // Check if email already exists
    if (students.some(student => student.email === email)) {
        alert('Email already registered');
        return;
    }

    // Create new student
    const newStudent = {
        id: Date.now(),
        name,
        roll,
        email,
        password,
        registeredAt: new Date().toLocaleDateString()
    };

    students.push(newStudent);
    localStorage.setItem('students', JSON.stringify(students));

    alert('Registration successful! Please login.');
    document.getElementById('registerForm').reset();
    showLogin();
}

// Handle Login
function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;

    // Find student
    const student = students.find(s => s.email === email && s.password === password);

    if (student) {
        currentStudent = student;
        document.getElementById('studentName').textContent = student.name;
        document.getElementById('loginForm').reset();
        showDashboard();

        // Save session
        localStorage.setItem('currentStudent', JSON.stringify(student));
    } else {
        alert('Invalid email or password');
    }
}

// Handle Logout
function logout() {
    currentStudent = null;
    localStorage.removeItem('currentStudent');
    document.getElementById('loginEmail').value = '';
    document.getElementById('loginPassword').value = '';
    showLogin();
}

// Check if student is logged in
function checkSession() {
    const savedStudent = localStorage.getItem('currentStudent');
    if (savedStudent) {
        currentStudent = JSON.parse(savedStudent);
        document.getElementById('studentName').textContent = currentStudent.name;
        showDashboard();
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    checkSession();

    // Demo students for testing
    if (students.length === 0) {
        const demoStudents = [
            {
                id: 1,
                name: 'John Doe',
                roll: 'CS001',
                email: 'john@example.com',
                password: 'password123',
                registeredAt: '2025-01-15'
            },
            {
                id: 2,
                name: 'Jane Smith',
                roll: 'CS002',
                email: 'jane@example.com',
                password: 'password123',
                registeredAt: '2025-01-16'
            }
        ];
        localStorage.setItem('students', JSON.stringify(demoStudents));
        students = demoStudents;
    }
});

// Add some helpful console messages for testing
console.log('%c🎓 Welcome to StudentHub!', 'font-size: 20px; color: #5e72e4; font-weight: bold;');
console.log('%cDemo Credentials:', 'font-size: 16px; color: #825ee4; font-weight: bold;');
console.log('Email: john@example.com | Password: password123');
console.log('Email: jane@example.com | Password: password123');
