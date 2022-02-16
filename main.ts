basic.clearScreen()
basic.forever(function () {
    if (1 == pins.digitalReadPin(DigitalPin.P2)) {
        basic.showIcon(IconNames.Heart)
        pins.digitalWritePin(DigitalPin.P8, 1)
    } else {
        basic.showIcon(IconNames.No)
        pins.digitalWritePin(DigitalPin.P8, 0)
    }
})
