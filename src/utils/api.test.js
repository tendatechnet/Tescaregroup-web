import { describe, it, expect, vi, beforeEach } from 'vitest';
import { validateEmail, validatePhone, formatPhone } from './api';

describe('API Utilities', () => {
  describe('validateEmail', () => {
    it('validates correct email addresses', () => {
      expect(validateEmail('test@example.com')).toBe(true);
      expect(validateEmail('user.name@domain.co.uk')).toBe(true);
      expect(validateEmail('test+tag@example.com')).toBe(true);
    });

    it('rejects invalid email addresses', () => {
      expect(validateEmail('invalid')).toBe(false);
      expect(validateEmail('invalid@')).toBe(false);
      expect(validateEmail('@example.com')).toBe(false);
      expect(validateEmail('test@')).toBe(false);
      expect(validateEmail('')).toBe(false);
    });
  });

  describe('validatePhone', () => {
    it('validates Australian phone numbers with +61', () => {
      expect(validatePhone('+61 2 1234 5678')).toBe(true);
      expect(validatePhone('+61212345678')).toBe(true);
      expect(validatePhone('+61 3 9876 5432')).toBe(true);
    });

    it('validates Australian phone numbers starting with 0', () => {
      expect(validatePhone('02 1234 5678')).toBe(true);
      expect(validatePhone('0212345678')).toBe(true);
      expect(validatePhone('03 9876 5432')).toBe(true);
    });

    it('rejects invalid phone numbers', () => {
      expect(validatePhone('123')).toBe(false);
      expect(validatePhone('1234567890')).toBe(false);
      expect(validatePhone('+1 234 567 8900')).toBe(false);
      expect(validatePhone('')).toBe(false);
    });
  });

  describe('formatPhone', () => {
    it('formats phone numbers with +61', () => {
      expect(formatPhone('+61212345678')).toBe('+61 2 1234 5678');
    });

    it('formats phone numbers starting with 0', () => {
      expect(formatPhone('0212345678')).toBe('02 1234 5678');
    });

    it('returns original if format is unknown', () => {
      expect(formatPhone('123456')).toBe('123456');
    });
  });
});

