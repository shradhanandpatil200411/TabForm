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
      {
        id: 4,
        label: "Phone Number",
        registerName: "phoneNumber",
        type: "text",
        option: [],
      },
      {
        id: "3A",
        label: "Residential Information",
        registerName: "residentialInfo",
        type: "section", // ← trigger for recursion
        option: [],
        fields: [
          // ← child fields (same structure!)

          {
            id: "3a",
            label: "Street Address",
            registerName: "residentialInfo.street",
            type: "text",
            option: [],
          },
          {
            id: "3b",
            label: "City",
            registerName: "residentialInfo.city",
            type: "text",
            option: [],
          },

          // ✅ Level 2 — Section inside Section!
          {
            id: "3c",
            label: "Location Details",
            registerName: "residentialInfo.locationDetails",
            type: "section", // ← recursion again!
            option: [],
            fields: [
              // ← grandchild fields

              {
                id: "3c1",
                label: "State",
                registerName: "residentialInfo.locationDetails.state",
                type: "dropdown",
                option: ["Maharashtra", "Delhi", "Karnataka"],
              },
              {
                id: "3c2",
                label: "Pin Code",
                registerName: "residentialInfo.locationDetails.pinCode",
                type: "text",
                option: [],
              },

              // ✅ Level 3 — Even deeper!
              {
                id: "3c3",
                label: "Landmark",
                registerName: "residentialInfo.locationDetails.landmark",
                type: "section",
                option: [],
                fields: [
                  {
                    id: "3c3a",
                    label: "Near",
                    registerName:
                      "residentialInfo.locationDetails.landmark.near",
                    type: "text",
                    option: [],
                  },
                  {
                    id: "3c3b",
                    label: "Distance (km)",
                    registerName:
                      "residentialInfo.locationDetails.landmark.distance",
                    type: "text",
                    option: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],

    schema: [
      {
        required: true,
        schemaName: "firstName",
        type: "string",
        minLength: { value: 1, errorMessage: "First name is required" },
        maxLength: { value: 20, errorMessage: "Maximum limit reached" },
      },
      {
        required: true,
        schemaName: "lastName",
        type: "string",
        minLength: { value: 1, errorMessage: "Last name is required" },
        maxLength: { value: 20, errorMessage: "Maximum limit reached" },
      },
      {
        required: true,
        schemaName: "email",
        type: "email",
        errorMessage: "Please enter a valid email id",
      },
      {
        required: true,
        schemaName: "phoneNumber",
        type: "string",
        minLength: {
          value: 10,
          errorMessage: "Phone number must be exactly 10 digits",
        },
        maxLength: {
          value: 10,
          errorMessage: "Phone number must be exactly 10 digits",
        },
        regex: "^[0-9]+$",
      },
      // Inside data.js -> personalInfo object -> schema array
      {
        schemaName: "residentialInfo",
        type: "nested",
        fields: [
          {
            schemaName: "street",
            type: "string",
            required: true,
            minLength: { value: 1, errorMessage: "Street is required" },
            maxLength: { value: 100, errorMessage: "Too long" },
          },
          {
            schemaName: "city",
            type: "string",
            required: true,
            minLength: { value: 1, errorMessage: "City is required" },
            maxLength: { value: 50, errorMessage: "Too long" },
          },
          // FIX: Add the missing locationDetails nested block here
          {
            schemaName: "locationDetails",
            type: "nested",
            fields: [
              {
                schemaName: "state",
                type: "dropdown",
                required: true,
                enum: ["Maharashtra", "Delhi", "Karnataka"],
                errorMessage: "Please select a state",
              },
              {
                schemaName: "pinCode",
                type: "string",
                required: true,
                minLength: { value: 6, errorMessage: "Invalid pin code" },
                maxLength: { value: 6, errorMessage: "Invalid pin code" },
                regex: "^[0-9]+$",
              },
              // FIX: Add the missing landmark nested block here
              {
                schemaName: "landmark",
                type: "nested",
                fields: [
                  {
                    schemaName: "near",
                    type: "string",
                    required: true,
                    errorMessage: "Nearby landmark is required",
                  },
                  {
                    schemaName: "distance",
                    type: "string",
                    required: true,
                    errorMessage: "Distance is required",
                  },
                ],
              },
            ],
          },
        ],
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
        required: true,
        schemaName: "companyName",
        type: "string",
        minLength: { value: 1, errorMessage: "Company name is required" },
        maxLength: { value: 100, errorMessage: "Maximum limit reached" },
      },
      {
        required: true,
        schemaName: "position",
        type: "string",
        minLength: { value: 1, errorMessage: "Position is required" },
        maxLength: { value: 50, errorMessage: "Maximum limit reached" },
      },
      {
        required: true,
        schemaName: "experience",
        type: "dropdown",
        enum: ["0-2 Years", "3-5 Years", "6-10 Years", "10+ Years"],
        errorMessage: "Please select your years of experience",
      },
      {
        required: true,
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
        required: true,
        schemaName: "cardNumber",
        type: "string",
        minLength: { value: 16, errorMessage: "Card number must be 16 digits" },
        maxLength: { value: 16, errorMessage: "Card number must be 16 digits" },
        regex: "^[0-9]+$",
      },
      {
        required: true,
        schemaName: "cardHolderName",
        type: "string",
        minLength: { value: 1, errorMessage: "Cardholder name is required" },
        maxLength: { value: 50, errorMessage: "Maximum limit reached" },
      },
      {
        required: true,
        schemaName: "cvv",
        type: "string",
        minLength: { value: 3, errorMessage: "Invalid CVV" },
        maxLength: { value: 4, errorMessage: "Invalid CVV" },
        regex: "^[0-9]+$",
      },
      {
        required: true,
        schemaName: "expiryDate",
        type: "date",
        errorMessage: "Invalid expiry date",
      },
    ],
  },
  {
    id: "formEnd",
  },
];
