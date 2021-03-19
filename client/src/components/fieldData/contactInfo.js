export const contactInfo = [
  { label: 'Salutation', name: 'salutation', required: true, type: 'select', options: ['Mr', 'Mrs', 'Ms', 'Miss', 'Dr', 'Mx' ] },
  { label: 'First name', name: 'first_name', required: true },
  { label: 'Middle name', name: 'middle_name' },
  { label: 'Last name', name: 'last_name', required: true },
  { label: 'Company', name: 'company', required: true },
  { label: 'Title', name: 'title', required: true },
  { label: 'Email', name: 'email', required: true, type: 'email', confirm: true, regexVal:'^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$' },
  { label: 'Phone', name: 'phone', required: true, type: 'tel' },
  { label: 'Fax', name: 'fax', type: 'tel' },
  { label: 'Mobile', name: 'mobile', type: 'tel' },
];
