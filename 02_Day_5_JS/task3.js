// Initial setup
document.addEventListener('DOMContentLoaded', function () {
    loadUsersFromLocalStorage();
    document.getElementById('contactForm').addEventListener('submit', addUser);
    document.getElementById('search').addEventListener('input', searchUsers);
});

// Load users from local storage and display them in the table
function loadUsersFromLocalStorage() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const tableBody = document.querySelector('#userTable tbody');
    tableBody.innerHTML = ''; // Clear table before adding users

    users.forEach(function (user, index) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>
                <button onclick="editUser(${index})">Edit</button>
                <button onclick="deleteUser(${index})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Add a new user to local storage and display it in the table
function addUser(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (!name || !email || !phone) return;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Add new user to users array
    users.push({ name, email, phone });

    // Save users to local storage
    localStorage.setItem('users', JSON.stringify(users));

    // Reset form and reload user list
    document.getElementById('contactForm').reset();
    loadUsersFromLocalStorage();
}

// Edit a user
function editUser(index) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users[index];

    document.getElementById('name').value = user.name;
    document.getElementById('email').value = user.email;
    document.getElementById('phone').value = user.phone;

    // Change form action to update user
    document.querySelector('#contactForm button').textContent = 'Update User';

    document.getElementById('contactForm').onsubmit = function (event) {
        event.preventDefault();
        updateUser(index);
    };
}

// Update a user in local storage
function updateUser(index) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUser = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value
    };

    users[index] = updatedUser;

    localStorage.setItem('users', JSON.stringify(users));

    document.getElementById('contactForm').reset();
    document.querySelector('#contactForm button').textContent = 'Add User';
    document.getElementById('contactForm').onsubmit = addUser;

    loadUsersFromLocalStorage();
}

// Delete a user from local storage and table
function deleteUser(index) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.splice(index, 1);

    localStorage.setItem('users', JSON.stringify(users));
    loadUsersFromLocalStorage();
}

// Search users by name
function searchUsers(event) {
    const searchTerm = event.target.value.toLowerCase();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const filteredUsers = users.filter(function (user) {
        return user.name.toLowerCase().includes(searchTerm);
    });

    displayFilteredUsers(filteredUsers);
}

// Display filtered users
function displayFilteredUsers(filteredUsers) {
    const tableBody = document.querySelector('#userTable tbody');
    tableBody.innerHTML = ''; // Clear the table

    filteredUsers.forEach(function (user, index) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>
                <button onclick="editUser(${index})">Edit</button>
                <button onclick="deleteUser(${index})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}
