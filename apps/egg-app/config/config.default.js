/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1662774619818_9664';

  // add your middleware config here
  config.middleware = [];

  config.xtransit = {
    server: 'ws://127.0.0.1:9096',
    appId: 2,
    appSecret: '5c55c7a4525c96240a4c38bf8ea3ac7d',
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};