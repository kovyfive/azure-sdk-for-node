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
 * The collection of storage account credential entities.
 */
class StorageAccountCredentialList extends Array {
  /**
   * Create a StorageAccountCredentialList.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of StorageAccountCredentialList
   *
   * @returns {object} metadata of StorageAccountCredentialList
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StorageAccountCredentialList',
      type: {
        name: 'Composite',
        className: 'StorageAccountCredentialList',
        modelProperties: {
          value: {
            required: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StorageAccountCredentialElementType',
                  type: {
                    name: 'Composite',
                    className: 'StorageAccountCredential'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = StorageAccountCredentialList;