import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";


export const Gap = () => {

    const bg = useColorModeValue('gray.50', '#22272B');


    return(
        <Box bg={bg} h={{xl :200, lg:250,md:500, base: 600   }}>
            
        </Box>
    )
}