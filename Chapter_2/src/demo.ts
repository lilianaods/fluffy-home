// Type alias
type ContactName = string; // If I wanted to change all ContactName references

interface Contact {
    id: number;
    name: ContactName;
    birthDate?: Date; // This property is optional
};

let primaryContact: Contact = {
    birthDate: new Date('01-01-1990'),
    id: 12345,
    name: 'John Doe',
};