import classes from './button.module.css';
import Link from 'next/link';

function Button(props) {
  return (
    <Link href={props.link} className={classes.btn}>
      {props.children}
    </Link>
  );
}

export default Button;
