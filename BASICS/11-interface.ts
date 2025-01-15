// Why interface is important

interface PhysicalReport {
    height: number;
    weight: number;
    bodyCount: number;
}

class HunniSingur implements PhysicalReport {
    constructor(
        public height: number,
        public weight: number,
        public bodyCount: number
    ) { }
}

interface jhatuSingur {
    isJhatu: boolean;
}

class budshah implements PhysicalReport, jhatuSingur {
    constructor(
        public height: number,
        public weight: number,
        public bodyCount: number,
        public isJhatu: boolean
    ) { }
}