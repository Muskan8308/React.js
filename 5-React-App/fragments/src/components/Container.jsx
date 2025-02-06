import css from "./Container.module.css";

const Container = (props) => {          // Passing children 

    return <div className = {css.container}>{props.children}</div>
}

export default Container;
