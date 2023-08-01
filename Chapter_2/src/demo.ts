interface Contact extends Address {
    id: number;
    name: string;
    birthDate?: Date; // This property is optional
};

interface Address {
    line1: string;
    line2: string;
    province: string;
    region: string;
    postalCode: string;
};

let primaryContact: Contact = {
    birthDate: new Date('01-01-1990'),
    id: 12345,
    name: 'John Doe',
    line1: '123',
    line2: '456',
    postalCode: '123-456',
    province: 'Province',
    region: 'Region',
};