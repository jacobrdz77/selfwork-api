# API Definition

## Projects

## Create Project

### Request

```
POST /projects
```

```json
{
  "name": "Lawfirm Website",
  "description": "A website based on a local law firm.",
  "priority": "Low",
  "iconColor": "BlueGreen",
  "lumpSum": 2800,
  "workspaceId": "0000-0000-0000-0000-0000",
  "ownerId": "0000-0000-0000-0000-0000",
  "clientId": "0000-0000-0000-0000-0000"
}
```

### Response

```json
{
  "id": "clmzu2ek20002gpgirlmxav",
  "name": "Lawfirm Website",
  "description": "A website based on a local law firm.",
  "lumpSum": null,
  "monthlyPay": null,
  "priority": "Low",
  "status": "Active",
  "startDate": null,
  "dueDate": null,
  "iconColor": "YellowGreen",
  "ownerId": "al814zcy86074hloymogrg1mv",
  "workspaceId": "opdclt74u9913gpecetnyigta",
  "clientId": null,
  "clientName": null,
  "createdAt": "2023-09-26T04:44:34.226Z",
  "updatedAt": "2023-09-26T04:44:34.226Z",
  "order": 3
}
```

## Get Project

### Request

```
GET /projects/:id
```

### Response

```js
200 Ok
```

```json
{
  "id": "clmzu2ek20002gsrirlmxav",
  "name": "Lawfirm Website",
  "description": "A website based on a local law firm.",
  "lumpSum": null,
  "monthlyPay": null,
  "priority": "Low",
  "status": "Active",
  "startDate": null,
  "dueDate": null,
  "iconColor": "YellowGreen",
  "ownerId": "al814zcy74hloymogrg1mv",
  "workspaceId": "opdclu9913gpecetnyigta",
  "clientId": null,
  "clientName": null,
  "createdAt": "2023-09-26T04:44:34.226Z",
  "updatedAt": "2023-09-26T04:44:34.588Z",
  "order": 3,
  "sections": [
    {
      "id": "clmzu2ek003gpgsjtxgojb5",
      "name": "Untitled Section",
      "projectId": "clmzu2ek20002gsrirlmxav",
      "userId": null,
      "order": null,
      "createdAt": "2023-09-26T04:44:34.226Z",
      "tasks": []
    }
  ],
  "members": [
    {
      "id": "al814zcy86hloymogrg1mv",
      "name": "Jacob Rodriguez",
      "email": null,
      "emailVerified": null,
      "mobilePhone": null,
      "image": null,
      "lastUsingWorkspaceId": null,
      "userAssignedTasksSectionId": "cqpclt74u99gpecetnyigta"
    }
  ],
  "notes": []
}
```

## Get All Projects

### Request

```
GET /projects/:id
```

### Response

```js
200 Ok
```

```json
{
  "projects": [
    {
      "id": "clmzujudu0000gpe4gg8de8i5",
      "name": "Marketing agency website",
      "description": "A website for a local marketing agency.",
      "lumpSum": "5000",
      "monthlyPay": null,
      "priority": "High",
      "status": "Active",
      "startDate": null,
      "dueDate": null,
      "iconColor": "Forest",
      "ownerId": "al814zcy86074hloymogrg1mv",
      "workspaceId": "opdclt74u9913gpecetnyigta",
      "clientId": null,
      "clientName": null,
      "createdAt": "2023-09-26T04:58:07.890Z",
      "updatedAt": "2023-09-26T04:58:08.344Z",
      "order": 4
    },
    {
      "id": "cldclt74u9600gpecetnyigta",
      "name": "Law Firm Website",
      "description": "A website based on a local law firm.",
      "lumpSum": "2800",
      "monthlyPay": null,
      "priority": "High",
      "status": "Active",
      "startDate": null,
      "dueDate": null,
      "iconColor": "OrangeYellow",
      "ownerId": "al814zcy86074hloymogrg1mv",
      "workspaceId": "opdclt74u9913gpecetnyigta",
      "clientId": "cldcljamz0001gpsobc3inw3n",
      "clientName": "Bob Johnson",
      "createdAt": "2023-08-31T01:04:19.213Z",
      "updatedAt": "2023-09-26T04:42:51.780Z",
      "order": 1
    },
    {
      "id": "clmzu2ek20002gpgsrirlmxav",
      "name": "Lawfirm Website",
      "description": "A website based on a local law firm.",
      "lumpSum": null,
      "monthlyPay": null,
      "priority": "Low",
      "status": "Active",
      "startDate": null,
      "dueDate": null,
      "iconColor": "YellowGreen",
      "ownerId": "al814zcy86074hloymogrg1mv",
      "workspaceId": "opdclt74u9913gpecetnyigta",
      "clientId": null,
      "clientName": null,
      "createdAt": "2023-09-26T04:44:34.226Z",
      "updatedAt": "2023-09-26T04:44:34.588Z",
      "order": 3
    }
  ]
}
```

