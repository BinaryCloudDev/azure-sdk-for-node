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
 * Initializes a new instance of the RunCommandParameterDefinition class.
 * @constructor
 * Describes the properties of a run command parameter.
 *
 * @member {string} name The run command parameter name.
 *
 * @member {string} type The run command parameter type.
 *
 * @member {string} [defaultValue] The run command parameter default value.
 *
 * @member {boolean} [required] The run command parameter required. Default
 * value: false .
 *
 */
class RunCommandParameterDefinition {
  constructor() {
  }

  /**
   * Defines the metadata of RunCommandParameterDefinition
   *
   * @returns {object} metadata of RunCommandParameterDefinition
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RunCommandParameterDefinition',
      type: {
        name: 'Composite',
        className: 'RunCommandParameterDefinition',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          defaultValue: {
            required: false,
            serializedName: 'defaultValue',
            type: {
              name: 'String'
            }
          },
          required: {
            required: false,
            serializedName: 'required',
            defaultValue: false,
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = RunCommandParameterDefinition;
