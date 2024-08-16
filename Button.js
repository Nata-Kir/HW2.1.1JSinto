class View {
  constructor(height, width, type, color) {
    this.height = height;
    this.width = width;
    this.type = type;
    this.color = color;
  }
  onClick() {
    console.log(this);
  }
  testButton(expectedHeight, expectedWidht, expetedType, expectedColor) {
    return console.log(
      this.height === expectedHeight &&
        this.width === expectedWidht &&
        this.type === expetedType &&
        this.color === expectedColor
    );
  }
}

let myButton = new View(5, 10, "button", "green");
console.log(myButton);
myButton.onClick();
myButton.testButton(5, 10, "button", "green");
