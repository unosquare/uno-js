[![npm version](https://badge.fury.io/js/uno-js.svg)](https://www.npmjs.com/package/uno-js)

# uno-js

Unosquare Typescript/JavaScript Library, zero dependencies.

String, array, and Date manipulation, easy-to-use fetch controller, and more, written in Typescript.

### Installation (npm)

To install uno-js through npm, you only need to run the following command:

```sh
    npm install uno-js --save
```

Check the documentation of this library at [https://unosquare.github.io/uno/uno-js](https://unosquare.github.io/uno/uno-js).

## 🚨 Deprecated Functions - Native API Replacements

Many functions in this library can be replaced by modern browser native APIs. Below are the recommended native alternatives:

### ✅ Fully Replaceable

#### `abortController.ts`
**Status**: ❌ **DEPRECATED**
```typescript
// ❌ uno-js
import { getAbortController } from 'uno-js';
const controller = getAbortController();

// ✅ Native API (available since 2017)
const controller = new AbortController();
```

#### `removeDuplicated.ts`
**Status**: ❌ **DEPRECATED**
```typescript
// ❌ uno-js
import { removeDuplicated } from 'uno-js';
const unique = removeDuplicated(array, 'id');

// ✅ Native API with filtering
const unique = array.filter((item, index, arr) => 
  arr.findIndex(x => x.id === item.id) === index
);

// ✅ Or using Set for primitives
const unique = [...new Set(array)];
```

#### `toTitleCase.ts`
**Status**: ❌ **DEPRECATED**
```typescript
// ❌ uno-js
import { toTitleCase } from 'uno-js';
const title = toTitleCase('hello world');

// ✅ Native CSS
.title-case { text-transform: capitalize; }

// ✅ Or with simple regex
const title = text.toLowerCase().replace(/\b\w/g, l => l.toUpperCase());
```

#### `withEnter.ts` (Keyboard events)
**Status**: ❌ **DEPRECATED**
```typescript
// ❌ uno-js
import { onEnterKey } from 'uno-js';
element.addEventListener('keydown', onEnterKey(callback));

// ✅ Modern Native API
element.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') callback(); // More semantic than keyCode
});
```

#### `SimpleObservable.ts`
**Status**: ❌ **DEPRECATED**
```typescript
// ❌ uno-js
import { SimpleObservable } from 'uno-js';
const obs = new SimpleObservable();

// ✅ Native API - EventTarget
class SimpleObservable extends EventTarget {
  inform(data) { this.dispatchEvent(new CustomEvent('change', { detail: data })); }
  subscribe(callback) { 
    this.addEventListener('change', callback);
    return () => this.removeEventListener('change', callback);
  }
}
```

### ⚠️ Partially Replaceable

#### `formatter.ts` (Number and date formatting)
**Status**: ⚠️ **PARTIALLY DEPRECATED**
```typescript
// ❌ uno-js money formatting
import { toMoney } from 'uno-js';
const formatted = toMoney(1234.56);

// ✅ Native API - Intl.NumberFormat
const formatted = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
}).format(1234.56);

// ❌ uno-js percentage
import { toPercentage } from 'uno-js';

// ✅ Native API
const percentage = new Intl.NumberFormat('en-US', {
  style: 'percent',
  minimumFractionDigits: 2
}).format(0.1234);

// ❌ uno-js date formatting
// ✅ Native API - Intl.DateTimeFormat
const dateFormatted = new Intl.DateTimeFormat('en-US').format(new Date());
```

#### `dateUtils.ts` (Date manipulation)
**Status**: ⚠️ **PARTIALLY DEPRECATED**
```typescript
// ❌ uno-js
import { compareDates } from 'uno-js';

// ✅ Native API - Date comparison
const compareResult = new Date(a) - new Date(b); // Returns difference in ms
const isAfter = new Date(a) > new Date(b);

// ❌ uno-js toLocalTime
// ✅ Native API - Temporal API (upcoming) or Date methods
const localDate = new Date().toLocaleString();
```

#### `groupBy.ts`
**Status**: ⚠️ **PARTIALLY DEPRECATED**
```typescript
// ❌ uno-js
import { groupBy } from 'uno-js';
const grouped = groupBy(data, 'category');

// ✅ Native API - Object.groupBy (Stage 3, Chrome 117+)
const grouped = Object.groupBy(data, item => item.category);

// ✅ Alternative with Map.groupBy
const grouped = Map.groupBy(data, item => item.category);

// ✅ Fallback with reduce
const grouped = data.reduce((acc, item) => {
  (acc[item.category] ??= []).push(item);
  return acc;
}, {});
```

### 🔧 Functions That Retain Value

#### `debounce.ts`
**Status**: ✅ **KEEP** - No native API equivalent, but it's a standard implementation.

#### `accurateSum.ts`
**Status**: ✅ **KEEP** - Solves JavaScript-specific floating-point precision issues.

#### `createCsv.ts`
**Status**: ✅ **KEEP** - Business-specific functionality with no native equivalent.

#### `dateRange.ts`, `weekUtils.ts`
**Status**: ✅ **KEEP** - Complex business logic. Temporal API (future) might partially replace.

#### `money.ts`
**Status**: ✅ **KEEP** - Business-specific type, though formatting can use Intl.NumberFormat.

#### `stringTemplate.ts`
**Status**: ⚠️ **EVALUATE** - Native template literals (`${variable}`) cover most cases.

#### `truncate.ts`, `delta.ts`
**Status**: ✅ **KEEP** - Specific mathematical logic with no direct equivalent.

#### `validateObject.ts`, `validateNotNull.ts`
**Status**: ✅ **KEEP** - Specific validation utilities.

### 📋 Recommended Migration Plan

1. **Immediate**: Replace `abortController`, `removeDuplicated`, `toTitleCase`, `withEnter`, `SimpleObservable`
2. **Short term**: Migrate formatting to `Intl` APIs where possible
3. **Medium term**: Evaluate `groupBy` when `Object.groupBy` has better support
4. **Long term**: Monitor Temporal API to replace date utilities

### 🌐 Native API Browser Compatibility

- **AbortController**: Chrome 66+, Firefox 57+, Safari 11.1+
- **Intl.NumberFormat**: Chrome 24+, Firefox 29+, Safari 10+
- **Object.groupBy**: Chrome 117+, Firefox 119+ (Stage 3)
- **EventTarget constructor**: Chrome 64+, Firefox 59+, Safari 14+