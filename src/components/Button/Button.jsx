import css from "components/Button/Button.module.css"

export const Button = ({nextPage, showBtn}) => {

    if (showBtn !== 0) { return (
            <button  onClick={nextPage} className={css.button} type="button">Load more</button>
    )}
}