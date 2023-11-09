# Tags
(*tags*)

### Available Operations

* [getTagsList](#gettagslist) - List your Tag
* [getTagsTagId](#gettagstagid) - Retrieve your Tag
* [postTagsCreate](#posttagscreate) - Create your Tag
* [postTagsTagIdUpdate](#posttagstagidupdate) - Update your Tag

## getTagsList

List your Tag

### Example Usage

```typescript
import { Tacs } from "tacs";

(async() => {
  const sdk = new Tacs({
    bearerAuth: "",
  });

  const res = await sdk.tags.getTagsList();

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

**Promise<[operations.GetTagsListResponse](../../sdk/models/operations/gettagslistresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getTagsTagId

Retrieve your Tag

### Example Usage

```typescript
import { Tacs } from "tacs";

(async() => {
  const sdk = new Tacs({
    bearerAuth: "",
  });

  const res = await sdk.tags.getTagsTagId({
    tagId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetTagsTagIdRequest](../../sdk/models/operations/gettagstagidrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetTagsTagIdResponse](../../sdk/models/operations/gettagstagidresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postTagsCreate

Create your Tag

### Example Usage

```typescript
import { Tacs } from "tacs";

(async() => {
  const sdk = new Tacs({
    bearerAuth: "",
  });

  const res = await sdk.tags.postTagsCreate({
    tagName: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [shared.CreateTagRequest](../../sdk/models/shared/createtagrequest.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.PostTagsCreateResponse](../../sdk/models/operations/posttagscreateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## postTagsTagIdUpdate

Update your Tag

### Example Usage

```typescript
import { Tacs } from "tacs";

(async() => {
  const sdk = new Tacs({
    bearerAuth: "",
  });

  const res = await sdk.tags.postTagsTagIdUpdate({
    updateTagRequest: {
      tagName: "string",
    },
    tagId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.PostTagsTagIdUpdateRequest](../../sdk/models/operations/posttagstagidupdaterequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.PostTagsTagIdUpdateResponse](../../sdk/models/operations/posttagstagidupdateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
