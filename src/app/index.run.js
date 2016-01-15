(function() {
  'use strict';

  angular
    .module('suziweb')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
