# Groups
(*.groups*)

## Overview

Group is used to organize your contacts.

### Available Operations

* [getGroupsList](#getgroupslist) - List All Groups
* [getGroupsGroupId](#getgroupsgroupid) - Retrieve Group Using Group ID
* [postGroupsCreate](#postgroupscreate) - Create a group
* [postGroupsGroupIdDelete](#postgroupsgroupiddelete) - Delete a group
* [postGroupsGroupIdUpdate](#postgroupsgroupidupdate) - Change Group Name

## getGroupsList

List All Groups

### Example Usage

```typescript
import { Tacs } from "tacs";

(async() => {
  const sdk = new Tacs({
    bearerAuth: "",
  });

  const res = await sdk.groups.getGroupsList();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetGroupsListResponse](../../models/operations/getgroupslistresponse.md)>**


## getGroupsGroupId

Retrieve Group Using Group ID

### Example Usage

```typescript
import { Tacs } from "tacs";

(async() => {
  const sdk = new Tacs({
    bearerAuth: "",
  });

  const res = await sdk.groups.getGroupsGroupId({
    groupId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetGroupsGroupIdRequest](../../models/operations/getgroupsgroupidrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetGroupsGroupIdResponse](../../models/operations/getgroupsgroupidresponse.md)>**


## postGroupsCreate

Create a group

### Example Usage

```typescript
import { Tacs } from "tacs";

(async() => {
  const sdk = new Tacs({
    bearerAuth: "",
  });

  const res = await sdk.groups.postGroupsCreate({
    groupName: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [shared.CreateGroupRequest](../../models/shared/creategrouprequest.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.PostGroupsCreateResponse](../../models/operations/postgroupscreateresponse.md)>**


## postGroupsGroupIdDelete

Delete a group

### Example Usage

```typescript
import { Tacs } from "tacs";

(async() => {
  const sdk = new Tacs({
    bearerAuth: "",
  });

  const res = await sdk.groups.postGroupsGroupIdDelete({
    groupId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.PostGroupsGroupIdDeleteRequest](../../models/operations/postgroupsgroupiddeleterequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.PostGroupsGroupIdDeleteResponse](../../models/operations/postgroupsgroupiddeleteresponse.md)>**


## postGroupsGroupIdUpdate

Change Group Name

### Example Usage

```typescript
import { Tacs } from "tacs";

(async() => {
  const sdk = new Tacs({
    bearerAuth: "",
  });

  const res = await sdk.groups.postGroupsGroupIdUpdate({
    updateGroupRequest: {
      groupName: "string",
    },
    groupId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.PostGroupsGroupIdUpdateRequest](../../models/operations/postgroupsgroupidupdaterequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.PostGroupsGroupIdUpdateResponse](../../models/operations/postgroupsgroupidupdateresponse.md)>**

