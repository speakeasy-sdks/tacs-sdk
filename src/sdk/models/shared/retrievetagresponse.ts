/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class RetrieveTagResponseData extends SpeakeasyBase {
    /**
     * Retrieved tag ID.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tag_id" })
    tagId?: string;

    /**
     * Retrieved tag name.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tag_name" })
    tagName?: string;
}

export class RetrieveTagResponse extends SpeakeasyBase {
    /**
     * Status code of the request.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "code" })
    code?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => RetrieveTagResponseData)
    data?: RetrieveTagResponseData;

    /**
     * Response
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: string;
}