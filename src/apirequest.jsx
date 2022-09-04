import React from "react";
import axios from "axios";
const baseurl = `http://localhost:5001`;
const token = localStorage.getItem("token");
async function getData(geturl) {
    console.log(`url ${baseurl}/${geturl}`);
    const response = axios.get(`${baseurl}/${geturl}`);
    return response;
    // const response = await axios.get(`${baseurl}/${geturl}`);
}
async function postClient(datajson) {
    try {
        const response = await axios.post(
            `${baseurl}/api/clients`,
            {
                client_name: `${datajson.wtitle}`,
                position: `${datajson.wposition}`,
                image_link: `${datajson.wimagelink}`,
            },
            {
                headers: {
                    Authorization: `authorization ${token}`,
                },
            }
        );
        console.log("this is response", response);
        return response;
    } catch (error) {
        console.log("error", error);
        return error;
    }
}

async function postWork(datajson) {
    try {
        const response = await axios.post(
            `${baseurl}/api/work`,
            {
                title: `${datajson.wtitle}`,
                position: `${datajson.wposition}`,
                image_link: `${datajson.wimagelink}`,
                description: `${datajson.wdescription}`,
            },
            {
                headers: {
                    Authorization: `authorization ${token}`,
                },
            }
        );
        console.log("this is response", response);
        return response;
    } catch (error) {
        console.log("error", error);
        return response;
    }
}

async function putClient(datajson) {
    try {
        const response = await axios.put(
            `${baseurl}/api/clients/${datajson.wid}`,
            {
                client_name: `${datajson.wtitle}`,
                position: `${datajson.wposition}`,
                image_link: `${datajson.wimagelink}`,
            },
            {
                headers: {
                    Authorization: `authorization ${token}`,
                },
            }
        );

        console.log("response", response);
        return response;
    } catch (error) {
        console.log("error", error);
        return error;
    }
}
async function putWork(datajson) {
    try {
        const response = await axios.put(
            `${baseurl}/api/works/${datajson.wid}`,
            {
                title: `${datajson.wtitle}`,
                position: `${datajson.wposition}`,
                image_link: `${datajson.wimagelink}`,
                description: `${datajson.wdescription}`,
            },
            {
                headers: {
                    Authorization: `authorization ${token}`,
                },
            }
        );

        console.log("response", response);
        return response;
    } catch (error) {
        console.log("error", error);
        return error;
    }
}

async function postLogin(url, datajson) {
    try {
        const response = await axios.post(`${baseurl}/${url}`, {
            password: `${datajson.password}`,
            email: `${datajson.email}`,
        });
        console.log("this is response", response);
        return response;
    } catch (error) {
        console.log("error", error);
        return error;
    }
}
async function postRegister(url, datajson) {
    try {
        const response = await axios.post(`${baseurl}/${url}`, {
            name: `${datajson.fullName}`,
            password: `${datajson.password}`,
            email: `${datajson.email}`,
        });
        return response;
    } catch (error) {
        console.log("error", error);
        return error;
    }
}

async function deleteApi(url, id) {
    try {
        console.log("here");
        const reponse = await axios.delete(`${baseurl}/${url}/${id}`, {
            headers: {
                Authorization: `authorization ${token}`,
            },
        });
        console.log("res", response);
        return response;
    } catch (error) {
        console.log("error", error);
        return error;
    }
}
export {
    getData,
    postClient,
    postWork,
    postRegister,
    postLogin,
    deleteApi,
    putWork,
    putClient,
};
