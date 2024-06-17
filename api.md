# Integrations

Types:

- <code><a href="./src/resources/integrations.ts">Integration</a></code>
- <code><a href="./src/resources/integrations.ts">IntegrationListResponse</a></code>
- <code><a href="./src/resources/integrations.ts">IntegrationDeleteResponse</a></code>

Methods:

- <code title="post /integrations">client.integrations.<a href="./src/resources/integrations.ts">create</a>({ ...params }) -> Integration</code>
- <code title="get /integrations/{integration_id}">client.integrations.<a href="./src/resources/integrations.ts">retrieve</a>(integrationId) -> Integration</code>
- <code title="put /integrations/{integration_id}">client.integrations.<a href="./src/resources/integrations.ts">update</a>(integrationId, { ...params }) -> Integration</code>
- <code title="get /integrations">client.integrations.<a href="./src/resources/integrations.ts">list</a>({ ...params }) -> IntegrationListResponse</code>
- <code title="delete /integrations/{integration_id}">client.integrations.<a href="./src/resources/integrations.ts">delete</a>(integrationId) -> IntegrationDeleteResponse</code>
- <code title="post /integrations/{integration_id}/disable">client.integrations.<a href="./src/resources/integrations.ts">disable</a>(integrationId) -> Integration</code>
- <code title="post /integrations/{integration_id}/enable">client.integrations.<a href="./src/resources/integrations.ts">enable</a>(integrationId) -> Integration</code>

# Connections

Types:

- <code><a href="./src/resources/connections.ts">Connection</a></code>
- <code><a href="./src/resources/connections.ts">ConnectionUpdateResponse</a></code>
- <code><a href="./src/resources/connections.ts">ConnectionListResponse</a></code>
- <code><a href="./src/resources/connections.ts">ConnectionDeleteResponse</a></code>

Methods:

- <code title="get /connections/{connection_id}">client.connections.<a href="./src/resources/connections.ts">retrieve</a>(connectionId, { ...params }) -> Connection</code>
- <code title="put /connections/{connection_id}">client.connections.<a href="./src/resources/connections.ts">update</a>(connectionId, { ...params }) -> ConnectionUpdateResponse</code>
- <code title="get /connections">client.connections.<a href="./src/resources/connections.ts">list</a>({ ...params }) -> ConnectionListResponse</code>
- <code title="delete /connections/{connection_id}">client.connections.<a href="./src/resources/connections.ts">delete</a>(connectionId, { ...params }) -> ConnectionDeleteResponse</code>
- <code title="post /connections">client.connections.<a href="./src/resources/connections.ts">upsert</a>({ ...params }) -> Connection</code>

# SessionTokens

Types:

- <code><a href="./src/resources/session-tokens.ts">SessionToken</a></code>
- <code><a href="./src/resources/session-tokens.ts">SessionTokenListResponse</a></code>
- <code><a href="./src/resources/session-tokens.ts">SessionTokenDeleteResponse</a></code>

Methods:

- <code title="post /session-tokens">client.sessionTokens.<a href="./src/resources/session-tokens.ts">create</a>({ ...params }) -> SessionToken</code>
- <code title="get /session-tokens/{token}">client.sessionTokens.<a href="./src/resources/session-tokens.ts">retrieve</a>(token) -> SessionToken</code>
- <code title="get /session-tokens">client.sessionTokens.<a href="./src/resources/session-tokens.ts">list</a>() -> SessionTokenListResponse</code>
- <code title="delete /session-tokens/{token}">client.sessionTokens.<a href="./src/resources/session-tokens.ts">delete</a>(token) -> SessionTokenDeleteResponse</code>

# Providers

Types:

- <code><a href="./src/resources/providers.ts">Provider</a></code>
- <code><a href="./src/resources/providers.ts">ProviderListResponse</a></code>

Methods:

- <code title="get /providers/{provider_key}">client.providers.<a href="./src/resources/providers.ts">retrieve</a>(providerKey) -> Provider</code>
- <code title="get /providers">client.providers.<a href="./src/resources/providers.ts">list</a>() -> ProviderListResponse</code>

