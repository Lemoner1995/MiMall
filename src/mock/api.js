/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable quote-props */
import Mock from 'mockjs'
Mock.mock('/api/user/login', {
  // eslint-disable-next-line quotes
  "status": 0,
    "data": {
    "id": 12,
    "username": "admin",
    "email": "admin@51purse.com",
    "phone": null,
    "role": 0,
    "createTime": 1479048325000,
    "updateTime": 1479048325000
  }
})
