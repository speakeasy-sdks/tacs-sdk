# Groups
(*groups*)

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

async function run() {
  const sdk = new Tacs({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.groups.getGroupsList();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetGroupsListResponse](../../sdk/models/operations/getgroupslistresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getGroupsGroupId

Retrieve Group Using Group ID

### Example Usage

```typescript
import { Tacs } from "tacs";

async function run() {
  const sdk = new Tacs({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.groups.getGroupsGroupId({
    groupId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetGroupsGroupIdRequest](../../sdk/models/operations/getgroupsgroupidrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetGroupsGroupIdResponse](../../sdk/models/operations/getgroupsgroupidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postGroupsCreate

Create a group

### Example Usage

```typescript
import { Tacs } from "tacs";

async function run() {
  const sdk = new Tacs({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.groups.postGroupsCreate({
    groupName: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [shared.CreateGroupRequest](../../sdk/models/shared/creategrouprequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.PostGroupsCreateResponse](../../sdk/models/operations/postgroupscreateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postGroupsGroupIdDelete

Delete a group

### Example Usage

```typescript
import { Tacs } from "tacs";

async function run() {
  const sdk = new Tacs({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.groups.postGroupsGroupIdDelete({
    groupId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.PostGroupsGroupIdDeleteRequest](../../sdk/models/operations/postgroupsgroupiddeleterequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.PostGroupsGroupIdDeleteResponse](../../sdk/models/operations/postgroupsgroupiddeleteresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postGroupsGroupIdUpdate

Change Group Name

### Example Usage

```typescript
import { Tacs } from "tacs";

async function run() {
  const sdk = new Tacs({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
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
}

run();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.PostGroupsGroupIdUpdateRequest](../../sdk/models/operations/postgroupsgroupidupdaterequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.PostGroupsGroupIdUpdateResponse](../../sdk/models/operations/postgroupsgroupidupdateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
