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

/**
 * An NS record.
 *
 */
class NsRecord {
  /**
   * Create a NsRecord.
   * @member {string} [nsdname] The name server name for this NS record.
   */
  constructor() {
  }

  /**
   * Defines the metadata of NsRecord
   *
   * @returns {object} metadata of NsRecord
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NsRecord',
      type: {
        name: 'Composite',
        className: 'NsRecord',
        modelProperties: {
          nsdname: {
            required: false,
            serializedName: 'nsdname',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = NsRecord;