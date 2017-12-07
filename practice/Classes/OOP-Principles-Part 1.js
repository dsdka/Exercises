class People {
    constructor(name) {
        this.name=name;
    }
}
class Students extends People {
    constructor(id, name) {
        super(name);
        this.id=id;
    }
}
class Teacher extends People {
    constructor(name, disciplines) {
        super(name);
        this.disciplines=disciplines;
    }
}
