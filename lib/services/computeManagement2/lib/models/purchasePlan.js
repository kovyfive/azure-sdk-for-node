/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the PurchasePlan class.
 * @constructor
 * Used for establishing the purchase context of any 3rd Party artifact
 * through MarketPlace.
 * @member {string} publisher Gets or sets the publisher ID.
 * 
 * @member {string} name Gets or sets the plan ID.
 * 
 * @member {string} product Gets or sets the product ID.
 * 
 */
function PurchasePlan(parameters) {
  if (parameters !== null && parameters !== undefined) {
    if (parameters.publisher !== undefined) {
      this.publisher = parameters.publisher;
    }
    if (parameters.name !== undefined) {
      this.name = parameters.name;
    }
    if (parameters.product !== undefined) {
      this.product = parameters.product;
    }
  }    
}


/**
 * Validate the payload against the PurchasePlan schema
 *
 * @param {JSON} payload
 *
 */
PurchasePlan.prototype.serialize = function () {
  var payload = {};
  if (this['publisher'] === null || this['publisher'] === undefined || typeof this['publisher'].valueOf() !== 'string') {
    throw new Error('this[\'publisher\'] cannot be null or undefined and it must be of type string.');
  }
  payload['publisher'] = this['publisher'];

  if (this['name'] === null || this['name'] === undefined || typeof this['name'].valueOf() !== 'string') {
    throw new Error('this[\'name\'] cannot be null or undefined and it must be of type string.');
  }
  payload['name'] = this['name'];

  if (this['product'] === null || this['product'] === undefined || typeof this['product'].valueOf() !== 'string') {
    throw new Error('this[\'product\'] cannot be null or undefined and it must be of type string.');
  }
  payload['product'] = this['product'];

  return payload;
};

/**
 * Deserialize the instance to PurchasePlan schema
 *
 * @param {JSON} instance
 *
 */
PurchasePlan.prototype.deserialize = function (instance) {
  if (instance) {
    if (instance['publisher'] !== undefined) {
      this['publisher'] = instance['publisher'];
    }

    if (instance['name'] !== undefined) {
      this['name'] = instance['name'];
    }

    if (instance['product'] !== undefined) {
      this['product'] = instance['product'];
    }
  }

  return this;
};

module.exports = PurchasePlan;