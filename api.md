# Integrations

Types:

- <code><a href="./src/resources/integrations.ts">Integration</a></code>
- <code><a href="./src/resources/integrations.ts">IntegrationListResponse</a></code>

Methods:

- <code title="post /integrations">client.integrations.<a href="./src/resources/integrations.ts">create</a>({ ...params }) -> Integration</code>
- <code title="get /integrations">client.integrations.<a href="./src/resources/integrations.ts">list</a>({ ...params }) -> IntegrationListResponse</code>

# Connections

# SessionTokens

# Providers

Types:

- <code><a href="./src/resources/providers.ts">Provider</a></code>
- <code><a href="./src/resources/providers.ts">ProviderListResponse</a></code>

Methods:

- <code title="get /providers">client.providers.<a href="./src/resources/providers.ts">list</a>({ ...params }) -> ProviderListResponse</code>

# Collections

Types:

- <code><a href="./src/resources/collections/collections.ts">Collection</a></code>
- <code><a href="./src/resources/collections/collections.ts">CollectionListResponse</a></code>

Methods:

- <code title="get /collections">client.collections.<a href="./src/resources/collections/collections.ts">list</a>({ ...params }) -> CollectionListResponse</code>

## Schemas

# Syncs

Types:

- <code><a href="./src/resources/syncs/syncs.ts">Sync</a></code>
- <code><a href="./src/resources/syncs/syncs.ts">SyncListResponse</a></code>

Methods:

- <code title="get /syncs">client.syncs.<a href="./src/resources/syncs/syncs.ts">list</a>({ ...params }) -> SyncListResponse</code>

## Runs

Types:

- <code><a href="./src/resources/syncs/runs.ts">SyncRun</a></code>

# Actions

Types:

- <code><a href="./src/resources/actions/actions.ts">Action</a></code>
- <code><a href="./src/resources/actions/actions.ts">ActionListResponse</a></code>

Methods:

- <code title="get /actions">client.actions.<a href="./src/resources/actions/actions.ts">list</a>({ ...params }) -> ActionListResponse</code>

## Schemas

## Runs

Types:

- <code><a href="./src/resources/actions/runs.ts">ActionRun</a></code>

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

## Events

Types:

- <code><a href="./src/resources/webhooks/events.ts">WebhookEventObject</a></code>
- <code><a href="./src/resources/webhooks/events.ts">EventListResponse</a></code>

Methods:

- <code title="get /webhooks/{webhook_id}/events">client.webhooks.events.<a href="./src/resources/webhooks/events.ts">list</a>(webhookId) -> EventListResponse</code>
