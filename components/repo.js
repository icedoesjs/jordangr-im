"use client";
import useSWR from 'swr';
import '../styles/etc/repo.component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faX, faCodeFork } from '@fortawesome/free-solid-svg-icons';
const { github_name } = require('../config');
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Repo({name}) {
    const { data, error } = useSWR(`https://api.github.com/repos/${github_name}/${name}`, fetcher);
    const lang = null;

    if (error) return(
        <div className="project">
            <h2 className="title">Failed to fetch repo</h2>
            <span className="description">This repository was either not found or an error was encountered when fetching it.</span>
        </div>
    );
    if (!data) return (
        <div className="project">
            <h2 className="title">Fetching repo...</h2>
            <span className="description">This repository is being fetched via the Github API...</span>
        </div>
    );

    return (
        <div key={name} className="project">
            <h2 className="title">{data.name.replaceAll("-", " ")}</h2>
            <span className="watcher"><FontAwesomeIcon icon={faEye}/> {data.watchers}</span> <span className="watcher"><FontAwesomeIcon icon={faCodeFork}/> {data.forks}</span> <span className="watcher"><FontAwesomeIcon icon={faX}/> {data.open_issues}</span>
            <span className="description">{data.description}</span>
            <a className="btn btn-primary url" href={data.html_url} role="button">View Project</a> <a className="btn btn-primary url" href={data.clone_url} role="button">Clone Repo</a>
        </div>
    )
}
