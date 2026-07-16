/**
 * Unit tests for Contact form validation logic
 */

import {
  validateName,
  validateEmail,
  validatePhone,
  validateMessage,
  validateContactForm,
} from '../validation';

describe('Contact Form Validation', () => {
  describe('validateName', () => {
    it('should pass with valid name', () => {
      const result = validateName('John Doe');
      expect(result.isValid).toBe(true);
      expect(result.error).toBeUndefined();
    });

    it('should fail with empty name', () => {
      const result = validateName('');
      expect(result.isValid).toBe(false);
      expect(result.error).toBe('Name is required');
    });

    it('should fail with only whitespace', () => {
      const result = validateName('   ');
      expect(result.isValid).toBe(false);
      expect(result.error).toBe('Name is required');
    });

    it('should fail with name less than 2 characters', () => {
      const result = validateName('A');
      expect(result.isValid).toBe(false);
      expect(result.error).toBe('Please enter a valid name (at least 2 characters)');
    });

    it('should pass with name exactly 2 characters', () => {
      const result = validateName('Ab');
      expect(result.isValid).toBe(true);
    });

    it('should pass with name containing special characters', () => {
      const result = validateName("O'Brien");
      expect(result.isValid).toBe(true);
    });

    it('should pass with name containing numbers', () => {
      const result = validateName('John Doe 3rd');
      expect(result.isValid).toBe(true);
    });
  });

  describe('validateEmail', () => {
    it('should pass with valid email', () => {
      const result = validateEmail('test@example.com');
      expect(result.isValid).toBe(true);
      expect(result.error).toBeUndefined();
    });

    it('should fail with empty email', () => {
      const result = validateEmail('');
      expect(result.isValid).toBe(false);
      expect(result.error).toBe('Email is required');
    });

    it('should fail with only whitespace', () => {
      const result = validateEmail('   ');
      expect(result.isValid).toBe(false);
      expect(result.error).toBe('Email is required');
    });

    it('should fail with email without @', () => {
      const result = validateEmail('testexample.com');
      expect(result.isValid).toBe(false);
      expect(result.error).toBe('Please enter a valid email address');
    });

    it('should fail with email without domain', () => {
      const result = validateEmail('test@');
      expect(result.isValid).toBe(false);
      expect(result.error).toBe('Please enter a valid email address');
    });

    it('should fail with email without extension', () => {
      const result = validateEmail('test@example');
      expect(result.isValid).toBe(false);
      expect(result.error).toBe('Please enter a valid email address');
    });

    it('should pass with email containing plus sign', () => {
      const result = validateEmail('test+tag@example.com');
      expect(result.isValid).toBe(true);
    });

    it('should pass with email containing dots', () => {
      const result = validateEmail('first.last@example.co.uk');
      expect(result.isValid).toBe(true);
    });

    it('should fail with email containing spaces', () => {
      const result = validateEmail('test @example.com');
      expect(result.isValid).toBe(false);
      expect(result.error).toBe('Please enter a valid email address');
    });
  });

  describe('validatePhone', () => {
    it('should pass with valid phone number', () => {
      const result = validatePhone('1234567890');
      expect(result.isValid).toBe(true);
      expect(result.error).toBeUndefined();
    });

    it('should fail with empty phone', () => {
      const result = validatePhone('');
      expect(result.isValid).toBe(false);
      expect(result.error).toBe('Phone number is required');
    });

    it('should fail with only whitespace', () => {
      const result = validatePhone('   ');
      expect(result.isValid).toBe(false);
      expect(result.error).toBe('Phone number is required');
    });

    it('should fail with phone less than 10 characters', () => {
      const result = validatePhone('123456789');
      expect(result.isValid).toBe(false);
      expect(result.error).toBe('Please enter a valid phone number');
    });

    it('should pass with phone exactly 10 characters', () => {
      const result = validatePhone('1234567890');
      expect(result.isValid).toBe(true);
    });

    it('should pass with international phone number', () => {
      const result = validatePhone('+923001234567');
      expect(result.isValid).toBe(true);
    });

    it('should pass with phone containing spaces', () => {
      const result = validatePhone('123 456 7890');
      expect(result.isValid).toBe(true);
    });
  });

  describe('validateMessage', () => {
    it('should pass with valid message', () => {
      const result = validateMessage('This is a test message');
      expect(result.isValid).toBe(true);
      expect(result.error).toBeUndefined();
    });

    it('should fail with empty message', () => {
      const result = validateMessage('');
      expect(result.isValid).toBe(false);
      expect(result.error).toBe('Message is required');
    });

    it('should fail with only whitespace', () => {
      const result = validateMessage('   ');
      expect(result.isValid).toBe(false);
      expect(result.error).toBe('Message is required');
    });

    it('should fail with message less than 10 characters', () => {
      const result = validateMessage('Hello');
      expect(result.isValid).toBe(false);
      expect(result.error).toBe('Please enter a message (at least 10 characters)');
    });

    it('should pass with message exactly 10 characters', () => {
      const result = validateMessage('1234567890');
      expect(result.isValid).toBe(true);
    });

    it('should pass with long message', () => {
      const result = validateMessage('This is a very long message that contains multiple sentences and should definitely pass validation.');
      expect(result.isValid).toBe(true);
    });
  });

  describe('validateContactForm', () => {
    const validFormData = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '1234567890',
      message: 'This is a test message',
    };

    it('should pass with all valid fields', () => {
      const result = validateContactForm(validFormData);
      expect(result.isValid).toBe(true);
      expect(Object.keys(result.errors)).toHaveLength(0);
    });

    it('should fail with invalid name', () => {
      const result = validateContactForm({
        ...validFormData,
        name: 'A',
      });
      expect(result.isValid).toBe(false);
      expect(result.errors.name).toBeDefined();
    });

    it('should fail with invalid email', () => {
      const result = validateContactForm({
        ...validFormData,
        email: 'invalid-email',
      });
      expect(result.isValid).toBe(false);
      expect(result.errors.email).toBeDefined();
    });

    it('should fail with invalid phone', () => {
      const result = validateContactForm({
        ...validFormData,
        phone: '123',
      });
      expect(result.isValid).toBe(false);
      expect(result.errors.phone).toBeDefined();
    });

    it('should fail with invalid message', () => {
      const result = validateContactForm({
        ...validFormData,
        message: 'Short',
      });
      expect(result.isValid).toBe(false);
      expect(result.errors.message).toBeDefined();
    });

    it('should fail with multiple invalid fields', () => {
      const result = validateContactForm({
        name: '',
        email: 'invalid',
        phone: '123',
        message: 'Hi',
      });
      expect(result.isValid).toBe(false);
      expect(result.errors.name).toBeDefined();
      expect(result.errors.email).toBeDefined();
      expect(result.errors.phone).toBeDefined();
      expect(result.errors.message).toBeDefined();
      expect(Object.keys(result.errors)).toHaveLength(4);
    });

    it('should return correct error messages', () => {
      const result = validateContactForm({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      expect(result.errors.name).toBe('Name is required');
      expect(result.errors.email).toBe('Email is required');
      expect(result.errors.phone).toBe('Phone number is required');
      expect(result.errors.message).toBe('Message is required');
    });
  });
});
