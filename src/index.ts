// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from './core';
import * as Errors from './error';
import { type Agent } from './_shims/index';
import * as Uploads from './uploads';
import * as API from './resources/index';

export interface ClientOptions {
  /**
   * Defaults to process.env['EMBED_BEARER_TOKEN'].
   */
  bearerToken?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['EMBED_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/** API Client for interfacing with the Embed API. */
export class Embed extends Core.APIClient {
  bearerToken: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Embed API.
   *
   * @param {string | undefined} [opts.bearerToken=process.env['EMBED_BEARER_TOKEN'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['EMBED_BASE_URL'] ?? https://api.useembed.com/v1] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('EMBED_BASE_URL'),
    bearerToken = Core.readEnv('EMBED_BEARER_TOKEN'),
    ...opts
  }: ClientOptions = {}) {
    if (bearerToken === undefined) {
      throw new Errors.EmbedError(
        "The EMBED_BEARER_TOKEN environment variable is missing or empty; either provide it, or instantiate the Embed client with an bearerToken option, like new Embed({ bearerToken: 'My Bearer Token' }).",
      );
    }

    const options: ClientOptions = {
      bearerToken,
      ...opts,
      baseURL: baseURL || `https://api.useembed.com/v1`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });
    this._options = options;

    this.bearerToken = bearerToken;
  }

  integrations: API.Integrations = new API.Integrations(this);
  connections: API.Connections = new API.Connections(this);
  sessionTokens: API.SessionTokens = new API.SessionTokens(this);
  providers: API.Providers = new API.Providers(this);
  collections: API.Collections = new API.Collections(this);
  syncs: API.Syncs = new API.Syncs(this);
  actions: API.Actions = new API.Actions(this);
  proxy: API.Proxy = new API.Proxy(this);
  webhooks: API.Webhooks = new API.Webhooks(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: `Bearer ${this.bearerToken}` };
  }

  static Embed = this;

  static EmbedError = Errors.EmbedError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

export const {
  EmbedError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace Embed {
  export import RequestOptions = Core.RequestOptions;

  export import Integrations = API.Integrations;
  export import Integration = API.Integration;
  export import IntegrationListResponse = API.IntegrationListResponse;
  export import IntegrationDeleteResponse = API.IntegrationDeleteResponse;
  export import IntegrationDisableResponse = API.IntegrationDisableResponse;
  export import IntegrationCreateParams = API.IntegrationCreateParams;
  export import IntegrationUpdateParams = API.IntegrationUpdateParams;
  export import IntegrationListParams = API.IntegrationListParams;

  export import Connections = API.Connections;
  export import Connection = API.Connection;
  export import ConnectionUpdateResponse = API.ConnectionUpdateResponse;
  export import ConnectionListResponse = API.ConnectionListResponse;
  export import ConnectionDeleteResponse = API.ConnectionDeleteResponse;
  export import ConnectionRetrieveParams = API.ConnectionRetrieveParams;
  export import ConnectionUpdateParams = API.ConnectionUpdateParams;
  export import ConnectionListParams = API.ConnectionListParams;
  export import ConnectionDeleteParams = API.ConnectionDeleteParams;
  export import ConnectionUpsertParams = API.ConnectionUpsertParams;

  export import SessionTokens = API.SessionTokens;
  export import SessionToken = API.SessionToken;
  export import SessionTokenListResponse = API.SessionTokenListResponse;
  export import SessionTokenDeleteResponse = API.SessionTokenDeleteResponse;
  export import SessionTokenCreateParams = API.SessionTokenCreateParams;

  export import Providers = API.Providers;
  export import Provider = API.Provider;
  export import ProviderListResponse = API.ProviderListResponse;

  export import Collections = API.Collections;
  export import Collection = API.Collection;
  export import CollectionListResponse = API.CollectionListResponse;
  export import CollectionDisableResponse = API.CollectionDisableResponse;
  export import CollectionQueryResponse = API.CollectionQueryResponse;
  export import CollectionRetrieveParams = API.CollectionRetrieveParams;
  export import CollectionUpdateParams = API.CollectionUpdateParams;
  export import CollectionListParams = API.CollectionListParams;
  export import CollectionDisableParams = API.CollectionDisableParams;
  export import CollectionEnableParams = API.CollectionEnableParams;
  export import CollectionQueryParams = API.CollectionQueryParams;

  export import Syncs = API.Syncs;
  export import Sync = API.Sync;
  export import SyncListResponse = API.SyncListResponse;
  export import SyncRetrieveParams = API.SyncRetrieveParams;
  export import SyncUpdateParams = API.SyncUpdateParams;
  export import SyncListParams = API.SyncListParams;
  export import SyncStartParams = API.SyncStartParams;
  export import SyncStopParams = API.SyncStopParams;
  export import SyncTriggerParams = API.SyncTriggerParams;

  export import Actions = API.Actions;
  export import Action = API.Action;
  export import ActionListResponse = API.ActionListResponse;
  export import ActionDisableResponse = API.ActionDisableResponse;
  export import ActionTriggerResponse = API.ActionTriggerResponse;
  export import ActionRetrieveParams = API.ActionRetrieveParams;
  export import ActionListParams = API.ActionListParams;
  export import ActionDisableParams = API.ActionDisableParams;
  export import ActionEnableParams = API.ActionEnableParams;
  export import ActionSchemaParams = API.ActionSchemaParams;
  export import ActionTriggerParams = API.ActionTriggerParams;

  export import Proxy = API.Proxy;
  export import ProxyDeleteResponse = API.ProxyDeleteResponse;
  export import ProxyGetResponse = API.ProxyGetResponse;
  export import ProxyPostResponse = API.ProxyPostResponse;
  export import ProxyPutResponse = API.ProxyPutResponse;
  export import ProxyDeleteParams = API.ProxyDeleteParams;
  export import ProxyGetParams = API.ProxyGetParams;
  export import ProxyPostParams = API.ProxyPostParams;
  export import ProxyPutParams = API.ProxyPutParams;

  export import Webhooks = API.Webhooks;
  export import Webhook = API.Webhook;
  export import WebhookListResponse = API.WebhookListResponse;
  export import WebhookDeleteResponse = API.WebhookDeleteResponse;
  export import WebhookDisableResponse = API.WebhookDisableResponse;
  export import WebhookCreateParams = API.WebhookCreateParams;
  export import WebhookUpdateParams = API.WebhookUpdateParams;
}

export default Embed;
