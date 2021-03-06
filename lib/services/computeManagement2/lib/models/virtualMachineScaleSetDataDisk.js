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
 * Describes a virtual machine scale set data disk.
 *
 */
class VirtualMachineScaleSetDataDisk {
  /**
   * Create a VirtualMachineScaleSetDataDisk.
   * @member {string} [name] The disk name.
   * @member {number} lun Specifies the logical unit number of the data disk.
   * This value is used to identify data disks within the VM and therefore must
   * be unique for each data disk attached to a VM.
   * @member {string} [caching] Specifies the caching requirements. <br><br>
   * Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br>
   * **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for
   * Premium storage**. Possible values include: 'None', 'ReadOnly',
   * 'ReadWrite'
   * @member {boolean} [writeAcceleratorEnabled] Specifies whether
   * writeAccelerator should be enabled or disabled on the disk.
   * @member {string} createOption The create option. Possible values include:
   * 'FromImage', 'Empty', 'Attach'
   * @member {number} [diskSizeGB] Specifies the size of an empty data disk in
   * gigabytes. This element can be used to overwrite the name of the disk in a
   * virtual machine image. <br><br> This value cannot be larger than 1023 GB
   * @member {object} [managedDisk] The managed disk parameters.
   * @member {string} [managedDisk.storageAccountType] Specifies the storage
   * account type for the managed disk. Possible values are: Standard_LRS or
   * Premium_LRS. Possible values include: 'Standard_LRS', 'Premium_LRS'
   */
  constructor() {
  }

  /**
   * Defines the metadata of VirtualMachineScaleSetDataDisk
   *
   * @returns {object} metadata of VirtualMachineScaleSetDataDisk
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VirtualMachineScaleSetDataDisk',
      type: {
        name: 'Composite',
        className: 'VirtualMachineScaleSetDataDisk',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          lun: {
            required: true,
            serializedName: 'lun',
            type: {
              name: 'Number'
            }
          },
          caching: {
            required: false,
            serializedName: 'caching',
            type: {
              name: 'Enum',
              allowedValues: [ 'None', 'ReadOnly', 'ReadWrite' ]
            }
          },
          writeAcceleratorEnabled: {
            required: false,
            serializedName: 'writeAcceleratorEnabled',
            type: {
              name: 'Boolean'
            }
          },
          createOption: {
            required: true,
            serializedName: 'createOption',
            type: {
              name: 'String'
            }
          },
          diskSizeGB: {
            required: false,
            serializedName: 'diskSizeGB',
            type: {
              name: 'Number'
            }
          },
          managedDisk: {
            required: false,
            serializedName: 'managedDisk',
            type: {
              name: 'Composite',
              className: 'VirtualMachineScaleSetManagedDiskParameters'
            }
          }
        }
      }
    };
  }
}

module.exports = VirtualMachineScaleSetDataDisk;
