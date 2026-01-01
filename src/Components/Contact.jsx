// import React from 'react'
import styles from './Contact.module.css'


const Contact = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0 })
    }


    return (
        <div>

            <div className={styles.Contact}>

                <div className={styles.left}> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90186.37207676383!2d-80.13495239500924!3d25.9317678710111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ad1877e4a82d%3A0xa891714787d1fb5e!2sPier%20Park!5e1!3m2!1sen!2sth!4v1637512439384!5m2!1sen!2sth" width="100%" height="100%"></iframe></div>

                <div className={styles.right}>

                    <h1> Say Hello. Don't Be Shy!</h1>
                    <span><i>Details to details is what makes Hexashop different from the other themes.</i></span>

                    <div className={styles.inputs}>

                        <input type="text" placeholder='Your Name' required />
                        <input type="text" placeholder='Your Email' required />

                    </div>

                    <textarea name="message" required>Your Message</textarea>
                    <button type='submit' onClick={scrollToTop} >  <i class="fa fa-paper-plane"></i> </button>
                </div>

            </div>

        </div>
    )
}

export default Contact
