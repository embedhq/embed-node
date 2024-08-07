# Integrations

Types:

- <code><a href="./src/resources/integrations.ts">Integration</a></code>
- <code><a href="./src/resources/integrations.ts">IntegrationListResponse</a></code>
- <code><a href="./src/resources/integrations.ts">IntegrationDeleteResponse</a></code>

Methods:

- <code title="post /integrations">client.integrations.<a href="./src/resources/integrations.ts">create</a>({ ...params }) -> Integration</code>
- <code title="get /integrations/{integration}">client.integrations.<a href="./src/resources/integrations.ts">retrieve</a>(integration) -> Integration</code>
- <code title="put /integrations/{integration}">client.integrations.<a href="./src/resources/integrations.ts">update</a>(integration, { ...params }) -> Integration</code>
- <code title="get /integrations">client.integrations.<a href="./src/resources/integrations.ts">list</a>({ ...params }) -> IntegrationListResponse</code>
- <code title="delete /integrations/{integration}">client.integrations.<a href="./src/resources/integrations.ts">delete</a>(integration) -> IntegrationDeleteResponse</code>

# ConnectedAccounts

Types:

- <code><a href="./src/resources/connected-accounts.ts">ConnectedAccount</a></code>
- <code><a href="./src/resources/connected-accounts.ts">ConnectedAccountListResponse</a></code>
- <code><a href="./src/resources/connected-accounts.ts">ConnectedAccountDeleteResponse</a></code>

Methods:

- <code title="get /connected-accounts/{connected_account_id}">client.connectedAccounts.<a href="./src/resources/connected-accounts.ts">retrieve</a>({ ...params }) -> ConnectedAccount</code>
- <code title="put /connected-accounts/{connected_account_id}">client.connectedAccounts.<a href="./src/resources/connected-accounts.ts">update</a>({ ...params }) -> ConnectedAccount</code>
- <code title="get /connected-accounts">client.connectedAccounts.<a href="./src/resources/connected-accounts.ts">list</a>({ ...params }) -> ConnectedAccountListResponse</code>
- <code title="delete /connected-accounts/{connected_account_id}">client.connectedAccounts.<a href="./src/resources/connected-accounts.ts">delete</a>({ ...params }) -> ConnectedAccountDeleteResponse</code>
- <code title="post /connected-accounts">client.connectedAccounts.<a href="./src/resources/connected-accounts.ts">upsert</a>({ ...params }) -> ConnectedAccount</code>

# SessionTokens

Types:

- <code><a href="./src/resources/session-tokens.ts">SessionToken</a></code>
- <code><a href="./src/resources/session-tokens.ts">SessionTokenListResponse</a></code>
- <code><a href="./src/resources/session-tokens.ts">SessionTokenDeleteResponse</a></code>

Methods:

- <code title="post /session-tokens">client.sessionTokens.<a href="./src/resources/session-tokens.ts">create</a>({ ...params }) -> SessionToken</code>
- <code title="get /session-tokens/{token}">client.sessionTokens.<a href="./src/resources/session-tokens.ts">retrieve</a>(token) -> SessionToken</code>
- <code title="get /session-tokens">client.sessionTokens.<a href="./src/resources/session-tokens.ts">list</a>({ ...params }) -> SessionTokenListResponse</code>
- <code title="delete /session-tokens/{token}">client.sessionTokens.<a href="./src/resources/session-tokens.ts">delete</a>(token) -> SessionTokenDeleteResponse</code>

# Providers

Types:

- <code><a href="./src/resources/providers/providers.ts">Provider</a></code>
- <code><a href="./src/resources/providers/providers.ts">ProviderListResponse</a></code>

Methods:

- <code title="get /providers/{provider}">client.providers.<a href="./src/resources/providers/providers.ts">retrieve</a>(provider, { ...params }) -> Provider</code>
- <code title="get /providers">client.providers.<a href="./src/resources/providers/providers.ts">list</a>({ ...params }) -> ProviderListResponse</code>

## CollectionTemplates

Types:

- <code><a href="./src/resources/providers/collection-templates.ts">CollectionTemplateRetrieveResponse</a></code>
- <code><a href="./src/resources/providers/collection-templates.ts">CollectionTemplateListResponse</a></code>

Methods:

- <code title="get /providers/{provider}/collection-templates/{collection}">client.providers.collectionTemplates.<a href="./src/resources/providers/collection-templates.ts">retrieve</a>(provider, collection) -> CollectionTemplateRetrieveResponse</code>
- <code title="get /providers/{provider}/collection-templates">client.providers.collectionTemplates.<a href="./src/resources/providers/collection-templates.ts">list</a>(provider) -> CollectionTemplateListResponse</code>

