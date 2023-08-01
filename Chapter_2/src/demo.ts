interface Contact {
    id: number;
    name: string;
};

function clone(source: Contact): Contact {
    return Object.apply({}, source);
};

const a: Contact = { id: 123, name: 'Homer Simpsom' };
const b = clone(a);