import styled from "styled-components";

export const StyledCommentlist = styled.div`
    max-height: 40vh;
    overflow-y: scroll;

    padding-right: 10px;
    
    /* width */
    ::-webkit-scrollbar {
        width: 6px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #949494;
        border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #d6d6d6;
    }
`;