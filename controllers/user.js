export const userRegister = (req, res, next) => {
    // validate user input
    // Write todo to database
    // Respond to request
    res.json("User is registered");
};

export const userLogin = (req, res, next) => {
  res.json("User is Logged In");
};

export const userLogout = (req, res, next) => {
  res.json("User is Logged Out");
};
