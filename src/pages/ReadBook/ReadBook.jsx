import React from 'react'
import { BookContent, Icon } from '../../assets/assets'
import { Link } from 'react-router-dom'
import './ReadBook.css'

const ReadBook = () => {
    return (
        <div>
            <Link to="/detail-book">
                <img className="icon-wow-read-book" src={Icon} alt="icon" />
            </Link>
            <img className="book-content" src={BookContent} alt="Book Content" />
        </div>
    )
}

export default ReadBook
