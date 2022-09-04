import React from "react";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { putWork, getData, postWork } from "../../apirequest.jsx";
import "./admin.css";

const Worktable = ({ openModal, closeModal, setDel }) => {
    const [workdata, setWorkData] = React.useState(null);
    const [showAdd, setShowAdd] = React.useState(false);
    const [apitype, setApitype] = React.useState(null);
    const [wid, setwid] = React.useState("");
    const [wtitle, setwtitle] = React.useState("");
    const [wposition, setWposition] = React.useState("");
    const [wimagelink, setWimagelink] = React.useState("");
    const [wdescription, setWdescription] = React.useState("");

    const handleDelete = (id) => {
        console.log("this is id", id);
        openModal();
        setDel(id, "api/deletework");
    };
    const handleAdd = () => {
        setApitype("post");
        setShowAdd(true);
    };
    const handleEdit = (id, title, position, imagelink, description) => {
        setwtitle(title);
        setWposition(position);
        setWimagelink(imagelink);
        setwid(id);
        setWdescription(description);

        setShowAdd(true);
    };
    const handleEditSubmit = () => {
        putWork({ wid, wtitle, wposition, wimagelink, wdescription }).then(
            (r) => window.location.reload(false)
        );
        setShowAdd(false);
    };
    const handleAddSubmit = () => {
        postWork({ wtitle, wposition, wimagelink, wdescription }).then((r) => {
            window.location.reload(false);
            console.log("rrr", r);
        });

        // toast.error(`Error! ${error}`, {
        //     position: "top-right",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        // });

        setShowAdd(false);
    };

    const handleAddClose = () => {
        setShowAdd(false);
    };
    React.useEffect(() => {
        const reswork = getData("api/allworks").then((res) => {
            setWorkData(res.data);
        });
    }, []);
    return (
        <>
            <ToastContainer />
            <Modal show={showAdd} onHide={handleAddClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label>Title</label>
                    <input
                        type="text"
                        className="form-control mt-1"
                        placeholder="Title"
                        value={wtitle}
                        onChange={(e) => setwtitle(e.target.value)}
                    />
                    <label>Position</label>
                    <input
                        type="number"
                        className="form-control mt-1"
                        placeholder="Position"
                        value={wposition}
                        onChange={(e) => setWposition(e.target.value)}
                    />
                    <label>Image Link</label>
                    <input
                        type="text"
                        className="form-control mt-1"
                        placeholder="Image Link"
                        value={wimagelink}
                        onChange={(e) => setWimagelink(e.target.value)}
                    />
                    <label>Descripton</label>
                    <input
                        type="text"
                        className="form-control mt-1"
                        placeholder="Description"
                        value={wdescription}
                        onChange={(e) => setWdescription(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    {apitype == "post" ? (
                        <Button variant="primary" onClick={handleAddSubmit}>
                            Submit
                        </Button>
                    ) : (
                        <Button variant="primary" onClick={handleEditSubmit}>
                            Submit
                        </Button>
                    )}
                    <Button variant="secondary" onClick={handleAddClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Button
                style={{ float: "right", margin: "1rem" }}
                onClick={handleAdd}
            >
                Add Work
            </Button>
            <Table striped bordered hover>
                <thead>
                    <tr className="tablecolor">
                        <th style={{ color: "#fff" }}>ID</th>
                        <th style={{ color: "#fff" }}>Title</th>
                        <th style={{ color: "#fff" }}>Position</th>
                        <th style={{ color: "#fff" }}>Image Link</th>
                        <th style={{ color: "#fff" }}>Description</th>
                        <th style={{ color: "#fff" }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {workdata &&
                        workdata.map((res, index) => {
                            return [
                                <tr key={index}>
                                    <td style={{ color: "#fff" }}>
                                        {res.work_id}
                                    </td>
                                    <td style={{ color: "#fff" }}>
                                        {res.title}
                                    </td>
                                    <td style={{ color: "#fff" }}>
                                        {res.position}
                                    </td>
                                    <td style={{ color: "#fff" }}>
                                        {res.image_link}
                                    </td>
                                    <td style={{ color: "#fff" }}>
                                        {res.description}
                                    </td>

                                    <td style={{ color: "#fff" }}>
                                        <Button
                                            variant="danger"
                                            style={{ marginRight: "1rem" }}
                                            onClick={() =>
                                                handleDelete(res.work_id)
                                            }
                                        >
                                            Delete
                                        </Button>
                                        <Button
                                            variant="primary"
                                            onClick={() =>
                                                handleEdit(
                                                    res.work_id,
                                                    res.title,
                                                    res.position,
                                                    res.image_link,
                                                    res.description
                                                )
                                            }
                                        >
                                            Edit
                                        </Button>
                                    </td>
                                </tr>,
                            ];
                        })}
                </tbody>
            </Table>
        </>
    );
};
export default Worktable;
