import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';
import Cell from '../components/Cell'
import staticdata from '../../staticdata.json'
import styled from 'styled-components';

const sectionCaption = styled.p`
  font-weight: 600px;
  font-size: 18px;
  text-transform: uppercase;
  color: #94a4ba;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }

`


const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to <br /> design and code React apps.</h1>
        <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.</p>
        <Link to="/page-2/">Watch the video</Link>
        <div className="Logos">
          <img src={require('../images/logo-sketch.png')} width="50" alt="" />
          <img src={require('../images/logo-figma.png')} width="50" alt="" />
          <img src={require('../images/logo-studio.png')} width="50" alt="" />
          <img src={require('../images/logo-framer.png')} width="50" alt="" />
          <img src={require('../images/logo-react.png')} width="50" alt="" />
          <img src={require('../images/logo-swift.png')} width="50" alt="" />
        </div>
       <Wave />
       </div>
    </div>
    <div className="Cards">
      <h2>11 courses, more coming</h2>
      <div className="CardGroup">
        <Card 
        title="Design System"
        text="10 sections"
        image={require('../images/wallpaper.jpg')}
        />
          <Card 
        title="React for Designers"
        text="12 section"
        image={require('../images/wallpaper2.jpg')}
        />
          <Card  
        title="Sound Design"
        text="5 section"
        image={require('../images/wallpaper3.jpg')}
        />
          <Card 
        title="ARKit 2"
        text="10 section"
        image={require('../images/wallpaper4.jpg')}
        />
       </div>
    </div>
    <Section 
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="React for Designers"
      text="Learn how to buid a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions,dynamic data with Contentful and deploying your site with Netlify."
      />
    <sectionCaption>12 sections - 6 hours</sectionCaption>
    <SectionCellGroup>
    {staticdata.cells.map(cell => (
    <Cell 
      title={cell.title} 
      image={cell.image} />
    ))}
    </SectionCellGroup>
  </Layout>
  )


export default IndexPage
