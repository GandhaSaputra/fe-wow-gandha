import React, {useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import {IconReadBook, IconAddMyList} from '../assets/assets';

import bookData from '../data/dataBookHome';




const RightDetailBook = () => {
    let {bookID} = useParams();

    // let idBook;
    // bookData.find(e => e.id === bookID)
    
    // console.log(idBook)

    const {name, penulis, image, publicationDate, pages, isbn, aboutBook} = bookData[bookID];
    
    // const data = [...bookData];

    // const {name, penulis, image, publicationDate, pages, isbn, aboutBook} = data[id];

    return (
        <div className="right right-detail-book">
            <div className="container-detail-book">
                <img src={image} alt="" className="img-detail-book"/>
                <div className="text-group-detail-book">
                    <div>
                        <p className="detail-book-name">{name}</p>
                        <p className="detail-book-grey-text">{penulis}</p>
                    </div>
                    <div>
                        <p className="detail-book-date-pages-isbn">Publication date</p>
                        <p className="detail-book-grey-text">{publicationDate}</p>
                    </div>
                    <div>
                        <p className="detail-book-date-pages-isbn">Pages</p>
                        <p className="detail-book-grey-text">{pages}</p>
                    </div>
                    <div>
                        <p className="detail-book-date-pages-isbn detail-book-isbn">ISBN</p>
                        <p className="detail-book-grey-text">{isbn}</p>
                    </div>
                </div>
            </div>
            <div className="container-about-book">
                <p className="about-book-title">About This Book </p>
                <p className="about-book-desc">{aboutBook}</p>
                <div className="abaout-book-button-group">
                    <Link to="/profile">
                        <img src={IconAddMyList} alt="addMyList" />
                    </Link>
                    <Link to="/read-book">
                        <img src={IconReadBook} alt="ReadBook" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default RightDetailBook;
