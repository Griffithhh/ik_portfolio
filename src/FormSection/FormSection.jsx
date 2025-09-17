import React from 'react';
import styles from "./FormSection.module.scss";

const FormSection = () => {
        const handleSubmit = (e) => {
       e.preventDefault();
       console.log("handleSubmit");
    }
  return (
    <div className={styles.container}>
        <div className={styles["container__form"]}>
            <h1>Send me a massage</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles["container__form-group"]}>
                    <input placeholder="FULL NAME" type="text" id="name" name="name"/>
                </div>

                <div className={styles["container__form-group"]}>
                    <textarea placeholder="MESSAGE" id="message" name="message"></textarea>
                </div>

                <div className={styles["container__form-actions"]}>
                    <button  type="submit">SEND</button>
                </div>
            </form>

        </div>
    </div>
  );
};

export default FormSection;
