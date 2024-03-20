import Image from "next/image";
import classNames from "classnames/bind";
import styles from "./style.module.scss";

const cx = classNames.bind(styles);

export default function Login() {
  return (
    <div className={cx("flex w-full items-center flex-1", "wrapper")}>
      <div className={cx("box_left", "p-3 basis-1/2")}>
        <div className={cx("logo", "p-12 w-8/12 relative")}>
          <Image
            src={"/logo.png"}
            alt="lolo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className={cx("w-10/12  relative", "image-login")}>
          <Image
            src={"/image_login.png"}
            alt="lolo"
            layout="fill"
            // className="w-10/12"
            objectFit="contain"
          />
        </div>
      </div>
      <div className={cx("basis-1/2 p-3")}>
        <h2>Sign in your account</h2>
        <p>
          Welcome back! Login with your data that you entered during
          registration
        </p>
      </div>
    </div>
  );
}
