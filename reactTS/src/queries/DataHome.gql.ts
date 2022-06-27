import gql from 'graphql-tag';

const GET_HOMEDATA = gql`
{
  playersCollection{
    items{
     name,
      id,
      nickname,
      countryFlag{
        url 
      },
      photo{
        url
      },
     position,
     description{
      json
     }      
    }
  } 
}`

export default GET_HOMEDATA;