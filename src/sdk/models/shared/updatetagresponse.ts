/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class UpdateTagResponseData extends SpeakeasyBase {
    /**
     * Updated tag ID.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tag_id" })
    tagId?: string;

    /**
     * Updated tag name.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tag_name" })
    tagName?: string;
}

export class UpdateTagResponse extends SpeakeasyBase {
    /**
     * Status code of the request.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "code" })
    code?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => UpdateTagResponseData)
    data?: UpdateTagResponseData;

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
