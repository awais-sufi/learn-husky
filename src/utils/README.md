# Utils

This directory contains utility functions and constants used throughout the application.

## 📁 Structure

```
src/utils/
├── utils.ts        # Utility functions
├── constants.ts    # Application constants
├── index.ts        # Exports
└── README.md       # Documentation
```

## 🛠️ Utility Functions

### `cn(...inputs: ClassValue[]): string`

Merges Tailwind CSS classes using clsx and tailwind-merge.

```tsx
import { cn } from '@/utils';

const className = cn(
  'px-4 py-2',
  isActive && 'bg-blue-500',
  isDisabled && 'opacity-50'
);
```

### `formatString(str: string, ...args: string[]): string`

Formats strings with placeholders.

```tsx
import { formatString } from '@/utils';

const message = formatString('Hello {0}, welcome to {1}!', 'John', 'Alasan');
// Result: "Hello John, welcome to Alasan!"
```

### `generateId(prefix = 'id'): string`

Generates unique IDs with optional prefix.

```tsx
import { generateId } from '@/utils';

const id = generateId('user'); // "user-abc123def"
const randomId = generateId(); // "id-xyz789ghi"
```

### `isEmpty(value: unknown): boolean`

Checks if a value is empty.

```tsx
import { isEmpty } from '@/utils';

isEmpty(''); // true
isEmpty([]); // true
isEmpty({}); // true
isEmpty('hello'); // false
isEmpty(['item']); // false
```

## 📊 Constants

### Application Configuration

```tsx
import { APP_CONFIG, API_CONFIG } from '@/utils';

console.log(APP_CONFIG.NAME); // "Alasan Onboarding Panel"
console.log(API_CONFIG.BASE_URL); // "https://api.alasan.com"
```

### Storage Keys

```tsx
import { STORAGE_KEYS } from '@/utils';

localStorage.setItem(STORAGE_KEYS.USER_PREFERENCES, userPrefs);
const theme = localStorage.getItem(STORAGE_KEYS.THEME);
```

### Routes

```tsx
import { ROUTES } from '@/utils';

router.push(ROUTES.DASHBOARD);
// Instead of: router.push('/dashboard');
```

### Validation Rules

```tsx
import { VALIDATION } from '@/utils';

const isValidEmail = VALIDATION.EMAIL_REGEX.test(email);
const isPasswordValid = password.length >= VALIDATION.PASSWORD_MIN_LENGTH;
```

### Error Messages

```tsx
import { ERROR_MESSAGES } from '@/utils';

setError(ERROR_MESSAGES.INVALID_EMAIL);
// Instead of: setError('Please enter a valid email address');
```

### Theme Configuration

```tsx
import { THEME } from '@/utils';

const primaryColor = THEME.COLORS.PRIMARY; // "#3B82F6"
const breakpoint = THEME.BREAKPOINTS.MD; // "768px"
```

### HTTP Status Codes

```tsx
import { HTTP_STATUS } from '@/utils';

if (response.status === HTTP_STATUS.UNAUTHORIZED) {
  // Handle unauthorized
}
```

### Debounce Delays

```tsx
import { DEBOUNCE_DELAYS, useDebounce } from '@/hooks';

const debouncedSearch = useDebounce(searchTerm, DEBOUNCE_DELAYS.SEARCH);
```

### Feature Flags

```tsx
import { FEATURE_FLAGS } from '@/utils';

if (FEATURE_FLAGS.DARK_MODE) {
  // Enable dark mode
}
```

## 🎯 Usage Examples

### Import Individual Constants

```tsx
import { ROUTES, ERROR_MESSAGES, VALIDATION } from '@/utils';
```

### Import All Constants

```tsx
import * as CONSTANTS from '@/utils';
```

### Import Default Constants Object

```tsx
import { CONSTANTS } from '@/utils';

const apiUrl = CONSTANTS.API_CONFIG.BASE_URL;
```

### Using in Components

```tsx
import React from 'react';
import { ROUTES, ERROR_MESSAGES, VALIDATION } from '@/utils';
import { Button, Input } from '@/components';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!VALIDATION.EMAIL_REGEX.test(email)) {
      setError(ERROR_MESSAGES.INVALID_EMAIL);
      return;
    }
    // Submit logic
  };

  return (
    <form>
      <Input
        type='email'
        value={email}
        onChange={e => setEmail(e.target.value)}
        error={!!error}
        errorText={error}
      />
      <Button onClick={handleSubmit}>Login</Button>
    </form>
  );
}
```

## 📝 Development Guidelines

### Adding New Constants

1. **Group Related Constants**: Keep related constants together
2. **Use Descriptive Names**: Make constant names self-explanatory
3. **Add JSDoc Comments**: Document complex constants
4. **Use `as const`**: Ensure type safety
5. **Export from Index**: Always export from index.ts

### Example:

```tsx
// New constant group
export const NEW_FEATURE = {
  ENABLED: true,
  VERSION: '2.0.0',
  CONFIG: {
    OPTION_A: 'value_a',
    OPTION_B: 'value_b',
  },
} as const;
```

### Adding New Utility Functions

1. **Pure Functions**: Functions should be pure when possible
2. **TypeScript**: Include proper type definitions
3. **JSDoc**: Document all functions
4. **Error Handling**: Include proper error handling
5. **Testing**: Write tests for complex functions

### Example:

```tsx
/**
 * Utility function to format currency
 * @param amount - The amount to format
 * @param currency - The currency code
 * @returns Formatted currency string
 */
export function formatCurrency(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}
```

## 🎯 Benefits

- **Consistency**: Centralized constants ensure consistency
- **Maintainability**: Easy to update values in one place
- **Type Safety**: TypeScript ensures correct usage
- **Documentation**: Clear documentation for all utilities
- **Reusability**: Utilities can be used across the application
- **Performance**: Constants are evaluated at build time

## 🔧 Best Practices

1. **Use Constants**: Don't hardcode values, use constants
2. **Group Related Values**: Keep related constants together
3. **Use Descriptive Names**: Make names self-explanatory
4. **Document Complex Logic**: Add JSDoc for complex functions
5. **Test Utilities**: Write tests for utility functions
6. **Keep Pure**: Make functions pure when possible
7. **Handle Errors**: Include proper error handling
8. **Export Everything**: Always export from index.ts
