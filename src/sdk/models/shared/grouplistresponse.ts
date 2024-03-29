/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class GroupListResponseData extends SpeakeasyBase {
    /**
     * Created group ID.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "group_id" })
    groupId?: string;

    /**
     * Created group name.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "group_name" })
    groupName?: string;
}

export class GroupListResponse extends SpeakeasyBase {
    /**
     * Status code of the request.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "code" })
    code?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => GroupListResponseData)
    data?: GroupListResponseData;

    /**
     * Response.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: string;
}
