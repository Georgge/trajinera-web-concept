import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import styles from './button.module.css';

import Button from "./Button";

let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders title properly", () => {
    //Default prop
    act(() => {
        render(<Button/>, container);
    });

    expect(container.textContent).toBe(Button.defaultProps.title);

    //Provided prop
    const providedTitle = 'PROVIDED_TITLE';
    act(() => {
        render(<Button title={providedTitle}/>, container);
    });
    expect(container.textContent).toBe(providedTitle);
});

it("renders a prefix icon only if an iconPrefix property is provided", () => {

    // Providing iconPrefix prop
    const providedIconPrefix = 'iconPrefix';
    act(() => {
        render(<Button iconPrefix={providedIconPrefix}/>, container);
    });
    expect(container.textContent).toBe(`${providedIconPrefix}${Button.defaultProps.title}`)

    // Not providing iconPrefix prop
    const providedTitle = 'PROVIDED_TITLE';
    act(() => {
        render(<Button title={providedTitle}/>, container);
    });
    expect(container.textContent).toBe(providedTitle)
});

it("renders a suffix icon only if an iconSuffix property is provided", () => {

    // Providing iconPrefix prop
    const providedIconSuffix = 'iconSuffix';
    act(() => {
        render(<Button iconSufix={providedIconSuffix}/>, container);
    });
    expect(container.textContent).toBe(`${Button.defaultProps.title}${providedIconSuffix}`)

    // Not providing iconPrefix prop
    const providedTitle = 'PROVIDED_TITLE';
    act(() => {
        render(<Button title={providedTitle}/>, container);
    });
    expect(container.textContent).toBe(providedTitle)
});

it('The default type prop value should be primary and the background color should be #fa0287 (rgb(250, 2, 135))', function () {
    act(() => {
        render(<Button/>, container)
    })

    expect(container).toHaveStyle('background-color: #rgb(250, 2, 135);');
    expect(container.firstChild).toHaveClass(`${styles.button} ${styles.primary} ${styles.normal}`);
});
