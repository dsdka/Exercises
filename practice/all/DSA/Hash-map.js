class HashMap {
    constructor(hashFunc, equalsFunc) {
        this.value ={};
        this.count=0;
        this.hashFunc= hashFunc || ((key) => key.toString());
        this.equalsFunc = equalsFunc || ((k1, k2) => (k1===k2));
    }
    set(key, value) {
        const keyHash = this.hashFunc(key);
        if ( typeof this.value[keyHash]==='undefined') {
            this.value[keyHash]=[];
        }
    }
}