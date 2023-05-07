# Users management service

This is a microservice that handles the management and authentication of users including customers

---

## Basic Features

- Login
- Registration
- Get users
- Update users
- Delete users

---

## User Model

| field                 | data_type | constraints      |
| ----------------      | --------- | ---------------- |
| first_name            | string    | required         |
| middle_name           | string    | required         |
| last_name             | string    | required         |
| email                 | string    | required, unique |
| password              | string    | required         |
| phone_number          | string    | required         |
| address               | string    | required         |
| state                 | string    | required         |
| city                  | string    | required         |
| role                  | string    | required         |

---

### Signup User

- Route: api/v1/users/create
- Method: POST
- Body:

```
{
    "name": "Janetty Doellyy",
    "businessName": "TellyPastarp Inc",
    "email": "tellyourb@gmail.com",
    "phoneNumber": "0990498009920",
    "password": "password23",

```

- Responses

Success

```javascript
{
    "status": "success",
    "message": "User created!",
    "data": {
            "first_name": "Elizabeth",
            "middle_name": "Borokinni",
            "last_name": "Abosede",
            "email": "elizabeth@gmail.com",
            "password": "Elizabeth",
            "phone_number": "08123456782",
            "address": "Lagos",
            "state": "Lagos",
            "city": "Lagos",
            "role": "customer",
            "createdAt": "2023-05-06T13:29:49.811Z",
            "updatedAt": "2023-05-06T13:29:49.811Z",
    }
}
```

---

### Login User

- Route: api/v1/login
- Method: POST
- Body:

```
{
    "email": "Elizabeth@gmail.com",
    "password": "Elizabeth"
}
```

- Responses

Success

```
{
    "status": "success",
    "message": "Login Successful",
    "data": {
            "userId": "4fb2ff09-fa9d-4621-91e1-0d6ec5d089cf",
            "first_ame": "Elizabeth",
            "last_name": "Borokinni"
            "email": "Elizabeth@gmail.com"
        },
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0ZmIyZmYwOS1mYTlkLTQ2MjEtOTFlMS0wZDZlYzVkMDg5Y2YiLCJmdWxsTmFtZSI6IkphbmV0IERvZSIsImVtYWlsIjoiamFuZXRkb2VAZ21haWwuY29tIiwiaWF0IjoxNjgyNDExNTA5LCJleHAiOjE2ODI0MTMzMDl9.N36xJBna2geYixgjj7HRJelCiaqco9akdjn0sYsBOtE"
    }
}
```

---

