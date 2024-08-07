// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as WebhooksAPI from './webhooks';
import * as EventsAPI from './events';

export class Webhooks extends APIResource {
  events: EventsAPI.Events = new EventsAPI.Events(this._client);

  /**
   * Creates a webhook.
   */
  create(body: WebhookCreateParams, options?: Core.RequestOptions): Core.APIPromise<Webhook> {
    return this._client.post('/webhooks', { body, ...options });
  }

  /**
   * Returns a webhook.
   */
  retrieve(webhookId: string, options?: Core.RequestOptions): Core.APIPromise<Webhook> {
    return this._client.get(`/webhooks/${webhookId}`, options);
  }

  /**
   * Updates a webhook.
   */
  update(
    webhookId: string,
    body: WebhookUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Webhook> {
    return this._client.put(`/webhooks/${webhookId}`, { body, ...options });
  }

  /**
   * Returns a list of webhooks.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<WebhookListResponse> {
    return this._client.get('/webhooks', options);
  }

  /**
   * Deletes a webhook.
   */
  delete(webhookId: string, options?: Core.RequestOptions): Core.APIPromise<WebhookDeleteResponse> {
    return this._client.delete(`/webhooks/${webhookId}`, options);
  }
}

/**
 * Represents a webhook that can be used to receive events from Embed.
 */
export interface Webhook {
  /**
   * The unique identifier for the webhook.
   */
  id: string;

  /**
   * The Unix timestamp (in seconds) for when the webhook was created.
   */
  created_at: number;

  /**
   * Whether the webhook is enabled.
   */
  is_enabled: boolean;

  /**
   * The object type, which is always `webhook`.
   */
  object: 'webhook';

  /**
   * The secret used to sign the webhook payload.
   */
  signing_secret: string;

  /**
   * The Unix timestamp (in seconds) for when the webhook was updated.
   */
  updated_at: number;

  /**
   * The URL to send events to.
   */
  url: string;

  /**
   * The events to send to the webhook.
   */
  events?: Array<string>;
}

export interface WebhookListResponse {
  data: Array<Webhook>;

  object: 'list';
}

export interface WebhookDeleteResponse {
  id: string;

  deleted: boolean;

  object: 'webhook';
}

export interface WebhookCreateParams {
  /**
   * The events to send to the webhook.
   */
  events: Array<string>;

  /**
   * The URL to send events to.
   */
  url: string;
}

export interface WebhookUpdateParams {
  /**
   * The events to send to the webhook.
   */
  events?: Array<string>;

  /**
   * Whether the webhook is enabled.
   */
  is_enabled?: boolean;

  /**
   * The URL to send events to.
   */
  url?: string;
}

export namespace Webhooks {
  export import Webhook = WebhooksAPI.Webhook;
  export import WebhookListResponse = WebhooksAPI.WebhookListResponse;
  export import WebhookDeleteResponse = WebhooksAPI.WebhookDeleteResponse;
  export import WebhookCreateParams = WebhooksAPI.WebhookCreateParams;
  export import WebhookUpdateParams = WebhooksAPI.WebhookUpdateParams;
  export import Events = EventsAPI.Events;
  export import WebhookEventObject = EventsAPI.WebhookEventObject;
  export import EventListResponse = EventsAPI.EventListResponse;
}
