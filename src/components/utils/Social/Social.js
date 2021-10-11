import React from 'react'
import './Social.css'
const commonClass = " social"

const applyCss = (event) => {
    let nodeName = event.target.nodeName 
    if(nodeName === 'svg'){
        let pathList = event.target.childNodes
        pathList.forEach(path => {path.style.stroke = "black"})
    } else if(nodeName === 'path'){
        let svg = event.target.parentNode;
        let pathList = svg.childNodes;
        pathList.forEach(path => {path.style.stroke = "black"})
    }
}

const removeHoverCss = (event) => {
    let nodeName = event.target.nodeName;
    if(nodeName === 'svg'){
        // change stroke of path as black;
        let pathList = event.target.childNodes
        pathList.forEach(path => {path.style.stroke = "white"})
    } else if(nodeName === 'path'){
        let svg = event.target.parentNode;
        let pathList = svg.childNodes;
        pathList.forEach(path => {path.style.stroke = "white"})
    }
}


const Discord = ({classDetails, link}) => {
    return(
        <div className={classDetails+commonClass} onMouseOver={applyCss} onMouseOut={removeHoverCss}>
            <a href={link}>
                <svg  viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M41.25 67.0312C44.0977 67.0312 46.4062 64.7227 46.4062 61.875C46.4062 59.0273 44.0977 56.7188 41.25 56.7188C38.4023 56.7188 36.0938 59.0273 36.0938 61.875C36.0938 64.7227 38.4023 67.0312 41.25 67.0312Z" fill="white"/>
                    <path d="M68.75 67.0312C71.5977 67.0312 73.9062 64.7227 73.9062 61.875C73.9062 59.0273 71.5977 56.7188 68.75 56.7188C65.9023 56.7188 63.5938 59.0273 63.5938 61.875C63.5938 64.7227 65.9023 67.0312 68.75 67.0312Z" fill="white"/>
                    <path d="M31.9695 34.3751C39.4218 32.0426 47.1915 30.8829 55.0001 30.9376C62.8085 30.8829 70.5781 32.0426 78.0302 34.375" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M78.03 75.6251C70.5779 77.9575 62.8084 79.1171 55 79.0624C47.1915 79.1171 39.422 77.9574 31.9698 75.625" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M66.6205 78.2409L71.7875 88.5751C72.1318 89.2693 72.7014 89.8261 73.4031 90.1546C74.1049 90.4831 74.8973 90.5639 75.6509 90.3837C86.1949 87.8059 95.2846 83.3115 101.905 77.5572C102.41 77.1225 102.78 76.551 102.968 75.9115C103.157 75.2719 103.156 74.5916 102.967 73.9522L88.3689 25.2917C88.2216 24.8011 87.9667 24.3494 87.6228 23.9697C87.2789 23.5899 86.8547 23.2916 86.381 23.0964C82.2568 21.4079 77.9914 20.0875 73.6345 19.1507C72.8044 18.9688 71.9364 19.1001 71.1972 19.5194C70.4581 19.9387 69.8999 20.6163 69.6301 21.4222L66.2042 31.7001" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M43.3797 78.2408L38.2126 88.5751C37.8683 89.2692 37.2987 89.8261 36.597 90.1546C35.8952 90.4831 35.1028 90.5639 34.3492 90.3837C23.8052 87.8059 14.7156 83.3115 8.09525 77.5573C7.58969 77.1226 7.22049 76.5511 7.03205 75.9116C6.84362 75.272 6.84398 74.5917 7.03309 73.9523L21.6312 25.2917C21.7786 24.8011 22.0335 24.3494 22.3774 23.9696C22.7213 23.5899 23.1455 23.2916 23.6192 23.0964C27.7433 21.4079 32.0088 20.0875 36.3656 19.1507C37.1957 18.9688 38.0637 19.1001 38.8029 19.5194C39.5421 19.9387 40.1002 20.6163 40.37 21.4222L43.7959 31.7001" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M41.25 67.0312C44.0977 67.0312 46.4062 64.7227 46.4062 61.875C46.4062 59.0273 44.0977 56.7188 41.25 56.7188C38.4023 56.7188 36.0938 59.0273 36.0938 61.875C36.0938 64.7227 38.4023 67.0312 41.25 67.0312Z" fill="white"/>
                    <path d="M68.75 67.0312C71.5977 67.0312 73.9062 64.7227 73.9062 61.875C73.9062 59.0273 71.5977 56.7188 68.75 56.7188C65.9023 56.7188 63.5938 59.0273 63.5938 61.875C63.5938 64.7227 65.9023 67.0312 68.75 67.0312Z" fill="white"/>
                    <path d="M31.9695 34.3751C39.4218 32.0426 47.1915 30.8829 55.0001 30.9376C62.8085 30.8829 70.5781 32.0426 78.0302 34.375" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M78.03 75.6251C70.5779 77.9575 62.8084 79.1171 55 79.0624C47.1915 79.1171 39.422 77.9574 31.9698 75.625" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M66.6205 78.2409L71.7875 88.5751C72.1318 89.2693 72.7014 89.8261 73.4031 90.1546C74.1049 90.4831 74.8973 90.5639 75.6509 90.3837C86.1949 87.8059 95.2846 83.3115 101.905 77.5572C102.41 77.1225 102.78 76.551 102.968 75.9115C103.157 75.2719 103.156 74.5916 102.967 73.9522L88.3689 25.2917C88.2216 24.8011 87.9667 24.3494 87.6228 23.9697C87.2789 23.5899 86.8547 23.2916 86.381 23.0964C82.2568 21.4079 77.9914 20.0875 73.6345 19.1507C72.8044 18.9688 71.9364 19.1001 71.1972 19.5194C70.4581 19.9387 69.8999 20.6163 69.6301 21.4222L66.2042 31.7001" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M43.3797 78.2408L38.2126 88.5751C37.8683 89.2692 37.2987 89.8261 36.597 90.1546C35.8952 90.4831 35.1028 90.5639 34.3492 90.3837C23.8052 87.8059 14.7156 83.3115 8.09525 77.5573C7.58969 77.1226 7.22049 76.5511 7.03205 75.9116C6.84362 75.272 6.84398 74.5917 7.03309 73.9523L21.6312 25.2917C21.7786 24.8011 22.0335 24.3494 22.3774 23.9696C22.7213 23.5899 23.1455 23.2916 23.6192 23.0964C27.7433 21.4079 32.0088 20.0875 36.3656 19.1507C37.1957 18.9688 38.0637 19.1001 38.8029 19.5194C39.5421 19.9387 40.1002 20.6163 40.37 21.4222L43.7959 31.7001" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
        </div>
        

    )
}

