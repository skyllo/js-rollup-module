# Rollup.JS Module Example

Using Rollup.JS, Mocha, Chai, ESLint to create ES6/ES5 compatible JS modules with UMD. Check [package.json](package.json) for other dependencies.

## Developing
```bash
yarn start
```

## Testing
```bash
yarn testw
```

## Building
```bash
yarn run build
```

## Usage
```javascript
// ES6
import { sayName } from 'Alpha';
sayName('Tyrion');

// ES5
<script src='./bundle.js'></script>
Alpha.sayName('Tyrion');
```

## References

