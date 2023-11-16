/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class PostContactsTagsContactIdAddRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    addContactTagsRequest?: shared.AddContactTagsRequest;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contact_id" })
    contactId: string;
}

export class PostContactsTagsContactIdAddResponse extends SpeakeasyBase {
    /**
     * OK
     */
    @SpeakeasyMetadata()
    addContactTagseResponse?: shared.AddContactTagseResponse;

    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;
}