## Update Project

### Request

```js
PUT /projects/:id
```

```json
{
  "name": "Lawfirm Website",
  "description": "A website based on a local law firm.",
  "status": "Active",
  "priority": "Low",
  "iconColor": "BlueGreen",
  "lumpSum": 2800,
  "clientId": "0000-0000-0000-0000-0000",
  "startDate": "2023-09-26T04:58:07.890Z",
  "dueDate": "2023-09-26T04:58:08.344Z"
}
```

### Response

```js
204 No Content
```

## Delete Project

### Request

```js
DELETE /projects/:id
```

### Response

```js
204 No Content
```

## Clients

## Create Client

### Request

```
POST /clients
```

```json
{
  "name": "Bob Johnson",
  "email": "johnson@gmail.com",
  "phone": "1235559999",
  "projectId": "cldclt74u9600gpecetnyigta",
  "userId": "al814zcy86074hloymogrg1mv",
  "companyName": "Dallas Law Firm",
  "businessAddress": "1234 Cloud Drive"
}
```

### Response

```json
{
  "id": "clmzw0w860001gp10wd7imfon",
  "name": "Bob Johnson",
  "companyName": "Dallas Law Firm",
  "phone": "1235559999",
  "email": "johnson@gmail.com",
  "businessAddress": "1234 Cloud Drive",
  "userId": "al814zcy86074hloymogrg1mv",
  "order": 1,
  "status": "Pending",
  "totalMonthly": 0,
  "totalLumpSum": 0
}
```

## Get Client

### Request

```
GET /clients/:id
```

### Response

```js
200 Ok
```

```json
{
  "id": "clmzw0w86001gp10wd7imfon",
  "name": "Bob Johnson",
  "companyName": "Dallas Law Firm",
  "phone": "1235559999",
  "email": "johnson@gmail.com",
  "businessAddress": "1234 Cloud Drive",
  "userId": "al814zcy86074hloymogrg1mv",
  "order": 3,
  "status": "Pending",
  "totalMonthly": "0",
  "totalLumpSum": "0"
}
```

## Get All Clients

### Request

```
GET /clients/:id
```

### Response

```js
200 Ok
```

```json
[
  {
    "id": "cldcljamz0001gpsobc3inw3n",
    "name": "Bob Johnson",
    "companyName": "Dallas's Law Firm",
    "phone": "1231231234",
    "email": "johnson@gmail.com",
    "businessAddress": null,
    "userId": "al814zcy86074hloymogrg1mv",
    "order": 1,
    "status": "Pending",
    "totalMonthly": "0",
    "totalLumpSum": "0",
    "projects": [
      {
        "id": "cldclt74u9600gpecetnyigta",
        "name": "Law Firm Website",
        "description": "A website based on a local law firm.",
        "lumpSum": "2800",
        "monthlyPay": null,
        "priority": "High",
        "status": "Active",
        "startDate": null,
        "dueDate": null,
        "iconColor": "OrangeYellow",
        "ownerId": "al814zcy86074hloymogrg1mv",
        "workspaceId": "opdclt74u9913gpecetnyigta",
        "clientId": "cldcljamz0001gpsobc3inw3n",
        "clientName": "Bob Johnson",
        "createdAt": "2023-08-31T01:04:19.213Z",
        "updatedAt": "2023-09-26T04:42:51.780Z",
        "order": 1
      }
    ]
  }
]
```

## Update Client

### Request

```js
PUT /clients/:id
```

```json
{
  "name": "Bob Johnson",
  "companyName": "Dallas Law Firm",
  "phone": "1235559999",
  "email": "johnson@gmail.com",
  "businessAddress": "1234 Cloud Drive",
  "userId": "al814zcy86074hloymogrg1mv",
  "order": 1,
  "status": "Pending",
  "totalMonthly": 0,
  "totalLumpSum": 0
}
```

### Response

```js
204 No Content
```

## Delete Client

### Request

```js
DELETE /clients/:id
```

### Response

```js
204 No Content
```

## Sections

## Create Section

### Request

```
POST /sections
```

