import css from "./LoadMoreBtn.module.css"
interface ILoadMoreBtnProps {
    onHandle: ()=> void;
}

export default function LoadMoreBtn ({onHandle}:ILoadMoreBtnProps) {
    return (
        <div className={css.loadMoreBtnSection}>

        <div className={css.loadMoreBtnWraper}>
            <button className ={css.loadMoreBtnButton}onClick = {onHandle} >Load more</button>
        </div>
        </div>
    )
}