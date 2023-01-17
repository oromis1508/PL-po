import { Frame } from './../frame';
import { Link } from './../link';
import { ImageElement } from '../image';
import { BaseElement } from "../base-element";
import { Button } from "../button";
import { Label } from "../label";
import { TextField } from "../textfield";
import { Elements } from './enum';

export class ElementsManager {
    public static getElement(locator: string, element: Elements.Button): Button;
    public static getElement(locator: string, element: Elements.Label): Label;
    public static getElement(locator: string, element: Elements.TextField): TextField;
    public static getElement(locator: string, element: Elements.Image): ImageElement;
    public static getElement(locator: string, element: Elements.Link): Link;
    public static getElement(locator: string, element: Elements.Frame, frameSelector: string): Frame;
    public static getElement(locator: string, element: Elements, frameLocator?: string): BaseElement {
        switch (element) {
            case Elements.Button:
                return new Button(locator);
            case Elements.Label:
                return new Label(locator);
            case Elements.TextField:
                return new TextField(locator);
            case Elements.Image:
                return new ImageElement(locator);
            case Elements.Link:
                return new Link(locator);
            case Elements.Frame:
                return new Frame(frameLocator!, locator);
            default:
                throw new Error(`Elements manager is not implemented for ${element}`);
        }
    }
}
