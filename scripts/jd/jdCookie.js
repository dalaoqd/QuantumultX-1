/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie
let CookieJDs = [
 'pt_pin=hotgame8;pt_key=AAJgCa5GADAq8dP_UAchdWGFH7Io8ohcPbiKEbzQhO2-XCpjbpDXXKyF_MhfzrOijDW526YHT_c;',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
 'pt_pin=chloe120331;pt_key=AAJgCnv7ADDA5jKdYuce6pq8msn-QtewG-3QmiOFDAlIeoRfvvqUfyiP5kvrmg8GfoIVeCx0OCk;',
 'pt_pin=dssn182;pt_key=AAJgCaNDADAW1V-TO-niP5a0y7LtIi-vyl0GPG23CDUNpwonDoJ7w52SrrWQoOx6FIE1Ru-aS7w;',//账号二ck,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
 'pt_pin=yueheng%E6%9E%9C;pt_key=AAJgDA6zADDQJ4fhRLBKXmO1l131OGPxTWq8qzW_oHOoVd4WtwEUD9-t3ST1_6HRgtdwSsqQk3E;',//账号二ck,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
 'pt_pin=yueheng%E4%BC%98;pt_key=AAJgDA03ADAYZx3AVyDNZMfoYE9IdSujXcp-1R0pvXBp3o4b0lfdHdR9Hhwnel5gYioCvwm42Xs;',
]
// 判断github action里面是否有京东ck
if (process.env.JD_COOKIE && process.env.JD_COOKIE.split('&') && process.env.JD_COOKIE.split('&').length > 0) {
  CookieJDs = process.env.JD_COOKIE.split('&');
}
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i];
}