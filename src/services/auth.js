//Authentication service which checks for the provides the following methods - getsCurrentUser, logout

const logout = async () => {
  localStorage.removeItem("user");
  localStorage.removeItem("admin");
  try {
    const res = await fetch("/api/v1/logout");
    console.log(res);
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

const getCurrentUser = () => {
  const admin = getWithExpiry("admin");
  admin ? localStorage.removeItem("admin") : undefined;

  const user = getWithExpiry("user");
  return user
};

const getCurrentAdmin = () => {
  const user = getWithExpiry("user");
  user ? localStorage.removeItem("user") : undefined;

  const admin = getWithExpiry("admin");
  return admin;
};


//Set user in localstorage for two hours after which user is expired
const setWithExpiry = (key, value, ttl=1000*60*60*2) => {
  const now = new Date();

  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };

  localStorage.setItem(key, JSON.stringify(item));
};

const getWithExpiry = (key) => {
  const itemStr = localStorage.getItem(key);
  //If the item doesn't exist, return null
  if (!itemStr) {
    return null;
  }

  const item = JSON.parse(itemStr);

  const now = new Date();
  //Compare the expiry time of the item with the current time
  if(now.getTime() > item.expiry) {
      //If the item is expired, delete the item from local storage
      localStorage.removeItem(key)
      // logout()  //To also use the logout method which removes the cookie
      return null;
  }

  return item.value

};

const AuthService = {
  logout,
  getCurrentUser,
  getCurrentAdmin,
  setWithExpiry,
  getWithExpiry
};

export default AuthService;
