/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class AddContactTagsRequest extends SpeakeasyBase {
    /**
     * ID of your tag.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tag_id" })
    tagId: string;
}