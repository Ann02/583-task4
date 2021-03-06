let user1 = {
  id: 7,
};

let user2 = {
  id: -12,
};

let user3 = {
  id: 44,
};

let user4 = {
  id: 22,
};

let arr = [user1, user2, user3, user4];

function showUser(id) {
  if (id < 0) {
    throw new Error("ID must not be negative: " + id);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id == id) {
      return arr[i];
    }
  }
}

function showUsers() {
  try {
    for (let i = 0; i < arguments.length; i++) {
      showUser(arguments[i]);
    }
  } catch (error) {
    console.log(error.message);
  }
  let idArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id >= 0) {
      idArr[i] = arr[i];
    }
  }
  console.log(idArr);
}

//showUsers(7, -12, 44, 22);

