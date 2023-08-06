import styles from "./signUp.module.css";

const SignUp = () => {
  return (
    <>
      <div className={styles.root}>
        <div className={styles.signUpCard}>
          <h1 className={styles.greetLess}>welcome back </h1>
          <h4 className={styles.greetMore}>
            welcome back! please enter your details.
          </h4>
        </div>
        <div className={styles.imageSignUp}></div>
      </div>
    </>
  );
};

export default SignUp;
