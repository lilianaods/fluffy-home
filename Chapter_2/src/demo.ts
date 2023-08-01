interface Contact {
    id: number;
    name: string;
    // clone(name: string): Contact;
};

interface UserContact<TExternalId> {
    id: number;
    name: string;
    username: string;
    externalId: TExternalId;
    // loadExternalId(): Task<TExternalId>;
};

// function clone(source: Contact, func: (source: Contact) => Contact): Contact {
function clone<T1, T2 extends T1>(source: T1): T2 {
    return Object.apply({}, source);
};

const a: Contact = { id: 123, name: 'Homer Simpsom' };
const b = clone<Contact, UserContact<string>>(a);

const dateRange = { startDate: Date.now(), endDate: Date.now() };
const dateRangeCopy = clone(dateRange);

