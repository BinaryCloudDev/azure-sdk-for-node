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
 * @class
 * Initializes a new instance of the ResourceManagementErrorWithDetails class.
 * @constructor
 * @member {string} [code] The error code returned when exporting the template.
 *
 * @member {string} [message] The error message describing the export error.
 *
 * @member {string} [target] The target of the error.
 *
 * @member {array} [details] Validation error.
 *
 */
class ResourceManagementErrorWithDetails {
  constructor() {
  }

  /**
   * Defines the metadata of ResourceManagementErrorWithDetails
   *
   * @returns {object} metadata of ResourceManagementErrorWithDetails
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ResourceManagementErrorWithDetails',
      type: {
        name: 'Composite',
        className: 'ResourceManagementErrorWithDetails',
        modelProperties: {
          code: {
            required: false,
            readOnly: true,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            readOnly: true,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          },
          target: {
            required: false,
            readOnly: true,
            serializedName: 'target',
            type: {
              name: 'String'
            }
          },
          details: {
            required: false,
            readOnly: true,
            serializedName: 'details',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ResourceManagementErrorWithDetailsElementType',
                  type: {
                    name: 'Composite',
                    className: 'ResourceManagementErrorWithDetails'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ResourceManagementErrorWithDetails;
