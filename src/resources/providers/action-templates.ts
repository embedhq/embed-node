// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ActionTemplatesAPI from './action-templates';

export class ActionTemplates extends APIResource {
  /**
   * Returns an action template for a provider.
   */
  retrieve(
    provider: string,
    action: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ActionTemplateRetrieveResponse> {
    return this._client.get(`/providers/${provider}/action-templates/${action}`, options);
  }

  /**
   * Returns a list of action templates for a provider.
   */
  list(provider: string, options?: Core.RequestOptions): Core.APIPromise<ActionTemplateListResponse> {
    return this._client.get(`/providers/${provider}/action-templates`, options);
  }
}

export interface ActionTemplateRetrieveResponse {
  /**
   * Configuration options for the action template.
   */
  configuration: Record<string, unknown> | null;

  /**
   * The display name of the action template.
   */
  name: string;

  /**
   * The object type, which is always `action_template`.
   */
  object: 'action_template';

  /**
   * The unique slug of the provider.
   */
  provider: string;

  /**
   * The OAuth scopes required for the action template.
   */
  required_scopes: Array<string>;

  /**
   * The schema of the action template.
   */
  schema: Record<string, unknown>;

  /**
   * The unique slug of the action template.
   */
  slug: string;
}

export interface ActionTemplateListResponse {
  data: Array<ActionTemplateListResponse.Data>;

  object: 'list';
}

export namespace ActionTemplateListResponse {
  export interface Data {
    /**
     * Configuration options for the action template.
     */
    configuration: Record<string, unknown> | null;

    /**
     * The display name of the action template.
     */
    name: string;

    /**
     * The object type, which is always `action_template`.
     */
    object: 'action_template';

    /**
     * The unique slug of the provider.
     */
    provider: string;

    /**
     * The OAuth scopes required for the action template.
     */
    required_scopes: Array<string>;

    /**
     * The schema of the action template.
     */
    schema: Record<string, unknown>;

    /**
     * The unique slug of the action template.
     */
    slug: string;
  }
}

export namespace ActionTemplates {
  export import ActionTemplateRetrieveResponse = ActionTemplatesAPI.ActionTemplateRetrieveResponse;
  export import ActionTemplateListResponse = ActionTemplatesAPI.ActionTemplateListResponse;
}
