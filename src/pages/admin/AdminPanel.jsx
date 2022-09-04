import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Clienttable from "./Clienttable.jsx";
import Worktable from "./Worktable.jsx";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { getData, deleteApi, postWork, postClient } from "../../apirequest.jsx";
import "./admin.css";

const AdminPanel = () => {
    const [key, setKey] = React.useState("Works");
    const [delid, setDelid] = React.useState(null);
    const [deltable, setDeltable] = React.useState(null);
    const [show, setShow] = React.useState(false);

    const setDel = (id, url) => {
        setDelid(id);
        setDeltable(url);
    };
    const handleDelete = () => {
        setShow(false);
        setDelid(null);
        setDeltable(null);
        if (delid && deltable !== null) {
            const res = deleteApi(deltable, delid);
            res.then((r) => window.location.reload(false));
        }
    };
    const handleAdd = () => {
        if (whichAdd == "work") {
            if (wtitle && wimagelink && wposition && wdescription !== "") {
                postWork(addWorkJson);
            } else {
                console.log("whooops", addWorkJson);
            }
        }
    };
    const handleClose = () => setShow(false);
    const handleAddClose = () => setShowAdd(false);
    const handleAddShow = () => setShowAdd(true);
    const handleShow = () => setShow(true);
    const logout = () => {
        localStorage.removeItem("token");
        window.location.reload(false);
    };
    const customModal = {
        delete: function deleteModal(id, table) {
            return (
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Are you sure you want to delete this item
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleDelete}>
                            Yes
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            No
                        </Button>
                    </Modal.Footer>
                </Modal>
            );
        },
    };

    return (
        <>
            <customModal.delete />
            <Link to={{ pathname: "/adminsignup" }}>
                <Button
                    variant="info"
                    style={{ margin: "1rem", position: "relative" }}
                >
                    Add Admin
                </Button>
            </Link>
            <Button
                variant="info"
                style={{ margin: "1rem", right: "0", position: "absolute" }}
                onClick={logout}
            >
                Logout
            </Button>
            <div className="tab-view" style={{ marginTop: "3rem" }}>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                    style={{ color: "white" }}
                >
                    <Tab
                        eventKey="Works"
                        title="Works"
                        style={{ color: "white" }}
                    >
                        <Worktable
                            closeModal={handleClose}
                            openModal={handleShow}
                            setDel={setDel}
                            openAddModal={handleAddShow}
                            openCloseMOdal={handleAddClose}
                        />
                    </Tab>
                    <Tab
                        eventKey="Clients"
                        title="Clients"
                        style={{ color: "white" }}
                    >
                        <Clienttable
                            closeModal={handleClose}
                            openModal={handleShow}
                            setDel={setDel}
                        />
                    </Tab>
                </Tabs>
            </div>
        </>
    );
};

export default AdminPanel;
