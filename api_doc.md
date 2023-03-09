# GameStart API Documentation

## Endpoints :

List of available endpoints:

## Games :

- `GET /games`
- `GET /games/:id`

## Wishlist :

- `GET /wishlists`
- `POST /wishlists/add`
- `DELETE /wishlists/:id`

## MyGames :

- `GET /mygames`
- `POST /mygames/add`

## User :

- `POST /register`
- `POST /login`
- `POST /google-sign-in`
- `POST /generate-midtrans-token`
- `GET /profile`
- `PATCH /profile/update`
- `PATCH /profile/upgrade`

## 1. GET /games

Description:

- Get all games

Request:

_Response (200 - OK)_

```json
[
    {
        "id": 24493,
        "artworks": [
            {
                "id": 53975,
                "image_id": "ar15nb"
            }
        ],
        "cover": {
            "id": 81292,
            "image_id": "co1qq4"
        },
        "genres": [
            {
                "id": 12,
                "name": "Role-playing (RPG)"
            },
            {
                "id": 16,
                "name": "Turn-based strategy (TBS)"
            }
        ],
        "name": "Fate/Grand Order",
        "platforms": [
            {
                "id": 34,
                "name": "Android",
                "platform_logo": {
                    "id": 376,
                    "image_id": "plag"
                }
            },
            {
                "id": 39,
                "name": "iOS",
                "platform_logo": {
                    "id": 248,
                    "image_id": "pl6w"
                }
            }
        ],
        "rating": 98.06790926047819,
        "rating_count": 34,
        "screenshots": [
            {
                "id": 32137,
                "image_id": "krgglaxvwsxlbecmmrgk"
            },
            {
                "id": 32138,
                "image_id": "byswgcdocfc440x61oy9"
            },
            {
                "id": 32139,
                "image_id": "rcdfmhsxmizlhxr6ukrz"
            },
            {
                "id": 32140,
                "image_id": "g0hwtjuasu3ctbna6flb"
            }
        ],
        "summary": "Fate/Grand Order is a turn-based role-playing game with some visual novel elements set in the Fate/stay franchise, for iOS and Android.",
        "videos": [
            {
                "id": 29082,
                "video_id": "t-LJK1PXw24"
            },
            {
                "id": 29083,
                "video_id": "JgNkBNM7AEA"
            },
            {
                "id": 29084,
                "video_id": "_bBxDAkGIm4"
            },
            {
                "id": 29085,
                "video_id": "2OrP_3x08MI"
            },
            {
                "id": 29086,
                "video_id": "HXBWC5Zbkkg"
            }
        ],
        "checksum": "9daf14b0-cbec-8738-c703-9c5101452ddd"
    },
  ...,
]
```

&nbsp;

## 2. GET /games/:id

Description:

- Get game by id

Request:

- params:

