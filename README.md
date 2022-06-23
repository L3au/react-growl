# react-growl

> react growl component

[![NPM](https://img.shields.io/npm/v/react-growl.svg)](https://www.npmjs.com/package/react-growl) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-growl
```

## Usage

```tsx
import React, { Component } from 'react'

import { Growl, useGrowl } from 'react-growl'

const App = () => {
  const [active, setActive] = useGrowl(5000)

  return (
    <Growl
      onDismissed={() => setActive(false)}
      active={active}
      message='Hello World!'
    />
  )
}
```

## License

MIT © [https://github.com/L3au](https://github.com/https://github.com/L3au)
