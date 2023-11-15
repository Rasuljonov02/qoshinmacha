class auto {
	constructor(public name: string, public marksa: string) {}

	balloon() {}
}

class Chevrolet extends auto {
	videoRecorder() {}
}
class BMW extends auto {
	pillow() {}
}

class Kia extends auto {
	beauty() {}
}

class Spark extends Chevrolet {}
class M5 extends BMW {}
class K9 extends Kia {}

function mashina<T extends auto>(firma: T, madel: string) {
	// sistemani tekshiradi
	if (firma instanceof Chevrolet && madel != "Spark") {
		console.error(
			`%c Hato: Madelni kiritingiz  ${firma.name} da bunday ${madel} such a car is in the company`,
			"color:red"
		);
		return;
	}
	if (firma instanceof BMW && madel !== "M5") {
		console.error(
			`%c Hato: Madelni kiritingiz  ${firma.name} da bunday ${madel} such a car is in the company`,
			"color:red"
		);
		return;
	}
	if (firma instanceof Kia && madel !== "K9") {
		console.error(
			`%c Hato: Madelni kiritingiz  ${firma.name} da bunday ${madel} such a car is in the company`,
			"color:red"
		);
		return;
	}

	if (firma instanceof Spark) {
		console.log(` ${firma.name} -> Markasi Chevrolet -> car model (${madel}) `);
	} else if (firma instanceof M5) {
		console.log(` ${firma.name} -> Markasi BMW -> car model (${madel}) `);
	} else if (firma instanceof K9) {
		console.log(` ${firma.name} -> Markasi Kia -> car model (${madel}) `);
	}
}

mashina(new Spark("Chevroler", "Spark"), "Spark");
mashina(new M5("BMW", "M5"), "M5");
mashina(new K9("Kia", "K9"), "K9");
console.log("-----hato----");

mashina(new Spark("Chevroler", "M5"), "M5");
mashina(new M5("BMW", "Spark"), "Spark");
mashina(new K9("Kia", "Spark"), "Spark");





console.log("-----------------tel-----------------");