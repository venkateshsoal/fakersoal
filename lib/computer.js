/**
 *
 * @namespace faker.computer
 */
var Computer = function (faker) {
  var self = this;
  var fake = faker.fake;

/**
   * computer
   *
   * @method faker.computer.computer
   */
  self.computer = function () {
    return fake('{{computer.company}} {{computer.modal}}');
  };

  self.computer.schema = {
    "description": "Generates a random computer.",
    "sampleResults": ["Dell", "lenovo", "acer", "hp"]
  };

  /**
   * company
   *
   * @method faker.computer.company
   */
  self.company = function () {
    return faker.random.arrayElement(faker.definitions.computer.company);
  };

  self.company.schema = {
    "description": "Generates a company number.",
    "sampleResults": ["Dell", "lenovo", "acer", "hp"]
  };

  /**
   * company
   *
   * @method faker.computer.company
   */
  self.modal = function () {
    return faker.random.arrayElement(faker.definitions.computer.modal);
  };

  self.modal.schema = {
    "description": "Generates a modal number.",
    "sampleResults": ["5555", "6666", "7777", "8888", "9999"]
  };

  /**
   * type
   *
   * @method faker.vehicle.type
   */
  self.configuration = function () {
    return faker.random.arrayElement(faker.definitions.computer.configuration);
  };

  self.configuration.schema = {
    "description": "Generates a computer configs.",
    "sampleResults": ["500GB-4GBRAM", "1TB-4GBRAM", "500GB-8GBRAM", "1TB-8GBRAM"]
  };

};

module["exports"] = Computer;


