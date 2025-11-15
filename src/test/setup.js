import '@testing-library/jest-dom';
import { act } from 'react';

// Fix for React 19 compatibility
global.act = act;

