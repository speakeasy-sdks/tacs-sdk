<!-- Start SDK Example Usage [usage] -->
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
<!-- End SDK Example Usage [usage] -->