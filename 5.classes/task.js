class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this._state = 100;
		this.type = null;
	}

	fix() {
		if (this._state > 0 && this._state < 100) {
			this._state *= 1.5;
			if (this._state > 100) this._state = 100;
		}
	}

	set state(newState) {
		if (newState < 0) {
			this._state = 0;
		} else if (newState > 100) {
			this._state = 100;
		} else {
			this._state = newState;
		}
	}

	// Тернарный вариант
	/*set state(newState) {
	    this._state = newState < 0 ? 0 : (newState > 100 ? 100 : newState);
	}
	*/

	get state() {
		return this._state;
	}
}
