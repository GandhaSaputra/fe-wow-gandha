import React from 'react'
import { Link } from 'react-router-dom';
import {DetailBookBesar, IconReadBook, IconAddMyList} from '../assets/assets';

const RightDetailBook = () => {
    return (
        <div className="right right-detail-book">
            <div className="container-detail-book">
                <img src={DetailBookBesar} alt="" className="img-detail-book"/>
                <div className="text-group-detail-book">
                    <div>
                        <p className="detail-book-name">Tess on the Road</p>
                        <p className="detail-book-grey-text">Rachel Hartman</p>
                    </div>
                    <div>
                        <p className="detail-book-date-pages-isbn">Publication date</p>
                        <p className="detail-book-grey-text">April 2020</p>
                    </div>
                    <div>
                        <p className="detail-book-date-pages-isbn">Pages</p>
                        <p className="detail-book-grey-text">436</p>
                    </div>
                    <div>
                        <p className="detail-book-date-pages-isbn detail-book-isbn">ISBN</p>
                        <p className="detail-book-grey-text">9781789807554</p>
                    </div>
                </div>
            </div>
            <div className="container-about-book">
                <p className="about-book-title">About This Book </p>
                <p className="about-book-desc">In the medieval kingdom of Goredd, women are expected to be ladies, men are their protectors, and dragons get to be whomever they want. Tess, stubbornly, is a troublemaker. You can’t make a scene at your sister’s wedding and break a relative’s nose with one punch (no matter how pompous he is) and not suffer the consequences. As her family plans to send her to a nunnery, Tess yanks on her boots and sets out on a journey across the Southlands, alone and pretending to be a boy. <br/><br/> Where Tess is headed is a mystery, even to her. So when she runs into an old friend, it’s a stroke of luck. This friend is a quigutl—a subspecies of dragon—who gives her both a purpose and protection on the road. But Tess is guarding a troubling secret. Her tumultuous past is a heavy burden to carry, and the memories she’s tried to forget threaten to expose her to the world in more ways than one. <br/><br/>Returning to the fascinating world she created in the award-winning and New York Times bestselling Seraphina, Rachel Hartman introduces readers to a new character and a new quest, pushing the boundaries of genre once again in this wholly original fantasy.</p>
                <div className="abaout-book-button-group">
                    <Link>
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
