<!-- Start SDK Example Usage -->


```typescript
import { Tacs } from "tacs";

(async () => {
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
<!-- End SDK Example Usage -->