import React from "react";

//Create template for Bootstrap container, depending on whether it is fluid or not.
function Container({ fluid, nopadding, children }) {
    //If fluid, return with class container-fluid, otherwise just container
    return <div className={`container${fluid ? "-fluid" : ""} ${nopadding ? "p-0" : ""}`}>{children}</div>;
}

//Likewise, create a template for row.
function Row({ fluid, noMargin, children }) {
    return <div className={`row${fluid ? "-fluid" : ""} ${noMargin ? "mx-0" : ""}`}>{children}</div>
}

//Create template for columns, which simplify column size syntax.
function Col({ size, noPadding, children }) {
    return (
        <div
            className={size
                .split(" ")
                .map(size => "col-" + size)
                .join(" ") + `${noPadding ? "px-0" : ""}`}
        >
            {children}
        </div>
    );
}

export { Container, Row, Col };
