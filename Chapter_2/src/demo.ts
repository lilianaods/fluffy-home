enum ContactStatus {
    Active = 'active',
    Inactive = 'inactive',
    New = 'new',
};

interface Contact {
    id: number;
    name: string;
    birthDate?: Date; // This property is optional
    status: ContactStatus;
};

let primaryContact: Contact = {
    birthDate: new Date('01-01-1990'),
    id: 12345,
    name: 'John Doe',
    status: ContactStatus.Active,
};