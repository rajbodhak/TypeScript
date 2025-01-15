function identity(arg: string): string {
    return arg;
}

function identityOne(arg: any): any {
    return arg;
}

identity("Ball");
identityOne([1, 2, 3, 4]);

//Reusable Components

function genericsIdentity<T>(arg: T): T {
    return arg;
}

genericsIdentity("Hello World");
genericsIdentity<string>("Hey! Bro");
genericsIdentity(2);
genericsIdentity<boolean>(false)


function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}

loggingIdentity([3, 4, 5]) //Now Type is number
loggingIdentity([3, 4, 5, "Hello"]) //In this case Type of Array is number | string
loggingIdentity([1, 2, 3, "hello", true]) // number | string | boolean