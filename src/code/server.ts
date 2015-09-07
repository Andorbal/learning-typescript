
import { ConsoleOutput } from './services/consoleOutput';
import { Person } from './models/person';

var person = new Person("John Doe", 23);
var output = new ConsoleOutput();

person.talk(output, "Hello!");
