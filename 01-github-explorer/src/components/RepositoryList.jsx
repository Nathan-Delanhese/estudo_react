import { RepositoryItem } from "./RepositoryItem";

const repositoryName = 'uniform2';

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
             <RepositoryItem repository="unform2"/>
             <RepositoryItem/>
             <RepositoryItem/>
             <RepositoryItem/>
            </ul>
        </section>
    );
}