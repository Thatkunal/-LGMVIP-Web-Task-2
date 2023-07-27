const getUsersBtn = document.getElementById('getUsersBtn');
const userCardGrid = document.getElementById('userCardGrid');
const loader = document.getElementById('loader');

const apiUrl = 'https://reqres.in/api/users?page=1';

async function fetchUsers() {
  try {
    loader.style.display = 'block';
    const response = await fetch(apiUrl);
    const data = await response.json();
    const users = data.data;
    displayUsers(users);
  } catch (error) {
    console.error('Error fetching users:', error);
  } finally {
    loader.style.display = 'none';
  }
}

function displayUsers(users) {
  userCardGrid.innerHTML = '';
  users.forEach(user => {
    const userCard = createUserCard(user);
    userCardGrid.appendChild(userCard);
  });
}

function createUserCard(user) {
  const userCard = document.createElement('div');
  userCard.classList.add('user-card');
  userCard.innerHTML = `
    <img src="${user.avatar}" alt="${user.first_name}">
    <h2>${user.first_name} ${user.last_name}</h2>
    <p>Email: ${user.email}</p>
  `;
  return userCard;
}

getUsersBtn.addEventListener('click', fetchUsers);
