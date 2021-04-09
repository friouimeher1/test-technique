export default [
  'message',
  'job',
  'loginTitle',
  'loginUserName',
  'loginPassword',
  'loginBtn',
  'loginInvalid',
  'email'
].reduce((r, i) => {
  console.log('RRRRR', r)
  console.log('IIIIIII', i)
  r[i] = i
  return r
}, {})
