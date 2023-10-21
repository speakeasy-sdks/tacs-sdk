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

(async() => {
  const sdk = new Tacs({
    bearerAuth: "",
  });

  const res = await sdk.contacts.postContactsTagsContactIdAdd({
    addContactTagsRequest: {
      tagId: "string",
    },
    contactId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.PostContactsTagsContactIdAddRequest](../../models/operations/postcontactstagscontactidaddrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.PostContactsTagsContactIdAddResponse](../../models/operations/postcontactstagscontactidaddresponse.md)>**


## postContactsTagsContactIdRemove

Remove the contact tags

### Example Usage

```typescript
import { Tacs } from "tacs";

(async() => {
  const sdk = new Tacs({
    bearerAuth: "",
  });

  const res = await sdk.contacts.postContactsTagsContactIdRemove({
    removeContactTagsRequest: {
      tagId: "string",
    },
    contactId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.PostContactsTagsContactIdRemoveRequest](../../models/operations/postcontactstagscontactidremoverequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.PostContactsTagsContactIdRemoveResponse](../../models/operations/postcontactstagscontactidremoveresponse.md)>**


## postContactsGroupIdCreate

Create a contact

### Example Usage

```typescript
import { Tacs } from "tacs";

(async() => {
  const sdk = new Tacs({
    bearerAuth: "",
  });

  const res = await sdk.contacts.postContactsGroupIdCreate({
    createContactRequest: {
      data: {},
      email: "Bianka2@yahoo.com",
      status: "string",
    },
    groupId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.PostContactsGroupIdCreateRequest](../../models/operations/postcontactsgroupidcreaterequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.PostContactsGroupIdCreateResponse](../../models/operations/postcontactsgroupidcreateresponse.md)>**


## postContactsGroupIdStatusContactId

Update the contact

### Example Usage

```typescript
import { Tacs } from "tacs";

(async() => {
  const sdk = new Tacs({
    bearerAuth: "",
  });

  const res = await sdk.contacts.postContactsGroupIdStatusContactId({
    updateContactRequest: {
      status: "string",
    },
    contactId: "string",
    groupId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.PostContactsGroupIdStatusContactIdRequest](../../models/operations/postcontactsgroupidstatuscontactidrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.PostContactsGroupIdStatusContactIdResponse](../../models/operations/postcontactsgroupidstatuscontactidresponse.md)>**