# Collections

Types:

- <code><a href="./src/resources/collections/collections.ts">Collection</a></code>
- <code><a href="./src/resources/collections/collections.ts">CollectionListResponse</a></code>
- <code><a href="./src/resources/collections/collections.ts">CollectionQueryResponse</a></code>

Methods:

- <code title="get /collections/{collection_key}">client.collections.<a href="./src/resources/collections/collections.ts">retrieve</a>(collectionKey, { ...params }) -> Collection</code>
- <code title="put /collections/{collection_key}">client.collections.<a href="./src/resources/collections/collections.ts">update</a>(collectionKey, { ...params }) -> Collection</code>
- <code title="get /collections">client.collections.<a href="./src/resources/collections/collections.ts">list</a>({ ...params }) -> CollectionListResponse</code>
- <code title="post /collections/{collection_key}/disable">client.collections.<a href="./src/resources/collections/collections.ts">disable</a>(collectionKey, { ...params }) -> Collection</code>
- <code title="post /collections/{collection_key}/enable">client.collections.<a href="./src/resources/collections/collections.ts">enable</a>(collectionKey, { ...params }) -> Collection</code>
- <code title="post /collections/{collection_key}/query">client.collections.<a href="./src/resources/collections/collections.ts">query</a>(collectionKey, { ...params }) -> CollectionQueryResponse</code>

## Schemas

Types:

- <code><a href="./src/resources/collections/schemas.ts">CollectionSchema</a></code>
- <code><a href="./src/resources/collections/schemas.ts">SchemaListResponse</a></code>

Methods:

- <code title="get /collections/{collection_key}/schema">client.collections.schemas.<a href="./src/resources/collections/schemas.ts">retrieve</a>(collectionKey, { ...params }) -> CollectionSchema</code>
- <code title="get /collections/schemas">client.collections.schemas.<a href="./src/resources/collections/schemas.ts">list</a>({ ...params }) -> SchemaListResponse</code>

# Syncs

Types:

- <code><a href="./src/resources/syncs/syncs.ts">Sync</a></code>
- <code><a href="./src/resources/syncs/syncs.ts">SyncListResponse</a></code>

Methods:

- <code title="get /syncs/{collection_key}">client.syncs.<a href="./src/resources/syncs/syncs.ts">retrieve</a>(collectionKey, { ...params }) -> Sync</code>
- <code title="put /syncs/{collection_key}">client.syncs.<a href="./src/resources/syncs/syncs.ts">update</a>(collectionKey, { ...params }) -> Sync</code>
- <code title="get /syncs">client.syncs.<a href="./src/resources/syncs/syncs.ts">list</a>({ ...params }) -> SyncListResponse</code>
- <code title="post /syncs/{collection_key}/start">client.syncs.<a href="./src/resources/syncs/syncs.ts">start</a>(collectionKey, { ...params }) -> Sync</code>
- <code title="post /syncs/{collection_key}/stop">client.syncs.<a href="./src/resources/syncs/syncs.ts">stop</a>(collectionKey, { ...params }) -> Sync</code>
- <code title="post /syncs/{collection_key}/trigger">client.syncs.<a href="./src/resources/syncs/syncs.ts">trigger</a>(collectionKey, { ...params }) -> Sync</code>

## Runs

Types:

- <code><a href="./src/resources/syncs/runs.ts">SyncRun</a></code>
- <code><a href="./src/resources/syncs/runs.ts">RunListResponse</a></code>

Methods:

- <code title="get /syncs/{collection_key}/runs/{run_id}">client.syncs.runs.<a href="./src/resources/syncs/runs.ts">retrieve</a>(collectionKey, runId, { ...params }) -> SyncRun</code>
- <code title="get /syncs/{collection_key}/runs">client.syncs.runs.<a href="./src/resources/syncs/runs.ts">list</a>(collectionKey, { ...params }) -> RunListResponse</code>

# Actions

Types:

