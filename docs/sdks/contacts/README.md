# Contacts
(*contacts*)

### Available Operations

* [postContactsTagsContactIdAdd](#postcontactstagscontactidadd) - Add the contact tags
* [postContactsTagsContactIdRemove](#postcontactstagscontactidremove) - Remove the contact tags
* [postContactsGroupIdCreate](#postcontactsgroupidcreate) - Create a contact
* [postContactsGroupIdStatusContactId](#postcontactsgroupidstatuscontactid) - Update the contact

## postContactsTagsContactIdAdd

Add the contact tags

### Example Usage

```typescript
import { Tacs } from "tacs";

async function run() {
  const sdk = new Tacs({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.contacts.postContactsTagsContactIdAdd({
    addContactTagsRequest: {
      tagId: "<value>",
    },
    contactId: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.PostContactsTagsContactIdAddRequest](../../sdk/models/operations/postcontactstagscontactidaddrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.PostContactsTagsContactIdAddResponse](../../sdk/models/operations/postcontactstagscontactidaddresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## postContactsTagsContactIdRemove

Remove the contact tags

### Example Usage

```typescript
import { Tacs } from "tacs";

async function run() {
  const sdk = new Tacs({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.contacts.postContactsTagsContactIdRemove({
    removeContactTagsRequest: {
      tagId: "<value>",
    },
    contactId: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.PostContactsTagsContactIdRemoveRequest](../../sdk/models/operations/postcontactstagscontactidremoverequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.PostContactsTagsContactIdRemoveResponse](../../sdk/models/operations/postcontactstagscontactidremoveresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## postContactsGroupIdCreate

Create a contact

### Example Usage

```typescript
import { Tacs } from "tacs";

async function run() {
  const sdk = new Tacs({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.contacts.postContactsGroupIdCreate({
    createContactRequest: {
      data: {},
      email: "Bianka2@yahoo.com",
      status: "<value>",
    },
    groupId: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.PostContactsGroupIdCreateRequest](../../sdk/models/operations/postcontactsgroupidcreaterequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.PostContactsGroupIdCreateResponse](../../sdk/models/operations/postcontactsgroupidcreateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## postContactsGroupIdStatusContactId

Update the contact

### Example Usage

```typescript
import { Tacs } from "tacs";

async function run() {
  const sdk = new Tacs({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.contacts.postContactsGroupIdStatusContactId({
    updateContactRequest: {
      status: "<value>",
    },
    contactId: "<value>",
    groupId: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.PostContactsGroupIdStatusContactIdRequest](../../sdk/models/operations/postcontactsgroupidstatuscontactidrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.PostContactsGroupIdStatusContactIdResponse](../../sdk/models/operations/postcontactsgroupidstatuscontactidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
