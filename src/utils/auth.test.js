import { describe, it, expect, beforeEach } from 'vitest';
import { login, logout, isAuthenticated, getCurrentUser } from './auth';

describe('Auth utilities', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('login', () => {
    it('returns true for valid credentials', () => {
      const result = login('admin', 'TESCare2024!');
      expect(result).toBe(true);
      expect(isAuthenticated()).toBe(true);
    });

    it('returns false for invalid credentials', () => {
      const result = login('admin', 'wrongpassword');
      expect(result).toBe(false);
      expect(isAuthenticated()).toBe(false);
    });

    it('stores user data in localStorage', () => {
      login('admin', 'TESCare2024!');
      const user = getCurrentUser();
      expect(user).toBeTruthy();
      expect(user.username).toBe('admin');
      expect(user.role).toBe('admin');
    });
  });

  describe('logout', () => {
    it('clears authentication data', () => {
      login('admin', 'TESCare2024!');
      expect(isAuthenticated()).toBe(true);
      logout();
      expect(isAuthenticated()).toBe(false);
    });
  });

  describe('isAuthenticated', () => {
    it('returns false when not logged in', () => {
      expect(isAuthenticated()).toBe(false);
    });

    it('returns true when logged in', () => {
      login('admin', 'TESCare2024!');
      expect(isAuthenticated()).toBe(true);
    });
  });

  describe('getCurrentUser', () => {
    it('returns null when not logged in', () => {
      expect(getCurrentUser()).toBeNull();
    });

    it('returns user data when logged in', () => {
      login('admin', 'TESCare2024!');
      const user = getCurrentUser();
      expect(user).toBeTruthy();
      expect(user.username).toBe('admin');
    });
  });
});

