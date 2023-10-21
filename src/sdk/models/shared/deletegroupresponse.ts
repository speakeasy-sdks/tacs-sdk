/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class DeleteGroupResponseData extends SpeakeasyBase {
    /**
     * Deleted group ID.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "group_id" })
    groupId?: string;
}

export class DeleteGroupResponse extends SpeakeasyBase {
    /**
     * Status code of the request.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "code" })
    code?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => DeleteGroupResponseData)
    data?: DeleteGroupResponseData;

    /**
     * Response description.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;

    /**
     * Response
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: string;
}
