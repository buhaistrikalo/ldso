import React, {useState} from 'react';

const Multibutton = (props) => {
    const [active, setActive] = useState(false);
    return (

        <button className={!active ? "button" : "button quiz__answers-button_active"}
            onClick={() => {
                setActive(active ? false : true)
                props.changePoints(props.data.correct
                    ? active
                        ? -1 : 1
                    : active
                        ? 1 : -1)

            }}
        > {props.data.answer}</button >

    );

}

export default Multibutton;
