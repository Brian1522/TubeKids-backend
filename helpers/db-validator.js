const User = require("../models/user");
const Playlist = require("../models/playlist");
const Account = require("../models/cuentas");
const Role = require("../models/role");

const isRegisteredEmail = async (email = "") => {
  const emailExist = await User.findOne({ email });

  if (emailExist) {
    throw new Error(`Email ${email} is already registered`);
  }
};

//valida que no se repitan los nombres
const isRegisteredVideo = async (name = "") => {
  const nameExist = await Playlist.findOne({ name });

  if (nameExist) {
    throw new Error(`Name ${name} is already registered`);
  }
};

//valida que no se repitan los urls
const isRegisteredUrl = async (url = "") => {
  const urlExist = await Playlist.findOne({ url });

  if (urlExist) {
    throw new Error(`URL ${url} is already registered`);
  }
};

//valida nombre cuenta
const isRegisteredaccount = async (name = "") => {
  const nameExist = await Account.findOne({ name });

  if (nameExist) {
    throw new Error(`Name ${name} is already registered`);
  }
};

//valida idplaylist
const isRegisteredPlaylist = async (id = "") => {
  const idExist = await Playlist.findById(id);

  if (!idExist) {
    throw new Error(`Id ${id} is not registered`);
  }
};

//valida los roles
const isValidRole = async (role = "") => {
  const existRole = await Role.findOne({ role });

  if (!existRole) {
    throw new Error(`Role ${role} is not registered in DB`);
  }
};

module.exports = { isRegisteredEmail, isRegisteredVideo, isRegisteredUrl, isRegisteredaccount, isRegisteredPlaylist }
