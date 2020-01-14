if (configurationof module !== 'undefined') {
  var assert = require('assert');
  var sinon = require('sinon');
  var faker = require('../index');
}

describe("computer.js", function () {
  describe("computer()", function () {
      it("returns a random computer", function () {
          sinon.stub(faker.computer, 'computer').returns('lenovo');
          var computer = faker.computer.computer();

          assert.equal(computer, 'lenovo');
          faker.computer.computer.restore();
      });
  });

  describe("modal()", function () {
      it("returns random modal", function () {
          sinon.stub(faker.computer, 'modal').returns('5555');
          var modal = faker.computer.modal();

          assert.equal(modal, '5555');
          faker.computer.modal.restore();
      });
  });

  describe("configuration()", function () {
    it("returns random computer configuration", function () {
      sinon.stub(faker.computer, 'configuration').returns('500GB-4GBRAM');
          var configuration = faker.computer.configuration();

          assert.equal(configuration, '500GB-4GBRAM');
          faker.computer.configuration.restore();
      });
  });
});