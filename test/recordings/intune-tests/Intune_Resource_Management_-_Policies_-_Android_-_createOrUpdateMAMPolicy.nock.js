// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_SUBSCRIPTION_ID'] = 'dummy';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/providers/Microsoft.Intune/locations/fef.msua06/androidPolicies/30668310-e50a-4f55-9f23-1a82cbe3ca03?api-version=2015-01-14-preview', '*')
  .reply(200, "{\"id\":\"/providers/Microsoft.Intune/locations/fef.msua06/androidPolicies/30668310-e50a-4f55-9f23-1a82cbe3ca03\",\"name\":\"30668310-e50a-4f55-9f23-1a82cbe3ca03\",\"type\":\"Microsoft.Intune/locations/androidPolicies\",\"properties\":{\"screenCapture\":\"allow\",\"fileEncryption\":\"notRequired\",\"friendlyName\":\"androidOneCreated\",\"description\":\"androidOneCreated\",\"accessRecheckOfflineTimeout\":\"P0DT01H01M\",\"accessRecheckOnlineTimeout\":\"P0DT01H01M\",\"appSharingFromLevel\":\"allApps\",\"appSharingToLevel\":\"allApps\",\"authentication\":\"required\",\"clipboardSharingLevel\":\"allApps\",\"dataBackup\":\"allow\",\"deviceCompliance\":\"enable\",\"managedBrowser\":\"required\",\"fileSharingSaveAs\":\"allow\",\"offlineWipeTimeout\":\"P1D\",\"pin\":\"required\",\"pinNumRetry\":1,\"numOfApps\":0,\"groupStatus\":\"notTargeted\",\"lastModifiedTime\":\"2015-12-04T22:36:38.7200387Z\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '813',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8,application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  expires: '-1',
  'last-modified': 'Fri, 04 Dec 2015 22:36:38 GMT',
  etag: '"bc692fc4-2434-4909-a562-4a08ced41539"',
  'x-ms-ratelimit-remaining-tenant-writes': '1198',
  'preference-applied': 'return-content',
  'elapsed-time-milliseconds': '282',
  'service-name': 'AdminExperienceService',
  'client-request-id': '3fbc5fb5-5ad2-4d4e-9b3a-f3c7d64dee60',
  'unique-request-id': 'cdff0792-91b8-4bcc-872e-961ed55cf9b7',
  'x-ms-request-id': 'cdff0792-91b8-4bcc-872e-961ed55cf9b7',
  'related-activity-id': 'cdff0792-91b8-4bcc-872e-961ed55cf9b7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0;',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '4a87ab9b-b410-446e-9b87-54ae588fbb3a',
  'x-ms-routing-request-id': 'WESTUS:20151204T223640Z:4a87ab9b-b410-446e-9b87-54ae588fbb3a',
  date: 'Fri, 04 Dec 2015 22:36:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/providers/Microsoft.Intune/locations/fef.msua06/androidPolicies/30668310-e50a-4f55-9f23-1a82cbe3ca03?api-version=2015-01-14-preview', '*')
  .reply(200, "{\"id\":\"/providers/Microsoft.Intune/locations/fef.msua06/androidPolicies/30668310-e50a-4f55-9f23-1a82cbe3ca03\",\"name\":\"30668310-e50a-4f55-9f23-1a82cbe3ca03\",\"type\":\"Microsoft.Intune/locations/androidPolicies\",\"properties\":{\"screenCapture\":\"allow\",\"fileEncryption\":\"notRequired\",\"friendlyName\":\"androidOneCreated\",\"description\":\"androidOneCreated\",\"accessRecheckOfflineTimeout\":\"P0DT01H01M\",\"accessRecheckOnlineTimeout\":\"P0DT01H01M\",\"appSharingFromLevel\":\"allApps\",\"appSharingToLevel\":\"allApps\",\"authentication\":\"required\",\"clipboardSharingLevel\":\"allApps\",\"dataBackup\":\"allow\",\"deviceCompliance\":\"enable\",\"managedBrowser\":\"required\",\"fileSharingSaveAs\":\"allow\",\"offlineWipeTimeout\":\"P1D\",\"pin\":\"required\",\"pinNumRetry\":1,\"numOfApps\":0,\"groupStatus\":\"notTargeted\",\"lastModifiedTime\":\"2015-12-04T22:36:38.7200387Z\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '813',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8,application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  expires: '-1',
  'last-modified': 'Fri, 04 Dec 2015 22:36:38 GMT',
  etag: '"bc692fc4-2434-4909-a562-4a08ced41539"',
  'x-ms-ratelimit-remaining-tenant-writes': '1198',
  'preference-applied': 'return-content',
  'elapsed-time-milliseconds': '282',
  'service-name': 'AdminExperienceService',
  'client-request-id': '3fbc5fb5-5ad2-4d4e-9b3a-f3c7d64dee60',
  'unique-request-id': 'cdff0792-91b8-4bcc-872e-961ed55cf9b7',
  'x-ms-request-id': 'cdff0792-91b8-4bcc-872e-961ed55cf9b7',
  'related-activity-id': 'cdff0792-91b8-4bcc-872e-961ed55cf9b7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0;',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '4a87ab9b-b410-446e-9b87-54ae588fbb3a',
  'x-ms-routing-request-id': 'WESTUS:20151204T223640Z:4a87ab9b-b410-446e-9b87-54ae588fbb3a',
  date: 'Fri, 04 Dec 2015 22:36:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/providers/Microsoft.Intune/locations/fef.msua06/androidPolicies/30668310-e50a-4f55-9f23-1a82cbe3ca03?api-version=2015-01-14-preview')
  .reply(200, "{\"id\":\"/providers/Microsoft.Intune/locations/fef.msua06/androidPolicies/30668310-e50a-4f55-9f23-1a82cbe3ca03\",\"name\":\"30668310-e50a-4f55-9f23-1a82cbe3ca03\",\"type\":\"Microsoft.Intune/locations/androidPolicies\",\"properties\":{\"screenCapture\":\"allow\",\"fileEncryption\":\"notRequired\",\"friendlyName\":\"androidOneCreated\",\"description\":\"androidOneCreated\",\"accessRecheckOfflineTimeout\":\"P0DT01H01M\",\"accessRecheckOnlineTimeout\":\"P0DT01H01M\",\"appSharingFromLevel\":\"allApps\",\"appSharingToLevel\":\"allApps\",\"authentication\":\"required\",\"clipboardSharingLevel\":\"allApps\",\"dataBackup\":\"allow\",\"deviceCompliance\":\"enable\",\"managedBrowser\":\"required\",\"fileSharingSaveAs\":\"allow\",\"offlineWipeTimeout\":\"P1D\",\"pin\":\"required\",\"pinNumRetry\":1,\"numOfApps\":0,\"groupStatus\":\"notTargeted\",\"lastModifiedTime\":\"2015-12-04T22:36:38Z\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '805',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8,application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  expires: '-1',
  'last-modified': 'Fri, 04 Dec 2015 22:36:38 GMT',
  etag: '"bc692fc4-2434-4909-a562-4a08ced41539"',
  'x-ms-ratelimit-remaining-tenant-reads': '14996',
  'elapsed-time-milliseconds': '121',
  'service-name': 'AdminExperienceService',
  'client-request-id': '22c836af-58e9-4222-a205-abab6b159aca',
  'unique-request-id': '75c8ce49-174a-49c3-9ecb-70b2548d7759',
  'x-ms-request-id': '75c8ce49-174a-49c3-9ecb-70b2548d7759',
  'related-activity-id': '75c8ce49-174a-49c3-9ecb-70b2548d7759',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0;',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'fbc0082c-56c6-477e-ba76-91b8a4bde79b',
  'x-ms-routing-request-id': 'WESTUS:20151204T223640Z:fbc0082c-56c6-477e-ba76-91b8a4bde79b',
  date: 'Fri, 04 Dec 2015 22:36:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/providers/Microsoft.Intune/locations/fef.msua06/androidPolicies/30668310-e50a-4f55-9f23-1a82cbe3ca03?api-version=2015-01-14-preview')
  .reply(200, "{\"id\":\"/providers/Microsoft.Intune/locations/fef.msua06/androidPolicies/30668310-e50a-4f55-9f23-1a82cbe3ca03\",\"name\":\"30668310-e50a-4f55-9f23-1a82cbe3ca03\",\"type\":\"Microsoft.Intune/locations/androidPolicies\",\"properties\":{\"screenCapture\":\"allow\",\"fileEncryption\":\"notRequired\",\"friendlyName\":\"androidOneCreated\",\"description\":\"androidOneCreated\",\"accessRecheckOfflineTimeout\":\"P0DT01H01M\",\"accessRecheckOnlineTimeout\":\"P0DT01H01M\",\"appSharingFromLevel\":\"allApps\",\"appSharingToLevel\":\"allApps\",\"authentication\":\"required\",\"clipboardSharingLevel\":\"allApps\",\"dataBackup\":\"allow\",\"deviceCompliance\":\"enable\",\"managedBrowser\":\"required\",\"fileSharingSaveAs\":\"allow\",\"offlineWipeTimeout\":\"P1D\",\"pin\":\"required\",\"pinNumRetry\":1,\"numOfApps\":0,\"groupStatus\":\"notTargeted\",\"lastModifiedTime\":\"2015-12-04T22:36:38Z\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '805',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8,application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  expires: '-1',
  'last-modified': 'Fri, 04 Dec 2015 22:36:38 GMT',
  etag: '"bc692fc4-2434-4909-a562-4a08ced41539"',
  'x-ms-ratelimit-remaining-tenant-reads': '14996',
  'elapsed-time-milliseconds': '121',
  'service-name': 'AdminExperienceService',
  'client-request-id': '22c836af-58e9-4222-a205-abab6b159aca',
  'unique-request-id': '75c8ce49-174a-49c3-9ecb-70b2548d7759',
  'x-ms-request-id': '75c8ce49-174a-49c3-9ecb-70b2548d7759',
  'related-activity-id': '75c8ce49-174a-49c3-9ecb-70b2548d7759',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0;',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'fbc0082c-56c6-477e-ba76-91b8a4bde79b',
  'x-ms-routing-request-id': 'WESTUS:20151204T223640Z:fbc0082c-56c6-477e-ba76-91b8a4bde79b',
  date: 'Fri, 04 Dec 2015 22:36:40 GMT',
  connection: 'close' });
 return result; }]];
 exports.uuidsGenerated = function() { return ['30668310-e50a-4f55-9f23-1a82cbe3ca03'];};