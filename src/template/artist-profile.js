import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'



class ArtistProfileTemplate extends React.Component {
  render() {
    const artist = this.props.data.contentfulArtist
    // const siteTitle = this.props.data.site.siteMetadata.title
    console.log(artist.images)

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <h1>{artist.artist}</h1>
          <Img fluid={artist.images[0].fluid}></Img>
        </div>
      </Layout>
    )
  }
}

export default ArtistProfileTemplate

export const pageQuery = graphql`
  query ArtistProfileBySlug($slug: String!) {
    contentfulArtist(slug: { eq: $slug }) {
        id
        artist
        bio
        slug
        images {
            id
		    fluid {
          ...GatsbyContentfulFluid_tracedSVG
          }
        }
    }
  }
`
