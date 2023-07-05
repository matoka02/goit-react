import React from "react";

export const Head = ({clas, id, children}) => {
    // console.log(clas, id);
    console.log(children);
    return (
        // <React.Fragment>
        //     {children}
        //     <p className={clas} id={id}>I am Head</p>
        // </React.Fragment>

        // рефакторинг
        <>
            {children}
            <p className={clas} id={id}>I am Head</p>
        </>
        )
};