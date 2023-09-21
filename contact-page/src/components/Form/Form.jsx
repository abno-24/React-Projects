import Button from '../UI/Button/Button'
import classes from './Form.module.css'
import { MdMessage } from 'react-icons/md'
import { IoMdCall } from 'react-icons/io'
import { HiMail } from 'react-icons/hi'


const Form = () => {

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(event);
    }

    return (
        <section className={classes.container}>
            <div className={classes.form_bx}>
                <div className={classes.btn_bx}>
                    <Button className={classes.btn}><MdMessage fontSize="22px" />VIA SUPPORT CHAT</Button>
                    <Button className={classes.btn}><IoMdCall fontSize="24px" />VIA CALL</Button>
                </div>
                <div className={classes.email_bx}>
                    <Button className={classes.email_btn}><HiMail fontSize="24px" />VIA EMAIL FORM</Button>
                </div>
                <form onSubmit={submitHandler}>
                    <div className={classes.form_inputs}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' />
                    </div>
                    <div className={classes.form_inputs}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' />
                    </div>
                    <div className={classes.form_inputs}>
                        <label htmlFor="text">Text</label>
                        <textarea name="text" rows="5" />
                    </div>
                    <Button className={classes.submit_btn} onclick={submitHandler}>Submit</Button>
                </form>
            </div>
            <div className={classes.form_img}>
                <img src="./images/Service.svg" alt="" />
            </div>
        </section>
    )
}

export default Form