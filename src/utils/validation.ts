/**
 * Validation utility functions for Contact form
 */

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

/**
 * Validates name field
 * - Must not be empty
 * - Must be at least 2 characters long
 */
export function validateName(name: string): ValidationResult {
  if (!name || name.trim().length === 0) {
    return {
      isValid: false,
      error: 'Name is required',
    };
  }

  if (name.trim().length < 2) {
    return {
      isValid: false,
      error: 'Please enter a valid name (at least 2 characters)',
    };
  }

  return { isValid: true };
}

/**
 * Validates email field
 * - Must not be empty
 * - Must match standard email format
 */
export function validateEmail(email: string): ValidationResult {
  if (!email || email.trim().length === 0) {
    return {
      isValid: false,
      error: 'Email is required',
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      error: 'Please enter a valid email address',
    };
  }

  return { isValid: true };
}

/**
 * Validates phone field
 * - Must not be empty
 * - Must be at least 10 characters long
 */
export function validatePhone(phone: string): ValidationResult {
  if (!phone || phone.trim().length === 0) {
    return {
      isValid: false,
      error: 'Phone number is required',
    };
  }

  if (phone.length < 10) {
    return {
      isValid: false,
      error: 'Please enter a valid phone number',
    };
  }

  return { isValid: true };
}

/**
 * Validates message field
 * - Must not be empty
 * - Must be at least 10 characters long
 */
export function validateMessage(message: string): ValidationResult {
  if (!message || message.trim().length === 0) {
    return {
      isValid: false,
      error: 'Message is required',
    };
  }

  if (message.trim().length < 10) {
    return {
      isValid: false,
      error: 'Please enter a message (at least 10 characters)',
    };
  }

  return { isValid: true };
}

/**
 * Validates entire contact form
 * Returns all validation errors
 */
export function validateContactForm(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): {
  isValid: boolean;
  errors: {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  };
} {
  const nameValidation = validateName(data.name);
  const emailValidation = validateEmail(data.email);
  const phoneValidation = validatePhone(data.phone);
  const messageValidation = validateMessage(data.message);

  const errors: {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  } = {};

  if (!nameValidation.isValid) {
    errors.name = nameValidation.error;
  }
  if (!emailValidation.isValid) {
    errors.email = emailValidation.error;
  }
  if (!phoneValidation.isValid) {
    errors.phone = phoneValidation.error;
  }
  if (!messageValidation.isValid) {
    errors.message = messageValidation.error;
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
