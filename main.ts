//% color=#FFA500 icon="\uf185" block="Ultraschallsensor"
namespace Ultraschallsensor {

    // ---------------------------------------------------------
    //  EREIGNIS-BLÖCKE (EVENTS)
    // ---------------------------------------------------------

    /**
     * Führt den enthaltenen Code aus, wenn Knopf A geklickt wird.
     */
    //% block="wenn Knopf A geklickt"
    //% weight=120
    //% blockAllowMultiple=1
    //% handlerStatement=1
    export function onButtonA(handler: () => void): void {
        input.onButtonPressed(Button.A, handler);
    }

    /**
     * Führt den enthaltenen Code aus, wenn Knopf B geklickt wird.
     */
    //% block="wenn Knopf B geklickt"
    //% weight=115
    //% blockAllowMultiple=1
    //% handlerStatement=1
    export function onButtonB(handler: () => void): void {
        input.onButtonPressed(Button.B, handler);
    }

    /**
     * Führt den enthaltenen Code dauerhaft in einer Schleife aus.
     */
    //% block="dauerhaft"
    //% weight=110
    //% handlerStatement=1
    export function dauerhaft(handler: () => void): void {
        basic.forever(handler);
    }

    // ---------------------------------------------------------
    //  BLOCK: Ultraschall Entfernung messen (C16)
    // ---------------------------------------------------------

    /**
     * Misst die Entfernung in Zentimetern am Grove-Port C16.
     */
    //% block="Entfernung (cm)"
    //% weight=100
    export function entfernung(): number {
        // WICHTIG:
        // Falls dein funktionierender MakeCode-JavaScript-Code
        // hier anders heißt, diese Zeile anpassen!
        return grove.measureInCentimeters(DigitalPin.C16);
    }

    // ---------------------------------------------------------
    //  MOTOR-BLÖCKE M0 UND M1
    // ---------------------------------------------------------

    /**
     * Motor M0 & M1 an mit einstellbarer Geschwindigkeit (in Prozent).
     * Geschwindigkeit: -100 (rückwärts) bis +100 (vorwärts)
     */
    //% block="Motor M0 & M1 an mit %speed Prozent"
    //% speed.min=-100 speed.max=100 speed.defl=60
    //% weight=90
    export function drive(speed: number): void {
        motors.dualMotorPower(Motor.AB, speed);
    }

    /**
     * Drehe nach rechts (M0 vorwärts, M1 rückwärts)
     */
    //% block="drehe rechts mit Geschwindigkeit %speed"
    //% speed.min=-100 speed.max=100 speed.defl=70
    //% weight=80
    export function turnRight(speed: number): void {
        motors.motorPower(Motor.A, speed);
        motors.motorPower(Motor.B, -speed);
    }

    /**
     * Drehe nach links (M0 rückwärts, M1 vorwärts)
     */
    //% block="drehe links mit Geschwindigkeit %speed"
    //% speed.min=-100 speed.max=100 speed.defl=70
    //% weight=70
    export function turnLeft(speed: number): void {
        motors.motorPower(Motor.A, -speed);
        motors.motorPower(Motor.B, speed);
    }

    /**
     * Stoppt beide Motoren
     */
    //% block="stoppe Motoren"
    //% weight=60
    export function stopMotors(): void {
        motors.dualMotorPower(Motor.AB, 0);
    }

    // ---------------------------------------------------------
    //  ZEITBLOCK
    // ---------------------------------------------------------

    /**
     * Wartet eine einstellbare Zeit in Millisekunden.
     */
    //% block="warte %dauer ms"
    //% dauer.min=0 dauer.max=5000 dauer.defl=1000
    //% weight=50
    export function wait(dauer: number): void {
        basic.pause(dauer);
    }
}
