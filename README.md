# DevenSMP Website

The source code for https://devensmp.us.to. This website contains a lot of information about DevenSMP and much more!

## Contributors

- Leader: [@Cand](https://github.com/candorlab)
- Coder: [@Paperoni](https://github.com/Paperoni0)
- Background Artist: [@Cand](https://github.com/candorlab)

## How To Contribute

If you want to help to contribute, you can do as following:

- Email us on devensmpofficial@gmail.com

## CSS and page backgrounds

`css/all.css` is the shared stylesheet entry point. It imports the theme tokens, base styles, page backgrounds, layout, and reusable components from `css/modules/`. Load page-specific stylesheets after `css/all.css`.

The saved theme is applied as `light` or `dark` on the `<body>` by `js/all.js`. To use a themed background on a page, add a matching `data-background` value to `<body>` and define both theme images in `css/modules/backgrounds.css`. Place the image files under `assets/images/backgrounds/light/` and `assets/images/backgrounds/dark/`. Pages without `data-background` keep the theme's gradient background.
