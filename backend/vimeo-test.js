let Vimeo = require('vimeo').Vimeo;

// client_id, secret, access_token
let client = new Vimeo("93e563cc27265b5d012c3d1641095cebae1fd104", "SIX7qRQpLBfviqplzAHvKrd55lHz2kuJh/rMCfOwpMiQshZtYsQZ7z0dc35+StxmYVXBjZPETLCDEgIR0XBcWByuXMAKypodfqKPX6khSyf5F+iaPrRUdOKVm92WVQKl", "0023fdd477a940c910cbc2d3785f8368");

client.request({
  method: 'GET',
  path: '/tutorial'
}, function (error, body, status_code, headers) {
  if (error) {
    console.log(error);
  }

  console.log(body);
})
