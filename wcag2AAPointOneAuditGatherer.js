'use strict';
const { Gatherer } = require('lighthouse');

class WcagAA2PointOneAudit extends Gatherer {
  afterPass(options) {
    const driver = options.driver;
    return driver.evaluateAsync('window.testProjectMetric');
  }
}

module.exports = WcagAA2PointOneAudit;
