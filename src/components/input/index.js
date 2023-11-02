import Styles from './input.module.css';

const input = ({placeholder ,width ,className ,type}) => {
    return (
        <div>
           <input className={Styles.input+" "+className} type={type} placeholder={placeholder}/>
        </div>
    );
};

export default input;