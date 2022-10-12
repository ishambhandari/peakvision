import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProjectItemStyles = styled.div`
    .projectItem__img {
        width: 100%;
        height: 400px;
        border-radius: 12px;
        overflow: hidden;
        display: inline-block;
        border: 3px solid var(--gray-2);
        img {
            height: 100%;
        }
    }
    .projectItem__info {
        margin-top: 1rem;
        background-color: var(--deep-dark);
        padding: 1rem;
        border-radius: 12px;
        border-style: solid;
        border-color: #fff;
        margin-bottom: 1rem;
    }
    .projectItem__title {
        font-size: 2.2rem;
    }
    .projectItem__desc {
        font-size: 1.6rem;
        font-family: "RobotoMono Regular";
        margin-top: 1rem;
    }
    @media only screen and (max-width: 768px) {
        .projectItem__img {
            height: 350px;
        }
    }
`;

function ProjectItem({
    img = ProjectImg,
    title = "Project Name",
    desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
}) {
    return (
        <ProjectItemStyles>
            <div className="projectItem__img">
                <img src={img} alt="project img" />
            </div>
            <div className="projectItem__info">
                <div>
                    <h3
                        className="projectItem__title"
                        style={{
                            color: "#ffffff",
                            textDecoration: "underline",
                        }}
                    >
                        {title}
                    </h3>
                </div>
                <p className="projectItem__desc" style={{ color: "#ffffff" }}>
                    {desc}
                </p>
            </div>
        </ProjectItemStyles>
    );
}
export default ProjectItem;
