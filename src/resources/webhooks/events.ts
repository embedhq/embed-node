// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@embedhq/node/resource';
import * as Core from '@embedhq/node/core';
import * as EventsAPI from '@embedhq/node/resources/webhooks/events';

export class Events extends APIResource {
  /**
   * Returns a webhook event.
   */
  retrieve(
    webhookId: string,
    eventId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebhookEventObject> {
    return this._client.get(`/webhooks/${webhookId}/events/${eventId}`, options);
  }

  /**
   * Returns a list of recent events for a webhook.
   */
  list(webhookId: string, options?: Core.RequestOptions): Core.APIPromise<EventListResponse> {
    return this._client.get(`/webhooks/${webhookId}/events`, options);
  }
}

/**
 * Represents an event sent to a webhook.
 */
export interface WebhookEventObject {
  /**
   * The unique identifier for the webhook event.
   */
  id: string;

  /**
   * Whether the event was successfully delivered.
   */
  delivered: boolean;

  /**
   * The event that occurred.
   */
  event: string;

  /**
   * The object type, which is always `webhook_event`.
   */
  object: 'webhook_event';

  /**
   * The payload of the event.
   */
  payload: Record<string, unknown>;

  /**
   * The Unix timestamp (in seconds) for when the webhook event was created.
   */
  timestamp: number;

  /**
   * The unique identifier of the webhook that received the event.
   */
  webhook_id: string;
}

export interface EventListResponse {
  data: Array<WebhookEventObject>;

  object: 'list';
}

export namespace Events {
  export import WebhookEventObject = EventsAPI.WebhookEventObject;
  export import EventListResponse = EventsAPI.EventListResponse;
}
