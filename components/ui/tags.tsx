import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';


interface Props {
    tags: Tag[]
}


const Tags = (props: Props) => {

    return (
        <ul className="my-5 flex list-none flex-col flex-wrap pl-0 md:flex-row ">
            {props.tags.map((tag, k) => {
                return (<li key={k} role="presentation">
                    <a href={tag.link || "javascript:void(0);"} className="my-2 text-white text-sm rounded-full bg-gray-900 hover:bg-blue-600 py-2 px-4 leading-tight md:mr-4">{tag.link && <FontAwesomeIcon icon={faLink} size="sm" />} {tag.text}</a>
                </li>)
            })}
        </ul>
    );
}

export default Tags;