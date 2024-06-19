export class Epigraph {

    name: String;
    date_in: Date;
    date_out: Date;
    title: String;

    constructor(name: String, date_in: Date, date_out: Date, title: String) {
        this.name = name;
        this.date_in = date_in;
        this.date_out = date_out;
        this.title = title;
    }

}

export class Artless {

    name: Array<String>;
    framework: String;
    date_in: Date;
    date_out: Date;
    description: String; 
    epigraph: Epigraph;

    constructor(name: Array<String>, framework: String, date_in: Date, date_out: Date, description: String, epigraph: Epigraph) {
        this.name = name;
        this.framework = framework;
        this.date_in = date_in;
        this.date_out = date_out;
        this.description = description;
        this.epigraph = epigraph;
    }

}