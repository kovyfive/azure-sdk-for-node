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
 * Role definition list operation result.
 */
class RoleDefinitionListResult extends Array {
  /**
   * Create a RoleDefinitionListResult.
   * @member {string} [nextLink] The URL to use for getting the next set of
   * results.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of RoleDefinitionListResult
   *
   * @returns {object} metadata of RoleDefinitionListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RoleDefinitionListResult',
      type: {
        name: 'Composite',
        className: 'RoleDefinitionListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'RoleDefinitionElementType',
                  type: {
                    name: 'Composite',
                    className: 'RoleDefinition'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RoleDefinitionListResult;