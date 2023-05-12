import 'bulma';
import '../../styles/resume.css'

export default function Resume() {
    return (
        <div>
            <section className="section">
                <div className="container">
                    <h1 className="title is-1 text-focus-in">Jordan Grim</h1>
                    <h2 className="subtitle is-2 text-focus-in mb-0">Software Engineer</h2>
                    <p className="text-focus-in mb-4">
                        <strong><a href="mailto:jgrim524@gmail.com?subject=Looking to work with you!">Email me</a></strong> to talk to me further about my work.
                    </p>

                    <h2 className="subtitle is-3 text-focus-in2 mb-1">About Me:</h2>
                    <p className="text-focus-in2">
                        <ul className="mb-2">
                            <li>
                                - Developer always looking into new technologies
                            </li>
                            <li>
                                - Full-Stack Developer for 2 years
                            </li>
                            <li>
                                - Passionate about cars & fishing
                            </li>
                        </ul>
                    </p>
                    <hr>
                    </hr>

                    <h2 className="subtitle is-3 text-focus-in3 mb-1">Skills:</h2>
                    <p className="text-focus-in2 mb-2">
                        Here as some things that make me special.
                    </p>

                    <strong>Personality Traits:</strong>
                    <ul>
                        <li>
                            I'm the biggest team player who thrives in a team envoirnment
                        </li>
                        <li>
                            I am Constantly learning new languages/frameworks.
                        </li>
                        <li>
                            I love teaching anyone about engineering/web development.
                        </li>
                    </ul>

                    <strong>Languages:</strong>
                    <ul className="mb-2">
                        <li>
                            <abbr title="Javascript">Javascript</abbr>
                        </li>
                        <li>
                            <abbr title="Hyper Text Markup Language/Cascading Style Sheets">HTML/CSS</abbr>
                        </li>
                        <li>
                            <abbr title="TypeScript">Typescript</abbr>
                        </li>
                        <li>
                            <abbr title="Python">Python</abbr>
                        </li>
                        <li>
                            <abbr title="C sharp">C#</abbr>
                        </li>
                        <li>
                            <abbr title="Structured Query Language">MySQL</abbr>
                        </li>
                    </ul>

                    <strong>Tools:</strong>
                    <ul>
                        <li>
                            Fluent in other tools such as <a href="https://workspace.google.com/" target="_blank">G-Suite</a> which includes Google Docs, Slids, Sheets, Forms, ect.
                        </li>
                        <li>
                            Proficient at troubleshooting problems and finding a solution when it comes to Technology.
                        </li>
                        <li>
                            Knowledgeable of restraunt POS systems such as Focus.
                        </li>
                    </ul>
                    <hr>
                    </hr>
                    <h2 className="subtitle is-3 text-focus-in4">My projects</h2>
                    <div className="columns text-focus-in4 is-multiline ">
                        <div className="column is-half">
                            <h3 className="subtitle is-5 mb-0"><strong>Automotive Info</strong></h3>
                            <a href="https://github.com/icedoesjs/automotive-info" target="_blank">See on Github</a>
                            <ul className="mt-2">
                                <li>
                                Engineered a full-stack web application using NextJS, Flask and PostgreSQL to allow users to search, view
                                and save information about specified vehicles.
                                </li>
                                <li>
                                Constructed a Flask REST API to support create, deletes and updates to a user’s data.
                                </li>
                                <li>
                                Tested CRUD operations via Insomnia to mock JSON inputs to test endpoints.
                                </li>
                                <li>
                                Included multiple third party APIs to facilitate accurate vehicle information and images.
                                </li>
                            </ul>
                        </div>

                        <div className="column is-half">
                            <h3 className="subtitle is-5 mb-0"><strong>Socket</strong></h3>
                            <a href="https://github.com/icedoesjs/socket" target="_blank">See on Github</a>
                            <ul className="mt-2">
                                <li>
                                Developed a bot on Discord to provide many tools to aid developers in software development.
                                </li>
                                <li>
                                Parsed Discord messages to provide 23 commands to the end user.
                                </li>
                                <li>
                                Integrated tio.run’s Python API to allow secure code execution in many languages.
                                </li>
                                <li>
                                Leveraged many third party APIs using Javascript and node-fetch to provide help and statistics to the
                                user.           
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr></hr>
                    <h2 className="subtitle is-3 text-focus-in4">Past Work</h2>
                    <div className="columns text-focus-in4 is-multiline ">
                        <div className="column is-half">
                            <h3 className="subtitle is-5 mb-0"><strong>Coding Temple</strong></h3>
                            <ul className="mt-2">
                                <li>
                                Deployed full-stack web applications using React, Flask and PostgreSQL to allow users to store, remove,
                                update and delete their data.
                                </li>
                                <li>
                                Leveraged Python algorithms to solve problems with optimized time and space complexity allowing the
                                algorithm to be as efficient as possible.
                                </li>
                                <li>
                                Refined and assisted colleagues to help their Javascript and Python code execute more efficiently.
                                </li>
                                <li>
                                Constructed object-oriented Python programs using the four pillars of object oriented programming.
                                </li>
                                <li>
                                Developed relational databases using ElephantSQL to save time and space when storing data.
                                </li>
                            </ul>
                        </div>

                        <div className="column is-half">
                            <h3 className="subtitle is-5 mb-0"><strong>Xen/Stratis Development</strong></h3>
                            <ul className="mt-2">
                                <li>
                                Designed full-stack web applications using Flask, HTML and CSS to provide web applications to clients.
                                </li>
                                <li>
                                Constructed Discord bots using Node.js and Discord.js that meet the clients provided needs.
                                </li>
                                <li>
                                Established many CLI tools using Javascript and Python to aid in internal software development.
                                </li>
                                <li>
                                Assembled NPM packages using Javascript to allow simple bot functions to be automated.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <center>
                        <p className="text-focus-in4">Copyright &copy; Jordan Grim 2023 - All Rights Reserved</p>
                    </center>
                </div>
            </section>
        </div>
    )
}
