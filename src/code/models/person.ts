/// <reference path="../interfaces/output.ts" />

export class Person {
	name : string;
	age : number;
	
	constructor(name : string, age : number) {
		this.name = name;
		this.age = age;
	}
	
	talk(output : Output, value : string) {
		output.write(this.name + " says \"" + value + "\"");
	}
}