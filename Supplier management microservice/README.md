# Suppliers management service

This is a microservice that handles the management of suppliers

---

## Basic Features
- create suppliers
- Get suppliers
- Update suppliers
- Delete suppliers

---

## Supplier Model

| field                 | data_type | constraints      |
| ----------------      | --------- | ---------------- |
| full_name             | string    | required         |
| company_name          | string    | required         |
| company_email         | string    | required, unique |
| company_address       | string    | required         |
| product_name          | string    | required         |
| category              | string    | required         |
| price                 | string    | required         |
| quantity              | string    | required         |
| description           | string    | required         |
| role                  | string    | required         |

---

### Create suppliers

- Route: api/v1/users/create
- Method: POST
- Body:

```
{
    "full_name": "Elizabeth Borokinni",
    "company_name": "Lysa stores",
    "company_email": "lysa@gmail.com",
    "company_address": "Lagos",
    "product_name": "Books",
    "price": 1500,
    "category": "Books",
    "description": "Typical book"
}

```

---

```
### Get suppliers

- Route: api/v1/suppliers/get
- Method: Get

```
### Get suppliers by id

- Route: api/v1/suppliers/get/:id
- Method: Get

```

### Update suppliers

- Route: api/v1/suppliers/update/:id
- Method: Patch
```

### Delete suppliers

- Route: api/v1/suppliers/delete/:id
- Method: Delete

---