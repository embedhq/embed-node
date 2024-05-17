// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as OrderAPI from './order';

export class Store extends APIResource {
  order: OrderAPI.Order = new OrderAPI.Order(this._client);
}

export namespace Store {
  export import Order = OrderAPI.Order;
}
