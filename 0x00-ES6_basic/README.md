# alx-backend-javascript
## Description of the project
This project is about learning JavaScript from scratch. It is a project of the ALX Software Engineering program.

## Technologies used
* JavaScript
* Node.js
* ESLint


# some important doc
Default export

Except for the cases where we exported them by name (named exports), there is a similar feature called default export that can be used only once in each .js file. See the following example and compare it with the previous source.js file:

// file: source.js
export default function myNewFunction() { /* … */ }
export const myVariable = /* … */
export function myFunction() { /* … */ }
export class myClass { /* … */ }

In fact, each .js file can have "multiple named exports" and "only one default export"_ here myNewFunction is exported as default. With this, when importing in the target file, javascript understands which item is exported as default.

The item that is "exported as default" (myNewFunction) is imported in the target.js file as follows:

// file: target.js (in the same directory as the source.js file)
import anyName from "./source.js"

Look carefully at the differences! Here, we don't have { } sign after import, and we used a custom name that we didn't have in the source file. Here anyName represents myNewFunction.

This shows that we can give "any desired name" to the item that is "exported as default" when importing it and just pointing to the "path" of the source file, JavaScript will find that file and import it.

Some important notes:

    Unlike named exports, in default export we don't need to export named items and we can export "unnamed" items as well.

    Why did they add the Default export feature to ES6 at all!? for the ability to export "unnamed items" (anonymous functions and classes) as well as expressions and even object literals in addition to named items.

# npx eslint filename