import React from "react";

//Create template for Bootstrap container, depending on whether it is fluid or not.
function Container({ fluid, children }) {
    //If fluid, return with class container-fluid, otherwise just container
    return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

//Likewise, create a template for row.
function Row({ fluid, children }) {
    return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>
}

//Create template for columns, which simplify column size syntax.
function Col({ size, children }) {
    return (
        <div
            className={size
            .split(" ")
            .map(size => "col-" + size)
            .join(" ")}
        >
            {children}
        </div>
    );
}

export { Container, Row, Col };
