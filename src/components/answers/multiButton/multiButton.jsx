import React, {useState} from 'react';

const Multibutton = (props) => {
    const [active, setActive] = useState(false);

    const getResult = (correct) => {
        if (correct)
            if (active)
                return -1
            else
                return 1
        else
            if (active)
                return 1
            else
                return -1
    }

    return (

        <button className={!active ? "button" : "button quiz__answers-button_active"} // класс кнопки по активированности
            onClick={() => {
                setActive(active ? false : true) // переключатель активности кнопки
                props.changePoints(getResult(props.data.correct))

            }}
        > {props.data.answer}</button >

    );

}

export default Multibutton;
