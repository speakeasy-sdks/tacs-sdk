/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class UpdateGroupRequest extends SpeakeasyBase {
    /**
     * Update a group name.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "group_name" })
    groupName: string;
}