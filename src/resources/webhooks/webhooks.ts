// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@embedhq/node/core';
import { APIResource } from '@embedhq/node/resource';
import * as WebhooksAPI from '@embedhq/node/resources/webhooks/webhooks';
import * as EventsAPI from '@embedhq/node/resources/webhooks/events';

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

  /**
   * Disables a webhook.
   */
  disable(webhookId: string, options?: Core.RequestOptions): Core.APIPromise<WebhookDisableResponse> {
    return this._client.post(`/webhooks/${webhookId}/disable`, options);
  }

  /**
   * Enables a webhook.
   */
  enable(webhookId: string, options?: Core.RequestOptions): Core.APIPromise<Webhook> {
    return this._client.post(`/webhooks/${webhookId}/enable`, options);
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

  /**
   * The secret used to sign the webhook payload.
   */
  signing_secret?: string;
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

/**
 * Represents a webhook that can be used to receive events from Embed.
 */
export interface WebhookDisableResponse extends Webhook {
  is_enabled?: boolean;
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
   * The URL to send events to.
   */
  url?: string;
}

export namespace Webhooks {
  export import Webhook = WebhooksAPI.Webhook;
  export import WebhookListResponse = WebhooksAPI.WebhookListResponse;
  export import WebhookDeleteResponse = WebhooksAPI.WebhookDeleteResponse;
  export import WebhookDisableResponse = WebhooksAPI.WebhookDisableResponse;
  export import WebhookCreateParams = WebhooksAPI.WebhookCreateParams;
  export import WebhookUpdateParams = WebhooksAPI.WebhookUpdateParams;
  export import Events = EventsAPI.Events;
  export import WebhookEventObject = EventsAPI.WebhookEventObject;
  export import EventListResponse = EventsAPI.EventListResponse;
}
