import React from "react";
import PropTypes from 'prop-types';

export const Head = ({clas, id, children}) => {
    // console.log(clas, id);
    // console.log(children);
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

Head.propTypes = {
    clas: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.string),
    // children: PropTypes.arrayOf(PropTypes.string||PropTypes.element),
    children: PropTypes.array,
}