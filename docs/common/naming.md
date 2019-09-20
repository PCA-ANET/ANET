# Naming Conventions

In order to keep the code readable and maintainable, hereafter a list of generic patterns for setting names and identifiers throughout a script.
## General js conventions
- **Methods/Functions**: Follow the camel case convention.
    ```js
    // bad
    function MyFunction() {...}

    // good
    function myFunction() {...}
    ```
- **Variables**: Variables with multiple words should always use an underscore between words.
    ```js
    // bad
    var myVar = 1;

    // good
    var my_var = 1;
    ```
- **Underscore Private Methods**: Private methods should use a leading underscore to separate them from public methods (although this does not technically make a method private).
- **No Abbreviations**: Abbreviations should not be used to avoid confusion
  ```js
    // bad
    var accNbr = 1;

    // good
    var account_number = 1;
    ```
- **Use Intention-Revealing Names**: To avoid disinformation use Meaningful names
    ```js
    // bad
    var d = 1; // elapsed time in days

    // good
    var elapse_time_in_days = 1;
    ```
- **Use Pronounceable Names**
- **Use Searchable Names**
- **Avoid Mental Mapping** : Readers  shouldn’t  have  to  mentally  translate  your  names  into  other names  they  already know.
- **Pick One Word per Concept**
- **Name choice**: Use names that reflect the system domain, the context, and the problems that must be solved.
## Comments:
The code should be self documented, so in terms of comments take the following considerations: 

- **Don’t comment bad code—rewrite it. (Brian W. Kernighan and P. J. Plaugher)**
- **Good comments are** : 
  - Legal comments
  - Informative Comments
  - Explanation of Intent behind a decision
  - TODO Comments 

## String Identifiers:
To name String identifiers in internationalization for example consider the following rules:
- **Use Namespaces**
- **Be Descriptive** : A descriptive identifier accurately reflects the contents of the underlying string, making it easier for developers to recognize the purpose of the string in code. 
- Carefully Consider Using the Source String
- Stick to a single language (english)
  
## Components
- **Extensions**: Use `.jsx` extension for React components. .jxs describe the purpose/contents of the file from a higher level 
- **Filename**: Use PascalCase for filenames. E.g., `LoginWrapper.jsx`.
- **Reference Naming**: Use PascalCase for React components and camelCase for their instances.

    ```jsx
    // bad
    import sideMenu from './SideMenu';

    // good
    import SideMenu from './SideMenu';

    // bad
    const SideMenu = <SideMenu />;

    // good
    const sideMenu = <SideMenu />;
    ```
- **Component Naming**: Use the filename as the component name. For example, SideMenu.jsx should have a reference name of SideMenu. However, for root components of a directory, use index.jsx as the filename and use the directory name as the component name.
## Props
- Always use camelCase for prop names.
    ```jsx
    // bad
    <Foo
      UserName="hello"
      phone_number={12345678}
    />

    // good
    <Foo
      userName="hello"
      phoneNumber={12345678}
    />
    ```
- Omit the value of the prop when it is explicitly true:
  ```jsx
    // bad
    <Foo
      hidden={true}
    />

    // good
    <Foo hidden />
    ```
- Avoid using an array index as `key` prop, prefer a stable ID. Consider ordering may change index !!!
   ```jsx
  // bad
  {accounts.map((account, index) =>
    <Account
      {...account}
      key={index}
    />
  )}

  // good
  {accounts.map(account => (
    <Account
      {...account}
      key={account.id}
    />
  ))}
  ```
## Redux
To simplify code navigation this rules should be applied : 
- **Foldername**: Use lowercase to name folders. E.g., `accounts`.
- **Actions types**: All actions types related to a concept should be placed in a file *.types.js. E.g., `accounts.types.js`.
- **Actions**: All actions related to a concept should be placed in a file *.actions.js. E.g., `accounts.actions.js`.
- **Sagas**: All sagas related to a concept should be placed in a file *.sagas.js. E.g., `accounts.sagas.js`.
- **Reducers** : A reducer related to a concept should be placed in a file *.reducer.js. E.g., `accounts.reducer.js`.
- **Selectors** : All selectors related to a concept should be placed in a file *.selectors.js. E.g., `accounts.selectors.js`.
