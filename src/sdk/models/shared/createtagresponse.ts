/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class CreateTagResponseData extends SpeakeasyBase {
    /**
     * Created tag ID.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tag_id" })
    tagId?: string;

    /**
     * Created tag name.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tag_name" })
    tagName?: string;
}

export class CreateTagResponse extends SpeakeasyBase {
    /**
     * Status code of the request.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "code" })
    code?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "data" })
    @Type(() => CreateTagResponseData)
    data?: CreateTagResponseData;

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
