const Users = require('../models/Users')

module.exports = async (req, res) => {
  // req.body = { username: 'nakorncode', email: '', password: '1234' }
  await Users.create(req.body)
  req.flash('message', 'คุณได้สมัครสมาชิกเสร็จสิ้น กรุณาเข้าสู่ระบบเพื่อดำเนินการต่อ')
  return res.redirect('/')
}
