type ContactName = string;
type ContactBirthDate = Date | number | string;

interface Address {
    line1: string;
    line2: string;
    province: string;
    region: string;
    postalCode: string;
};

enum ContactStatus {
    Active = 'active',
    Inactive = 'inactive',
    New = 'new'
};

interface Contact {
    id: number;
    name: ContactName;
    birthDate?: Date | string | number;
    status?: ContactStatus;
};


function getBirthDate(contact: Contact) {
    if (typeof contact.birthDate === 'number') {
        return new Date(contact.birthDate);
    }
    else if (typeof contact.birthDate === 'string') {
        return Date.parse(contact.birthDate);
    }
    else {
        return contact.birthDate;
    }
};

let primaryContact: Contact = {
    id: 12345,
    name: 'Jamie Johnson';
};
