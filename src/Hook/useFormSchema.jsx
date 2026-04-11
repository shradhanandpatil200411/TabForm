import * as z from "zod";

function buildFormSchema(schema) {
  if (!schema || !Array.isArray(schema)) return z.object({});

  const schemaObj = {};

  schema.forEach((field) => {
    const name = field.schemaName;
    if (!name) return;

    let baseSchema;

    if (field.type === "nested" && field.fields) {
      schemaObj[name] = z.object(buildFormSchema(field.fields));
      return;
    }

    switch (field.type) {
      case "email":
        baseSchema = z
          .string()
          .email(field.errorMessage || "Invalid email address");
        break;

      case "text":
      case "string":
        baseSchema = z
          .string({
            required_error: field.errorMessage || "This field is required",
          })
          .min(
            field.minLength?.value || 1,
            field.minLength?.errorMessage || "Too short",
          )
          .max(
            field.maxLength?.value || 999,
            field.maxLength?.errorMessage || "Too long",
          );
        break;

      case "number":
        baseSchema = z.coerce
          .number({ invalid_type_error: "Please enter a valid number" })
          .min(
            field.minLength?.value || 1,
            field.minLength?.errorMessage || "Value too low",
          );
        break;
      case "dropdown":
        {
          const validOptions = field.enum;

          if (validOptions && validOptions.length > 0) {
            baseSchema = z
              .string()
              .default(validOptions[0])
              .refine((val) => validOptions.includes(val), {
                message: "Invalid selection",
              });
          } else {
            baseSchema = z.string();
          }
        }
        break;

      case "date":
        baseSchema = z.coerce.date().refine((d) => d.getTime() > Date.now(), {
          message: field.errorMessage || "Date must be in the future",
        });
        break;

      default:
        return;
    }

    if (field.required === false) {
      schemaObj[name] = baseSchema.optional();
    } else {
      schemaObj[name] = baseSchema;
    }
  });

  return schemaObj;
}

function useFormSchema(schema) {
  if (!schema || !Array.isArray(schema)) {
    return { formSchema: z.object({}) };
  }
  return { formSchema: z.object(buildFormSchema(schema)) };
}

export default useFormSchema;
