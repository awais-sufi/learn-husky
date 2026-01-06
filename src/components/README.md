# Atomic Design System

This project follows the **Atomic Design** methodology by Brad Frost, which provides a clear methodology for crafting design systems. The atomic design system is based on the concept of building complex UI components from simpler, reusable building blocks.

## 🏗️ Structure Overview

```
src/components/
├── atoms/           # Basic building blocks
├── molecules/       # Simple groups of UI elements
├── organisms/       # Complex UI components
├── templates/       # Page-level objects
└── pages/          # Specific instances of templates
```

## 📦 Atomic Levels

### 1. Atoms

**Basic building blocks of our design system**

Atoms are the foundational building blocks that comprise all our user interfaces. These include basic HTML elements like form labels, inputs, buttons, and others that can't be broken down any further without ceasing to be functional.

**Location**: `src/components/atoms/`

**Examples**:

- `Text` - Typography component with variants
- `Button` - Interactive button element
- `Input` - Form input field
- `Icon` - Icon component

**Usage**:

```tsx
import { Text, Button, Input } from '@/components/atoms';

<Text variant="h1" color="primary">Hello World</Text>
<Button variant="primary" size="md">Click me</Button>
<Input placeholder="Enter your name" />
```

### 2. Molecules

**Simple groups of UI elements functioning together**

Molecules are relatively simple groups of UI elements functioning together as a unit. For example, a form label, search input, and button can join together to create a search form molecule.

**Location**: `src/components/molecules/`

**Examples**:

- `Card` - Container with content
- `FormField` - Input with label and validation
- `SearchBox` - Input with search functionality
- `NavigationItem` - Link with icon and text

**Usage**:

```tsx
import { Card, FormField } from '@/components/molecules';

<Card variant='elevated' padding='lg'>
  <FormField
    label='Email'
    required
    inputProps={{ placeholder: 'Enter your email' }}
  />
</Card>;
```

### 3. Organisms

**Complex UI components made of groups of molecules and/or atoms**

Organisms are relatively complex UI components composed of groups of molecules and/or atoms and/or other organisms. These organisms form distinct sections of an interface.

**Location**: `src/components/organisms/`

**Examples**:

- `Header` - Site header with navigation
- `Footer` - Site footer
- `Navigation` - Main navigation menu
- `ProductGrid` - Grid of product cards

### 4. Templates

**Page-level objects that place components into a layout**

Templates are page-level objects that place components into a layout and articulate the design's underlying content structure.

**Location**: `src/components/templates/`

**Examples**:

- `MainLayout` - Default page layout
- `AuthLayout` - Authentication pages layout
- `DashboardLayout` - Dashboard pages layout

### 5. Pages

**Specific instances of templates that show what a UI looks like with real content**

Pages are specific instances of templates that show what a UI looks like with real content in place.

**Location**: `src/components/pages/`

**Examples**:

- `HomePage` - Home page component
- `LoginPage` - Login page component
- `DashboardPage` - Dashboard page component

## 🎨 Design Principles

### 1. Single Responsibility

Each component should have one clear purpose and responsibility.

### 2. Composition over Configuration

Build complex components by composing simpler ones rather than adding configuration options.

### 3. Consistent API

All components follow similar prop patterns and naming conventions.

### 4. Accessibility First

All components are built with accessibility in mind from the start.

### 5. TypeScript Support

Full TypeScript support with proper type definitions for all props.

## 📝 Component Guidelines

### Naming Conventions

- **Components**: PascalCase (e.g., `Text`, `FormField`)
- **Files**: PascalCase (e.g., `Text.tsx`, `FormField.tsx`)
- **Props**: camelCase (e.g., `variant`, `isLoading`)
- **Types**: PascalCase with descriptive suffixes (e.g., `TextProps`, `ButtonVariant`)

### File Structure

```
ComponentName/
├── ComponentName.tsx    # Main component
├── index.ts            # Exports
└── ComponentName.test.tsx # Tests (optional)
```

### Props Interface

```tsx
export interface ComponentProps extends BaseComponentProps {
  // Component-specific props
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  // ... other props
}
```

### Base Props

All components extend `BaseComponentProps`:

```tsx
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  'data-testid'?: string;
}
```

## 🚀 Usage Examples

### Text Component

```tsx
import { Text } from '@/components/atoms';

// Headings
<Text variant="h1" weight="bold" color="primary">
  Main Title
</Text>

// Body text
<Text variant="body" color="secondary">
  This is body text
</Text>

// Custom styling
<Text
  variant="caption"
  color="muted"
  className="uppercase tracking-wide"
>
  Small text
</Text>
```

### Button Component

```tsx
import { Button } from '@/components/atoms';

// Primary button
<Button variant="primary" size="md">
  Click me
</Button>

// Loading state
<Button variant="primary" loading>
  Processing...
</Button>

// Full width
<Button variant="outline" fullWidth>
  Full width button
</Button>
```

### Card Component

```tsx
import { Card } from '@/components/molecules';
import { Text, Button } from '@/components/atoms';

<Card variant='elevated' padding='lg' hover>
  <Text variant='h3' className='mb-4'>
    Card Title
  </Text>
  <Text variant='body' color='secondary' className='mb-6'>
    Card content goes here
  </Text>
  <Button variant='primary'>Action</Button>
</Card>;
```

## 🔧 Development Workflow

1. **Start with Atoms**: Build basic building blocks first
2. **Compose Molecules**: Combine atoms into functional groups
3. **Build Organisms**: Create complex components from molecules
4. **Design Templates**: Create page layouts
5. **Implement Pages**: Build specific page instances

## 📚 Best Practices

1. **Keep components small and focused**
2. **Use TypeScript for type safety**
3. **Follow consistent naming conventions**
4. **Document component APIs**
5. **Test components thoroughly**
6. **Consider accessibility from the start**
7. **Use composition over configuration**
8. **Maintain consistent styling patterns**

## 🎯 Benefits

- **Consistency**: Unified design language across the application
- **Reusability**: Components can be reused in different contexts
- **Maintainability**: Easy to update and maintain
- **Scalability**: Easy to add new components following the same pattern
- **Developer Experience**: Clear structure and predictable APIs
- **Design System**: Foundation for a comprehensive design system
