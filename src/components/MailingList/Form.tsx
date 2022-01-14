import { FC } from "react"
import styles from "./Form.module.scss"
const Form: FC = () => (
    <section className={styles.form}>
        <form
            action="//paleocene-comic.us17.list-manage.com/subscribe/post?u=e566f9716747a52421a7b5ac7&amp;id=e318ef44fc"
            className="validate"
            id="mc-embedded-subscribe-form"
            method="post"
            name="mc-embedded-subscribe-form"
            noValidate
            target="_blank"
        >
            <div className="content" id="mc_embed_signup_scroll">
                <label htmlFor="mce-EMAIL">Sign up for the newsletter:</label>
                <input
                    className="email"
                    id="mce-EMAIL"
                    name="EMAIL"
                    placeholder="email address"
                    required
                    type="email"
                />
                <div aria-hidden="true" style={{ position: "absolute", left: -5000 }}>
                    <input name="b_e566f9716747a52421a7b5ac7_e318ef44fc" tabIndex={-1} type="text" />
                </div>
                <div className="clear">
                    <input
                        autoFocus
                        className="button"
                        id="mc-embedded-subscribe"
                        name="subscribe"
                        type="submit"
                        value="Subscribe"
                        role="button"
                    />
                </div>
            </div>
        </form>
    </section>
)
export default Form
