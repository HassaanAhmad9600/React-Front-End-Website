// import React from 'react'
import styles from './Team.module.css'
import teamMember1 from './images/teamMember1.jpg'
import teamMember2 from './images/teamMember2.jpg'
import teamMember3 from './images/teamMember3.jpg'

const Team = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0 })
    }


    return (

        <div>

            <div className={styles.Team}>

                <div className={styles.top}>
                    <h1>Our Team</h1>
                    <span>Lorem, ipsum Odio non doloribus beatae esse officia, eius qui omnis</span>
                </div>



                <div className={styles.TeamImages}>

                    <div className={styles.teamImage}>

                        <div className={styles['image-overlay']}>

                            <img src={teamMember1} alt="Member 1" />

                            <div className={styles['overlay-content']}>
                                <ul>
                                    <li onClick={scrollToTop}><i className=" fa-brands fa fa-facebook"></i></li>
                                    <li onClick={scrollToTop}><i className=" fa-brands fa fa-twitter"></i></li>
                                    <li onClick={scrollToTop}><i className=" fa-brands fa fa-linkedin"></i></li>
                                    <li onClick={scrollToTop}><i className=" fa-brands fa fa-behance"></i></li>
                                </ul>
                            </div>

                        </div>

                        <div className={styles.TeamMemberInfo}>
                            <h3>Ragnar Lodbrok</h3>
                            <span>Product CareTaker</span>
                        </div>

                    </div>



                    <div className={styles.teamImage}>

                        <div className={styles['image-overlay']}>

                            <img src={teamMember2} alt="Member 2" />

                            <div className={styles['overlay-content']}>
                                <ul>
                                    <li onClick={scrollToTop}><i className=" fa-brands fa fa-facebook"></i></li>
                                    <li onClick={scrollToTop}><i className=" fa-brands fa fa-twitter"></i></li>
                                    <li onClick={scrollToTop}><i className=" fa-brands fa fa-linkedin"></i></li>
                                    <li onClick={scrollToTop}><i className=" fa-brands fa fa-behance"></i></li>
                                </ul>
                            </div>

                        </div>

                        <div className={styles.TeamMemberInfo}>
                            <h3>Ragnar Lodbrok</h3>
                            <span>Product CareTaker</span>
                        </div>

                    </div>




                    <div className={styles.teamImage}>

                        <div className={styles['image-overlay']}>

                            <img src={teamMember3} alt="Member 3" />

                            <div className={styles['overlay-content']}>
                                <ul>
                                    <li onClick={scrollToTop}><i className=" fa-brands fa fa-facebook"></i></li>
                                    <li onClick={scrollToTop}><i className=" fa-brands fa fa-twitter"></i></li>
                                    <li onClick={scrollToTop}><i className=" fa-brands fa fa-linkedin"></i></li>
                                    <li onClick={scrollToTop}><i className=" fa-brands fa fa-behance"></i></li>
                                </ul>
                            </div>

                        </div>

                        <div className={styles.TeamMemberInfo}>
                            <h3>Ragnar Lodbrok</h3>
                            <span>Product CareTaker</span>
                        </div>

                    </div>



                </div>

            </div>

        </div>
    )
}

export default Team
