import {useState} from 'react';
import Modal from "./Modal";
import BackDrop from "./BackDrop";


function Todo (props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    function handleClick () {
        setModalIsOpen(true);
    }
    function closeHandler () {
        setModalIsOpen(false);
    }
    return(
        <div className='card'>
            <h2>{props.title}</h2>
            <div className='actions'>
                <button className='btn' onClick={handleClick} >Delete</button>
            </div>
            {modalIsOpen ? <Modal onConfirm={closeHandler} onCancel={closeHandler}/> : null }
            {modalIsOpen && <BackDrop onClick={closeHandler} />}
        </div>
    );
}
export default Todo;
