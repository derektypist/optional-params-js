# Optional Parameters in JavaScript

Welcome to Optional Parameters in JavaScript.  The purpose of this project is to investigate the optional
parameters in JavaScript.

## UX

The function getFontInfo has three parameters - name, colour and size.  The two parameters colour and size are optional.
Name is the font name (e.g. Calibri), colour is the font colour (e.g. Black) and size is the font size in points (e.g. 11).

If the colour is not specified, the colour is black.  If the size is not specified, the size is 11.

As a user, I want to view the various parameters of the function getFontInfo.

## Technologies

* HTML5
* CSS3
* JavaScript

## Testing

Invoke the function with 1, 2 and 3 parameters.  The default colour is black and the default size is 11.

If 2 parameters are used the size is 11.
If 1 parameter is used the colour is black and the size is 11.

## Deployment

The project is deployed on GitHub Pages at https://derektypist.github.io/optional-params-js

Use the commands

    git init
    git remote add origin https://github.com/derektypist/optional-params-js
    git config --global user.name "Your name"
    git config --global user.email you@example.com
    
Then use the command git status to check the status.

Use the command git push to update any changes.

## Credits

### Content

The font Roboto is taken from fonts.google.com.  Fallbacks are available (e.g. Arial, Verdana, sans-serif).