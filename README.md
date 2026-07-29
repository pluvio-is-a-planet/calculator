# Calculator

A calculator built with JavaScript as part of [The Odin Project's Foundations course](https://www.theodinproject.com/lessons/foundations-calculator). Part of the goal was to not make use of the in-built `eval()` function, and not to make use of a `new Function()` return that evaluates a string. Every functionality was hand-coded, making use of a Calculator object that stores relevant data like the operands and the operator.

## Functionality
- Basic arithmetic: Addition, Subtraction, Multiplication, and Division
- Keyboard or GUI input.
- Chained calculations, you can type `12 + 7 + 1 = ` and it evaluates step by step (`12 + 7` first, then `19 - 1`) instead of needing to hit `=` after every pair.
- Backspace/Delete button to undo the last input.
- Reset/Clear: Pretty self-explanatory.

## How it works

Everything works off a singular `calculator` object containing `firstOperand`, `secondOperand`, and `Operator`. The display is never edited directly, it's rendered using the values from `calculator` on every change.

- **HTML/CSS** for the layout.
- **JavaScript** for all logic, no other frameworks or libraries.

## Learning

It took me relearning some things to complete this project, although the end result is quite simple, I struggled a bit more than I care to admit. The hard part was **state management**, figuring out where the "truth" about the current calculation should live, and making sure the display always matched it.

My initial attempts tried to recover state by parsing the display text, which was updated directly with inputs, with regex. This got messy very quickly. I ended up rebuilding it around the now `calculator` object, any inputs (through keyboard or the GUI) update the `calculator` object, with one `render()` function being the only thing allowed to touch the display. The change to using a single state object cleaned up almost every issue I had up until that point.