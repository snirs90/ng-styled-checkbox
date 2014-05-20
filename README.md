# ng-checkbox

Styled checkbox with an AngularJS directive

## Getting Started

Add script source into your project
```html
<script src="js/app.js"></script>
```

## Documentation

To add a styled checkbox:

```html
<input type="checkbox" value="1" ng-click="toggleCheckbox()" ng-checked="checkbox" styled-checkbox />
```

## Attribute options:

* `layout="rounded"` - to change the checkbox layout.
* `checked` - to check the checkbox by default.

In order to change a layout you need an html file inside `js/directives/styled-checkbox`

named `checkbox-*.html` where `*` is your layout name (e.g. `checkbox-rounded`).

The file should contain:
```html
<div class="your-css-class" ng-click="toggleCheckbox()"></div>
```
where class is your css class with your unique style.

The css should contain also a `checked` class that will s append when the checkbox
is checked so the checkbox will look as checked.

Thats it!

