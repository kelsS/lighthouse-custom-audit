'use strict';

const Audit = require('lighthouse').Audit;

const MAX_LOAD_TIME = 100;

class LoadAudit extends Audit {
  static get meta() {
    return {
      id: 'wcag2-1-AA-audit',
      title: 'WCAG 2.1 AA compliance audit',
      failureTitle: 'The page is NOT WCAG 2.1 AA compliant.',
      scoreDisplayMode: Audit.SCORING_MODES.NUMERIC,
      description: 'Loaded WCAG 2.1 AA audit',
      requiredArtifacts: ['WcagAA2PointOneAudit'],
    };
  }

  static audit(artifacts) {
    const loadMetrics = artifacts.WcagAA2PointOneAudit;

    const belowThreshold = loadMetrics <= MAX_LOAD_TIME;

    return {
      rawValue: loadMetrics,
      score: Number(belowThreshold),
    };
  }
}
module.exports = LoadAudit;
