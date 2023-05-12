"use client";
import useSWR from 'swr';
import '../styles/etc/repo.component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faX, faCodeFork } from '@fortawesome/free-solid-svg-icons';
const { github_name, repo_data } = require('../config');
const fetcher = (...args) => fetch(...args).then((res) => res.json());
import Image from 'next/image';

export default function Repo({ name }) {
    const { data, error } = useSWR(`https://api.github.com/repos/${github_name}/${name}`, fetcher);
    const lang = null;

    if (error) return (
        <div className="project">
            <h2 className="title">Failed to fetch repo</h2>
            <span className="description">This repository was either not found or an error was encountered when fetching it.</span>
        </div>
    );
    if (!data) return (
        <div className="project" key={name}>
            <h2 className="title">Fetching repo...</h2>
            <span className="description">This repository is being fetched via the Github API...</span>
        </div>
    );

    // Private repos which can be defined via the config
    if (name.includes("|")) {
        let repo_name = name.split("|")[0].toLowerCase();
        return (
            <div className="project" key={repo_name}>
                <h2 className="title">{repo_name.replaceAll("-", " ")}</h2>
                <span className="watcher"><FontAwesomeIcon icon={faEye} /> {repo_data[repo_name].watchers}</span> <span className="watcher"><FontAwesomeIcon icon={faCodeFork} /> {repo_data[repo_name].branches}</span> <span className="watcher"><FontAwesomeIcon icon={faX} /> {repo_data[repo_name].issues}</span>
            <span className="description">{repo_data[repo_name].description}</span>
            <Image src={repo_data[repo_name].image} className="project-image" width={500} height={200} alt="Preview of this repo"/>
            <a className="btn btn-primary url" href={repo_data[repo_name].view_link} role="button">View Project</a> <a className="btn btn-primary url disabled-btn" href="#" role="button" aria-disabled="true">Clone Repo</a>
            </div>
        )
    }

    let repo_name = data.name.toLowerCase();
    return (
        <div key={name} className="project">
            <h2 className="title">{data.name?.replaceAll("-", " ")}</h2>
            <span className="watcher"><FontAwesomeIcon icon={faEye} /> {data.watchers}</span> <span className="watcher"><FontAwesomeIcon icon={faCodeFork} /> {data.forks}</span> <span className="watcher"><FontAwesomeIcon icon={faX} /> {data.open_issues}</span>
            <span className="description">{data.description}</span>
            <Image src={repo_data[repo_name].image} className="project-image" width={500} height={200} alt="Preview of this repo"/>
            <a className="btn btn-primary url" href={data.html_url} role="button">View Project</a> <a className="btn btn-primary url" href={data.clone_url} role="button">Clone Repo</a>
        </div>
    )
}
