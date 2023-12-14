export class Client {
    name: string;
    email: string;
    address: string;
    password: string;

    /**
     *
     */
    constructor(name: string, email: string, address: string, password: string) {
        this.name = name;
        this.email = email;
        this.address = address;
        this.password = password;
    }

}
