const path = require('path')
const { Component } = require("react")

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions

    const artistProfile = path.resolve(`./src/template/artist-profile.js`)
    return graphql (
        `
        query
        {
        allContentfulArtist{
            edges {
                node {
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
    ).then(result => {
        if(result.errors) {
            console.log(result.errors)
            reject(result.errors)
        }

        //create artist profiles
        const artists = result.data.allContentfulArtist.edges
            console.log(artists)
        artists.forEach(artist => {
            createPage({
                path: `/artist/${artist.node.slug}`,
                component: artistProfile,
                context: {
                    slug: artist.node.slug
                }
            })
        })

    })
}
