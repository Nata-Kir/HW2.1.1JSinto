class Button {
  constructor(height, width, type, color) {
    this.height = height;
    this.width = width;
    this.type = type;
    this.color = color;
  }
  onClick() {
    console.log(this);
  }
  testButton(expectedHeight, expectedWidth, expetedType, expectedColor) {
    return console.log(
      this.height === expectedHeight &&
        this.width === expectedWidth &&
        this.type === expetedType &&
        this.color === expectedColor
    );
  }
}

let myButton = new Button(5, 10, "button", "green");
console.log(myButton);
myButton.onClick();
myButton.testButton(5, 10, "button", "green");
