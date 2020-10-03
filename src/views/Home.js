import React from 'react'
import './Home.css'
import Banner from ".././components/Banner";
import Card from ".././components/Card";


function Home() {

    const content = [
        {
            src: 'https://source.unsplash.com/1600x900/?Hotle,offers',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            title: 'New Destinations',
            
        },
        {
            src: 'https://source.unsplash.com/1600x900/?travel,rooms',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            title: 'Travel Around the WORLD',
          
        },
        {
            src: 'https://source.unsplash.com/1600x900/?traveling,adventure',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            title: 'New Cultures',
          
        },
        {
            src: 'https://source.unsplash.com/1600x900/?tourist,country',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            title: 'Best for Tourists',
        },
        {
            src: 'https://source.unsplash.com/1600x900/?travel,forign',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            title: 'Vacations',
        },
        {
            src: 'https://source.unsplash.com/1600x900/?world,travel',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            title: 'Dream Vacation',
        }
    ]

    return (
        <div className="home">
            <Banner className="home__banner"/>
            <div className="home__section">
                <Card content={content[0]}/>
                <Card content={content[1]}/>
                <Card content={content[2]}/>
            </div>

            <div className="home__section">
                <Card content={content[3]}/>
                <Card content={content[4]}/>
                <Card content={content[5]}/>
            </div>
        </div>
    )
}

export default Home
