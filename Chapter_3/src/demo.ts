type ContactName = string;
type ContactBirthDate = Date | number | string;
type ContactStatus = 'active' | 'inactive' | 'new';

interface Contact {
    id: number;
    name: ContactName;
    birthDate?: Date | string | number;
    status?: ContactStatus;
};

let primaryContact: Contact = {
    id: 12345,
    name: 'Jamie Johnson',
    status: 'new',
};

// All of the properties of the Contact type
type ContactFields = keyof Contact;

const field: ContactFields = 'status';

function getValue<T, U extends keyof T>(source: T, propertyName: U) {
    return source[propertyName];
};

const value = getValue({ min: 0, max: 200 }, 'max');
