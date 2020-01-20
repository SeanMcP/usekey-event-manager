# usekey-event-manager

[![npm](https://img.shields.io/npm/v/usekey-event-manager.svg)](https://npmjs.com/package/usekey-event-manager) [![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/usekey-event-manager.svg)](https://npmjs.com/package/usekey-event-manager) [![npm](https://img.shields.io/npm/dt/usekey-event-manager.svg)](https://npmjs.com/package/usekey-event-manager) [![A project badge feature text "PRs Welcome"](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)

🔑 Easily map window functions to keyboard events in React

## Prerequisites

`useKey` is a custom React hook, so you're project must be running React and ReactDOM versions `16.8+`.

### Installation

To install, use your package manager of choice. Here is the command for npm:

```sh
npm i usekey-event-manager
```

## Usage

Import `useKey` from `usekey-event-manager` and pass it a keyboard event map:

```jsx
import React from 'react'
import useKey from 'usekey-event-manager'

function Dialog(props) {
    useKey({ Escape: props.closeAndReturnFocus })
    return(
        <div role="alertdialog">
            {/* ... */}
        </div>
    )
}

export default Dialog
```

## API

Version 1+ of `usekey-event-manager` comprises a single export: `useKey`.

### `useKey()`

`useKey` is a custom React hook that assigns a window event listener on keydown. When an event is fired, the listener compares it to a set of selected keys, then calls the action and passes the event object if there is a match.

```js
useKey(Object<String, Function>)
```

If there is a single key that you want to listen for, you can pass a map like so:

```js
useKey({ Escape: close })
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Author

[Sean McPherson](https://seanmcp.com)

## License

[MIT](/LICENSE)