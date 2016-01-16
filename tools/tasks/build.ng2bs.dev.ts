import {parallel} from 'async';
import {join} from 'path';
import * as Builder from 'systemjs-builder';
import {LIB_DEST, SYSTEM_CONFIG_BUILDER} from '../config';

const DIST_OPTS = {
  minify: false,
  sourceMaps: false,
  format: 'js'
};

export = function buildDepsDev(gulp, plugins) {
  return function(done) {
    let builder = new Builder(SYSTEM_CONFIG_BUILDER);

    parallel([
    buildNg2bs
    ], () => done());

    function buildNg2bs(done) {
      builder.bundle(
      'ng2-bootstrap/ng2-bootstrap - angular2/*',
      join(LIB_DEST, 'ng2-bootstrap.js'),DIST_OPTS).then(done);
    }
  };
};
