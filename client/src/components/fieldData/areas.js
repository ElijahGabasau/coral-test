export const areas = [
  { label: 'Business Areas', 
    name: 'business_areas', 
    sublabels: ['Finance', 'Operations', 'IT', 'Sales', 'Administarive', 'Legal', 'Marketing'],
    required: true,
    type: 'checkbox',
  },
  {
    label: 'Comments',
    name: 'comments',
    type: 'textarea',
    comment: 'let us know for whitch network you are requesting access, and any other comments you\'d like to leave us',
    required: true
  }
];
