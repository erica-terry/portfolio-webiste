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
                    {tag.link ?
                        (<a href={tag.link} className="my-2 text-white text-sm rounded-full bg-gray-900 hover:bg-theme-200 py-2 px-4 leading-tight md:mr-4">{<FontAwesomeIcon icon={faLink} size="sm" />} {tag.text}</a>)
                        : (<span className="my-2 text-white text-sm rounded-full bg-gray-900 hover:bg-theme-200 py-2 px-4 leading-tight md:mr-4 cursor-pointer">{tag.text}</span>)
                    }
                </li>)
            })}
        </ul>
    );
}

export default Tags;