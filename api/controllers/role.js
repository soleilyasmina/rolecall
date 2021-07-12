const Role = require('../models/role');

const getRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.json(roles);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

// const getOneRole = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const role = await Role.findById(id);
//     if (role) {
//       return res.json(role);
//     }
//     res.status(404).json({ message: 'Role not available!' });
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }
// };

const createRole = async (req, res) => {
  try {
    const role = await Role.create({
      ...req.body,
      user_id: res.locals.user.id,
    });

    res.status(201).json(role);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const updateRole = async (req, res) => {
  const { id } = req.params;
  await Role.findByIdAndUpdate(id, req.body, { new: true }, (error, role) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    if (!role) {
      return res.status(404).json({ message: 'Cannot find this role' });
    }
    res.status(200).json(role);
  });
};

const deleteRole = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Role.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send('Role has been deleted.');
    }
    throw new Error('Role not found');
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports = {
  getRoles,
  createRole,
  updateRole,
  deleteRole,
};
