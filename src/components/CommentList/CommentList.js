import React, { useContext } from 'react';

//Styled components
import { StyledCommentlist } from './CommentListStyle';

//Components
import CommentCard from '../CommentCard/CommentCard';
import Context from '../Context/Context';

const CommentList = () =>{
    const data = useContext(Context);


    return(
        <StyledCommentlist>
            {
                data.commentData.map((element, index) =>
                <CommentCard
                    id={element.id} 
                    student={element.student}
                    rating={element.rating}
                    content={element.comment} />
                )
            }
        </StyledCommentlist>
    );
}

export default CommentList;