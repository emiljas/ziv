define([], function() {
  console.log('services.js');

  function filterService() {
    return {
      getFilters: function() {
        return [{
          name: 'Xunrise'
        }, {
          name: 'nostalgia'
        }, {
          name: 'glowingSun'
        }, {
          name: 'hemingway'
        }, {
          name: 'love'
        }, {
          name: 'grungy'
        }, {
          name: 'lomo'
        }, {
          name: 'oldBoot'
        }, {
          name: 'jeszcze jeden'
        }, {
          name: 'i jeszcze raz'
        }, {
          name: 'niech żyje nam'
        }, {
          name: 'x'
        }, {
          name: 'y'
        }, {
          name: 'z'
        }];
      }
    };
  }

  return filterService;
});
