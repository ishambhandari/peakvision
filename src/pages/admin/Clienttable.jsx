import React from "react";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import { getData, postClient, putClient } from "../../apirequest.jsx";
import { Button } from "react-bootstrap";
import "./admin.css";

const Clienttable = ({ openModal, closeModal, setDel }) => {
    const [clientdata, setClientData] = React.useState([]);

    const [showAdd, setShowAdd] = React.useState(false);
    const [apitype, setApitype] = React.useState(null);
    const [wid, setwid] = React.useState("");
    const [wtitle, setwtitle] = React.useState("");
    const [wposition, setWposition] = React.useState("");
    const [wimagelink, setWimagelink] = React.useState("");
    React.useEffect(() => {
        const resclient = getData("api/allclients").then((res) => {
            setClientData(res.data);
        });
    }, []);

    const handleDelete = (id) => {
        console.log("this is id", id);
        openModal();
        setDel(id, "api/deleteclient");
    };

    const handleAdd = () => {
        setApitype("post");
        setShowAdd(true);
    };
    const handleEdit = (id, client_name, position, image_link) => {
        setwtitle(client_name);
        setWposition(position);
        setWimagelink(image_link);
        setwid(id);

        setShowAdd(true);
    };
    const handleEditSubmit = () => {
        putClient({ wid, wtitle, wposition, wimagelink }).then((r) => {
            window.location.reload(false);
        });
        setShowAdd(false);
    };
    const handleAddSubmit = () => {
        console.log("here");
        console.log("www", wtitle);
        console.log("www", wposition);
        console.log("www", wimagelink);
        postClient({ wtitle, wposition, wimagelink }).then((r) => {
            window.location.reload(false);
        });
        setShowAdd(false);
    };

    const handleAddClose = () => {
        setShowAdd(false);
    };
    return (
        <>
            <Modal show={showAdd} onHide={handleAddClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label>Name</label>
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
                Add Client
            </Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th style={{ color: "#fff" }}>ID</th>
                        <th style={{ color: "#fff" }}>Client Name</th>
                        <th style={{ color: "#fff" }}>Position</th>
                        <th style={{ color: "#fff" }}>Image Link</th>
                        <th style={{ color: "#fff" }} colSpan={1}>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {clientdata.map((res, index) => {
                        return [
                            <tr key={index}>
                                <td style={{ color: "#fff" }}>
                                    {res.client_id}
                                </td>
                                <td style={{ color: "#fff" }}>
                                    {res.client_name}
                                </td>
                                <td style={{ color: "#fff" }}>
                                    {res.position}
                                </td>
                                <td style={{ color: "#fff" }}>
                                    {res.image_link}
                                </td>

                                <td style={{ color: "#fff" }}>
                                    <Button
                                        variant="danger"
                                        style={{ marginRight: "1rem" }}
                                        onClick={() =>
                                            handleDelete(res.client_id)
                                        }
                                    >
                                        Delete
                                    </Button>
                                    <Button
                                        variant="primary"
                                        onClick={() =>
                                            handleEdit(
                                                res.client_id,
                                                res.client_name,
                                                res.position,
                                                res.image_link
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
export default Clienttable;