```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_

```json
[
  {
    "id": 24493,
    "artworks": [
      {
        "id": 53975,
        "image_id": "ar15nb"
      }
    ],
    "cover": {
      "id": 81292,
      "image_id": "co1qq4"
    },
    "genres": [
      {
        "id": 12,
        "name": "Role-playing (RPG)"
      },
      {
        "id": 16,
        "name": "Turn-based strategy (TBS)"
      }
    ],
    "name": "Fate/Grand Order",
    "platforms": [
      {
        "id": 34,
        "name": "Android",
        "platform_logo": {
          "id": 376,
          "image_id": "plag"
        }
      },
      {
        "id": 39,
        "name": "iOS",
        "platform_logo": {
          "id": 248,
          "image_id": "pl6w"
        }
      }
    ],
    "rating": 98.06790926047819,
    "rating_count": 34,
    "screenshots": [
      {
        "id": 32137,
        "image_id": "krgglaxvwsxlbecmmrgk"
      },
      {
        "id": 32138,
        "image_id": "byswgcdocfc440x61oy9"
      },
      {
        "id": 32139,
        "image_id": "rcdfmhsxmizlhxr6ukrz"
      },
      {
        "id": 32140,
        "image_id": "g0hwtjuasu3ctbna6flb"
      }
    ],
    "summary": "Fate/Grand Order is a turn-based role-playing game with some visual novel elements set in the Fate/stay franchise, for iOS and Android.",
    "videos": [
      {
        "id": 29082,
        "video_id": "t-LJK1PXw24"
      },
      {
        "id": 29083,
        "video_id": "JgNkBNM7AEA"
      },
      {
        "id": 29084,
        "video_id": "_bBxDAkGIm4"
      },
      {
        "id": 29085,
        "video_id": "2OrP_3x08MI"
      },
      {
        "id": 29086,
        "video_id": "HXBWC5Zbkkg"
      }
    ],
    "checksum": "9daf14b0-cbec-8738-c703-9c5101452ddd"
  }
]
```

&nbsp;

## 3. GET /wishlists

Description:

- Get all wishlists from database

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
    {
        "id": 24493,
        "artworks": [
            {
                "id": 53975,
                "image_id": "ar15nb"
            }
        ],
        "cover": {
            "id": 81292,
            "image_id": "co1qq4"
        },
        "genres": [
            {
                "id": 12,
                "name": "Role-playing (RPG)"
            },
            {
                "id": 16,
                "name": "Turn-based strategy (TBS)"
            }
        ],
        "name": "Fate/Grand Order",
        "platforms": [
            {
                "id": 34,
                "name": "Android",
                "platform_logo": {
                    "id": 376,
                    "image_id": "plag"
                }
            },
            {
                "id": 39,
                "name": "iOS",
                "platform_logo": {
                    "id": 248,
                    "image_id": "pl6w"
                }
            }
        ],
        "rating": 98.06790926047819,
        "rating_count": 34,
        "screenshots": [
            {
                "id": 32137,
                "image_id": "krgglaxvwsxlbecmmrgk"
            },
            {
                "id": 32138,
                "image_id": "byswgcdocfc440x61oy9"
            },
            {
                "id": 32139,
                "image_id": "rcdfmhsxmizlhxr6ukrz"
            },
            {
                "id": 32140,
                "image_id": "g0hwtjuasu3ctbna6flb"
            }
        ],
        "summary": "Fate/Grand Order is a turn-based role-playing game with some visual novel elements set in the Fate/stay franchise, for iOS and Android.",
        "videos": [
            {
                "id": 29082,
                "video_id": "t-LJK1PXw24"
            },
            {
                "id": 29083,
                "video_id": "JgNkBNM7AEA"
            },
            {
                "id": 29084,
                "video_id": "_bBxDAkGIm4"
            },
            {
                "id": 29085,
                "video_id": "2OrP_3x08MI"
            },
            {
                "id": 29086,
                "video_id": "HXBWC5Zbkkg"
            }
        ],
        "checksum": "9daf14b0-cbec-8738-c703-9c5101452ddd"
    },
  ...,
]
```

&nbsp;

## 4. POST /wishlists/add

Description:

- Add game to wishlists

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- body:

```json
{
  "gameId": "integer"
}
```

_Response (201 - Created)_

```json
{
  "message": "Game added to wishlist"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Game is alraedy on wishlist"
}
```

&nbsp;

## 5. DELETE /wishlists/:id

Description:

