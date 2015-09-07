export class ConsoleOutput implements Output {
	write(value : string) {
		console.log(value);
	}
}