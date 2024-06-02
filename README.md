# FakeJS Library

FakeJS is a lightweight JavaScript library that allows you to create simple websites using only HTML, without the need for writing JavaScript. With FakeJS, you can use predefined components to quickly build and customize your website.

## Features

- **Responsive Navbar:** Easily create responsive navigation bars that adapt to both desktop and mobile views.
- **Simple Syntax:** Use intuitive HTML tags to define your components.
- **No JavaScript Required:** Build your website with just HTML using predefined components.

## Getting Started

### Installation

To use FakeJS in your project, you need to include the FakeJS script in your HTML file. You can do this by adding the following script tag to the head of your HTML document:

```html
<head>
    <script type="module" src="path/to/fakejs.js"></script>
</head>
```


## Usage

### Navbar

FakeJS allows you to create responsive navbars that switch between desktop and mobile views. Use the ```<navbar>``` and ```<navlink>``` tags to define your navigation bar.


### Syntax

```html
<navbar type="desktop">
    <navlink link="#" type="internal">Home</navlink>
    <navlink link="#" type="external">Contact</navlink>
    <navlink link="#" type="default">About</navlink>
</navbar>

<navbar type="mobile">
    <navlink link="#" type="internal">Home</navlink>
    <navlink link="#" type="external">Contact</navlink>
    <navlink link="#" type="default">About</navlink>
</navbar>
```

### Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FakeJS Example</title>
    <script src="path/to/fakejs.js" defer></script>
</head>
<body>
    <navbar type="desktop">
        <navlink link="#" type="internal">Home</navlink>
        <navlink link="#" type="external">Contact</navlink>
        <navlink link="#" type="default">About</navlink>
    </navbar>

    <navbar type="mobile">
        <navlink link="#" type="internal">Home</navlink>
        <navlink link="#" type="external">Contact</navlink>
        <navlink link="#" type="default">About</navlink>
    </navbar>
</body>
</html>
```

## How It Works

- Desktop Navbar:
    - Uses the ```type="desktop"``` attribute to indicate it should be shown on desktop screens.
    - Automatically styled with CSS classes to make it responsive and visually appealing.

- Mobile Navbar:
    - Uses the ```type="mobile"``` attribute to indicate it should be shown on mobile screens.
    - Transforms into a hamburger menu for easy navigation on smaller screens.

### Customizing Navbar

You can customize the appearance and behavior of the navbar by adding your own CSS classes or modifying the existing styles.

### Example Custom CSS

```css
.navbar-desktop {
    display: none;
}
.navbar-mobile {
    display: none;
}

@media (min-width: 640px) {
    .navbar-desktop {
        display: flex;
    }
}

@media (max-width: 639px) {
    .navbar-mobile {
        display: flex;
    }
}
```

Include the custom CSS in your HTML file:

```html
<head>
    <link rel="stylesheet" href="path/to/your/styles.css">
    <script src="path/to/fakejs.js" defer></script>
</head>
```

## Contributing

If you have suggestions for improvements or find any issues, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.