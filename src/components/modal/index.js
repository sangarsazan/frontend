import Styles from './modal.module.css';

const Modal = ({show}) => {
    return (
        <>
            <div
                className={`modalContainer ${show ? "show" : ""} `}
            >
                <div className={Styles.wrapper}>
                    <div className={Styles.box}>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;