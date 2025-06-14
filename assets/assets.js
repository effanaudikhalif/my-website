import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './me.jpg';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const projectsData = [
    {
        title: 'BU GCalSync',
        description: 'Transfer BU Schedules to Google Calendar',
        bgImage: '/calender.png',
        link: 'https://devpost.com/software/bu-calsync-exporting-studentlink-to-google-calendar',
    },
    {
        title: 'Human Resources',
        description: 'Manage employee and company records',
        bgImage: '/hr.png',
        link: 'https://github.com/effanaudikhalif/hr-database',
    },
    {
        title: 'RAG LLM',
        description: 'Retrieve data from PDF and answer questions',
        bgImage: '/rag.png',
        link: 'https://github.com/effanaudikhalif/rag_llm',
    },
    {
        title: 'Website Cloner',
        description: 'Clone any website and get HTML/CSS code',
        bgImage: '/website.png',
        link: 'https://github.com/effanaudikhalif/website-cloner',
    },
]

export const InternshipsData = [
    {
        icon: assets.web_icon,
        company: 'CAST Software',
        title: 'Solutions Engineer Intern',
        location: 'New York, NY',
        duration: 'May 2024 – Aug 2024',
        description: 'Developed tools and visualizations for internal operations and portfolio analytics products',
        tools: ['React', 'Node', 'Express', 'Python', 'PostgreSQL', 'Neo4j'],
        link: 'https://castsoftware.com',
    },
    {
        icon: assets.web_icon,
        company: 'Bank Negara Indonesia',
        title: 'Wholesale Solutions Intern',
        location: 'Jakarta, ID',
        duration: 'Aug 2022 – Oct 2022',
        description: 'Supported adoption of banking app through transaction analysis, SME advising, and outreach',
        tools: ['Cash Flow Analysis', 'Excel', 'PowerPoint', 'Word'],
        link: 'https://bni.co.id/id-id/',
    },
]

export const infoList = [
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Boston University', description: 'B.A. in Computer Science and Economics' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Activities', description: 'Phi Chi Theta, 180 Degrees Consulting, Indonesian Student Association' },
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'Java, Python, C, JavaScript, SQL, Node, Express, React, Next' }
];
