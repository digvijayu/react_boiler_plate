const commonData = require("../../helpers/data").commonData;
commonData.devices.forEach(device => {

  describe(`[[BOILER_PLATE_DIR_NAME]] - Home Page - for ${device.name}`, () => {
    beforeEach(() => {
      device.setViewport();
      cy.visit('/[[BOILER_PLATE_HYPHEN]]');
    });

    it(`should be in expected initial state`, () => {
      cy.get(`.home-title`)
        .should('contain', 'Home Page (loaded from en.json)');
    });
  });
});
