exports.newPassword = (req, res) => {
  const { data } = req.body;

  console.log(data)

  res.json({ mensaje: "Datos" });
};
