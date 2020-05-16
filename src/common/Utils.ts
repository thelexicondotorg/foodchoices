import { Config } from "../Config";
import { ICharacterData } from "../Types";

export class Utils {
    public static fadeOut(div: HTMLDivElement) {
        return new Promise(resolve => {
            setTimeout(
                () => {
                    div.classList.add("disabled");
                    div.classList.replace("fadeIn", "fadeOut");
                    setTimeout(resolve, Config.fadeDuration);
                },
                Config.clickAcceptDelay
            );
        });
    }
    public static hasTouch() {
        return "ontouchstart" in document.documentElement;
    }

    public static clamp(value: number, min: number, max: number) {
        return Math.max(Math.min(value, max), min);
    }

    public static getSvgCoords(elem: SVGElement) {
        const transform = elem.getAttribute("transform") as string;
        const coords = (transform.match(/translate\(([0-9.-]+),? ([0-9.-]+)\)/) as RegExpMatchArray).slice(1);
        return coords.map(c => parseFloat(c));
    }

    public static ensureEndsWithPoint(str: string) {
        if (str.endsWith(".") || str.endsWith("?") || str.endsWith("!")) {
            return str;
        }
        return `${str}.`;
    }

    public static sanitize(str: string, ensureDot = true) {
        const sanitized = `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`;
        return ensureDot ? Utils.ensureEndsWithPoint(sanitized) : sanitized;
    }

    public static resolve(str: string, character: ICharacterData) {
        return Utils.sanitize(
            str.replace(/\$\{name\}/g, character.name)
                .replace(/\$\{possessivePronoun\}/g, character.possessivePronoun)
                .replace(/\$\{subjectPronoun\}/g, character.subjectPronoun)
                .replace(/\$\{selfPronoun\}/g, character.selfPronoun)
                .replace(/\$\{objectPronoun\}/g, character.objectPronoun)
        );
    }

    public static isMobile() {
        return "isMobile" in window ? (window as any).isMobile.any : false;
    }
    
    public static stripEndPoint(str: string) {
        if (!str.endsWith(".")) {
            return str;
        }
        return str.slice(0, -1);
    }
}
