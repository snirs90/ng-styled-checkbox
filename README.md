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
<input type="checkbox" value="1" ng-checked="checkbox" styled-checkbox />
```

## Options:

To change or create layout you need an html file inside `js/directives/styled-checkbox`

named `checkbox-*.html` where * is your layout name (e.g. `checkbox-rounded`).

The file should contain:
```html
<div class="checkbox-normal" ng-click="toggleCheckbox()"></div>
```
where class is your css class with your style.

The css should contain also a `checked` class that will append when the checkbox
is checked and the style will change when checked.

Thats it!