```json
{
  "name": "Untitled Section",
  "projectId": "cldclt74u9600gpecetnyigta", // OR userId for creating a user section
  "order": 3
}
```

### Response

```json
{
  "id": "clmzx9bsx0003gp10kv5mha9g",
  "name": "Untitled Section",
  "projectId": "al814zcy86074hloymogrg1mv",
  "userId": null,
  "order": 3,
  "createdAt": "2023-09-26T06:13:56.098Z",
  "tasks": []
}
```

## Get Section

### Request

```
GET /sections/:id
```

### Response

```js
200 Ok
```

```json
{
  "id": "clmzx9bsx0003gp10kv5mha9g",
  "name": "Untitled Section",
  "projectId": null,
  "userId": "al814zcy86074hloymogrg1mv",
  "order": null,
  "createdAt": "2023-09-26T06:13:56.098Z"
}
```

## Get All Sections

### Request

```js
GET /sections?userId=123456789
// OR
GET /sections?projectId=123456789
```

### Response

```js
200 Ok
```

```json
// User Sections
{
  "userSections": [
    {
      "id": "clm04g1kn0005gpz4qy7iyrze",
      "name": "UI Tasks",
      "projectId": null,
      "userId": "al814zcy86074hloymogrg1mv",
      "order": null,
      "createdAt": "2023-09-01T04:55:24.395Z",
      "tasks": []
    },
    {
      "id": "clmzx9bsx0003gp10kv5mha9g",
      "name": "Untitled Section",
      "projectId": null,
      "userId": "al814zcy86074hloymogrg1mv",
      "order": null,
      "createdAt": "2023-09-26T06:13:56.098Z",
      "tasks": []
    }
  ],
  "userAssignedTasksSection": {
    "id": "cqpclt74u9945gpecetnyigta",
    "name": "New Tasks",
    "projectId": null,
    "userId": null,
    "order": null,
    "createdAt": "2023-08-31T01:04:19.175Z",
    "tasks": []
  }
}

// OR

// Project Sections
[
    {
        "id": "clmzu2ek20003gpgsjtxgojb5",
        "name": "Untitled Section",
        "projectId": "clmzu2ek20002gpgsrirlmxav",
        "userId": null,
        "order": null,
        "createdAt": "2023-09-26T04:44:34.226Z",
        "tasks": []
    }
]
```

## Update Section

### Request

```js
PUT /sections/:id
```

```json
{
  "name": "Untitled Section"
}
```

### Response

```js
204 No Content
```

## Delete Section

```js
DELETE /sections/:id
```

### Response

```js
204 No Content
```

## Workspaces

## Create workspace

### Request

```
POST /workspaces
```

```json
{
  "name": "Jacob's Workspace",
  "ownerId": "cldclt74u9600gpecetnyigta"
}
```

### Response

```json
{}
```

## Get Workspace

### Request

```
GET /workspaces/:id
```

### Response

```js
200 Ok
```

```json
{
  "id": "opdclt74u9913gpecetnyigta",
  "name": "Jacob's Workspace",
  "description": null,
  "ownerId": "al814zcy86074hloymogrg1mv",
  "members": [
    {
      "id": "al814zcy86074hloymogrg1mv",
      "name": "Jacob Rodriguez",
      "email": null,
      "emailVerified": null,
      "mobilePhone": null,
      "image": null,
      "lastUsingWorkspaceId": null,
      "userAssignedTasksSectionId": "cqpclt74u9945gpecetnyigta"
    }
  ],
  "owner": {
    "id": "al814zcy86074hloymogrg1mv",
    "name": "Jacob Rodriguez",
    "email": null,
    "emailVerified": null,
    "mobilePhone": null,
    "image": null,
    "lastUsingWorkspaceId": null,
    "userAssignedTasksSectionId": "cqpclt74u9945gpecetnyigta"
  }
}
```

## Get All Workspaces

### Request

```js
GET /sections?ownerId=123456789
```

### Response

```js
200 Ok
```

```json
// User Sections
[
  {
    "id": "opdclt74u9913gpecetnyigta",
    "name": "Jacob's Workspace",
    "description": null,
    "ownerId": "al814zcy86074hloymogrg1mv"
  }
]
```

## Update Workspace

### Request

```js
PUT /workspaces/:id
```

```json
{
  "name": "Jacob's Workspace",
  "newMemberId": "123456789"
}
```

### Response

```js
204 No Content
```

## Delete Workspace

```js
DELETE /workspaces/:id
```

### Response

```js
204 No Content
```

## Users

## Sketches
