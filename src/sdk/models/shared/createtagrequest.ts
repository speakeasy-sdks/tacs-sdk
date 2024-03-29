/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class CreateTagRequest extends SpeakeasyBase {
    /**
     * Create a tag for your contact.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tag_name" })
    tagName: string;
}
