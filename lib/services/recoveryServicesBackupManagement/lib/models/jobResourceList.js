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
 * List of Job resources
 */
class JobResourceList extends Array {
  /**
   * Create a JobResourceList.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of JobResourceList
   *
   * @returns {object} metadata of JobResourceList
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JobResourceList',
      type: {
        name: 'Composite',
        className: 'JobResourceList',
        modelProperties: {
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          },
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'JobResourceElementType',
                  type: {
                    name: 'Composite',
                    className: 'JobResource'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = JobResourceList;