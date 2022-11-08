import { gql } from '@apollo/client';

export const COUNTRY_DETAILS_FRAGMENT = gql`
  fragment countryDetail on CountriesType {
    uuid
    displayName
    phoneCode
    code
  }
`;

export const WHOIS_QUERY = gql`
  query whois {
    whois {
      uuid
      email
    }
  }
`;
