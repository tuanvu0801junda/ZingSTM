
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import axios from "axios";

import {
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    useColorModeValue,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
function SearchBar(props) {
    // Pass the computed styles into the `__css` prop
    const { variant, children, ...rest } = props;
    // Chakra Color Mode
    const history = useHistory();
    const mainTeal = useColorModeValue("teal.300", "teal.300");
    const searchIconColor = useColorModeValue("gray.700", "gray.200");
    const inputBg = useColorModeValue("white", "gray.800");
    const [search, getSearch] = useState("");
    const [song, setSong] = useState([]);


    const items = [
        {
            id: 0,
            name: 'Cobol'
        },
        {
            id: 58,
            name: '58'
        },
        {
            id: 2,
            name: 'Basic'
        },
        {
            id: 3,
            name: 'PHP'
        },
        {
            id: 4,
            name: 'Java'
        }
    ]
    useEffect(() => {
        getAllSongData();
    }, [])
    //Get song data from database
    const getAllSongData = async () => {
        const res = await axios.post("/api/getAllSongInfo");
        if (res.data.status === 200) {
            setSong(res.data.songInfo);
            console.log(res.data.songInfo);
        }
    }


    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
    }

    const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
    }

    const handleOnSelect = (item) => {
        // the item selected
        console.log(item)
        getSearch(item.id);
        console.log(item.id);
        goToAddSongPage(item.id);
    }
    const goToAddSongPage = (k) => {
        history.push("/zingstm/song/" + k);
    }


    const handleOnFocus = () => {
        console.log('Focused')
    }
    const formatResult = (item) => {
        return item
    }
    return (
        <div style={{ width: 200 }}>
            <ReactSearchAutocomplete
                items={song}
                onSearch={handleOnSearch}
                onHover={handleOnHover}
                onSelect={handleOnSelect}
                onFocus={handleOnFocus}
                autoFocus
                formatResult={formatResult}
            />
        </div>
    );
}
export default SearchBar;