## ActionTemplates

Types:

- <code><a href="./src/resources/providers/action-templates.ts">ActionTemplateRetrieveResponse</a></code>
- <code><a href="./src/resources/providers/action-templates.ts">ActionTemplateListResponse</a></code>

Methods:

- <code title="get /providers/{provider}/action-templates/{action}">client.providers.actionTemplates.<a href="./src/resources/providers/action-templates.ts">retrieve</a>(provider, action) -> ActionTemplateRetrieveResponse</code>
- <code title="get /providers/{provider}/action-templates">client.providers.actionTemplates.<a href="./src/resources/providers/action-templates.ts">list</a>(provider) -> ActionTemplateListResponse</code>

# Collections

Types:

- <code><a href="./src/resources/collections.ts">Collection</a></code>
- <code><a href="./src/resources/collections.ts">CollectionListResponse</a></code>
- <code><a href="./src/resources/collections.ts">CollectionDeleteResponse</a></code>

Methods:

- <code title="post /collections">client.collections.<a href="./src/resources/collections.ts">create</a>({ ...params }) -> Collection</code>
- <code title="get /collections/{collection}">client.collections.<a href="./src/resources/collections.ts">retrieve</a>({ ...params }) -> Collection</code>
- <code title="put /collections/{collection}">client.collections.<a href="./src/resources/collections.ts">update</a>({ ...params }) -> Collection</code>
- <code title="get /collections">client.collections.<a href="./src/resources/collections.ts">list</a>({ ...params }) -> CollectionListResponse</code>
- <code title="delete /collections/{collection}">client.collections.<a href="./src/resources/collections.ts">delete</a>({ ...params }) -> CollectionDeleteResponse</code>

# Syncs

Types:

- <code><a href="./src/resources/syncs/syncs.ts">Sync</a></code>
- <code><a href="./src/resources/syncs/syncs.ts">SyncListResponse</a></code>
- <code><a href="./src/resources/syncs/syncs.ts">SyncDeleteResponse</a></code>

Methods:

- <code title="post /syncs">client.syncs.<a href="./src/resources/syncs/syncs.ts">create</a>({ ...params }) -> Sync</code>
- <code title="get /syncs/{collection}">client.syncs.<a href="./src/resources/syncs/syncs.ts">retrieve</a>({ ...params }) -> Sync</code>
- <code title="put /syncs/{collection}">client.syncs.<a href="./src/resources/syncs/syncs.ts">update</a>({ ...params }) -> Sync</code>
- <code title="get /syncs">client.syncs.<a href="./src/resources/syncs/syncs.ts">list</a>({ ...params }) -> SyncListResponse</code>
- <code title="delete /syncs/{collection}">client.syncs.<a href="./src/resources/syncs/syncs.ts">delete</a>({ ...params }) -> SyncDeleteResponse</code>
- <code title="post /syncs/{collection}/start">client.syncs.<a href="./src/resources/syncs/syncs.ts">start</a>({ ...params }) -> Sync</code>
- <code title="post /syncs/{collection}/stop">client.syncs.<a href="./src/resources/syncs/syncs.ts">stop</a>({ ...params }) -> Sync</code>
- <code title="post /syncs/{collection}/trigger">client.syncs.<a href="./src/resources/syncs/syncs.ts">trigger</a>({ ...params }) -> Sync</code>

## Runs

Types:

- <code><a href="./src/resources/syncs/runs.ts">SyncRun</a></code>
- <code><a href="./src/resources/syncs/runs.ts">RunListResponse</a></code>

Methods:

- <code title="get /syncs/{collection}/runs/{sync_run_id}">client.syncs.runs.<a href="./src/resources/syncs/runs.ts">retrieve</a>({ ...params }) -> SyncRun</code>
- <code title="get /syncs/{collection}/runs">client.syncs.runs.<a href="./src/resources/syncs/runs.ts">list</a>({ ...params }) -> RunListResponse</code>

# Query

Types:

- <code><a href="./src/resources/query.ts">QueryExecResponse</a></code>
- <code><a href="./src/resources/query.ts">QueryMultiResponse</a></code>

Methods:

- <code title="post /query">client.query.<a href="./src/resources/query.ts">exec</a>({ ...params }) -> QueryExecResponse</code>
- <code title="post /multi-query">client.query.<a href="./src/resources/query.ts">multi</a>({ ...params }) -> QueryMultiResponse</code>

# Actions

Types:

