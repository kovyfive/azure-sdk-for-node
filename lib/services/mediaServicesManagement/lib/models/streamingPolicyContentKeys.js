/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Class to specify properties of all content keys in Streaming Policy
 *
 */
class StreamingPolicyContentKeys {
  /**
   * Create a StreamingPolicyContentKeys.
   * @member {object} [defaultKey] Default content key for an encryption scheme
   * @member {string} [defaultKey.label] Label can be used to specify Content
   * Key when creating Stremaing Locator
   * @member {string} [defaultKey.policyName] Policy used by Default Key
   * @member {array} [keyToTrackMappings] Representing tracks needs sepearete
   * content key
   */
  constructor() {
  }

  /**
   * Defines the metadata of StreamingPolicyContentKeys
   *
   * @returns {object} metadata of StreamingPolicyContentKeys
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StreamingPolicyContentKeys',
      type: {
        name: 'Composite',
        className: 'StreamingPolicyContentKeys',
        modelProperties: {
          defaultKey: {
            required: false,
            serializedName: 'defaultKey',
            type: {
              name: 'Composite',
              className: 'DefaultKey'
            }
          },
          keyToTrackMappings: {
            required: false,
            serializedName: 'keyToTrackMappings',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StreamingPolicyContentKeyElementType',
                  type: {
                    name: 'Composite',
                    className: 'StreamingPolicyContentKey'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = StreamingPolicyContentKeys;
