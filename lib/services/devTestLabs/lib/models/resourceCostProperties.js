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
 * @class
 * Initializes a new instance of the ResourceCostProperties class.
 * @constructor
 * The properties of a resource cost item.
 *
 * @member {string} [resourcename] The name of the resource.
 * 
 * @member {string} [resourceGroupName] The name of the resource group.
 * 
 * @member {number} [resourceCost] The cost component of the resource cost
 * item.
 * 
 * @member {string} [owner] The email address of the owner of the resource
 * 
 * @member {string} [category] The category of the resource. For VM this will
 * be set to its size, for storage account it will be set to standard or
 * premium
 * 
 * @member {boolean} [exists] Whether the resource still exists or not
 * 
 * @member {string} [resourceType] The logical resource type (ex.
 * virtualmachine, storageaccount)
 * 
 */
function ResourceCostProperties() {
}

/**
 * Defines the metadata of ResourceCostProperties
 *
 * @returns {object} metadata of ResourceCostProperties
 *
 */
ResourceCostProperties.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ResourceCostProperties',
    type: {
      name: 'Composite',
      className: 'ResourceCostProperties',
      modelProperties: {
        resourcename: {
          required: false,
          serializedName: 'resourcename',
          type: {
            name: 'String'
          }
        },
        resourceGroupName: {
          required: false,
          serializedName: 'resourceGroupName',
          type: {
            name: 'String'
          }
        },
        resourceCost: {
          required: false,
          serializedName: 'resourceCost',
          type: {
            name: 'Number'
          }
        },
        owner: {
          required: false,
          serializedName: 'owner',
          type: {
            name: 'String'
          }
        },
        category: {
          required: false,
          serializedName: 'category',
          type: {
            name: 'String'
          }
        },
        exists: {
          required: false,
          serializedName: 'exists',
          type: {
            name: 'Boolean'
          }
        },
        resourceType: {
          required: false,
          serializedName: 'resourceType',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = ResourceCostProperties;