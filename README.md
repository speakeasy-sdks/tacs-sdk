# tacs

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/speakeasy-sdks/tacs-sdk.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/tacs-sdk/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>


## 🏗 **Welcome to your new SDK!** 🏗

It has been generated successfully based on your OpenAPI spec. However, it is not yet ready for production use. Here are some next steps:
- [ ] 🛠 Make your SDK feel handcrafted by [customizing it](https://www.speakeasyapi.dev/docs/customize-sdks)
- [ ] ♻️ Refine your SDK quickly by iterating locally with the [Speakeasy CLI](https://github.com/speakeasy-api/speakeasy)
- [ ] 🎁 Publish your SDK to package managers by [configuring automatic publishing](https://www.speakeasyapi.dev/docs/productionize-sdks/publish-sdks)
- [ ] ✨ When ready to productionize, delete this section from the README
<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/tacs-sdk
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/tacs-sdk
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [contacts](docs/sdks/contacts/README.md)

* [postContactsTagsContactIdAdd](docs/sdks/contacts/README.md#postcontactstagscontactidadd) - Add the contact tags
* [postContactsTagsContactIdRemove](docs/sdks/contacts/README.md#postcontactstagscontactidremove) - Remove the contact tags
* [postContactsGroupIdCreate](docs/sdks/contacts/README.md#postcontactsgroupidcreate) - Create a contact
* [postContactsGroupIdStatusContactId](docs/sdks/contacts/README.md#postcontactsgroupidstatuscontactid) - Update the contact

### [groups](docs/sdks/groups/README.md)

* [getGroupsList](docs/sdks/groups/README.md#getgroupslist) - List All Groups
* [getGroupsGroupId](docs/sdks/groups/README.md#getgroupsgroupid) - Retrieve Group Using Group ID
* [postGroupsCreate](docs/sdks/groups/README.md#postgroupscreate) - Create a group
* [postGroupsGroupIdDelete](docs/sdks/groups/README.md#postgroupsgroupiddelete) - Delete a group
* [postGroupsGroupIdUpdate](docs/sdks/groups/README.md#postgroupsgroupidupdate) - Change Group Name

### [tags](docs/sdks/tags/README.md)

* [getTagsList](docs/sdks/tags/README.md#gettagslist) - List your Tag
* [getTagsTagId](docs/sdks/tags/README.md#gettagstagid) - Retrieve your Tag
* [postTagsCreate](docs/sdks/tags/README.md#posttagscreate) - Create your Tag
* [postTagsTagIdUpdate](docs/sdks/tags/README.md#posttagstagidupdate) - Update your Tag
<!-- End SDK Available Operations -->

<!-- Start Dev Containers -->

<!-- End Dev Containers -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