const LinkedIn = ({classDetails, link}) => {
    return (
        <div className={classDetails+commonClass} onMouseOver={applyCss} onMouseOut={removeHoverCss}>
            <a href={link}>
                <svg  viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M89.375 17.1875H20.625C18.7265 17.1875 17.1875 18.7265 17.1875 20.625V89.375C17.1875 91.2735 18.7265 92.8125 20.625 92.8125H89.375C91.2735 92.8125 92.8125 91.2735 92.8125 89.375V20.625C92.8125 18.7265 91.2735 17.1875 89.375 17.1875Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M51.5625 48.1252V75.6253" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M37.8125 48.1252V75.6253" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M51.5625 60.1565C51.5625 56.9656 52.8301 53.9054 55.0864 51.6491C57.3427 49.3928 60.4029 48.1252 63.5938 48.1252C66.7846 48.1252 69.8448 49.3928 72.1011 51.6491C74.3574 53.9054 75.625 56.9656 75.625 60.1565V75.6253" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M37.8125 39.5312C40.6602 39.5312 42.9688 37.2227 42.9688 34.375C42.9688 31.5273 40.6602 29.2188 37.8125 29.2188C34.9648 29.2188 32.6562 31.5273 32.6562 34.375C32.6562 37.2227 34.9648 39.5312 37.8125 39.5312Z" fill="white"/>
                </svg>
            </a>
        </div>
        

    )
}

const GitHub = ({classDetails, link}) => {
    return (
        <div className={classDetails+commonClass} onMouseOver={applyCss} onMouseOut={removeHoverCss}>
            <a href={link}>
                <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36.0938 99.6875C38.8288 99.6875 41.4518 98.601 43.3858 96.667C45.3198 94.7331 46.4062 92.11 46.4062 89.375V68.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M73.9062 99.6875C71.1712 99.6875 68.5482 98.601 66.6142 96.667C64.6802 94.7331 63.5938 92.11 63.5938 89.375V68.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M65.3125 68.75H72.1875C74.9225 68.75 77.5456 69.8365 79.4795 71.7705C81.4135 73.7044 82.5 76.3275 82.5 79.0625V82.5C82.5 85.235 83.5865 87.8581 85.5205 89.792C87.4544 91.726 90.0775 92.8125 92.8125 92.8125" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M44.6875 68.75H37.8125C35.0775 68.75 32.4544 69.8365 30.5205 71.7705C28.5865 73.7044 27.5 76.3275 27.5 79.0625V82.5C27.5 85.235 26.4135 87.8581 24.4795 89.792C22.5456 91.726 19.9225 92.8125 17.1875 92.8125" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M27.7199 32.9587C26.5178 29.8485 26.0285 26.5084 26.2879 23.1841C26.5473 19.8598 27.5488 16.6361 29.2188 13.75C32.9713 13.7479 36.6638 14.6916 39.9551 16.4939C43.2464 18.2963 46.0304 20.8991 48.0497 24.062V24.0625H61.9503V24.062C63.9697 20.8991 66.7536 18.2963 70.0449 16.4939C73.3363 14.6916 77.0288 13.7479 80.7813 13.75C82.4512 16.6361 83.4528 19.8598 83.7122 23.1841C83.9716 26.5084 83.4822 29.8485 82.2802 32.9587V32.9587C84.668 36.4033 85.9442 40.4962 85.9375 44.6875V48.125C85.9375 53.5951 83.7645 58.8411 79.8966 62.7091C76.0287 66.577 70.7826 68.75 65.3125 68.75H44.6875C39.2174 68.75 33.9714 66.577 30.1034 62.7091C26.2355 58.8411 24.0625 53.5951 24.0625 48.125V44.6875C24.0558 40.4962 25.3321 36.4033 27.7199 32.9586L27.7199 32.9587Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
        </div>
        

    )
}

export default function Social({SocialSVG, classDetails, link}) {
    // console.log(classDetails);
    if(SocialSVG === 'github') return <GitHub classDetails={classDetails} link={link}/>
    if(SocialSVG === 'linkedin') return <LinkedIn classDetails={classDetails} link={link}/>
    if(SocialSVG === 'discord') return <Discord classDetails={classDetails} link={link}/>
}
