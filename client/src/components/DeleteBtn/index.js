import "./style.css";

function DeleteBtn(props) {
    return <button className="btn btn-danger btn-block mb-3 fas fa-trash-alt" {...props} type="button" tabIndex="0"></button>;
}

export default DeleteBtn;