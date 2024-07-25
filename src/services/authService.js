


const users = [
    { email: "admin@example.com", password: "password" },
    { email: "user@example.com", password: "userpass" },
  ];
  
  export const authenticateUser = (email, password) => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    return user !== undefined;
  };