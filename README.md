# First Todo Mobile App

## Stack
- React Native
- NativeWind

## TakeBacks
- Learnt the basic of React Native and Expo (Tunnelling, Updating Expo Packages, Running Andriod Simulation)
- Learnt how to configure & style React Native using NativeWind (A Tailwindcss utility library for React Native)

```
    npm install nativewind
    npm install --save-dev tailwindcss@3.3.2

    # Yarn
    yarn add nativewind
    yarn add --dev tailwindcss@3.3.2
```

## NativeWind Configuration 
#### Install the following packages
- npm i react-native-css-interop tailwindcss nativewind

#### Create tailwind.config.ts
- npx tailwindcss init

```
    /** @type {import('tailwindcss').Config} */
    module.exports = {
        // NOTE: Update this to include the paths to all of your component files.
        content: ["./app/**/*.{js,jsx,ts,tsx}"],
        presets: [require("nativewind/preset")],
        theme: {
            extend: {},
        },
        plugins: [],
    }
```

#### Add babel.config.js
```
    module.exports = function (api) {
        api.cache(true);
        return {
        presets: [
            ["babel-preset-expo", { jsxImportSource: "nativewind" }],
            "nativewind/babel",
        ],
        };
    };
```
### Create nativewind-env.d.ts file
This file helps extends the React Native types via declaration merging. Add the following to the created file

``` 
 /// <reference types="nativewind/types" />
```

#### Transpile Packages for Expo

```
    {
        "expo": {
            "packergerOpts": {
                "transpilePackages": ["nativewind", "react-native-css-interop"]
            },
        }
    }
```

#### Create ./global.css in your root
Add these tailwind utils to file

```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

#### Add lastly create a metro.config.ts file

``` 
    const { getDefaultConfig } = require("expo/metro-config");
    const { withNativeWind } = require('nativewind/metro');

    const config = getDefaultConfig(__dirname)

    module.exports = withNativeWind(config, { input: './global.css' })
```

#### And lastly add ./global.css to your _layout.ts file

```
    import "./global.css"

    export default App() {
        /* Your App */
    }
```

##### References
- https://www.nativewind.dev/getting-started/react-native
- https://dev.to/gamertense/getting-started-with-nativewind-using-tailwind-css-in-react-native-13e6
