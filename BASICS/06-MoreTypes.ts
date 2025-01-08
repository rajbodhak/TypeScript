//ReadOnly Type
type User = {
    readonly _id: number;
    name: string;
    email: string;
    phoneNo: number;
    isActive: boolean;
}

let userOne: User = {
    _id: 7584,
    name: "Rahul",
    email: "rahul@dev",
    phoneNo: 8574961230,
    isActive: true
}

userOne.phoneNo = 7852963262;
// userOne._id = 78795; //Not editable beacuse its a readonly property

