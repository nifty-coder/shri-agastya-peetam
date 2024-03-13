import bharatiyaDharmamBookCover from '../../../assets/resources/book-covers/BharatiyaDharmamBookCover.jpg';
import satyaDarshanamBookCover from '../../../assets/resources/book-covers/SatyaDarshanamBookCover.jpeg';
import mahatapasviBookCover from '../../../assets/resources/book-covers/MahatapasviBookCover.jpg';
import classes from './BooksBySwamiji.module.css';

const BooksBySwamiji = () => {
    let books = [
        {
            bookPath: '../../../resources/Bharatiya Dharmam Book.pdf',
            imgPath: bharatiyaDharmamBookCover,
            bookName: 'Bharatiya Dharmam'
        }, 
        {
            // bookPath: '',
            imgPath: satyaDarshanamBookCover,
            bookName: 'Satya Darshanam (releasing soon)'
        }
    ];

    return (
        <div className={classes.BooksBySwamiji}>
            <h4>&nbsp; Books By Swamiji</h4>

            {books.map((book, index) => (
            <div key={index} >
                <a href={book.bookPath} target="_blank" rel="noopener noreferrer" className={classes.Book}>
                <img src={book.imgPath} alt={book.bookName} className={classes.BookCover}  />
                    <div>{book.bookName}</div> 
                </a>  
            </div>
          ))}

            <h4> &nbsp; Books About Swamiji</h4>
            <div>
                <a href="/resources/Mahatapasvi Telugu Book.pdf" target="_blank" rel="noopener noreferrer" className={classes.Book}>
                <img src={mahatapasviBookCover} alt="Mahatapasvi" className={classes.BookCover} />
                <div>Mahatapasvi by Srinivas Sakkaram</div>
                </a>
            </div>
            <br />
            <br />
            <p>&nbsp; Note: Click on the Book Name to enjoy reading!</p>
        </div>
    );
};

export default BooksBySwamiji;