import "./style.css";

function DeleteBtn(props) {
    return <button className="btn btn-sm btn-block btn-danger fas fa-trash-alt" {...props} type="button" tabIndex="0"></button>;
}

export default DeleteBtn;