- Delete wishlist by id

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
  "message": "Game removed from wishlist"
}
```

&nbsp;

## 6. GET /mygames

Description:

- Get all games

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
    {
        "id": 24493,
        "artworks": [
            {
                "id": 53975,
                "image_id": "ar15nb"
            }
        ],
        "cover": {
            "id": 81292,
            "image_id": "co1qq4"
        },
        "genres": [
            {
                "id": 12,
                "name": "Role-playing (RPG)"
            },
            {
                "id": 16,
                "name": "Turn-based strategy (TBS)"
            }
        ],
        "name": "Fate/Grand Order",
        "platforms": [
            {
                "id": 34,
                "name": "Android",
                "platform_logo": {
                    "id": 376,
                    "image_id": "plag"
                }
            },
            {
                "id": 39,
                "name": "iOS",
                "platform_logo": {
                    "id": 248,
                    "image_id": "pl6w"
                }
            }
        ],
        "rating": 98.06790926047819,
        "rating_count": 34,
        "screenshots": [
            {
                "id": 32137,
                "image_id": "krgglaxvwsxlbecmmrgk"
            },
            {
                "id": 32138,
                "image_id": "byswgcdocfc440x61oy9"
            },
            {
                "id": 32139,
                "image_id": "rcdfmhsxmizlhxr6ukrz"
            },
            {
                "id": 32140,
                "image_id": "g0hwtjuasu3ctbna6flb"
            }
        ],
        "summary": "Fate/Grand Order is a turn-based role-playing game with some visual novel elements set in the Fate/stay franchise, for iOS and Android.",
        "videos": [
            {
                "id": 29082,
                "video_id": "t-LJK1PXw24"
            },
            {
                "id": 29083,
                "video_id": "JgNkBNM7AEA"
            },
            {
                "id": 29084,
                "video_id": "_bBxDAkGIm4"
            },
            {
                "id": 29085,
                "video_id": "2OrP_3x08MI"
            },
            {
                "id": 29086,
                "video_id": "HXBWC5Zbkkg"
            }
        ],
        "checksum": "9daf14b0-cbec-8738-c703-9c5101452ddd"
    },
  ...,
]
```

&nbsp;

## 7. POST /mygames/add

Description:

- Add game to mygame

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- body:

```json
{
  "gameId": "integer"
}
```

_Response (201 - Created)_

```json
{
  "message": "Game added to wishlist"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Game already bought"
}
```

&nbsp;

## 8. POST /register

Description:

- Register account

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (201 - Created)_

```json
{
  "message": "Success Register",
  "data": {
    "id": 9,
    "email": "bmnaufaa@gmail.com"
  }
}
```

_Response (400 - Bad Request)_

```json
{
    "message": "Email is required"
}
OR
{
    "message": "Password is required"
}
OR
{
    "message": "This email is already taken"
}
```

&nbsp;

## 9. POST /login

Description:

- Login account

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
  "message": "Success login",
  "access_token": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Password is required"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email/password"
}
```

&nbsp;

## 10. POST /google-sign-in

Description:

- Sign in with google account

Request:

- headers:

```json
{
  "token_google": "string"
}
```

_Response (200 - OK)_

```json
{
  "access_token": "string"
}
```

&nbsp;

## 11. POST /generate-midtrans-token

Description:

- Generate midtrans token

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
{
  "token": "66e4fa55-fdac-4ef9-91b5-733b97d1b862",
  "redirect_url": "https://app.sandbox.midtrans.com/snap/v2/vtweb/66e4fa55-fdac-4ef9-91b5-733b97d1b862"
}
```

&nbsp;

## 12. GET /profile

Description:

- Get profile data

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
{
  "id": 1,
  "name": "Berlian Muhammad Naufal",
  "profilePicture": "https://liquipedia.net/commons/images/7/70/Anti-Mage_Large.png",
  "UserId": 1,
  "createdAt": "2023-03-08T04:55:51.239Z",
  "updatedAt": "2023-03-08T05:15:44.734Z",
  "User": {
    "role": "Member"
  }
}
```

&nbsp;

## 12. PATCH /profile/update

Description:

- Get profile data

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- body:

```json
{
  "profilePicture": "string",
  "name": "string",
  "about": "string"
}
```

_Response (200 - OK)_

```json
{
  "message": "Profile has been updated"
}
```

&nbsp;

## 13. PATCH /profile/update

Description:

- Get profile data

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
{
  "message": "Profile has been upgraded to member"
}
```

## Global Error

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid token"
}
```

_Response (404 - Not Found)_

````json
{
  "message": "Data not found"
}

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
````
