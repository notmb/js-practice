10. Modules and code organisation
Themes
Named exports
Default exports
Import syntax
Separation of concerns
Pure utility functions
Tasks
Split code into:

src/
├── users.js
├── validation.js
└── main.js
Requirements:

users.js exports findUserById
validation.js exports isValidEmail
main.js imports and uses both
Then answer:

When is a named export preferable?
What happens if an imported name is incorrect?
Why separate pure utility logic from UI code?