
// export const userService = {
//   getUser,
// }

// const user = {
//   name: 'Jim Carry',

//   balance: 100,
//   transactions: [],
//   imageUrl: 'https://robohash.org/5a566402abb3146207bc4ec5.png?set=set5',
// }

// function signup(name) {

// }

// function getUser() {
//   return user
// }

const USER_KEY = 'user_db'
let user

export const userService = {
  // login,
  signup,
  getUser,
  transferFunds,
  getTransactions,
}

function getUser() {
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     // const users = JSON.parse(localStorage.getItem(USER_KEY))
  //     // const user = sessionStorage.getItem("user", JSON.stringify(user))
  //     const user = JSON.parse(sessionStorage.getItem('user'));
  //     resolve(user)
  //   }, 1000)
  // })
  return JSON.parse(sessionStorage.getItem('user'))
}

// function login(username) {
//   user = {
//     name: username,
//     balance: 100,
//     transactions: [],
//   }
//   _saveUser(user)
// }

function signup(username) {
  const users = JSON.parse(localStorage.getItem(USER_KEY))
  if (!users || !users.length) {
    user = {
      name: username,
      balance: 100,
      transactions: [],
    }
    _saveUser(user)
  } else {
    user = users.find(userCheck => userCheck.name === username)
    return loggedInUser
  }
  sessionStorage.setItem("user", JSON.stringify(user))
}

function _saveUser(user) {
  localStorage.setItem(USER_KEY, JSON.stringify(user))
}

function transferFunds(toId, to, amount) {
  const user = JSON.parse(localStorage.getItem(USER_KEY))
  if (user) {
    const transaction = {
      toId,
      to,
      at: Date.now(),
      amount,
    }
    user.transactions.push(transaction)
    _saveUser(user)
  }
}

function getTransactions() {
  const user = JSON.parse(localStorage.getItem(USER_KEY))
  if (user) {
    return user.transactions
  }
  return []
}
