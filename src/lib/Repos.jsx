import React, { Component } from 'react';
import styled from 'styled-components';
import { Octokit } from 'octokit';



const Styles = styled.div`
  .repo-list {
    list-style-type: none;
  }

  .repo-text {
    font-family: 'Staatliches', cursive;
    color: rgba(255,255,255, 1);
    font-size: 26px;
  }

  .repo-entry {
    width: 1024px;
    background: rgba(50,54,57, .2);
    margin-top: 10px;
    padding: 5px;
    transition: .2s ease;
    text-align: left;
    &:hover{
      background: rgba(50,54,57, .4);
    }
  }
`

const octokit = new Octokit({
    baseUrl: 'https://api.github.com'
})
 
class Repos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            problems: [],
        }
    }

    componentDidMount() {
        this.getProblems();
    }

    getProblems = async () => {
        let problems = [];
        await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', this.props.params)
            .then(({data}) => {
                for(var i = 0; i < data.length; i++) {
                    problems.push({'name': data[i].name, 'url': data[i].html_url})
                }
            })
            .then(() => {
                this.setState({
                    problems
                })
            })
            .catch(console.log)
    }

    render() {
        return (
            <Styles>
                <ul className="repo-list">
                    {this.state.problems.length > 0 &&
                        this.state.problems.map((entry) => (
                            <li
                                className="repo-entry"
                            >
                                <a
                                    href={entry.url}
                                    target="_blank"
                                    className="repo-text"
                                >
                                    {entry.name}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </Styles>
        )
    }
}

export default Repos;
