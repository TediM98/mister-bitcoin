
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

import { utilService } from '../services/util.service.js'
import { ref } from 'vue'

const USER_KEY = 'user_db'
let user = ref(null)

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
  // return JSON.parse(sessionStorage.getItem('user'))
  if (!user.value) {
    const storedUser = JSON.parse(sessionStorage.getItem('user'))
    user.value = storedUser
  }
  return user
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
  user = utilService.loadFromStorage(USER_KEY)
  if (user) {
    const transaction = {
      toId,
      to,
      at: Date.now(),
      amount,
    }
    user.balance -= amount
    if (user.balance < 0) {
      return
    }
    user.transactions.push(transaction)
    _saveUser(user)
    sessionStorage.setItem("user", JSON.stringify(user))
  }
}


function getTransactions() {
  user = utilService.loadFromStorage(USER_KEY)
  if (user) {
    return user.transactions
  }
  return []
}

// import { ref } from 'vue';
// import { utilService } from '../services/util.service.js'

// const USER_KEY = 'user_db'
// const user = ref(utilService.loadFromStorage(USER_KEY))

// function updateUser(userData) {
//   user.value = userData
// }

// export const userService = {
//   getUser,
//   transferFunds,
// }

// function getUser() {
//   return user.value
// }

// function transferFunds(toId, to, amount) {
//   const currentUser = user.value
//   if (currentUser) {
//     const transaction = {
//       toId,
//       to,
//       at: Date.now(),
//       amount,
//     }
//     currentUser.balance -= amount
//     if (currentUser.balance < 0) {
//       return
//     }
//     currentUser.transactions.push(transaction)
//     _saveUser(currentUser)
//     updateUser(currentUser)
//   }
// }

// function _saveUser(user) {
//   utilService.saveToStorage(USER_KEY, user)
// }

// function getTransactions() {
//   user = utilService.loadFromStorage(USER_KEY)
//   if (user) {
//     return user.transactions
//   }
//   return []
// }