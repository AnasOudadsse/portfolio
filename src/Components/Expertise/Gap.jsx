import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";


export const Gap = () => {

    const bg = useColorModeValue('gray.50', '#22272B');


    return(
        <Box bg={bg} h={[500, 310, 200]}>
            
        </Box>
    )
}