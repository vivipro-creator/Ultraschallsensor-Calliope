//% color=#FFA500 icon="\uf185" block="Ultraschallsensor"
namespace Ultraschallsensor {

    // ---------------------------------------------------------
    //  BLOCK: Ultraschall Entfernung messen (C16)
    // ---------------------------------------------------------

    /**
     * Misst die Entfernung in Zentimetern am Grove-Port C16.
     */
    //% block="Entfernung (cm)"
    //% weight=100
    export function entfernung(): number {
        // WICHTIG: Dies ist der Standard-Grove-Ultraschall-Aufruf
        // Falls bei dir in JavaScript ein anderer Name steht,
        // ändere die folgende Zeile entsprechend!
        return grove.measureInCentimeters(DigitalPin.C16);
    }

    // ---------------------------------------------------------
    //  MOTOR-BLÖCKE M0 UND M1
    // ---------------------------------------------------------

    /**
     * Beide Motoren mit einstellbarer Geschwindigkeit starten.
     * Geschwindigkeit: -100 (rückwärts) bis +100 (vorwärts)
     */
    //% block="fahre vorwärts mit Geschwindigkeit %speed"
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
     * Wartet eine einstellbare Zeit in Millisekunden
     */
    //% block="warte %dauer ms"
    //% dauer.min=0 dauer.max=5000 dauer.defl=1000
    //% weight=50
    export function wait(dauer: number): void {
        basic.pause(dauer);
    }
}
