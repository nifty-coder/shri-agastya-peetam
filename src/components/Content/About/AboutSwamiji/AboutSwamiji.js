import React from 'react';
import classes from './AboutSwamiji.module.css';
import BooksBySwamiji from '../../BooksBySwamiji/BooksBySwamiji';

const AboutSwamiji = () => {
        return (
      <div className={classes.PageContainer}>
          <div className={classes.AboutSwamiji}>
            <div className={classes.SwamijiArticle}>
              <img src="/images/Meditation.jpeg" alt="Meditation" className={classes.Image} />
              {/* <span>&nbsp;&nbsp;</span> */}
              <div>
              Swami Sugunananda Gayathri is a Sidha Yogi. He went to Himalayas when he was 13 years old at the behest  
              of a Yogi. On 28-07-1999, on the divine occasion of Guru Purnima, in the early hours of the day 
              a Yogi came to him in his dream and told him "Your time has come! Come now". The yogi also blessed him by 
              giving Upadesha of Gayathri Mantra. In that same month, Swami  Sugunanda Gayathri left for the Himalayas. 
              He went to more than 16 different ashrams in search of the yogi and to understand the purpose of his life.
              </div>
            </div>

          <div className={classes.SwamijiArticle}>
            <div>
              In this journey, Swami Sugunananda Gayathri went to Rishikesh, Haridwar, Kedarnath, Gangothri and 
              many other divine places. He continued his meditation and Sadhana by doing Gayatri Mantra Japam for 5000 to 8000 times everyday. 
              He was given support and direction by Swami Dhirendra Baba. One day on the banks of Ganges in 
              Rishikesh, the same yogi who came into his dreams and beckoned him to go to Himalayas, appeared 
              and told Swami Sugunananda Gayathri that he is born for a special cause and he would be taking up 
              Rajayoga. The Yogi also told him that he will get a spiritual guru soon for carrying out his Sadhana. Then 
              over the next six days Swami Sugunananda Gayathri went to Kedarnath and met Mata Renuka Devi at 
              Brahma Guha. Mata Renuka accepted him as a disciple and taught him yoga vidhi. Swamiji then went to 
              Uttara Kasi and carried out deep meditation at Pandava Guha and in the caves of Gangothri. 
              During this period he would do Bhikshatan (beg for alms) everyday and eat only one roti per day. 
              Between 2008 and 2011, Swamiji spent time in Telangana, Rayalaseema and Visakhapatnam and continued his 
              Sadhana.
            </div>
            <img src="/images/Sanyasa Deeksha.jpeg" alt="Sanyasa Deeksha" className={classes.Image} />
          </div>

          <div className={classes.SwamijiArticle}>
            <img src="/images/Beautiful Himalayas.jpeg" alt="Beautiful Himalayas" className={classes.Image} />
             
            <div>
              Then, he went back to Himalayas to seek Mata Renuka Devi's help in understanding his Guruji's order 
              for him to conduct Gayathri Maha Purascharana after 7 years of marital life. 
              Swami Sugunananda was not convinced to live amongst people and wanted to continue his spiritual quest in the Himalayas. 
              Mata Renuka Devi told him to protect the Rishi Sampradaya and bring peace to people and nature as told by his Guruji
              and make sure the Gayatri Maha Purascharana continues in every generation after him.
              She also blessed him for Akhanda Gayathri Maha Purascharana for 5000 years. On January 22nd, 2018,
              Swami Sugunananda Gayathri started 24 years long Gayathri Maha Purascharana. 
            </div>
          </div>
        </div>

        <BooksBySwamiji className={classes.BooksBySwamiji} imgClassName={classes.BookCover} />
            
      </div>
    );
};

export default AboutSwamiji;