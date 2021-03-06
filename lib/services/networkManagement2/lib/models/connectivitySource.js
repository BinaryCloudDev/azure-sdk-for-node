/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator 1.0.1.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the ConnectivitySource class.
 * @constructor
 * Parameters that define the source of the connection.
 *
 * @member {string} resourceId The ID of the resource from which a connectivity
 * check will be initiated.
 *
 * @member {number} [port] The source port from which a connectivity check will
 * be performed.
 *
 */
class ConnectivitySource {
  constructor() {
  }

  /**
   * Defines the metadata of ConnectivitySource
   *
   * @returns {object} metadata of ConnectivitySource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ConnectivitySource',
      type: {
        name: 'Composite',
        className: 'ConnectivitySource',
        modelProperties: {
          resourceId: {
            required: true,
            serializedName: 'resourceId',
            type: {
              name: 'String'
            }
          },
          port: {
            required: false,
            serializedName: 'port',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = ConnectivitySource;
