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

  export const addUser = (newUser) => {
    const userExists = users.some((user) => user.email === newUser.email);
    if (userExists) {
      return false; // Usuário já existe
    } else {
      users.push(newUser);
      return true; // Usuário adicionado com sucesso
    }
  };

//   export const registerUser = (name, email, password) => {
//     const userExist = users.some((user) => user.email === email);
//     if(userExist) {
//         return false; //usuário existente
//     }
//     users.push({name, email, password});
//     return true //cria usuário
//   }