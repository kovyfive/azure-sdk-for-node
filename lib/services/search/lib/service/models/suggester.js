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
 * Defines how the Suggest API should apply to a group of fields in the index.
 *
 */
class Suggester {
  /**
   * Create a Suggester.
   * @member {string} name The name of the suggester.
   * @member {array} sourceFields The list of field names to which the
   * suggester applies. Each field must be searchable.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Suggester
   *
   * @returns {object} metadata of Suggester
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Suggester',
      type: {
        name: 'Composite',
        className: 'Suggester',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          searchMode: {
            required: true,
            isConstant: true,
            serializedName: 'searchMode',
            defaultValue: 'analyzingInfixMatching',
            type: {
              name: 'String'
            }
          },
          sourceFields: {
            required: true,
            serializedName: 'sourceFields',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = Suggester;