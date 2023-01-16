import React from 'react';
import '../../../reset.css';
import './cv.css';

const Cv = () => {
    return (
        <>
            <section className="cv-body-wrapper">
                <article className="cv-body">
                    <header className="cv-header clearfix">
                        <section className="header__right">
                            {/* <img className="cv-photo" src="https://media.licdn.com/dms/image/D5603AQEZ3TqXu0Aupw/profile-displayphoto-shrink_800_800/0/1672643101647?e=1679529600&v=beta&t=yAiUVjGssHOi_bRRKlpJqVQy7f86AiG04f754UFgDRk" alt="Irfan Fakri" /> */}
                        </section>
                        <section className="header__left">
                            <h1 className="my-name">Irfan Fakri Ardian</h1>
                            <h2 className="my-description highlight">Backend Engineer</h2>
                            <section className="contact-me">
                                <p>
                                    <a href="mailto:fakriardian@gmail.com">fakriardian@gmail.com</a>
                                    ｜
                                    <a href="https://www.linkedin.com/in/irfan-fakri-ardian-18bab4173/">linkedin.com/in/irfan-fakri-ardian/18bab4173</a>
                                    ｜
                                    <a href="https://github.com/fakriardian/">github.com/fakriardian</a>
                                </p>
                            </section>
                        </section>
                    </header>
                    <div className="separator"></div>
                    <main className="experiences clearfix">
                        <section className="left">
                            <h2>Experiences</h2>
                            <section className="experience-item">
                                <p className="experience-item__workplace highlight">PT. Solusi Pintap Indonesia</p>
                                <p className="experience-item__date">Jan 2022 - Present</p>
                                <p className="experience-item__position-title">Backend Engineer</p>
                                <ul className="experience-item__achievements">
                                    <li>Tech stack: Node.js, TypeScript, Koa, Knex.js, AWS, PostgreSQL, Mysql</li>
                                    <li>CRUD from database using Clean Architecture, add features, fix bugs, code review, etc.</li>
                                    <li>Collaborating with team for each new features.</li>
                                    <li>Interacting with third party payment gateway</li>
                                </ul>
                                <p className="experience-item__date">Jun 2022 - Present</p>
                                <p className="experience-item__position-title">Data Engineer</p>
                                <ul className="experience-item__achievements">
                                    <li>Tech stack: Python, Flask, Google Cloud Platform, AWS, Apache Airflow, Bigquery</li>
                                    <li>Create pipeline at apache airflow from data source to transform for storing to bigquery.</li>
                                    <li>Create scheduling instance in AWS using AWS Lambda and AWS Eventbridge.</li>
                                    <li>Code review, branch merge approvals, creating gitlab CI/CD.</li>
                                    <li>Setup for monitoring server using Grafana, Prometheus and Node Exporter.</li>
                                </ul>
                            </section>
                            <section className="experience-item">
                                <p className="experience-item__workplace highlight">PT. Itommey Bintang Indonesia</p>
                                <p className="experience-item__position-title">Backend Engineer</p>
                                <p className="experience-item__date">Dec 2019 - Jan 2022</p>
                                <ul className="experience-item__achievements">
                                    <li>Tech stack: Node.js, Express, Sequelize, Mongodb, PostgreSQL, Redis, Rabbit mq, Docker, Kubernetes</li>
                                    <li>Create basecode for development and flexible project.</li>
                                    <li>Create technical documentation sucs as Architected several services, ERD, etc. </li>
                                    <li>CRUD from database using Clean Architecture, interact with third party RESTful API, add features and unit tests, fix bugs, code review, etc.</li>
                                </ul>
                                <p className="experience-item__position-title">Fullstack Engineer</p>
                                <p className="experience-item__date">Sep 2019 - Mar 2020</p>
                                <ul className="experience-item__achievements">
                                    <li>Tech stack: Node.js, Express, Sequelize,  Mysql, Laravel, Docker</li>
                                    <li>Create wireframe and coded front-end UI and connect it to backend using REST API .</li>
                                    <li>CRUD from database using Clean Architecture, add features and unit tests, fix bugs, etc.</li>
                                </ul>
                            </section>
                            <section className="experience-item">
                                <p className="experience-item__workplace highlight">PT. Gria Inovasi Teknologi</p>
                                <p className="experience-item__date">Oct 2018 - Aug 2019</p>
                                <p className="experience-item__position-title">Fullstack Engineer</p>
                                <ul className="experience-item__achievements">
                                    <li>Tech stack: Node.js, Express,  Mysql, Codeigniter, Python, Sanic</li>
                                    <li>Coded with MVC architecture using Codeigniter.</li>
                                    <li>Create RESTful API using Sanic.</li>
                                    <li>Migration services from another server.</li>
                                    <li>Create model and maintain the result of named-entity recognition and sentiment analysis</li>
                                </ul>
                            </section>
                        </section>
                        <section className="right">
                            <h2>Profile</h2>
                            <br />
                            <label style={{ marginLeft: '15px' }}>
                                I’m a passionate learner who is looking for more experience about Programming. I like challenges and working with team and I still want to learn even more
                            </label>
                            <br />
                            <br />
                            <h2>Formal Education</h2>
                            <br />
                            <ul>
                                <li>Gunadarma University. Bachelor of Computer Science (S1). <strong className="highlight">Information System</strong> </li>
                                <li>GPA: 3.47 out of 4.00</li>
                                <li>2014-2018</li>
                            </ul>
                            <br />
                        </section>
                    </main>
                </article>
            </section>
        </>
    )
}
export default Cv