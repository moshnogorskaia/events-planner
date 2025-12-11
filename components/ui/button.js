import classes from './button.module.css';
import Link from 'next/link';

function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link} className={classes.btn}>
        {props.children}
      </Link>
    );
  }
  return (
    <button className={classes.btn} type="submit">
      {props.children}
    </button>
  );
}

export default Button;
