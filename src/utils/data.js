export const data = [
  {
    heading: "Personal Information",
    id: "personalInfo",
    inputFields: [
      {
        id: 1,
        label: "First Name",
        registerName: "firstName",
        type: "text",
        option: [],
      },
      {
        id: 2,
        label: "Last Name",
        registerName: "lastName",
        type: "text",
        option: [],
      },
      {
        id: 3,
        label: "Email",
        registerName: "email",
        type: "email",
        option: [],
      },
      // Keep type 'text' for phone numbers so we can control length easily
      {
        id: 4,
        label: "Phone Number",
        registerName: "phoneNumber",
        type: "text",
        option: [],
      },
    ],
    schema: [
      {
        schemaName: "firstName",
        type: "string",
        minLength: { value: 1, errorMessage: "First name is required" },
        maxLength: { value: 20, errorMessage: "Maximum limit reached" },
      },
      {
        schemaName: "lastName",
        type: "string",
        minLength: { value: 1, errorMessage: "Last name is required" },
        maxLength: { value: 20, errorMessage: "Maximum limit reached" },
      },
      {
        schemaName: "email",
        type: "email",
        errorMessage: "Please enter a valid email id",
      },
      {
        schemaName: "phoneNumber",
        type: "string", // Changed to string for length validation
        minLength: {
          value: 10,
          errorMessage: "Phone number must be exactly 10 digits",
        },
        maxLength: {
          value: 10,
          errorMessage: "Phone number must be exactly 10 digits",
        },
        regex: "^[0-9]+$", // Ensures only numbers are typed
      },
    ],
  },
  {
    heading: "Professional Details",
    id: "professionalInfo",
    inputFields: [
      {
        id: 5,
        label: "Company",
        registerName: "companyName",
        type: "text",
        option: [],
      },
      {
        id: 6,
        label: "Position",
        registerName: "position",
        type: "text",
        option: [],
      },
      {
        id: 7,
        label: "Years of Experience",
        registerName: "experience",
        type: "dropdown",
        isHaveDropdown: true,
        option: ["0-2 Years", "3-5 Years", "6-10 Years", "10+ Years"],
      },
      {
        id: 8,
        label: "Industry",
        registerName: "industry",
        type: "text",
        option: [],
      },
    ],
    schema: [
      {
        schemaName: "companyName",
        type: "string",
        minLength: { value: 1, errorMessage: "Company name is required" },
        maxLength: { value: 100, errorMessage: "Maximum limit reached" },
      },
      {
        schemaName: "position",
        type: "string",
        minLength: { value: 1, errorMessage: "Position is required" },
        maxLength: { value: 50, errorMessage: "Maximum limit reached" },
      },
      {
        schemaName: "experience",
        type: "dropdown",
        enum: ["0-2 Years", "3-5 Years", "6-10 Years", "10+ Years"],
        errorMessage: "Please select your years of experience",
      },
      {
        schemaName: "industry",
        type: "string",
        minLength: { value: 1, errorMessage: "Industry is required" },
        maxLength: { value: 50, errorMessage: "Maximum limit reached" },
      },
    ],
  },
  {
    heading: "Billing Information",
    id: "billingInfo",
    inputFields: [
      {
        id: 9,
        label: "Card Number",
        registerName: "cardNumber",
        type: "text",
        option: [],
      },
      {
        id: 10,
        label: "CardHolder Name",
        registerName: "cardHolderName",
        type: "text",
        option: [],
      },
      {
        id: 11,
        label: "Expiry Date",
        registerName: "expiryDate",
        type: "date",
        option: [],
      },
      {
        id: 12,
        label: "CVV",
        registerName: "cvv",
        type: "password",
        option: [],
      },
    ],
    schema: [
      {
        schemaName: "cardNumber",
        type: "string",
        minLength: { value: 16, errorMessage: "Card number must be 16 digits" },
        maxLength: { value: 16, errorMessage: "Card number must be 16 digits" },
        regex: "^[0-9]+$",
      },
      {
        schemaName: "cardHolderName",
        type: "string",
        minLength: { value: 1, errorMessage: "Cardholder name is required" },
        maxLength: { value: 50, errorMessage: "Maximum limit reached" },
      },
      {
        schemaName: "cvv",
        type: "string",
        minLength: { value: 3, errorMessage: "Invalid CVV" },
        maxLength: { value: 4, errorMessage: "Invalid CVV" },
        regex: "^[0-9]+$",
      },
      {
        schemaName: "expiryDate",
        type: "date",
        errorMessage: "Invalid expiry date",
      },
    ],
  },
];
