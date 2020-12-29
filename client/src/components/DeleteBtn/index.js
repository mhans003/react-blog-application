import "./style.css";

function DeleteBtn(props) {
    return <button className="btn btn-sm btn-danger btn-block mb-2 fas fa-trash-alt" {...props} type="button" tabIndex="0"></button>;
}

export default DeleteBtn;