import React from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import get from 'lodash/get'

export default function Artist(props) {
    //make query for artist in order to dynamically create links to profiles
    const allArtist = props.data.allContentfulArtist.edges
    console.log(allArtist)

    const renderArtist = () => {
      return allArtist.map( artist => <Link key={artist.node.id}to={`/artist/${artist.node.slug}`}>{`${artist.node.artist}`}</Link>)
    }

    renderArtist()

    return (
        <Layout >
            <SEO title="Artist Page" />
            <div style={{display: 'flex', flexDirection:"column"}}>
                <h1>Artist Page</h1>
                {renderArtist()}
                <br></br>
                <Link to='/'>Home</Link>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
query ArtistIndexQuery
    {
    allContentfulArtist{
        edges {
            node {
                id
                artist 
                bio
                slug
                images {
                id
                fluid {
                src
        }
        }
        
     }
    }
   }
 }
`

