import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import TextSearchContainer from "../search/text_search_container";

const SubNav = ({ parentType, parentObject, classToggle }) => {

    const parkId = parentObject.parkName ? parentObject.parkId : parentObject.id;
    const parkName = parentObject.parkName ? parentObject.parkName : parentObject.name;

    const breadcrumbsContent = parentType === "members" ? (
        <>
            <p>Members</p>
            <FontAwesomeIcon icon={faChevronRight} />
            <p>{parentObject.firstName} {parentObject.lastName}</p>
        </>
    ) : (
        <>
            <p>{parentObject.country}</p>
            <FontAwesomeIcon icon={faChevronRight} />
            <p>{parentObject.state}</p>
            <FontAwesomeIcon icon={faChevronRight} />
            <Link to={`/parks/${parkId}`}>{parkName}</Link>
        </>
    )

    return (
        <div className={`sub-nav ${classToggle}`}>
            <div className="breadcrumbs">
                {breadcrumbsContent}
            </div>
            <TextSearchContainer parentName="subnav" />
        </div>        
    )
}

export default SubNav;