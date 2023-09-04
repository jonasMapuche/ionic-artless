export class ItemArtless {

    time_line: Date;
    framework: Array<string>;
    name: Array<string>;
    date_in: Date;
    date_out: Date;
    check: Boolean;
    description: string;

    constructor(time_line: Date, framework: Array<string>, name: Array<string>, date_in: Date, date_out: Date, check: Boolean, description: string) {
        this.time_line = time_line;
        this.framework = framework;
        this.name = name;
        this.date_in = date_in;
        this.date_out = date_out;
        this.check = check;
        this.description = description;
    }

}

export class Artless {

    name: Array<String>;
    artless: ItemArtless;

    constructor(name: Array<string>, artless: ItemArtless) {
        this.name = name;
        this.artless = artless;
    }

}