function user(name: string, id: number, isPaid: boolean) {
    return `His name is ${name} with id no. ${id}.`
}

const user1 = user("Rahul", 456, true);
console.log(user1);

export { }