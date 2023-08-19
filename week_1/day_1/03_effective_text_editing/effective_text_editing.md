# Effective Text Editing

## Developers Best Friend

Even though we will not develop applications, we will still design and work on websites, which means we need to find the best tool for the job. We could use pen and paper, draw up tables and use a calculator to calculate values from spreadsheets - or we can use a tool designed for this job, Microsoft Excel/Google Sheets. 

For our web designing journey, we could utilise a couple of tools - Atom is free and open source, Sublime is powerful but costs money. VSCode however seems to be the text editor of choice for most developers for a lot of programming languages, and especially for CSS/HTML. Originally developed by Microsoft, it's now an open source tool that has tons of customization options and extensions.

## Efficiency

An important part of this coupling to our editor of choice is making not only friends, but best friends with it. Once you have learned the basics, move onto more advanced research about customisation and shortcuts.

It may seem trivial but it can make a huge impact to your productivity as a developer.

Let's imagine the following scenario:

A team lead used to provide top level estimates for projects. He never used any shortcuts, customisations or anything. He basically used Visual Studio like Notepad... which is kind of like using a Ferrari to go to down to Aldi and do the shopping.

I would get the work to do and complete it in a quarter of the time, because I was so much more efficient with my shortcuts. I could then use that time to learn new techniques, refactor my code and try stuff I wouldn't have had time to do otherwise. The faster you can do stuff, the faster you can get on to trying fun stuff.

## VSCode

https://code.visualstudio.com/docs

VSCode is:

* multi-platform (OS X, Windows, Linux)
* popular (widely used for web development)
* free and open source
* extensible (we can add functionality via plugins called 'extensions')

It also comes with a lot of really cool shortcuts and other tools we can use.

## Command Palette

If you only ever memorise one keyboard shortcut, make it `cmd` + `shift` + `p` or `ctrl` + `shift` + `p` (if that doesn't work on Windows, try `F1`). This opens up the Command Palette, a list of every function VSCode can do, either built-in or through packages. You can type in what you want to do as text (e.g. "Copy") and it will search for the appropriate command. If a keyboard shortcut exists for the command, it will also show up here.

## Menus

VSCode's menu system is also pretty in-depth, with a lot (but not all!) of its functions sorted into relevant menus. The menus also let you know keyboard shortcuts when they are available.

> Task: Investigate interesting keyboard shortcuts for VSCode, using the menus and command palette

### Useful Shortcuts

Keypress          |  Action
------------------|---------
`cmd` + `shift` + `p`        |  take us to a command palette where we will be given menu options without leaving our keyboard.
`cmd` + `s`                  |  save changes in current tab - DO IT OFTEN!!!
`cmd` + `q`                  |  quit
`cmd` + `w`                  |  close one tab at a time
`cmd` + `option` + `arrow`   |  switch between tabs
`ctrl` + `<number>`           |  switch directly to specific tab
`cmd` + `f`                  |  search in your current file (see below)
`cmd` + `shift` + `f`        |  search the entire project
`option` + `shift` + `down-arrow` |  Copy current line onto next line
`cmd` + `p`                  |  open the file finder
`cmd` + `backspace`          |  delete the line before your cursor
`fn` + `backspace`          |  delete the character after your cursor
`cmd` + `right/left`         |  moves your cursor to the end/beginning of the line

You can get a cheat sheet for these and more at https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf

### Multiple Cursors

A very useful feature of VSCode is being able to use more than one cursor, enabling us to type the same text in more than one place. `cmd` + `option` + `arrow keys` will add extra cursors to your window, allowing you to edit multiple elements at once.

You can also go to the selection menu and choose `Switch to cmd+click for multi-cursor`. Now if you hold down `cmd` and click in the file it will add a cursor wherever you click. When you type it will appear wherever there are cursors

This can be incredibly useful for renaming variables and functions. We can also use `cmd` + `d` to select the word (or name) under the cursor, and use `cmd` + `d` again to select duplicates of it. If we then type, we will replace all selected instances of the text.

## Settings and Themes

`cmd` + `,` allows you to access VSCode's user settings.

From here you can make all sorts of changes to set up your environment, both to the Core VSCode app, and to the Editor window itself. Most of these settings are fine, but one that we instructors find useful for putting code on the projector is:

`Code` -> `Preferences` -> `Settings` 

Search for `scroll beyond last line` and check the box.

You can also change the theme (i.e. make it light or dark) `Code` -> `Preferences` -> `Color Theme`

VSCode's extensions are one of the main reasons VSCode is so popular. The app is not just a text editor, but a rich ecosystem of extensions which add functionality to the editor. If there's something you wish VSCode did, or just did better, there's probably an extension for that!

## Installing Extensions

Show installation of Live Reload

## Custom Keybindings

If you click on `Code` -> `Preferences` -> `Keyboard Shortcuts` you can add or edit keyboard shortcuts to suit your own style.

In this file you can add your own keyboard shortcuts. For example to enable a font zoom shortcut paste the following into keybindings.json

```
[
    {
        "key": "cmd+=",
        "command": "editor.action.fontZoomIn"
    },
    {
        "key": "cmd+-",
        "command": "editor.action.fontZoomOut"
    }
]
```
