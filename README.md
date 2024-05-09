# File Explorer Component

This project implements a File Explorer component using React, TypeScript, and CSS. The File Explorer component allows users to navigate through a file tree, view files and folders, and interact with them.

## Features

- Display files and folders in a hierarchical structure.
- Clicking on a folder expands/collapses it to show/hide its contents.
- Right-clicking on files and folders opens a context menu with options for copying, deleting, and renaming files (console logs the file name and action for now).

## Installation

1. Clone the repository:

```

git clone https://github.com/discrete-javascript/react-folder.git

```

2. Navigate to the project directory:

```

cd react-folder

```

3. Install dependencies && start:

```

yarn && yarn dev

```

## Usage

1. Import the `FileExplorer` component into your React application:

```jsx
import FileExplorer from './FileExplorer';
```

2. Use the `FileExplorer` component in your application, passing the file tree data as props:

   ```jsx
   <FileExplorer />
   ```

3. Optionally, you can customize the file tree data or styling of the File Explorer component according to your requirements.

## File Structure

The file structure data is provided in the `Files` object, which defines a hierarchical structure of files and folders. You can find the file structure in the `Files.ts` file.

## Technologies Used

- React.js
- TypeScript
- CSS

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

````

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
````
