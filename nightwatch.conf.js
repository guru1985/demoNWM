const chromedriver = require('chromedriver');
 
module.exports = 
{
    test_runner: {
      type: 'cucumber',
      options: {
        feature_path: 'test/features/nightwatch',
        auto_start_session: true
      }
    },
  
    src_folders: ['test/features/nightwatch/step_definitions'],

  test_settings: {
    default: {
      webdriver: {
        start_process: true,
        server_path: chromedriver.path,
        port: 4444,
      },
      desiredCapabilities: {
        browserName: 'chrome'
      }
    }
  }
};