- <code><a href="./src/resources/actions/actions.ts">Action</a></code>
- <code><a href="./src/resources/actions/actions.ts">ActionListResponse</a></code>
- <code><a href="./src/resources/actions/actions.ts">ActionDeleteResponse</a></code>
- <code><a href="./src/resources/actions/actions.ts">ActionTriggerResponse</a></code>

Methods:

- <code title="post /actions">client.actions.<a href="./src/resources/actions/actions.ts">create</a>({ ...params }) -> Action</code>
- <code title="get /actions/{action}">client.actions.<a href="./src/resources/actions/actions.ts">retrieve</a>({ ...params }) -> Action</code>
- <code title="put /actions/{action}">client.actions.<a href="./src/resources/actions/actions.ts">update</a>({ ...params }) -> Action</code>
- <code title="get /actions">client.actions.<a href="./src/resources/actions/actions.ts">list</a>({ ...params }) -> ActionListResponse</code>
- <code title="delete /actions/{action}">client.actions.<a href="./src/resources/actions/actions.ts">delete</a>({ ...params }) -> ActionDeleteResponse</code>
- <code title="post /actions/{action}/trigger">client.actions.<a href="./src/resources/actions/actions.ts">trigger</a>({ ...params }) -> ActionTriggerResponse</code>

## Runs

Types:

- <code><a href="./src/resources/actions/runs.ts">ActionRun</a></code>
- <code><a href="./src/resources/actions/runs.ts">RunListResponse</a></code>

Methods:

- <code title="get /actions/{action}/runs/{action_run_id}">client.actions.runs.<a href="./src/resources/actions/runs.ts">retrieve</a>({ ...params }) -> ActionRun</code>
- <code title="get /actions/{action}/runs">client.actions.runs.<a href="./src/resources/actions/runs.ts">list</a>({ ...params }) -> RunListResponse</code>

# Proxy

Types:

- <code><a href="./src/resources/proxy.ts">ProxyDeleteResponse</a></code>
- <code><a href="./src/resources/proxy.ts">ProxyGetResponse</a></code>
- <code><a href="./src/resources/proxy.ts">ProxyPostResponse</a></code>
- <code><a href="./src/resources/proxy.ts">ProxyPutResponse</a></code>

Methods:

- <code title="delete /proxy/{endpoint}">client.proxy.<a href="./src/resources/proxy.ts">delete</a>({ ...params }) -> ProxyDeleteResponse</code>
- <code title="get /proxy/{endpoint}">client.proxy.<a href="./src/resources/proxy.ts">get</a>({ ...params }) -> ProxyGetResponse</code>
- <code title="post /proxy/{endpoint}">client.proxy.<a href="./src/resources/proxy.ts">post</a>({ ...params }) -> ProxyPostResponse</code>
- <code title="put /proxy/{endpoint}">client.proxy.<a href="./src/resources/proxy.ts">put</a>({ ...params }) -> ProxyPutResponse</code>

# Webhooks

Types:

- <code><a href="./src/resources/webhooks/webhooks.ts">Webhook</a></code>
- <code><a href="./src/resources/webhooks/webhooks.ts">WebhookListResponse</a></code>
- <code><a href="./src/resources/webhooks/webhooks.ts">WebhookDeleteResponse</a></code>

Methods:

- <code title="post /webhooks">client.webhooks.<a href="./src/resources/webhooks/webhooks.ts">create</a>({ ...params }) -> Webhook</code>
- <code title="get /webhooks/{webhook_id}">client.webhooks.<a href="./src/resources/webhooks/webhooks.ts">retrieve</a>(webhookId) -> Webhook</code>
- <code title="put /webhooks/{webhook_id}">client.webhooks.<a href="./src/resources/webhooks/webhooks.ts">update</a>(webhookId, { ...params }) -> Webhook</code>
- <code title="get /webhooks">client.webhooks.<a href="./src/resources/webhooks/webhooks.ts">list</a>() -> WebhookListResponse</code>
- <code title="delete /webhooks/{webhook_id}">client.webhooks.<a href="./src/resources/webhooks/webhooks.ts">delete</a>(webhookId) -> WebhookDeleteResponse</code>

## Events

Types:

- <code><a href="./src/resources/webhooks/events.ts">WebhookEventObject</a></code>
- <code><a href="./src/resources/webhooks/events.ts">EventListResponse</a></code>

Methods:

- <code title="get /webhooks/{webhook_id}/events/{webhook_event_id}">client.webhooks.events.<a href="./src/resources/webhooks/events.ts">retrieve</a>(webhookId, webhookEventId) -> WebhookEventObject</code>
- <code title="get /webhooks/{webhook_id}/events">client.webhooks.events.<a href="./src/resources/webhooks/events.ts">list</a>(webhookId) -> EventListResponse</code>
