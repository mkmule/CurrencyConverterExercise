import { describe, expect, it } from '@jest/globals';


const countriesMap = {
  "AC": {
    "code": "AC",
    "unicode": "U+1F1E6 U+1F1E8",
    "name": "Ascension Island",
    "emoji": "🇦🇨"
  },
  "AD": {
    "code": "AD",
    "unicode": "U+1F1E6 U+1F1E9",
    "name": "Andorra",
    "emoji": "🇦🇩"
  },
  "AE": {
    "code": "AE",
    "unicode": "U+1F1E6 U+1F1EA",
    "name": "United Arab Emirates",
    "emoji": "🇦🇪"
  },
  "AF": {
    "code": "AF",
    "unicode": "U+1F1E6 U+1F1EB",
    "name": "Afghanistan",
    "emoji": "🇦🇫"
  },
  "AG": {
    "code": "AG",
    "unicode": "U+1F1E6 U+1F1EC",
    "name": "Antigua & Barbuda",
    "emoji": "🇦🇬"
  },
  "AI": {
    "code": "AI",
    "unicode": "U+1F1E6 U+1F1EE",
    "name": "Anguilla",
    "emoji": "🇦🇮"
  },
  "AL": {
    "code": "AL",
    "unicode": "U+1F1E6 U+1F1F1",
    "name": "Albania",
    "emoji": "🇦🇱"
  },
  "AM": {
    "code": "AM",
    "unicode": "U+1F1E6 U+1F1F2",
    "name": "Armenia",
    "emoji": "🇦🇲"
  },
  "AO": {
    "code": "AO",
    "unicode": "U+1F1E6 U+1F1F4",
    "name": "Angola",
    "emoji": "🇦🇴"
  },
  "AQ": {
    "code": "AQ",
    "unicode": "U+1F1E6 U+1F1F6",
    "name": "Antarctica",
    "emoji": "🇦🇶"
  },
  "AR": {
    "code": "AR",
    "unicode": "U+1F1E6 U+1F1F7",
    "name": "Argentina",
    "emoji": "🇦🇷"
  },
  "AS": {
    "code": "AS",
    "unicode": "U+1F1E6 U+1F1F8",
    "name": "American Samoa",
    "emoji": "🇦🇸"
  },
  "AT": {
    "code": "AT",
    "unicode": "U+1F1E6 U+1F1F9",
    "name": "Austria",
    "emoji": "🇦🇹"
  },
  "AU": {
    "code": "AU",
    "unicode": "U+1F1E6 U+1F1FA",
    "name": "Australia",
    "emoji": "🇦🇺"
  },
  "AW": {
    "code": "AW",
    "unicode": "U+1F1E6 U+1F1FC",
    "name": "Aruba",
    "emoji": "🇦🇼"
  },
  "AX": {
    "code": "AX",
    "unicode": "U+1F1E6 U+1F1FD",
    "name": "Åland Islands",
    "emoji": "🇦🇽"
  },
  "AZ": {
    "code": "AZ",
    "unicode": "U+1F1E6 U+1F1FF",
    "name": "Azerbaijan",
    "emoji": "🇦🇿"
  },
  "BA": {
    "code": "BA",
    "unicode": "U+1F1E7 U+1F1E6",
    "name": "Bosnia & Herzegovina",
    "emoji": "🇧🇦"
  },
  "BB": {
    "code": "BB",
    "unicode": "U+1F1E7 U+1F1E7",
    "name": "Barbados",
    "emoji": "🇧🇧"
  },
  "BD": {
    "code": "BD",
    "unicode": "U+1F1E7 U+1F1E9",
    "name": "Bangladesh",
    "emoji": "🇧🇩"
  },
  "BE": {
    "code": "BE",
    "unicode": "U+1F1E7 U+1F1EA",
    "name": "Belgium",
    "emoji": "🇧🇪"
  },
  "BF": {
    "code": "BF",
    "unicode": "U+1F1E7 U+1F1EB",
    "name": "Burkina Faso",
    "emoji": "🇧🇫"
  },
  "BG": {
    "code": "BG",
    "unicode": "U+1F1E7 U+1F1EC",
    "name": "Bulgaria",
    "emoji": "🇧🇬"
  },
  "BH": {
    "code": "BH",
    "unicode": "U+1F1E7 U+1F1ED",
    "name": "Bahrain",
    "emoji": "🇧🇭"
  },
  "BI": {
    "code": "BI",
    "unicode": "U+1F1E7 U+1F1EE",
    "name": "Burundi",
    "emoji": "🇧🇮"
  },
  "BJ": {
    "code": "BJ",
    "unicode": "U+1F1E7 U+1F1EF",
    "name": "Benin",
    "emoji": "🇧🇯"
  },
  "BL": {
    "code": "BL",
    "unicode": "U+1F1E7 U+1F1F1",
    "name": "St. Barthélemy",
    "emoji": "🇧🇱"
  },
  "BM": {
    "code": "BM",
    "unicode": "U+1F1E7 U+1F1F2",
    "name": "Bermuda",
    "emoji": "🇧🇲"
  },
  "BN": {
    "code": "BN",
    "unicode": "U+1F1E7 U+1F1F3",
    "name": "Brunei",
    "emoji": "🇧🇳"
  },
  "BO": {
    "code": "BO",
    "unicode": "U+1F1E7 U+1F1F4",
    "name": "Bolivia",
    "emoji": "🇧🇴"
  },
  "BQ": {
    "code": "BQ",
    "unicode": "U+1F1E7 U+1F1F6",
    "name": "Caribbean Netherlands",
    "emoji": "🇧🇶"
  },
  "BR": {
    "code": "BR",
    "unicode": "U+1F1E7 U+1F1F7",
    "name": "Brazil",
    "emoji": "🇧🇷"
  },
  "BS": {
    "code": "BS",
    "unicode": "U+1F1E7 U+1F1F8",
    "name": "Bahamas",
    "emoji": "🇧🇸"
  },
  "BT": {
    "code": "BT",
    "unicode": "U+1F1E7 U+1F1F9",
    "name": "Bhutan",
    "emoji": "🇧🇹"
  },
  "BV": {
    "code": "BV",
    "unicode": "U+1F1E7 U+1F1FB",
    "name": "Bouvet Island",
    "emoji": "🇧🇻"
  },
  "BW": {
    "code": "BW",
    "unicode": "U+1F1E7 U+1F1FC",
    "name": "Botswana",
    "emoji": "🇧🇼"
  },
  "BY": {
    "code": "BY",
    "unicode": "U+1F1E7 U+1F1FE",
    "name": "Belarus",
    "emoji": "🇧🇾"
  },
  "BZ": {
    "code": "BZ",
    "unicode": "U+1F1E7 U+1F1FF",
    "name": "Belize",
    "emoji": "🇧🇿"
  },
  "CA": {
    "code": "CA",
    "unicode": "U+1F1E8 U+1F1E6",
    "name": "Canada",
    "emoji": "🇨🇦"
  },
  "CC": {
    "code": "CC",
    "unicode": "U+1F1E8 U+1F1E8",
    "name": "Cocos (Keeling) Islands",
    "emoji": "🇨🇨"
  },
  "CD": {
    "code": "CD",
    "unicode": "U+1F1E8 U+1F1E9",
    "name": "Congo - Kinshasa",
    "emoji": "🇨🇩"
  },
  "CF": {
    "code": "CF",
    "unicode": "U+1F1E8 U+1F1EB",
    "name": "Central African Republic",
    "emoji": "🇨🇫"
  },
  "CG": {
    "code": "CG",
    "unicode": "U+1F1E8 U+1F1EC",
    "name": "Congo - Brazzaville",
    "emoji": "🇨🇬"
  },
  "CH": {
    "code": "CH",
    "unicode": "U+1F1E8 U+1F1ED",
    "name": "Switzerland",
    "emoji": "🇨🇭"
  },
  "CI": {
    "code": "CI",
    "unicode": "U+1F1E8 U+1F1EE",
    "name": "Côte d’Ivoire",
    "emoji": "🇨🇮"
  },
  "CK": {
    "code": "CK",
    "unicode": "U+1F1E8 U+1F1F0",
    "name": "Cook Islands",
    "emoji": "🇨🇰"
  },
  "CL": {
    "code": "CL",
    "unicode": "U+1F1E8 U+1F1F1",
    "name": "Chile",
    "emoji": "🇨🇱"
  },
  "CM": {
    "code": "CM",
    "unicode": "U+1F1E8 U+1F1F2",
    "name": "Cameroon",
    "emoji": "🇨🇲"
  },
  "CN": {
    "code": "CN",
    "unicode": "U+1F1E8 U+1F1F3",
    "name": "China",
    "emoji": "🇨🇳"
  },
  "CO": {
    "code": "CO",
    "unicode": "U+1F1E8 U+1F1F4",
    "name": "Colombia",
    "emoji": "🇨🇴"
  },
  "CP": {
    "code": "CP",
    "unicode": "U+1F1E8 U+1F1F5",
    "name": "Clipperton Island",
    "emoji": "🇨🇵"
  },
  "CR": {
    "code": "CR",
    "unicode": "U+1F1E8 U+1F1F7",
    "name": "Costa Rica",
    "emoji": "🇨🇷"
  },
  "CU": {
    "code": "CU",
    "unicode": "U+1F1E8 U+1F1FA",
    "name": "Cuba",
    "emoji": "🇨🇺"
  },
  "CV": {
    "code": "CV",
    "unicode": "U+1F1E8 U+1F1FB",
    "name": "Cape Verde",
    "emoji": "🇨🇻"
  },
  "CW": {
    "code": "CW",
    "unicode": "U+1F1E8 U+1F1FC",
    "name": "Curaçao",
    "emoji": "🇨🇼"
  },
  "CX": {
    "code": "CX",
    "unicode": "U+1F1E8 U+1F1FD",
    "name": "Christmas Island",
    "emoji": "🇨🇽"
  },
  "CY": {
    "code": "CY",
    "unicode": "U+1F1E8 U+1F1FE",
    "name": "Cyprus",
    "emoji": "🇨🇾"
  },
  "CZ": {
    "code": "CZ",
    "unicode": "U+1F1E8 U+1F1FF",
    "name": "Czechia",
    "emoji": "🇨🇿"
  },
  "DE": {
    "code": "DE",
    "unicode": "U+1F1E9 U+1F1EA",
    "name": "Germany",
    "emoji": "🇩🇪"
  },
  "DG": {
    "code": "DG",
    "unicode": "U+1F1E9 U+1F1EC",
    "name": "Diego Garcia",
    "emoji": "🇩🇬"
  },
  "DJ": {
    "code": "DJ",
    "unicode": "U+1F1E9 U+1F1EF",
    "name": "Djibouti",
    "emoji": "🇩🇯"
  },
  "DK": {
    "code": "DK",
    "unicode": "U+1F1E9 U+1F1F0",
    "name": "Denmark",
    "emoji": "🇩🇰"
  },
  "DM": {
    "code": "DM",
    "unicode": "U+1F1E9 U+1F1F2",
    "name": "Dominica",
    "emoji": "🇩🇲"
  },
  "DO": {
    "code": "DO",
    "unicode": "U+1F1E9 U+1F1F4",
    "name": "Dominican Republic",
    "emoji": "🇩🇴"
  },
  "DZ": {
    "code": "DZ",
    "unicode": "U+1F1E9 U+1F1FF",
    "name": "Algeria",
    "emoji": "🇩🇿"
  },
  "EA": {
    "code": "EA",
    "unicode": "U+1F1EA U+1F1E6",
    "name": "Ceuta & Melilla",
    "emoji": "🇪🇦"
  },
  "EC": {
    "code": "EC",
    "unicode": "U+1F1EA U+1F1E8",
    "name": "Ecuador",
    "emoji": "🇪🇨"
  },
  "EE": {
    "code": "EE",
    "unicode": "U+1F1EA U+1F1EA",
    "name": "Estonia",
    "emoji": "🇪🇪"
  },
  "EG": {
    "code": "EG",
    "unicode": "U+1F1EA U+1F1EC",
    "name": "Egypt",
    "emoji": "🇪🇬"
  },
  "EH": {
    "code": "EH",
    "unicode": "U+1F1EA U+1F1ED",
    "name": "Western Sahara",
    "emoji": "🇪🇭"
  },
  "ER": {
    "code": "ER",
    "unicode": "U+1F1EA U+1F1F7",
    "name": "Eritrea",
    "emoji": "🇪🇷"
  },
  "ES": {
    "code": "ES",
    "unicode": "U+1F1EA U+1F1F8",
    "name": "Spain",
    "emoji": "🇪🇸"
  },
  "ET": {
    "code": "ET",
    "unicode": "U+1F1EA U+1F1F9",
    "name": "Ethiopia",
    "emoji": "🇪🇹"
  },
  "EU": {
    "code": "EU",
    "unicode": "U+1F1EA U+1F1FA",
    "name": "European Union",
    "emoji": "🇪🇺"
  },
  "FI": {
    "code": "FI",
    "unicode": "U+1F1EB U+1F1EE",
    "name": "Finland",
    "emoji": "🇫🇮"
  },
  "FJ": {
    "code": "FJ",
    "unicode": "U+1F1EB U+1F1EF",
    "name": "Fiji",
    "emoji": "🇫🇯"
  },
  "FK": {
    "code": "FK",
    "unicode": "U+1F1EB U+1F1F0",
    "name": "Falkland Islands",
    "emoji": "🇫🇰"
  },
  "FM": {
    "code": "FM",
    "unicode": "U+1F1EB U+1F1F2",
    "name": "Micronesia",
    "emoji": "🇫🇲"
  },
  "FO": {
    "code": "FO",
    "unicode": "U+1F1EB U+1F1F4",
    "name": "Faroe Islands",
    "emoji": "🇫🇴"
  },
  "FR": {
    "code": "FR",
    "unicode": "U+1F1EB U+1F1F7",
    "name": "France",
    "emoji": "🇫🇷"
  },
  "GA": {
    "code": "GA",
    "unicode": "U+1F1EC U+1F1E6",
    "name": "Gabon",
    "emoji": "🇬🇦"
  },
  "GB": {
    "code": "GB",
    "unicode": "U+1F1EC U+1F1E7",
    "name": "United Kingdom",
    "emoji": "🇬🇧"
  },
  "GD": {
    "code": "GD",
    "unicode": "U+1F1EC U+1F1E9",
    "name": "Grenada",
    "emoji": "🇬🇩"
  },
  "GE": {
    "code": "GE",
    "unicode": "U+1F1EC U+1F1EA",
    "name": "Georgia",
    "emoji": "🇬🇪"
  },
  "GF": {
    "code": "GF",
    "unicode": "U+1F1EC U+1F1EB",
    "name": "French Guiana",
    "emoji": "🇬🇫"
  },
  "GG": {
    "code": "GG",
    "unicode": "U+1F1EC U+1F1EC",
    "name": "Guernsey",
    "emoji": "🇬🇬"
  },
  "GH": {
    "code": "GH",
    "unicode": "U+1F1EC U+1F1ED",
    "name": "Ghana",
    "emoji": "🇬🇭"
  },
  "GI": {
    "code": "GI",
    "unicode": "U+1F1EC U+1F1EE",
    "name": "Gibraltar",
    "emoji": "🇬🇮"
  },
  "GL": {
    "code": "GL",
    "unicode": "U+1F1EC U+1F1F1",
    "name": "Greenland",
    "emoji": "🇬🇱"
  },
  "GM": {
    "code": "GM",
    "unicode": "U+1F1EC U+1F1F2",
    "name": "Gambia",
    "emoji": "🇬🇲"
  },
  "GN": {
    "code": "GN",
    "unicode": "U+1F1EC U+1F1F3",
    "name": "Guinea",
    "emoji": "🇬🇳"
  },
  "GP": {
    "code": "GP",
    "unicode": "U+1F1EC U+1F1F5",
    "name": "Guadeloupe",
    "emoji": "🇬🇵"
  },
  "GQ": {
    "code": "GQ",
    "unicode": "U+1F1EC U+1F1F6",
    "name": "Equatorial Guinea",
    "emoji": "🇬🇶"
  },
  "GR": {
    "code": "GR",
    "unicode": "U+1F1EC U+1F1F7",
    "name": "Greece",
    "emoji": "🇬🇷"
  },
  "GS": {
    "code": "GS",
    "unicode": "U+1F1EC U+1F1F8",
    "name": "South Georgia & South Sandwich Islands",
    "emoji": "🇬🇸"
  },
  "GT": {
    "code": "GT",
    "unicode": "U+1F1EC U+1F1F9",
    "name": "Guatemala",
    "emoji": "🇬🇹"
  },
  "GU": {
    "code": "GU",
    "unicode": "U+1F1EC U+1F1FA",
    "name": "Guam",
    "emoji": "🇬🇺"
  },
  "GW": {
    "code": "GW",
    "unicode": "U+1F1EC U+1F1FC",
    "name": "Guinea-Bissau",
    "emoji": "🇬🇼"
  },
  "GY": {
    "code": "GY",
    "unicode": "U+1F1EC U+1F1FE",
    "name": "Guyana",
    "emoji": "🇬🇾"
  },
  "HK": {
    "code": "HK",
    "unicode": "U+1F1ED U+1F1F0",
    "name": "Hong Kong SAR China",
    "emoji": "🇭🇰"
  },
  "HM": {
    "code": "HM",
    "unicode": "U+1F1ED U+1F1F2",
    "name": "Heard & McDonald Islands",
    "emoji": "🇭🇲"
  },
  "HN": {
    "code": "HN",
    "unicode": "U+1F1ED U+1F1F3",
    "name": "Honduras",
    "emoji": "🇭🇳"
  },
  "HR": {
    "code": "HR",
    "unicode": "U+1F1ED U+1F1F7",
    "name": "Croatia",
    "emoji": "🇭🇷"
  },
  "HT": {
    "code": "HT",
    "unicode": "U+1F1ED U+1F1F9",
    "name": "Haiti",
    "emoji": "🇭🇹"
  },
  "HU": {
    "code": "HU",
    "unicode": "U+1F1ED U+1F1FA",
    "name": "Hungary",
    "emoji": "🇭🇺"
  },
  "IC": {
    "code": "IC",
    "unicode": "U+1F1EE U+1F1E8",
    "name": "Canary Islands",
    "emoji": "🇮🇨"
  },
  "ID": {
    "code": "ID",
    "unicode": "U+1F1EE U+1F1E9",
    "name": "Indonesia",
    "emoji": "🇮🇩"
  },
  "IE": {
    "code": "IE",
    "unicode": "U+1F1EE U+1F1EA",
    "name": "Ireland",
    "emoji": "🇮🇪"
  },
  "IL": {
    "code": "IL",
    "unicode": "U+1F1EE U+1F1F1",
    "name": "Israel",
    "emoji": "🇮🇱"
  },
  "IM": {
    "code": "IM",
    "unicode": "U+1F1EE U+1F1F2",
    "name": "Isle of Man",
    "emoji": "🇮🇲"
  },
  "IN": {
    "code": "IN",
    "unicode": "U+1F1EE U+1F1F3",
    "name": "India",
    "emoji": "🇮🇳"
  },
  "IO": {
    "code": "IO",
    "unicode": "U+1F1EE U+1F1F4",
    "name": "British Indian Ocean Territory",
    "emoji": "🇮🇴"
  },
  "IQ": {
    "code": "IQ",
    "unicode": "U+1F1EE U+1F1F6",
    "name": "Iraq",
    "emoji": "🇮🇶"
  },
  "IR": {
    "code": "IR",
    "unicode": "U+1F1EE U+1F1F7",
    "name": "Iran",
    "emoji": "🇮🇷"
  },
  "IS": {
    "code": "IS",
    "unicode": "U+1F1EE U+1F1F8",
    "name": "Iceland",
    "emoji": "🇮🇸"
  },
  "IT": {
    "code": "IT",
    "unicode": "U+1F1EE U+1F1F9",
    "name": "Italy",
    "emoji": "🇮🇹"
  },
  "JE": {
    "code": "JE",
    "unicode": "U+1F1EF U+1F1EA",
    "name": "Jersey",
    "emoji": "🇯🇪"
  },
  "JM": {
    "code": "JM",
    "unicode": "U+1F1EF U+1F1F2",
    "name": "Jamaica",
    "emoji": "🇯🇲"
  },
  "JO": {
    "code": "JO",
    "unicode": "U+1F1EF U+1F1F4",
    "name": "Jordan",
    "emoji": "🇯🇴"
  },
  "JP": {
    "code": "JP",
    "unicode": "U+1F1EF U+1F1F5",
    "name": "Japan",
    "emoji": "🇯🇵"
  },
  "KE": {
    "code": "KE",
    "unicode": "U+1F1F0 U+1F1EA",
    "name": "Kenya",
    "emoji": "🇰🇪"
  },
  "KG": {
    "code": "KG",
    "unicode": "U+1F1F0 U+1F1EC",
    "name": "Kyrgyzstan",
    "emoji": "🇰🇬"
  },
  "KH": {
    "code": "KH",
    "unicode": "U+1F1F0 U+1F1ED",
    "name": "Cambodia",
    "emoji": "🇰🇭"
  },
  "KI": {
    "code": "KI",
    "unicode": "U+1F1F0 U+1F1EE",
    "name": "Kiribati",
    "emoji": "🇰🇮"
  },
  "KM": {
    "code": "KM",
    "unicode": "U+1F1F0 U+1F1F2",
    "name": "Comoros",
    "emoji": "🇰🇲"
  },
  "KN": {
    "code": "KN",
    "unicode": "U+1F1F0 U+1F1F3",
    "name": "St. Kitts & Nevis",
    "emoji": "🇰🇳"
  },
  "KP": {
    "code": "KP",
    "unicode": "U+1F1F0 U+1F1F5",
    "name": "North Korea",
    "emoji": "🇰🇵"
  },
  "KR": {
    "code": "KR",
    "unicode": "U+1F1F0 U+1F1F7",
    "name": "South Korea",
    "emoji": "🇰🇷"
  },
  "KW": {
    "code": "KW",
    "unicode": "U+1F1F0 U+1F1FC",
    "name": "Kuwait",
    "emoji": "🇰🇼"
  },
  "KY": {
    "code": "KY",
    "unicode": "U+1F1F0 U+1F1FE",
    "name": "Cayman Islands",
    "emoji": "🇰🇾"
  },
  "KZ": {
    "code": "KZ",
    "unicode": "U+1F1F0 U+1F1FF",
    "name": "Kazakhstan",
    "emoji": "🇰🇿"
  },
  "LA": {
    "code": "LA",
    "unicode": "U+1F1F1 U+1F1E6",
    "name": "Laos",
    "emoji": "🇱🇦"
  },
  "LB": {
    "code": "LB",
    "unicode": "U+1F1F1 U+1F1E7",
    "name": "Lebanon",
    "emoji": "🇱🇧"
  },
  "LC": {
    "code": "LC",
    "unicode": "U+1F1F1 U+1F1E8",
    "name": "St. Lucia",
    "emoji": "🇱🇨"
  },
  "LI": {
    "code": "LI",
    "unicode": "U+1F1F1 U+1F1EE",
    "name": "Liechtenstein",
    "emoji": "🇱🇮"
  },
  "LK": {
    "code": "LK",
    "unicode": "U+1F1F1 U+1F1F0",
    "name": "Sri Lanka",
    "emoji": "🇱🇰"
  },
  "LR": {
    "code": "LR",
    "unicode": "U+1F1F1 U+1F1F7",
    "name": "Liberia",
    "emoji": "🇱🇷"
  },
  "LS": {
    "code": "LS",
    "unicode": "U+1F1F1 U+1F1F8",
    "name": "Lesotho",
    "emoji": "🇱🇸"
  },
  "LT": {
    "code": "LT",
    "unicode": "U+1F1F1 U+1F1F9",
    "name": "Lithuania",
    "emoji": "🇱🇹"
  },
  "LU": {
    "code": "LU",
    "unicode": "U+1F1F1 U+1F1FA",
    "name": "Luxembourg",
    "emoji": "🇱🇺"
  },
  "LV": {
    "code": "LV",
    "unicode": "U+1F1F1 U+1F1FB",
    "name": "Latvia",
    "emoji": "🇱🇻"
  },
  "LY": {
    "code": "LY",
    "unicode": "U+1F1F1 U+1F1FE",
    "name": "Libya",
    "emoji": "🇱🇾"
  },
  "MA": {
    "code": "MA",
    "unicode": "U+1F1F2 U+1F1E6",
    "name": "Morocco",
    "emoji": "🇲🇦"
  },
  "MC": {
    "code": "MC",
    "unicode": "U+1F1F2 U+1F1E8",
    "name": "Monaco",
    "emoji": "🇲🇨"
  },
  "MD": {
    "code": "MD",
    "unicode": "U+1F1F2 U+1F1E9",
    "name": "Moldova",
    "emoji": "🇲🇩"
  },
  "ME": {
    "code": "ME",
    "unicode": "U+1F1F2 U+1F1EA",
    "name": "Montenegro",
    "emoji": "🇲🇪"
  },
  "MF": {
    "code": "MF",
    "unicode": "U+1F1F2 U+1F1EB",
    "name": "St. Martin",
    "emoji": "🇲🇫"
  },
  "MG": {
    "code": "MG",
    "unicode": "U+1F1F2 U+1F1EC",
    "name": "Madagascar",
    "emoji": "🇲🇬"
  },
  "MH": {
    "code": "MH",
    "unicode": "U+1F1F2 U+1F1ED",
    "name": "Marshall Islands",
    "emoji": "🇲🇭"
  },
  "MK": {
    "code": "MK",
    "unicode": "U+1F1F2 U+1F1F0",
    "name": "Macedonia",
    "emoji": "🇲🇰"
  },
  "ML": {
    "code": "ML",
    "unicode": "U+1F1F2 U+1F1F1",
    "name": "Mali",
    "emoji": "🇲🇱"
  },
  "MM": {
    "code": "MM",
    "unicode": "U+1F1F2 U+1F1F2",
    "name": "Myanmar (Burma)",
    "emoji": "🇲🇲"
  },
  "MN": {
    "code": "MN",
    "unicode": "U+1F1F2 U+1F1F3",
    "name": "Mongolia",
    "emoji": "🇲🇳"
  },
  "MO": {
    "code": "MO",
    "unicode": "U+1F1F2 U+1F1F4",
    "name": "Macau SAR China",
    "emoji": "🇲🇴"
  },
  "MP": {
    "code": "MP",
    "unicode": "U+1F1F2 U+1F1F5",
    "name": "Northern Mariana Islands",
    "emoji": "🇲🇵"
  },
  "MQ": {
    "code": "MQ",
    "unicode": "U+1F1F2 U+1F1F6",
    "name": "Martinique",
    "emoji": "🇲🇶"
  },
  "MR": {
    "code": "MR",
    "unicode": "U+1F1F2 U+1F1F7",
    "name": "Mauritania",
    "emoji": "🇲🇷"
  },
  "MS": {
    "code": "MS",
    "unicode": "U+1F1F2 U+1F1F8",
    "name": "Montserrat",
    "emoji": "🇲🇸"
  },
  "MT": {
    "code": "MT",
    "unicode": "U+1F1F2 U+1F1F9",
    "name": "Malta",
    "emoji": "🇲🇹"
  },
  "MU": {
    "code": "MU",
    "unicode": "U+1F1F2 U+1F1FA",
    "name": "Mauritius",
    "emoji": "🇲🇺"
  },
  "MV": {
    "code": "MV",
    "unicode": "U+1F1F2 U+1F1FB",
    "name": "Maldives",
    "emoji": "🇲🇻"
  },
  "MW": {
    "code": "MW",
    "unicode": "U+1F1F2 U+1F1FC",
    "name": "Malawi",
    "emoji": "🇲🇼"
  },
  "MX": {
    "code": "MX",
    "unicode": "U+1F1F2 U+1F1FD",
    "name": "Mexico",
    "emoji": "🇲🇽"
  },
  "MY": {
    "code": "MY",
    "unicode": "U+1F1F2 U+1F1FE",
    "name": "Malaysia",
    "emoji": "🇲🇾"
  },
  "MZ": {
    "code": "MZ",
    "unicode": "U+1F1F2 U+1F1FF",
    "name": "Mozambique",
    "emoji": "🇲🇿"
  },
  "NA": {
    "code": "NA",
    "unicode": "U+1F1F3 U+1F1E6",
    "name": "Namibia",
    "emoji": "🇳🇦"
  },
  "NC": {
    "code": "NC",
    "unicode": "U+1F1F3 U+1F1E8",
    "name": "New Caledonia",
    "emoji": "🇳🇨"
  },
  "NE": {
    "code": "NE",
    "unicode": "U+1F1F3 U+1F1EA",
    "name": "Niger",
    "emoji": "🇳🇪"
  },
  "NF": {
    "code": "NF",
    "unicode": "U+1F1F3 U+1F1EB",
    "name": "Norfolk Island",
    "emoji": "🇳🇫"
  },
  "NG": {
    "code": "NG",
    "unicode": "U+1F1F3 U+1F1EC",
    "name": "Nigeria",
    "emoji": "🇳🇬"
  },
  "NI": {
    "code": "NI",
    "unicode": "U+1F1F3 U+1F1EE",
    "name": "Nicaragua",
    "emoji": "🇳🇮"
  },
  "NL": {
    "code": "NL",
    "unicode": "U+1F1F3 U+1F1F1",
    "name": "Netherlands",
    "emoji": "🇳🇱"
  },
  "NO": {
    "code": "NO",
    "unicode": "U+1F1F3 U+1F1F4",
    "name": "Norway",
    "emoji": "🇳🇴"
  },
  "NP": {
    "code": "NP",
    "unicode": "U+1F1F3 U+1F1F5",
    "name": "Nepal",
    "emoji": "🇳🇵"
  },
  "NR": {
    "code": "NR",
    "unicode": "U+1F1F3 U+1F1F7",
    "name": "Nauru",
    "emoji": "🇳🇷"
  },
  "NU": {
    "code": "NU",
    "unicode": "U+1F1F3 U+1F1FA",
    "name": "Niue",
    "emoji": "🇳🇺"
  },
  "NZ": {
    "code": "NZ",
    "unicode": "U+1F1F3 U+1F1FF",
    "name": "New Zealand",
    "emoji": "🇳🇿"
  },
  "OM": {
    "code": "OM",
    "unicode": "U+1F1F4 U+1F1F2",
    "name": "Oman",
    "emoji": "🇴🇲"
  },
  "PA": {
    "code": "PA",
    "unicode": "U+1F1F5 U+1F1E6",
    "name": "Panama",
    "emoji": "🇵🇦"
  },
  "PE": {
    "code": "PE",
    "unicode": "U+1F1F5 U+1F1EA",
    "name": "Peru",
    "emoji": "🇵🇪"
  },
  "PF": {
    "code": "PF",
    "unicode": "U+1F1F5 U+1F1EB",
    "name": "French Polynesia",
    "emoji": "🇵🇫"
  },
  "PG": {
    "code": "PG",
    "unicode": "U+1F1F5 U+1F1EC",
    "name": "Papua New Guinea",
    "emoji": "🇵🇬"
  },
  "PH": {
    "code": "PH",
    "unicode": "U+1F1F5 U+1F1ED",
    "name": "Philippines",
    "emoji": "🇵🇭"
  },
  "PK": {
    "code": "PK",
    "unicode": "U+1F1F5 U+1F1F0",
    "name": "Pakistan",
    "emoji": "🇵🇰"
  },
  "PL": {
    "code": "PL",
    "unicode": "U+1F1F5 U+1F1F1",
    "name": "Poland",
    "emoji": "🇵🇱"
  },
  "PM": {
    "code": "PM",
    "unicode": "U+1F1F5 U+1F1F2",
    "name": "St. Pierre & Miquelon",
    "emoji": "🇵🇲"
  },
  "PN": {
    "code": "PN",
    "unicode": "U+1F1F5 U+1F1F3",
    "name": "Pitcairn Islands",
    "emoji": "🇵🇳"
  },
  "PR": {
    "code": "PR",
    "unicode": "U+1F1F5 U+1F1F7",
    "name": "Puerto Rico",
    "emoji": "🇵🇷"
  },
  "PS": {
    "code": "PS",
    "unicode": "U+1F1F5 U+1F1F8",
    "name": "Palestinian Territories",
    "emoji": "🇵🇸"
  },
  "PT": {
    "code": "PT",
    "unicode": "U+1F1F5 U+1F1F9",
    "name": "Portugal",
    "emoji": "🇵🇹"
  },
  "PW": {
    "code": "PW",
    "unicode": "U+1F1F5 U+1F1FC",
    "name": "Palau",
    "emoji": "🇵🇼"
  },
  "PY": {
    "code": "PY",
    "unicode": "U+1F1F5 U+1F1FE",
    "name": "Paraguay",
    "emoji": "🇵🇾"
  },
  "QA": {
    "code": "QA",
    "unicode": "U+1F1F6 U+1F1E6",
    "name": "Qatar",
    "emoji": "🇶🇦"
  },
  "RE": {
    "code": "RE",
    "unicode": "U+1F1F7 U+1F1EA",
    "name": "Réunion",
    "emoji": "🇷🇪"
  },
  "RO": {
    "code": "RO",
    "unicode": "U+1F1F7 U+1F1F4",
    "name": "Romania",
    "emoji": "🇷🇴"
  },
  "RS": {
    "code": "RS",
    "unicode": "U+1F1F7 U+1F1F8",
    "name": "Serbia",
    "emoji": "🇷🇸"
  },
  "RU": {
    "code": "RU",
    "unicode": "U+1F1F7 U+1F1FA",
    "name": "Russia",
    "emoji": "🇷🇺"
  },
  "RW": {
    "code": "RW",
    "unicode": "U+1F1F7 U+1F1FC",
    "name": "Rwanda",
    "emoji": "🇷🇼"
  },
  "SA": {
    "code": "SA",
    "unicode": "U+1F1F8 U+1F1E6",
    "name": "Saudi Arabia",
    "emoji": "🇸🇦"
  },
  "SB": {
    "code": "SB",
    "unicode": "U+1F1F8 U+1F1E7",
    "name": "Solomon Islands",
    "emoji": "🇸🇧"
  },
  "SC": {
    "code": "SC",
    "unicode": "U+1F1F8 U+1F1E8",
    "name": "Seychelles",
    "emoji": "🇸🇨"
  },
  "SD": {
    "code": "SD",
    "unicode": "U+1F1F8 U+1F1E9",
    "name": "Sudan",
    "emoji": "🇸🇩"
  },
  "SE": {
    "code": "SE",
    "unicode": "U+1F1F8 U+1F1EA",
    "name": "Sweden",
    "emoji": "🇸🇪"
  },
  "SG": {
    "code": "SG",
    "unicode": "U+1F1F8 U+1F1EC",
    "name": "Singapore",
    "emoji": "🇸🇬"
  },
  "SH": {
    "code": "SH",
    "unicode": "U+1F1F8 U+1F1ED",
    "name": "St. Helena",
    "emoji": "🇸🇭"
  },
  "SI": {
    "code": "SI",
    "unicode": "U+1F1F8 U+1F1EE",
    "name": "Slovenia",
    "emoji": "🇸🇮"
  },
  "SJ": {
    "code": "SJ",
    "unicode": "U+1F1F8 U+1F1EF",
    "name": "Svalbard & Jan Mayen",
    "emoji": "🇸🇯"
  },
  "SK": {
    "code": "SK",
    "unicode": "U+1F1F8 U+1F1F0",
    "name": "Slovakia",
    "emoji": "🇸🇰"
  },
  "SL": {
    "code": "SL",
    "unicode": "U+1F1F8 U+1F1F1",
    "name": "Sierra Leone",
    "emoji": "🇸🇱"
  },
  "SM": {
    "code": "SM",
    "unicode": "U+1F1F8 U+1F1F2",
    "name": "San Marino",
    "emoji": "🇸🇲"
  },
  "SN": {
    "code": "SN",
    "unicode": "U+1F1F8 U+1F1F3",
    "name": "Senegal",
    "emoji": "🇸🇳"
  },
  "SO": {
    "code": "SO",
    "unicode": "U+1F1F8 U+1F1F4",
    "name": "Somalia",
    "emoji": "🇸🇴"
  },
  "SR": {
    "code": "SR",
    "unicode": "U+1F1F8 U+1F1F7",
    "name": "Suriname",
    "emoji": "🇸🇷"
  },
  "SS": {
    "code": "SS",
    "unicode": "U+1F1F8 U+1F1F8",
    "name": "South Sudan",
    "emoji": "🇸🇸"
  },
  "ST": {
    "code": "ST",
    "unicode": "U+1F1F8 U+1F1F9",
    "name": "São Tomé & Príncipe",
    "emoji": "🇸🇹"
  },
  "SV": {
    "code": "SV",
    "unicode": "U+1F1F8 U+1F1FB",
    "name": "El Salvador",
    "emoji": "🇸🇻"
  },
  "SX": {
    "code": "SX",
    "unicode": "U+1F1F8 U+1F1FD",
    "name": "Sint Maarten",
    "emoji": "🇸🇽"
  },
  "SY": {
    "code": "SY",
    "unicode": "U+1F1F8 U+1F1FE",
    "name": "Syria",
    "emoji": "🇸🇾"
  },
  "SZ": {
    "code": "SZ",
    "unicode": "U+1F1F8 U+1F1FF",
    "name": "Swaziland",
    "emoji": "🇸🇿"
  },
  "TA": {
    "code": "TA",
    "unicode": "U+1F1F9 U+1F1E6",
    "name": "Tristan da Cunha",
    "emoji": "🇹🇦"
  },
  "TC": {
    "code": "TC",
    "unicode": "U+1F1F9 U+1F1E8",
    "name": "Turks & Caicos Islands",
    "emoji": "🇹🇨"
  },
  "TD": {
    "code": "TD",
    "unicode": "U+1F1F9 U+1F1E9",
    "name": "Chad",
    "emoji": "🇹🇩"
  },
  "TF": {
    "code": "TF",
    "unicode": "U+1F1F9 U+1F1EB",
    "name": "French Southern Territories",
    "emoji": "🇹🇫"
  },
  "TG": {
    "code": "TG",
    "unicode": "U+1F1F9 U+1F1EC",
    "name": "Togo",
    "emoji": "🇹🇬"
  },
  "TH": {
    "code": "TH",
    "unicode": "U+1F1F9 U+1F1ED",
    "name": "Thailand",
    "emoji": "🇹🇭"
  },
  "TJ": {
    "code": "TJ",
    "unicode": "U+1F1F9 U+1F1EF",
    "name": "Tajikistan",
    "emoji": "🇹🇯"
  },
  "TK": {
    "code": "TK",
    "unicode": "U+1F1F9 U+1F1F0",
    "name": "Tokelau",
    "emoji": "🇹🇰"
  },
  "TL": {
    "code": "TL",
    "unicode": "U+1F1F9 U+1F1F1",
    "name": "Timor-Leste",
    "emoji": "🇹🇱"
  },
  "TM": {
    "code": "TM",
    "unicode": "U+1F1F9 U+1F1F2",
    "name": "Turkmenistan",
    "emoji": "🇹🇲"
  },
  "TN": {
    "code": "TN",
    "unicode": "U+1F1F9 U+1F1F3",
    "name": "Tunisia",
    "emoji": "🇹🇳"
  },
  "TO": {
    "code": "TO",
    "unicode": "U+1F1F9 U+1F1F4",
    "name": "Tonga",
    "emoji": "🇹🇴"
  },
  "TR": {
    "code": "TR",
    "unicode": "U+1F1F9 U+1F1F7",
    "name": "Turkey",
    "emoji": "🇹🇷"
  },
  "TT": {
    "code": "TT",
    "unicode": "U+1F1F9 U+1F1F9",
    "name": "Trinidad & Tobago",
    "emoji": "🇹🇹"
  },
  "TV": {
    "code": "TV",
    "unicode": "U+1F1F9 U+1F1FB",
    "name": "Tuvalu",
    "emoji": "🇹🇻"
  },
  "TW": {
    "code": "TW",
    "unicode": "U+1F1F9 U+1F1FC",
    "name": "Taiwan",
    "emoji": "🇹🇼"
  },
  "TZ": {
    "code": "TZ",
    "unicode": "U+1F1F9 U+1F1FF",
    "name": "Tanzania",
    "emoji": "🇹🇿"
  },
  "UA": {
    "code": "UA",
    "unicode": "U+1F1FA U+1F1E6",
    "name": "Ukraine",
    "emoji": "🇺🇦"
  },
  "UG": {
    "code": "UG",
    "unicode": "U+1F1FA U+1F1EC",
    "name": "Uganda",
    "emoji": "🇺🇬"
  },
  "UM": {
    "code": "UM",
    "unicode": "U+1F1FA U+1F1F2",
    "name": "U.S. Outlying Islands",
    "emoji": "🇺🇲"
  },
  "UN": {
    "code": "UN",
    "unicode": "U+1F1FA U+1F1F3",
    "name": "United Nations",
    "emoji": "🇺🇳"
  },
  "US": {
    "code": "US",
    "unicode": "U+1F1FA U+1F1F8",
    "name": "United States",
    "emoji": "🇺🇸"
  },
  "UY": {
    "code": "UY",
    "unicode": "U+1F1FA U+1F1FE",
    "name": "Uruguay",
    "emoji": "🇺🇾"
  },
  "UZ": {
    "code": "UZ",
    "unicode": "U+1F1FA U+1F1FF",
    "name": "Uzbekistan",
    "emoji": "🇺🇿"
  },
  "VA": {
    "code": "VA",
    "unicode": "U+1F1FB U+1F1E6",
    "name": "Vatican City",
    "emoji": "🇻🇦"
  },
  "VC": {
    "code": "VC",
    "unicode": "U+1F1FB U+1F1E8",
    "name": "St. Vincent & Grenadines",
    "emoji": "🇻🇨"
  },
  "VE": {
    "code": "VE",
    "unicode": "U+1F1FB U+1F1EA",
    "name": "Venezuela",
    "emoji": "🇻🇪"
  },
  "VG": {
    "code": "VG",
    "unicode": "U+1F1FB U+1F1EC",
    "name": "British Virgin Islands",
    "emoji": "🇻🇬"
  },
  "VI": {
    "code": "VI",
    "unicode": "U+1F1FB U+1F1EE",
    "name": "U.S. Virgin Islands",
    "emoji": "🇻🇮"
  },
  "VN": {
    "code": "VN",
    "unicode": "U+1F1FB U+1F1F3",
    "name": "Vietnam",
    "emoji": "🇻🇳"
  },
  "VU": {
    "code": "VU",
    "unicode": "U+1F1FB U+1F1FA",
    "name": "Vanuatu",
    "emoji": "🇻🇺"
  },
  "WF": {
    "code": "WF",
    "unicode": "U+1F1FC U+1F1EB",
    "name": "Wallis & Futuna",
    "emoji": "🇼🇫"
  },
  "WS": {
    "code": "WS",
    "unicode": "U+1F1FC U+1F1F8",
    "name": "Samoa",
    "emoji": "🇼🇸"
  },
  "XK": {
    "code": "XK",
    "unicode": "U+1F1FD U+1F1F0",
    "name": "Kosovo",
    "emoji": "🇽🇰"
  },
  "YE": {
    "code": "YE",
    "unicode": "U+1F1FE U+1F1EA",
    "name": "Yemen",
    "emoji": "🇾🇪"
  },
  "YT": {
    "code": "YT",
    "unicode": "U+1F1FE U+1F1F9",
    "name": "Mayotte",
    "emoji": "🇾🇹"
  },
  "ZA": {
    "code": "ZA",
    "unicode": "U+1F1FF U+1F1E6",
    "name": "South Africa",
    "emoji": "🇿🇦"
  },
  "ZM": {
    "code": "ZM",
    "unicode": "U+1F1FF U+1F1F2",
    "name": "Zambia",
    "emoji": "🇿🇲"
  },
  "ZW": {
    "code": "ZW",
    "unicode": "U+1F1FF U+1F1FC",
    "name": "Zimbabwe",
    "emoji": "🇿🇼"
  }
};
const countryToCurrencyMap = {
  "AD": "EUR",
  "AE": "AED",
  "AF": "AFN",
  "AG": "XCD",
  "AI": "XCD",
  "AL": "ALL",
  "AM": "AMD",
  "AO": "AOA",
  "AQ": "",
  "AR": "ARS",
  "AS": "USD",
  "AT": "EUR",
  "AU": "AUD",
  "AW": "AWG",
  "AX": "EUR",
  "AZ": "AZN",
  "BA": "BAM",
  "BB": "BBD",
  "BD": "BDT",
  "BE": "EUR",
  "BF": "XOF",
  "BG": "BGN",
  "BH": "BHD",
  "BI": "BIF",
  "BJ": "XOF",
  "BL": "EUR",
  "BM": "BMD",
  "BN": "BND",
  "BO": "BOB",
  "BQ": "USD",
  "BR": "BRL",
  "BS": "BSD",
  "BT": "BTN",
  "BV": "NOK",
  "BW": "BWP",
  "BY": "BYR",
  "BZ": "BZD",
  "CA": "CAD",
  "CC": "AUD",
  "CD": "CDF",
  "CF": "XAF",
  "CG": "XAF",
  "CH": "CHF",
  "CI": "XOF",
  "CK": "NZD",
  "CL": "CLP",
  "CM": "XAF",
  "CN": "CNY",
  "CO": "COP",
  "CR": "CRC",
  "CU": "CUP",
  "CV": "CVE",
  "CW": "ANG",
  "CX": "AUD",
  "CY": "EUR",
  "CZ": "CZK",
  "DE": "EUR",
  "DJ": "DJF",
  "DK": "DKK",
  "DM": "XCD",
  "DO": "DOP",
  "DZ": "DZD",
  "EC": "USD",
  "EE": "EUR",
  "EG": "EGP",
  "EH": "MAD",
  "ER": "ERN",
  "ES": "EUR",
  "ET": "ETB",
  "FI": "EUR",
  "FJ": "FJD",
  "FK": "FKP",
  "FM": "USD",
  "FO": "DKK",
  "FR": "EUR",
  "GA": "XAF",
  "GB": "GBP",
  "GD": "XCD",
  "GE": "GEL",
  "GF": "EUR",
  "GG": "GBP",
  "GH": "GHS",
  "GI": "GIP",
  "GL": "DKK",
  "GM": "GMD",
  "GN": "GNF",
  "GP": "EUR",
  "GQ": "XAF",
  "GR": "EUR",
  "GS": "GBP",
  "GT": "GTQ",
  "GU": "USD",
  "GW": "XOF",
  "GY": "GYD",
  "HK": "HKD",
  "HM": "AUD",
  "HN": "HNL",
  "HR": "HRK",
  "HT": "HTG",
  "HU": "HUF",
  "ID": "IDR",
  "IE": "EUR",
  "IL": "ILS",
  "IM": "GBP",
  "IN": "INR",
  "IO": "USD",
  "IQ": "IQD",
  "IR": "IRR",
  "IS": "ISK",
  "IT": "EUR",
  "JE": "GBP",
  "JM": "JMD",
  "JO": "JOD",
  "JP": "JPY",
  "KE": "KES",
  "KG": "KGS",
  "KH": "KHR",
  "KI": "AUD",
  "KM": "KMF",
  "KN": "XCD",
  "KP": "KPW",
  "KR": "KRW",
  "KW": "KWD",
  "KY": "KYD",
  "KZ": "KZT",
  "LA": "LAK",
  "LB": "LBP",
  "LC": "XCD",
  "LI": "CHF",
  "LK": "LKR",
  "LR": "LRD",
  "LS": "LSL",
  "LT": "LTL",
  "LU": "EUR",
  "LV": "EUR",
  "LY": "LYD",
  "MA": "MAD",
  "MC": "EUR",
  "MD": "MDL",
  "ME": "EUR",
  "MF": "EUR",
  "MG": "MGA",
  "MH": "USD",
  "MK": "MKD",
  "ML": "XOF",
  "MM": "MMK",
  "MN": "MNT",
  "MO": "MOP",
  "MP": "USD",
  "MQ": "EUR",
  "MR": "MRO",
  "MS": "XCD",
  "MT": "EUR",
  "MU": "MUR",
  "MV": "MVR",
  "MW": "MWK",
  "MX": "MXN",
  "MY": "MYR",
  "MZ": "MZN",
  "NA": "NAD",
  "NC": "XPF",
  "NE": "XOF",
  "NF": "AUD",
  "NG": "NGN",
  "NI": "NIO",
  "NL": "EUR",
  "NO": "NOK",
  "NP": "NPR",
  "NR": "AUD",
  "NU": "NZD",
  "NZ": "NZD",
  "OM": "OMR",
  "PA": "PAB",
  "PE": "PEN",
  "PF": "XPF",
  "PG": "PGK",
  "PH": "PHP",
  "PK": "PKR",
  "PL": "PLN",
  "PM": "EUR",
  "PN": "NZD",
  "PR": "USD",
  "PS": "ILS",
  "PT": "EUR",
  "PW": "USD",
  "PY": "PYG",
  "QA": "QAR",
  "RE": "EUR",
  "RO": "RON",
  "RS": "RSD",
  "RU": "RUB",
  "RW": "RWF",
  "SA": "SAR",
  "SB": "SBD",
  "SC": "SCR",
  "SD": "SDG",
  "SE": "SEK",
  "SG": "SGD",
  "SH": "SHP",
  "SI": "EUR",
  "SJ": "NOK",
  "SK": "EUR",
  "SL": "SLL",
  "SM": "EUR",
  "SN": "XOF",
  "SO": "SOS",
  "SR": "SRD",
  "SS": "SSP",
  "ST": "STD",
  "SV": "USD",
  "SX": "ANG",
  "SY": "SYP",
  "SZ": "SZL",
  "TC": "USD",
  "TD": "XAF",
  "TF": "EUR",
  "TG": "XOF",
  "TH": "THB",
  "TJ": "TJS",
  "TK": "NZD",
  "TL": "USD",
  "TM": "TMT",
  "TN": "TND",
  "TO": "TOP",
  "TR": "TRY",
  "TT": "TTD",
  "TV": "AUD",
  "TW": "TWD",
  "TZ": "TZS",
  "UA": "UAH",
  "UG": "UGX",
  "UM": "USD",
  "US": "USD",
  "UY": "UYU",
  "UZ": "UZS",
  "VA": "EUR",
  "VC": "XCD",
  "VE": "VEF",
  "VG": "USD",
  "VI": "USD",
  "VN": "VND",
  "VU": "VUV",
  "WF": "XPF",
  "WS": "WST",
  "XK": "EUR",
  "YE": "YER",
  "YT": "EUR",
  "ZA": "ZAR",
  "ZM": "ZMK",
  "ZW": "ZWL"
};
const currenciesMap = {
  "AED": {
    "symbol": "AED",
    "name_plural": "UAE dirhams",
    "code": "AED",
    "symbol_native": "د.إ.‏",
    "decimal_digits": 2,
    "name": "United Arab Emirates Dirham",
    "rounding": 0
  },
  "AFN": {
    "symbol": "AFN",
    "name_plural": "Afghan Afghanis",
    "code": "AFN",
    "symbol_native": "؋",
    "decimal_digits": 0,
    "name": "Afghan Afghani",
    "rounding": 0
  },
  "ALL": {
    "symbol": "ALL",
    "name_plural": "Albanian lekë",
    "code": "ALL",
    "symbol_native": "Lekë",
    "decimal_digits": 0,
    "name": "Albanian Lek",
    "rounding": 0
  },
  "AMD": {
    "symbol": "AMD",
    "name_plural": "Armenian drams",
    "code": "AMD",
    "symbol_native": "֏",
    "decimal_digits": 0,
    "name": "Armenian Dram",
    "rounding": 0
  },
  "ANG": {
    "symbol": "ANG",
    "name_plural": "Netherlands Antillean guilders",
    "code": "ANG",
    "symbol_native": "NAf.",
    "decimal_digits": 2,
    "name": "Netherlands Antillean Guilder",
    "rounding": 0
  },
  "AOA": {
    "symbol": "AOA",
    "name_plural": "Angolan kwanzas",
    "code": "AOA",
    "symbol_native": "Kz",
    "decimal_digits": 2,
    "name": "Angolan Kwanza",
    "rounding": 0
  },
  "ARS": {
    "symbol": "ARS",
    "name_plural": "Argentine pesos",
    "code": "ARS",
    "symbol_native": "$",
    "decimal_digits": 2,
    "name": "Argentine Peso",
    "rounding": 0
  },
  "AUD": {
    "symbol": "A$",
    "name_plural": "Australian dollars",
    "code": "AUD",
    "symbol_native": "$",
    "decimal_digits": 2,
    "name": "Australian Dollar",
    "rounding": 0
  },
  "AWG": {
    "symbol": "AWG",
    "name_plural": "Aruban florin",
    "code": "AWG",
    "symbol_native": "Afl.",
    "decimal_digits": 2,
    "name": "Aruban Florin",
    "rounding": 0
  },
  "AZN": {
    "symbol": "AZN",
    "name_plural": "Azerbaijani manats",
    "code": "AZN",
    "symbol_native": "₼",
    "decimal_digits": 2,
    "name": "Azerbaijani Manat",
    "rounding": 0
  },
  "BAM": {
    "symbol": "BAM",
    "name_plural": "Bosnia-Herzegovina convertible marks",
    "code": "BAM",
    "symbol_native": "КМ",
    "decimal_digits": 2,
    "name": "Bosnia-Herzegovina Convertible Mark",
    "rounding": 0
  },
  "BBD": {
    "symbol": "BBD",
    "name_plural": "Barbadian dollars",
    "code": "BBD",
    "symbol_native": "$",
    "decimal_digits": 2,
    "name": "Barbadian Dollar",
    "rounding": 0
  },
  "BDT": {
    "symbol": "BDT",
    "name_plural": "Bangladeshi takas",
    "code": "BDT",
    "symbol_native": "৳",
    "decimal_digits": 2,
    "name": "Bangladeshi Taka",
    "rounding": 0
  },
  "BGN": {
    "symbol": "BGN",
    "name_plural": "Bulgarian leva",
    "code": "BGN",
    "symbol_native": "лв.",
    "decimal_digits": 2,
    "name": "Bulgarian Lev",
    "rounding": 0
  },
  "BHD": {
    "symbol": "BHD",
    "name_plural": "Bahraini dinars",
    "code": "BHD",
    "symbol_native": "د.ب.‏",
    "decimal_digits": 3,
    "name": "Bahraini Dinar",
    "rounding": 0
  },
  "BIF": {
    "symbol": "BIF",
    "name_plural": "Burundian francs",
    "code": "BIF",
    "symbol_native": "FBu",
    "decimal_digits": 0,
    "name": "Burundian Franc",
    "rounding": 0
  },
  "BMD": {
    "symbol": "BMD",
    "name_plural": "Bermudan dollars",
    "code": "BMD",
    "symbol_native": "$",
    "decimal_digits": 2,
    "name": "Bermudan Dollar",
    "rounding": 0
  },
  "BND": {
    "symbol": "BND",
    "name_plural": "Brunei dollars",
    "code": "BND",
    "symbol_native": "$",
    "decimal_digits": 2,
    "name": "Brunei Dollar",
    "rounding": 0
  },
  "BOB": {
    "symbol": "BOB",
    "name_plural": "Bolivian bolivianos",
    "code": "BOB",
    "symbol_native": "Bs",
    "decimal_digits": 2,
    "name": "Bolivian Boliviano",
    "rounding": 0
  },
  "BOV": {
    "symbol": "BOV",
    "name_plural": "Bolivian mvdols",
    "code": "BOV",
    "symbol_native": "BOV",
    "decimal_digits": 2,
    "name": "Bolivian Mvdol",
    "rounding": 0
  },
  "BRL": {
    "symbol": "R$",
    "name_plural": "Brazilian reals",
    "code": "BRL",
    "symbol_native": "R$",
    "decimal_digits": 2,
    "name": "Brazilian Real",
    "rounding": 0
  },
  "BSD": {
    "symbol": "BSD",
    "name_plural": "Bahamian dollars",
    "code": "BSD",
    "symbol_native": "$",
    "decimal_digits": 2,
    "name": "Bahamian Dollar",
    "rounding": 0
  },
  "BTN": {
    "symbol": "BTN",
    "name_plural": "Bhutanese ngultrums",
    "code": "BTN",
    "symbol_native": "Nu.",
    "decimal_digits": 2,
    "name": "Bhutanese Ngultrum",
    "rounding": 0
  },
  "BWP": {
    "symbol": "BWP",
    "name_plural": "Botswanan pulas",
    "code": "BWP",
    "symbol_native": "P",
    "decimal_digits": 2,
    "name": "Botswanan Pula",
    "rounding": 0
  },
  "BYN": {
    "symbol": "BYN",
    "name_plural": "Belarusian rubles",
    "code": "BYN",
    "symbol_native": "Br",
    "decimal_digits": 2,
    "name": "Belarusian Ruble",
    "rounding": 0
  },
  "BZD": {
    "symbol": "BZD",
    "name_plural": "Belize dollars",
    "code": "BZD",
    "symbol_native": "$",
    "decimal_digits": 2,
    "name": "Belize Dollar",
    "rounding": 0
  },
  "CAD": {
    "symbol": "CA$",
    "name_plural": "Canadian dollars",
    "code": "CAD",
    "symbol_native": "$",
    "decimal_digits": 2,
    "name": "Canadian Dollar",
    "rounding": 0
  },
  "CDF": {
    "symbol": "CDF",
    "name_plural": "Congolese francs",
    "code": "CDF",
    "symbol_native": "FC",
    "decimal_digits": 2,
    "name": "Congolese Franc",
    "rounding": 0
  },
  "CHE": {
    "symbol": "CHE",
    "name_plural": "WIR euros",
    "code": "CHE",
    "symbol_native": "CHE",
    "decimal_digits": 2,
    "name": "WIR Euro",
    "rounding": 0
  },
  "CHF": {
    "symbol": "CHF",
    "name_plural": "Swiss francs",
    "code": "CHF",
    "symbol_native": "CHF",
    "decimal_digits": 2,
    "name": "Swiss Franc",
    "rounding": 0
  },
  "CHW": {
    "symbol": "CHW",
    "name_plural": "WIR francs",
    "code": "CHW",
    "symbol_native": "CHW",
    "decimal_digits": 2,
    "name": "WIR Franc",
    "rounding": 0
  },
  "CLF": {
    "symbol": "CLF",
    "name_plural": "Chilean units of account (UF)",
    "code": "CLF",
    "symbol_native": "CLF",
    "decimal_digits": 4,
    "name": "Chilean Unit of Account (UF)",
    "rounding": 0
  },
  "CLP": {
    "symbol": "CLP",
    "name_plural": "Chilean pesos",
    "code": "CLP",
    "symbol_native": "$",
    "decimal_digits": 0,
    "name": "Chilean Peso",
    "rounding": 0
  },
  "CNH": {
    "symbol": "CNH",
    "name_plural": "Chinese yuan (offshore)",
    "code": "CNH",
    "symbol_native": "CNH",
    "decimal_digits": 2,
    "name": "Chinese Yuan (offshore)",
    "rounding": 0
  },
  "CNY": {
    "symbol": "CN¥",
    "name_plural": "Chinese yuan",
    "code": "CNY",
    "symbol_native": "¥",
    "decimal_digits": 2,
    "name": "Chinese Yuan",
    "rounding": 0
  },
  "COP": {
    "symbol": "COP",
    "name_plural": "Colombian pesos",
    "code": "COP",
    "symbol_native": "$",
    "decimal_digits": 0,
    "name": "Colombian Peso",
    "rounding": 0
  },
  "COU": {
    "symbol": "COU",
    "name_plural": "Colombian real value units",
    "code": "COU",
    "symbol_native": "COU",
    "decimal_digits": 2,
    "name": "Colombian Real Value Unit",
    "rounding": 0
  },
  "CRC": {
    "symbol": "CRC",
    "name_plural": "Costa Rican colóns",
    "code": "CRC",
    "symbol_native": "₡",
    "decimal_digits": 2,
    "name": "Costa Rican Colón",
    "rounding": 0
  },
  "CUC": {
    "symbol": "CUC",
    "name_plural": "Cuban convertible pesos",
    "code": "CUC",
    "symbol_native": "CUC",
    "decimal_digits": 2,
    "name": "Cuban Convertible Peso",
    "rounding": 0
  },
  "CUP": {
    "symbol": "CUP",
    "name_plural": "Cuban pesos",
    "code": "CUP",
    "symbol_native": "$",
    "decimal_digits": 2,
    "name": "Cuban Peso",
    "rounding": 0
  },
  "CVE": {
    "symbol": "CVE",
    "name_plural": "Cape Verdean escudos",
    "code": "CVE",
    "symbol_native": "​",
    "decimal_digits": 2,
    "name": "Cape Verdean Escudo",
    "rounding": 0
  },
  "CZK": {
    "symbol": "CZK",
    "name_plural": "Czech korunas",
    "code": "CZK",
    "symbol_native": "Kč",
    "decimal_digits": 2,
    "name": "Czech Koruna",
    "rounding": 0
  },
  "DJF": {
    "symbol": "DJF",
    "name_plural": "Djiboutian francs",
    "code": "DJF",
    "symbol_native": "Fdj",
    "decimal_digits": 0,
    "name": "Djiboutian Franc",
    "rounding": 0
  },
  "DKK": {
    "symbol": "DKK",
    "name_plural": "Danish kroner",
    "code": "DKK",
    "symbol_native": "kr.",
    "decimal_digits": 2,
    "name": "Danish Krone",
    "rounding": 0
  },
  "DOP": {
    "symbol": "DOP",
    "name_plural": "Dominican pesos",
    "code": "DOP",
    "symbol_native": "RD$",
    "decimal_digits": 2,
    "name": "Dominican Peso",
    "rounding": 0
  },
  "DZD": {
    "symbol": "DZD",
    "name_plural": "Algerian dinars",
    "code": "DZD",
    "symbol_native": "د.ج.‏",
    "decimal_digits": 2,
    "name": "Algerian Dinar",
    "rounding": 0
  },
  "EGP": {
    "symbol": "EGP",
    "name_plural": "Egyptian pounds",
    "code": "EGP",
    "symbol_native": "ج.م.‏",
    "decimal_digits": 2,
    "name": "Egyptian Pound",
    "rounding": 0
  },
  "ERN": {
    "symbol": "ERN",
    "name_plural": "Eritrean nakfas",
    "code": "ERN",
    "symbol_native": "Nfk",
    "decimal_digits": 2,
    "name": "Eritrean Nakfa",
    "rounding": 0
  },
  "ETB": {
    "symbol": "ETB",
    "name_plural": "Ethiopian birrs",
    "code": "ETB",
    "symbol_native": "ብር",
    "decimal_digits": 2,
    "name": "Ethiopian Birr",
    "rounding": 0
  },
  "EUR": {
    "symbol": "€",
    "name_plural": "euros",
    "code": "EUR",
    "symbol_native": "€",
    "decimal_digits": 2,
    "name": "Euro",
    "rounding": 0
  },
  "FJD": {
    "symbol": "FJD",
    "name_plural": "Fijian dollars",
    "code": "FJD",
    "symbol_native": "$",
    "decimal_digits": 2,
    "name": "Fijian Dollar",
    "rounding": 0
  },
  "FKP": {
    "symbol": "FKP",
    "name_plural": "Falkland Islands pounds",
    "code": "FKP",
    "symbol_native": "£",
    "decimal_digits": 2,
    "name": "Falkland Islands Pound",
    "rounding": 0
  },
  "GBP": {
    "symbol": "£",
    "name_plural": "British pounds",
    "code": "GBP",
    "symbol_native": "£",
    "decimal_digits": 2,
    "name": "British Pound",
    "rounding": 0
  },
  "GEL": {
    "symbol": "GEL",
    "name_plural": "Georgian laris",
    "code": "GEL",
    "symbol_native": "₾",
    "decimal_digits": 2,
    "name": "Georgian Lari",
    "rounding": 0
  },
  "GHS": {
    "symbol": "GHS",
    "name_plural": "Ghanaian cedis",
    "code": "GHS",
    "symbol_native": "GH₵",
    "decimal_digits": 2,
    "name": "Ghanaian Cedi",
    "rounding": 0
  },
  "GIP": {
    "symbol": "GIP",
    "name_plural": "Gibraltar pounds",
    "code": "GIP",
    "symbol_native": "£",
    "decimal_digits": 2,
    "name": "Gibraltar Pound",
    "rounding": 0
  },
  "GMD": {
    "symbol": "GMD",
    "name_plural": "Gambian dalasis",
    "code": "GMD",
    "symbol_native": "D",
    "decimal_digits": 2,
    "name": "Gambian Dalasi",
    "rounding": 0
  },
  "GNF": {
    "symbol": "GNF",
    "name_plural": "Guinean francs",
    "code": "GNF",
    "symbol_native": "FG",
    "decimal_digits": 0,
    "name": "Guinean Franc",
    "rounding": 0
  },
  "GTQ": {
    "symbol": "GTQ",
    "name_plural": "Guatemalan quetzals",
    "code": "GTQ",
    "symbol_native": "Q",
    "decimal_digits": 2,
    "name": "Guatemalan Quetzal",
    "rounding": 0
  },
  "GYD": {
    "symbol": "GYD",
    "name_plural": "Guyanaese dollars",
    "code": "GYD",
    "symbol_native": "$",
    "decimal_digits": 0,
    "name": "Guyanaese Dollar",
    "rounding": 0
  },
  "HKD": {
    "symbol": "HK$",
    "name_plural": "Hong Kong dollars",
    "code": "HKD",
    "symbol_native": "HK$",
    "decimal_digits": 2,
    "name": "Hong Kong Dollar",
    "rounding": 0
  },
  "HNL": {
    "symbol": "HNL",
    "name_plural": "Honduran lempiras",
    "code": "HNL",
    "symbol_native": "L",
    "decimal_digits": 2,
    "name": "Honduran Lempira",
    "rounding": 0
  },
  "HRK": {
    "symbol": "HRK",
    "name_plural": "Croatian kunas",
    "code": "HRK",
    "symbol_native": "HRK",
    "decimal_digits": 2,
    "name": "Croatian Kuna",
    "rounding": 0
  },
  "HTG": {
    "symbol": "HTG",
    "name_plural": "Haitian gourdes",
    "code": "HTG",
    "symbol_native": "G",
    "decimal_digits": 2,
    "name": "Haitian Gourde",
    "rounding": 0
  },
  "HUF": {
    "symbol": "HUF",
    "name_plural": "Hungarian forints",
    "code": "HUF",
    "symbol_native": "Ft",
    "decimal_digits": 2,
    "name": "Hungarian Forint",
    "rounding": 0
  },
  "IDR": {
    "symbol": "IDR",
    "name_plural": "Indonesian rupiahs",
    "code": "IDR",
    "symbol_native": "Rp",
    "decimal_digits": 0,
    "name": "Indonesian Rupiah",
    "rounding": 0
  },
  "ILS": {
    "symbol": "₪",
    "name_plural": "Israeli new shekels",
    "code": "ILS",
    "symbol_native": "₪",
    "decimal_digits": 2,
    "name": "Israeli New Shekel",
    "rounding": 0
  },
  "INR": {
    "symbol": "₹",
    "name_plural": "Indian rupees",
    "code": "INR",
    "symbol_native": "₹",
    "decimal_digits": 2,
    "name": "Indian Rupee",
    "rounding": 0
  },
  "IQD": {
    "symbol": "IQD",
    "name_plural": "Iraqi dinars",
    "code": "IQD",
    "symbol_native": "د.ع.‏",
    "decimal_digits": 0,
    "name": "Iraqi Dinar",
    "rounding": 0
  },
  "IRR": {
    "symbol": "IRR",
    "name_plural": "Iranian rials",
    "code": "IRR",
    "symbol_native": "IRR",
    "decimal_digits": 0,
    "name": "Iranian Rial",
    "rounding": 0
  },
  "ISK": {
    "symbol": "ISK",
    "name_plural": "Icelandic krónur",
    "code": "ISK",
    "symbol_native": "ISK",
    "decimal_digits": 0,
    "name": "Icelandic Króna",
    "rounding": 0
  },
  "JMD": {
    "symbol": "JMD",
    "name_plural": "Jamaican dollars",
    "code": "JMD",
    "symbol_native": "$",
    "decimal_digits": 2,
    "name": "Jamaican Dollar",
    "rounding": 0
  },
  "JOD": {
    "symbol": "JOD",
    "name_plural": "Jordanian dinars",
    "code": "JOD",
    "symbol_native": "د.أ.‏",
    "decimal_digits": 3,
    "name": "Jordanian Dinar",
    "rounding": 0
  },
  "JPY": {
    "symbol": "¥",
    "name_plural": "Japanese yen",
    "code": "JPY",
    "symbol_native": "￥",
    "decimal_digits": 0,
    "name": "Japanese Yen",
    "rounding": 0
  },
  "KES": {
    "symbol": "KES",
    "name_plural": "Kenyan shillings",
    "code": "KES",
    "symbol_native": "Ksh",
    "decimal_digits": 2,
    "name": "Kenyan Shilling",
    "rounding": 0
  },
  "KGS": {
    "symbol": "KGS",
    "name_plural": "Kyrgystani soms",
    "code": "KGS",
    "symbol_native": "сом",
    "decimal_digits": 2,
    "name": "Kyrgystani Som",
    "rounding": 0
  },
  "KHR": {
    "symbol": "KHR",
    "name_plural": "Cambodian riels",
    "code": "KHR",
    "symbol_native": "៛",
    "decimal_digits": 2,
    "name": "Cambodian Riel",
    "rounding": 0
  },
  "KMF": {
    "symbol": "KMF",
    "name_plural": "Comorian francs",
    "code": "KMF",
    "symbol_native": "CF",
    "decimal_digits": 0,
    "name": "Comorian Franc",
    "rounding": 0
  },
  "KPW": {
    "symbol": "KPW",
    "name_plural": "North Korean won",
    "code": "KPW",
    "symbol_native": "KPW",
    "decimal_digits": 0,
    "name": "North Korean Won",
    "rounding": 0
  },
  "KRW": {
    "symbol": "₩",
    "name_plural": "South Korean won",
    "code": "KRW",
    "symbol_native": "₩",
    "decimal_digits": 0,
    "name": "South Korean Won",
    "rounding": 0
  },
  "KWD": {
    "symbol": "KWD",
    "name_plural": "Kuwaiti dinars",
    "code": "KWD",
    "symbol_native": "د.ك.‏",
    "decimal_digits": 3,
    "name": "Kuwaiti Dinar",
    "rounding": 0
  },
  "KYD": {
    "symbol": "KYD",
    "name_plural": "Cayman Islands dollars",
    "code": "KYD",
    "symbol_native": "$",
    "decimal_digits": 2,
    "name": "Cayman Islands Dollar",
    "rounding": 0
  },
  "KZT": {
    "symbol": "KZT",
    "name_plural": "Kazakhstani tenges",
    "code": "KZT",
    "symbol_native": "₸",
    "decimal_digits": 2,
    "name": "Kazakhstani Tenge",
    "rounding": 0
  },
  "LAK": {
    "symbol": "LAK",
    "name_plural": "Laotian kips",
    "code": "LAK",
    "symbol_native": "₭",
    "decimal_digits": 0,
    "name": "Laotian Kip",
    "rounding": 0
  },
  "LBP": {
    "symbol": "LBP",
    "name_plural": "Lebanese pounds",
    "code": "LBP",
    "symbol_native": "ل.ل.‏",
    "decimal_digits": 0,
    "name": "Lebanese Pound",
    "rounding": 0
  },
  "LKR": {
    "symbol": "LKR",
    "name_plural": "Sri Lankan rupees",
    "code": "LKR",
    "symbol_native": "රු.",
    "decimal_digits": 2,
    "name": "Sri Lankan Rupee",
    "rounding": 0
  },
  "LRD": {
    "symbol": "LRD",
    "name_plural": "Liberian dollars",
    "code": "LRD",
    "symbol_native": "$",
    "decimal_digits": 2,
    "name": "Liberian Dollar",
    "rounding": 0
  },
  "LSL": {
    "symbol": "LSL",
    "name_plural": "Lesotho lotis",
    "code": "LSL",
    "symbol_native": "LSL",
    "decimal_digits": 2,
    "name": "Lesotho Loti",
    "rounding": 0
  },
  "LYD": {
    "symbol": "LYD",
    "name_plural": "Libyan dinars",
    "code": "LYD",
    "symbol_native": "د.ل.‏",
    "decimal_digits": 3,
    "name": "Libyan Dinar",
    "rounding": 0
  },
  "MAD": {
    "symbol": "MAD",
    "name_plural": "Moroccan dirhams",
    "code": "MAD",
    "symbol_native": "د.م.‏",
    "decimal_digits": 2,
    "name": "Moroccan Dirham",
    "rounding": 0
  },
  "MDL": {
    "symbol": "MDL",
    "name_plural": "Moldovan lei",
    "code": "MDL",
    "symbol_native": "L",
    "decimal_digits": 2,
    "name": "Moldovan Leu",
    "rounding": 0
  },
  "MGA": {
    "symbol": "MGA",
    "name_plural": "Malagasy ariaries",
    "code": "MGA",
    "symbol_native": "Ar",
    "decimal_digits": 0,
    "name": "Malagasy Ariary",
    "rounding": 0
  },
  "MKD": {
    "symbol": "MKD",
    "name_plural": "Macedonian denari",
    "code": "MKD",
    "symbol_native": "ден",
    "decimal_digits": 2,
    "name": "Macedonian Denar",
    "rounding": 0
  },
  "MMK": {
    "symbol": "MMK",
    "name_plural": "Myanmar kyats",
    "code": "MMK",
    "symbol_native": "K",
    "decimal_digits": 0,
    "name": "Myanmar Kyat",
    "rounding": 0
  },
  "MNT": {
    "symbol": "MNT",
    "name_plural": "Mongolian tugriks",
    "code": "MNT",
    "symbol_native": "₮",
    "decimal_digits": 0,
    "name": "Mongolian Tugrik",
    "rounding": 0
  },
  "MOP": {
    "symbol": "MOP",
    "name_plural": "Macanese patacas",
    "code": "MOP",
    "symbol_native": "MOP$",
    "decimal_digits": 2,
    "name": "Macanese Pataca",
    "rounding": 0
  },
  "MRO": {
    "symbol": "MRO",
    "name_plural": "Mauritanian ouguiyas",
    "code": "MRO",
    "symbol_native": "أ.م.‏",
    "decimal_digits": 0,
    "name": "Mauritanian Ouguiya",
    "rounding": 0
  },
  "MUR": {
    "symbol": "MUR",
    "name_plural": "Mauritian rupees",
    "code": "MUR",
    "symbol_native": "Rs",
    "decimal_digits": 0,
    "name": "Mauritian Rupee",
    "rounding": 0
  },
  "MWK": {
    "symbol": "MWK",
    "name_plural": "Malawian kwachas",
    "code": "MWK",
    "symbol_native": "MK",
    "decimal_digits": 2,
    "name": "Malawian Kwacha",
    "rounding": 0
  },
  "MXN": {
    "symbol": "MX$",
    "name_plural": "Mexican pesos",
    "code": "MXN",
    "symbol_native": "$",
    "decimal_digits": 2,
    "name": "Mexican Peso",
    "rounding": 0
  },
  "MXV": {
    "symbol": "MXV",
    "name_plural": "Mexican investment units",
    "code": "MXV",
    "symbol_native": "MXV",
    "decimal_digits": 2,
    "name": "Mexican Investment Unit",
    "rounding": 0
  },
  "MYR": {
    "symbol": "MYR",
    "name_plural": "Malaysian ringgits",
    "code": "MYR",
    "symbol_native": "RM",
    "decimal_digits": 2,
    "name": "Malaysian Ringgit",
    "rounding": 0
  },
  "MZN": {
    "symbol": "MZN",
    "name_plural": "Mozambican meticals",
    "code": "MZN",
    "symbol_native": "MTn",
    "decimal_digits": 2,
    "name": "Mozambican Metical",
    "rounding": 0
  },
  "NAD": {
    "symbol": "NAD",
    "name_plural": "Namibian dollars",
    "code": "NAD",
    "symbol_native": "$",
    "decimal_digits": 2,
    "name": "Namibian Dollar",
    "rounding": 0
  },
  "NGN": {
    "symbol": "NGN",
    "name_plural": "Nigerian nairas",
    "code": "NGN",
    "symbol_native": "₦",
    "decimal_digits": 2,
    "name": "Nigerian Naira",
    "rounding": 0
  },
  "NIO": {
    "symbol": "NIO",
    "name_plural": "Nicaraguan córdobas",
    "code": "NIO",
    "symbol_native": "C$",
    "decimal_digits": 2,
    "name": "Nicaraguan Córdoba",
    "rounding": 0
  },
  "NOK": {
    "symbol": "NOK",
    "name_plural": "Norwegian kroner",
    "code": "NOK",
    "symbol_native": "kr",
    "decimal_digits": 2,
    "name": "Norwegian Krone",
    "rounding": 0
  },
  "NPR": {
    "symbol": "NPR",
    "name_plural": "Nepalese rupees",
    "code": "NPR",
    "symbol_native": "नेरू",
    "decimal_digits": 2,
    "name": "Nepalese Rupee",
    "rounding": 0
  },
  "NZD": {
    "symbol": "NZ$",
    "name_plural": "New Zealand dollars",
    "code": "NZD",
    "symbol_native": "$",
    "decimal_digits": 2,
    "name": "New Zealand Dollar",
    "rounding": 0
  },
  "OMR": {
    "symbol": "OMR",
    "name_plural": "Omani rials",
    "code": "OMR",
    "symbol_native": "ر.ع.‏",
    "decimal_digits": 3,
    "name": "Omani Rial",
    "rounding": 0
  },
  "PAB": {
    "symbol": "PAB",
    "name_plural": "Panamanian balboas",
    "code": "PAB",
    "symbol_native": "B/.",
    "decimal_digits": 2,
    "name": "Panamanian Balboa",
    "rounding": 0
  },
  "PEN": {
    "symbol": "PEN",
    "name_plural": "Peruvian soles",
    "code": "PEN",
    "symbol_native": "S/",
    "decimal_digits": 2,
    "name": "Peruvian Sol",
    "rounding": 0
  },
  "PGK": {
    "symbol": "PGK",
    "name_plural": "Papua New Guinean kina",
    "code": "PGK",
    "symbol_native": "K",
    "decimal_digits": 2,
    "name": "Papua New Guinean Kina",
    "rounding": 0
  },
  "PHP": {
    "symbol": "PHP",
    "name_plural": "Philippine pisos",
    "code": "PHP",
    "symbol_native": "₱",
    "decimal_digits": 2,
    "name": "Philippine Piso",
    "rounding": 0
  },
  "PKR": {
    "symbol": "PKR",
    "name_plural": "Pakistani rupees",
    "code": "PKR",
    "symbol_native": "Rs",
    "decimal_digits": 0,
    "name": "Pakistani Rupee",
    "rounding": 0
  },
  "PLN": {
    "symbol": "PLN",
    "name_plural": "Polish zlotys",
    "code": "PLN",
    "symbol_native": "zł",
    "decimal_digits": 2,
    "name": "Polish Zloty",
    "rounding": 0
  },
  "PYG": {
    "symbol": "PYG",
    "name_plural": "Paraguayan guaranis",
    "code": "PYG",
    "symbol_native": "Gs.",
    "decimal_digits": 0,
    "name": "Paraguayan Guarani",
    "rounding": 0
  },
  "QAR": {
    "symbol": "QAR",
    "name_plural": "Qatari rials",
    "code": "QAR",
    "symbol_native": "ر.ق.‏",
    "decimal_digits": 2,
    "name": "Qatari Rial",
    "rounding": 0
  },
  "RON": {
    "symbol": "RON",
    "name_plural": "Romanian lei",
    "code": "RON",
    "symbol_native": "RON",
    "decimal_digits": 2,
    "name": "Romanian Leu",
    "rounding": 0
  },
  "RSD": {
    "symbol": "RSD",
    "name_plural": "Serbian dinars",
    "code": "RSD",
    "symbol_native": "RSD",
    "decimal_digits": 0,
    "name": "Serbian Dinar",
    "rounding": 0
  },
  "RUB": {
    "symbol": "RUB",
    "name_plural": "Russian rubles",
    "code": "RUB",
    "symbol_native": "₽",
    "decimal_digits": 2,
    "name": "Russian Ruble",
    "rounding": 0
  },
  "RWF": {
    "symbol": "RWF",
    "name_plural": "Rwandan francs",
    "code": "RWF",
    "symbol_native": "RF",
    "decimal_digits": 0,
    "name": "Rwandan Franc",
    "rounding": 0
  },
  "SAR": {
    "symbol": "SAR",
    "name_plural": "Saudi riyals",
    "code": "SAR",
    "symbol_native": "ر.س.‏",
    "decimal_digits": 2,
    "name": "Saudi Riyal",
    "rounding": 0
  },
  "SBD": {
    "symbol": "SBD",
    "name_plural": "Solomon Islands dollars",
    "code": "SBD",
    "symbol_native": "$",
    "decimal_digits": 2,
    "name": "Solomon Islands Dollar",
    "rounding": 0
  },
  "SCR": {
    "symbol": "SCR",
    "name_plural": "Seychellois rupees",
    "code": "SCR",
    "symbol_native": "SR",
    "decimal_digits": 2,
    "name": "Seychellois Rupee",
    "rounding": 0
  },
  "SDG": {
    "symbol": "SDG",
    "name_plural": "Sudanese pounds",
    "code": "SDG",
    "symbol_native": "ج.س.",
    "decimal_digits": 2,
    "name": "Sudanese Pound",
    "rounding": 0
  },
  "SEK": {
    "symbol": "SEK",
    "name_plural": "Swedish kronor",
    "code": "SEK",
    "symbol_native": "kr",
    "decimal_digits": 2,
    "name": "Swedish Krona",
    "rounding": 0
  },
  "SGD": {
    "symbol": "SGD",
    "name_plural": "Singapore dollars",
    "code": "SGD",
    "symbol_native": "$",
    "decimal_digits": 2,
    "name": "Singapore Dollar",
    "rounding": 0
  },
  "SHP": {
    "symbol": "SHP",
    "name_plural": "St. Helena pounds",
    "code": "SHP",
    "symbol_native": "£",
    "decimal_digits": 2,
    "name": "St. Helena Pound",
    "rounding": 0
  },
  "SLL": {
    "symbol": "SLL",
    "name_plural": "Sierra Leonean leones",
    "code": "SLL",
    "symbol_native": "Le",
    "decimal_digits": 0,
    "name": "Sierra Leonean Leone",
    "rounding": 0
  },
  "SOS": {
    "symbol": "SOS",
    "name_plural": "Somali shillings",
    "code": "SOS",
    "symbol_native": "S",
    "decimal_digits": 0,
    "name": "Somali Shilling",
    "rounding": 0
  },
  "SRD": {
    "symbol": "SRD",
    "name_plural": "Surinamese dollars",
    "code": "SRD",
    "symbol_native": "$",
    "decimal_digits": 2,
    "name": "Surinamese Dollar",
    "rounding": 0
  },
  "SSP": {
    "symbol": "SSP",
    "name_plural": "South Sudanese pounds",
    "code": "SSP",
    "symbol_native": "£",
    "decimal_digits": 2,
    "name": "South Sudanese Pound",
    "rounding": 0
  },
  "STN": {
    "symbol": "STN",
    "name_plural": "São Tomé & Príncipe dobras (2018)",
    "code": "STN",
    "symbol_native": "STN",
    "decimal_digits": 2,
    "name": "São Tomé & Príncipe Dobra (2018)",
    "rounding": 0
  },
  "SYP": {
    "symbol": "SYP",
    "name_plural": "Syrian pounds",
    "code": "SYP",
    "symbol_native": "ل.س.‏",
    "decimal_digits": 0,
    "name": "Syrian Pound",
    "rounding": 0
  },
  "SZL": {
    "symbol": "SZL",
    "name_plural": "Swazi emalangeni",
    "code": "SZL",
    "symbol_native": "E",
    "decimal_digits": 2,
    "name": "Swazi Lilangeni",
    "rounding": 0
  },
  "THB": {
    "symbol": "THB",
    "name_plural": "Thai baht",
    "code": "THB",
    "symbol_native": "THB",
    "decimal_digits": 2,
    "name": "Thai Baht",
    "rounding": 0
  },
  "TJS": {
    "symbol": "TJS",
    "name_plural": "Tajikistani somonis",
    "code": "TJS",
    "symbol_native": "сом.",
    "decimal_digits": 2,
    "name": "Tajikistani Somoni",
    "rounding": 0
  },
  "TND": {
    "symbol": "TND",
    "name_plural": "Tunisian dinars",
    "code": "TND",
    "symbol_native": "د.ت.‏",
    "decimal_digits": 3,
    "name": "Tunisian Dinar",
    "rounding": 0
  },
  "TOP": {
    "symbol": "TOP",
    "name_plural": "Tongan paʻanga",
    "code": "TOP",
    "symbol_native": "T$",
    "decimal_digits": 2,
    "name": "Tongan Paʻanga",
    "rounding": 0
  },
  "TRY": {
    "symbol": "TRY",
    "name_plural": "Turkish Lira",
    "code": "TRY",
    "symbol_native": "₺",
    "decimal_digits": 2,
    "name": "Turkish Lira",
    "rounding": 0
  },
  "TTD": {
    "symbol": "TTD",
    "name_plural": "Trinidad & Tobago dollars",
    "code": "TTD",
    "symbol_native": "$",
    "decimal_digits": 2,
    "name": "Trinidad & Tobago Dollar",
    "rounding": 0
  },
  "TWD": {
    "symbol": "NT$",
    "name_plural": "New Taiwan dollars",
    "code": "TWD",
    "symbol_native": "$",
    "decimal_digits": 2,
    "name": "New Taiwan Dollar",
    "rounding": 0
  },
  "TZS": {
    "symbol": "TZS",
    "name_plural": "Tanzanian shillings",
    "code": "TZS",
    "symbol_native": "TSh",
    "decimal_digits": 0,
    "name": "Tanzanian Shilling",
    "rounding": 0
  },
  "UAH": {
    "symbol": "UAH",
    "name_plural": "Ukrainian hryvnias",
    "code": "UAH",
    "symbol_native": "₴",
    "decimal_digits": 2,
    "name": "Ukrainian Hryvnia",
    "rounding": 0
  },
  "UGX": {
    "symbol": "UGX",
    "name_plural": "Ugandan shillings",
    "code": "UGX",
    "symbol_native": "USh",
    "decimal_digits": 0,
    "name": "Ugandan Shilling",
    "rounding": 0
  },
  "USD": {
    "symbol": "$",
    "name_plural": "US dollars",
    "code": "USD",
    "symbol_native": "$",
    "decimal_digits": 2,
    "name": "US Dollar",
    "rounding": 0
  },
  "USN": {
    "symbol": "USN",
    "name_plural": "US dollars (next day)",
    "code": "USN",
    "symbol_native": "USN",
    "decimal_digits": 2,
    "name": "US Dollar (Next day)",
    "rounding": 0
  },
  "UYI": {
    "symbol": "UYI",
    "name_plural": "Uruguayan pesos (indexed units)",
    "code": "UYI",
    "symbol_native": "UYI",
    "decimal_digits": 0,
    "name": "Uruguayan Peso (Indexed Units)",
    "rounding": 0
  },
  "UYU": {
    "symbol": "UYU",
    "name_plural": "Uruguayan pesos",
    "code": "UYU",
    "symbol_native": "$",
    "decimal_digits": 2,
    "name": "Uruguayan Peso",
    "rounding": 0
  },
  "UZS": {
    "symbol": "UZS",
    "name_plural": "Uzbekistani som",
    "code": "UZS",
    "symbol_native": "сўм",
    "decimal_digits": 0,
    "name": "Uzbekistani Som",
    "rounding": 0
  },
  "VEF": {
    "symbol": "VEF",
    "name_plural": "Venezuelan bolívars",
    "code": "VEF",
    "symbol_native": "Bs.",
    "decimal_digits": 2,
    "name": "Venezuelan Bolívar",
    "rounding": 0
  },
  "VND": {
    "symbol": "₫",
    "name_plural": "Vietnamese dong",
    "code": "VND",
    "symbol_native": "₫",
    "decimal_digits": 0,
    "name": "Vietnamese Dong",
    "rounding": 0
  },
  "VUV": {
    "symbol": "VUV",
    "name_plural": "Vanuatu vatus",
    "code": "VUV",
    "symbol_native": "VT",
    "decimal_digits": 0,
    "name": "Vanuatu Vatu",
    "rounding": 0
  },
  "WST": {
    "symbol": "WST",
    "name_plural": "Samoan tala",
    "code": "WST",
    "symbol_native": "WS$",
    "decimal_digits": 2,
    "name": "Samoan Tala",
    "rounding": 0
  },
  "XAF": {
    "symbol": "FCFA",
    "name_plural": "Central African CFA francs",
    "code": "XAF",
    "symbol_native": "FCFA",
    "decimal_digits": 0,
    "name": "Central African CFA Franc",
    "rounding": 0
  },
  "XCD": {
    "symbol": "EC$",
    "name_plural": "East Caribbean dollars",
    "code": "XCD",
    "symbol_native": "$",
    "decimal_digits": 2,
    "name": "East Caribbean Dollar",
    "rounding": 0
  },
  "XOF": {
    "symbol": "CFA",
    "name_plural": "West African CFA francs",
    "code": "XOF",
    "symbol_native": "CFA",
    "decimal_digits": 0,
    "name": "West African CFA Franc",
    "rounding": 0
  },
  "XPF": {
    "symbol": "CFPF",
    "name_plural": "CFP francs",
    "code": "XPF",
    "symbol_native": "FCFP",
    "decimal_digits": 0,
    "name": "CFP Franc",
    "rounding": 0
  },
  "YER": {
    "symbol": "YER",
    "name_plural": "Yemeni rials",
    "code": "YER",
    "symbol_native": "ر.ي.‏",
    "decimal_digits": 0,
    "name": "Yemeni Rial",
    "rounding": 0
  },
  "ZAR": {
    "symbol": "ZAR",
    "name_plural": "South African rand",
    "code": "ZAR",
    "symbol_native": "R",
    "decimal_digits": 2,
    "name": "South African Rand",
    "rounding": 0
  },
  "ZMW": {
    "symbol": "ZMW",
    "name_plural": "Zambian kwachas",
    "code": "ZMW",
    "symbol_native": "K",
    "decimal_digits": 2,
    "name": "Zambian Kwacha",
    "rounding": 0
  }
};

describe('Helpers to prepare data', () => {
  it('generate list of countries with currencies', () => {
    const countries = Object.values(countriesMap);
    for (let i = 0; i < countries.length; i++) {
      const country = countries[i];
      const currencyCode = countryToCurrencyMap[country.code];

      countries[i].currency = currenciesMap[currencyCode] || "N/A";
    }

    console.log(JSON.stringify(countries));
    expect(countries.length).toBeGreaterThan(0);
  });
})
