import "./style.css";

function EditBtn(props) {
    return <button className="btn btn-sm btn-block btn-secondary fas fa-edit" {...props} type="button" tabIndex="0"></button>;
}

export default EditBtn;