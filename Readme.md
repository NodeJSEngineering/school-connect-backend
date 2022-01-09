

http://localhost:3000/users/register POST
 
{
    "user_name": "jason",
    "user_email": "tesdt@gmail.ocom",
  "password": "2434",

  "role": "dsds",
    "firstName": "sdd",
    "lastName": "sd"

}

http://localhost:3000/users/authenticate POST
REQ

{
    "username": "jason",
    "password": "2434"
}
RES
{
    "user_name": "jason",
    "user_email": "tesdt@gmail.ocom",
    "password": "2434",
    "role": "dsds",
    "firstName": "sdd",
    "lastName": "sd",
    "createdDate": "2022-01-08T07:03:07.848Z",
    "id": "61d9372bc1162b8c8a0fe590",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MWQ5MzcyYmMxMTYyYjhjOGEwZmU1OTAiLCJpYXQiOjE2NDE2MjU0NjUsImV4cCI6MTY0MjIzMDI2NX0.RK54zr8AQRfJeHpCr9b3ufobxHAZEg7h86nBNxgpgP4"
}


http://localhost:3000/users  GET

pass token in authorization from prev request


http://localhost:3000/users/61d9372bc1162b8c8a0fe590  PUT  To update users detail

pass token in authorization from prev request


http://localhost:3000/upl/upload POST

formdata file  uplaodfile

http://localhost:3000/upl/files  GET

http://localhost:3000/upl/files/1641627947496-bezkoder-test-word-made-colored-wooden-260nw-573036694.jpg  GET TO DOWNLOAD image
