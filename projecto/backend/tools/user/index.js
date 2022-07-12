const axios = require("axios");

const fetchUsers = async (user) => {
  const { data } = await axios.get("https://api.github.com/users?q=");
  return data.filter((c) => c.login.includes(user));
};



module.exports = fetchUsers