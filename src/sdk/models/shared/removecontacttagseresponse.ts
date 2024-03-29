/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class RemoveContactTagseResponseData extends SpeakeasyBase {
    /**
     * Removed contact ID.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tag_id" })
    tagId?: number;
}

export class RemoveContactTagseResponse extends SpeakeasyBase {
    /**
     * Status code of the request.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "code" })
    code?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => RemoveContactTagseResponseData)
    data?: RemoveContactTagseResponseData;

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
