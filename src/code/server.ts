
import ConsoleOutput = require('./services/consoleOutput');
import Person = require('./models/person');

var person = new Person.Person("John Doe", 23);
var output = new ConsoleOutput.ConsoleOutput();

person.talk(output, "Hello!");
