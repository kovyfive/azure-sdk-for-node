// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'nodesdkteststorage';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id?api-version=2017-09-01')
  .reply(200, "{\"id\":\"my_application_id\",\"displayName\":\"my_application_name\",\"packages\":[],\"allowUpdates\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '96',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Wed, 08 Nov 2017 22:01:26 GMT',
  etag: '"0x8D526F4422F8315"',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-request-id': '0b367160-7752-48be-8bf3-8314c12ce198',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '470c1c5f-790f-4f92-803f-31deca4842c6',
  'x-ms-routing-request-id': 'WESTUS2:20171108T220128Z:470c1c5f-790f-4f92-803f-31deca4842c6',
  date: 'Wed, 08 Nov 2017 22:01:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id?api-version=2017-09-01')
  .reply(200, "{\"id\":\"my_application_id\",\"displayName\":\"my_application_name\",\"packages\":[],\"allowUpdates\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '96',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Wed, 08 Nov 2017 22:01:26 GMT',
  etag: '"0x8D526F4422F8315"',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-request-id': '0b367160-7752-48be-8bf3-8314c12ce198',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '470c1c5f-790f-4f92-803f-31deca4842c6',
  'x-ms-routing-request-id': 'WESTUS2:20171108T220128Z:470c1c5f-790f-4f92-803f-31deca4842c6',
  date: 'Wed, 08 Nov 2017 22:01:27 GMT',
  connection: 'close' });
 return result; }]];