- <code><a href="./src/resources/actions/actions.ts">Action</a></code>
- <code><a href="./src/resources/actions/actions.ts">ActionListResponse</a></code>
- <code><a href="./src/resources/actions/actions.ts">ActionTriggerResponse</a></code>

Methods:

- <code title="get /actions/{action_key}">client.actions.<a href="./src/resources/actions/actions.ts">retrieve</a>(actionKey, { ...params }) -> Action</code>
- <code title="get /actions">client.actions.<a href="./src/resources/actions/actions.ts">list</a>({ ...params }) -> ActionListResponse</code>
- <code title="post /actions/{action_key}/disable">client.actions.<a href="./src/resources/actions/actions.ts">disable</a>(actionKey, { ...params }) -> Action</code>
- <code title="post /actions/{action_key}/enable">client.actions.<a href="./src/resources/actions/actions.ts">enable</a>(actionKey, { ...params }) -> Action</code>
- <code title="get /actions/{action_key}/schema">client.actions.<a href="./src/resources/actions/actions.ts">schema</a>(actionKey, { ...params }) -> ActionSchema</code>
- <code title="post /actions/{action_key}/trigger">client.actions.<a href="./src/resources/actions/actions.ts">trigger</a>(actionKey, { ...params }) -> ActionTriggerResponse</code>

## Schemas

Types:

- <code><a href="./src/resources/actions/schemas.ts">ActionSchema</a></code>
- <code><a href="./src/resources/actions/schemas.ts">SchemaListResponse</a></code>

Methods:

- <code title="get /actions/{action_key}/schema">client.actions.schemas.<a href="./src/resources/actions/schemas.ts">retrieve</a>(actionKey, { ...params }) -> ActionSchema</code>
- <code title="get /actions/schemas">client.actions.schemas.<a href="./src/resources/actions/schemas.ts">list</a>({ ...params }) -> SchemaListResponse</code>

# Proxy

Types:

- <code><a href="./src/resources/proxy.ts">ProxyDeleteResponse</a></code>
- <code><a href="./src/resources/proxy.ts">ProxyGetResponse</a></code>
- <code><a href="./src/resources/proxy.ts">ProxyPostResponse</a></code>
- <code><a href="./src/resources/proxy.ts">ProxyPutResponse</a></code>

Methods:

- <code title="delete /proxy/{endpoint}">client.proxy.<a href="./src/resources/proxy.ts">delete</a>(endpoint, { ...params }) -> ProxyDeleteResponse</code>
- <code title="get /proxy/{endpoint}">client.proxy.<a href="./src/resources/proxy.ts">get</a>(endpoint, { ...params }) -> ProxyGetResponse</code>
- <code title="post /proxy/{endpoint}">client.proxy.<a href="./src/resources/proxy.ts">post</a>(endpoint, { ...params }) -> ProxyPostResponse</code>
- <code title="put /proxy/{endpoint}">client.proxy.<a href="./src/resources/proxy.ts">put</a>(endpoint, { ...params }) -> ProxyPutResponse</code>

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
- <code title="post /webhooks/{webhook_id}/disable">client.webhooks.<a href="./src/resources/webhooks/webhooks.ts">disable</a>(webhookId) -> Webhook</code>
- <code title="post /webhooks/{webhook_id}/enable">client.webhooks.<a href="./src/resources/webhooks/webhooks.ts">enable</a>(webhookId) -> Webhook</code>

## Events

Types:

- <code><a href="./src/resources/webhooks/events.ts">WebhookEventObject</a></code>
- <code><a href="./src/resources/webhooks/events.ts">EventListResponse</a></code>

Methods:

- <code title="get /webhooks/{webhook_id}/events/{event_id}">client.webhooks.events.<a href="./src/resources/webhooks/events.ts">retrieve</a>(webhookId, eventId) -> WebhookEventObject</code>
- <code title="get /webhooks/{webhook_id}/events">client.webhooks.events.<a href="./src/resources/webhooks/events.ts">list</a>(webhookId) -> EventListResponse</code>
