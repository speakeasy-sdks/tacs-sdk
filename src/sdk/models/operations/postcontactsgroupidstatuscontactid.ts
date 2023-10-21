/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class PostContactsGroupIdStatusContactIdRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    updateContactRequest?: shared.UpdateContactRequest;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contact_id" })
    contactId: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group_id" })
    groupId: string;
}

export class PostContactsGroupIdStatusContactIdResponse extends SpeakeasyBase {
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
    rawResponse?: AxiosResponse;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    updateContactResponse?: shared.UpdateContactResponse;
}