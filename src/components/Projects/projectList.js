import acsSite from '../../images/acsSite.png';
import sankey from '../../images/sankeyDiagram.png';
import tipsyTrials from '../../images/tipsyTrials.png';
import starvingslug from '../../images/StarvingSlug.png';
import browsr from '../../images/browsr.png';
import friend from '../../images/junSite.png';
import spotify from '../../images/Spotify.png';

import html from '../../images/Logos/HTML.png';
import css from '../../images/Logos/CSS.png';
// import jsx from '../../images/Logos/JSX.png';
import bootstrap from '../../images/Logos/Bootstrap.png';
import mui from '../../images/Logos/MaterialUI.png';
import javascript from '../../images/Logos/JavaScript.png';
import react from '../../images/Logos/ReactJS.png';
import angular from '../../images/Logos/AngularJS.png';
import node from '../../images/Logos/NodeJS.png';
import d3 from '../../images/Logos/d3.png';
import jquery from '../../images/Logos/jquery.png';
import python from '../../images/Logos/Python.png';
import mongo from '../../images/Logos/MongoDB.png';
// import postgres from '../../images/Logos/Postgresql.png';
import nosql from '../../images/Logos/NoSQL.png';
import git from '../../images/Logos/Git.png';
import agile from '../../images/Logos/Agile.png';
import rest from '../../images/Logos/RESTful.png';
// import tableau from '../../images/Logos/tableau.png';
import swift from '../../images/Logos/Swift.png';
// import figma from '../../images/Logos/Figma.png';
import firebase from '../../images/Logos/Firebase.png';

export const columnOneProjects = {
    spotProject: {
        title: 'Spotify',
        image: spotify,
        description: "React web application with NodeJS server that allow users to search for songs and artists using Spotify's API. Users can also toggle songs to play",
        link: 'https://github.com/KevLoi/spotify',
        projectSkills: {
            html: html,
            css: css,
            bootstrap: bootstrap,
            javascript: javascript,
            react: react,
            mui: mui,
            node: node,
        }
    },
    browsrProject: {
        title: 'Browsr',
        image: browsr,
        description: 'Web app that allow users to sign through their google account and create their own resume websites using only Google Sheets, for free.',
        link: 'https://browsr.io',
        projectSkills: {
            html: html,
            css: css,
            bootstrap: bootstrap,
            javascript: javascript,
            python: python,
        }
    },
    tispyTrialsProject: {
        title: 'Tipsy Trials',
        image: tipsyTrials,
        description: 'iOS application that allow users to test their cognitive skills with a series of games while under the influence.',
        link: 'https://bitbucket.org/xdiaz1996/tipsy-ios/src/master/',
        projectSkills: {
            swift: swift,
            agile: agile,
            firebase: firebase,
            rest: rest,
        }
    },
    acsProject: {
        title: 'Ameritech Computer',
        image: acsSite,
        description: 'React web application that allow users to learn about Ameritech Computer Services, a service company in San Francisco.',
        link: 'https://ameritechcomputer.herokuapp.com',
        projectSkills: {
            html: html,
            css: css,
            bootstrap: bootstrap,
            javascript: javascript,
            react: react,
        }
    },

}

export const columnTwoProjects = {
    friendProject: {
        title: 'A Personal Website',
        image: friend,
        description: "Web page that allow viewers to learn more about a certain individual's skills, work experience, and hobbies.",
        link: 'https://junyanmak.github.io/Portfolio/',
        projectSkills: {
            html: html,
            css: css,
            bootstrap: bootstrap,
            javacript: javascript,
            jquery: jquery,
        }
    },
    starvingSlugProject: {
        title: 'Starving Slug',
        image: starvingslug,
        description: "Angular web application that allow users to share and delete recipes. Users can also search, comment on, and rate others' recipes.",
        link: 'https://github.com/starving-slug',
        projectSkills: {
            html: html,
            css: css,
            bootstrap: bootstrap,
            node: node, 
            angular: angular, 
            mongo: mongo,
            nosql: nosql,
            agile: agile,
            rest: rest,
        },
    },
    sankeyProject: {
        title: 'Strain Effects',
        image: sankey,
        description: 'Web page that uses a sankey diagram to inform users of emotional and medical effects of Santa Cruz based cannabis strains.',
        link: 'https://shihwesley.github.io/CMPS165-Final-Presentation/index.html',
        projectSkills: {
            html: html,
            css: css,
            javascript: javascript,
            d3: d3,
            git: git,
        },
    }
}