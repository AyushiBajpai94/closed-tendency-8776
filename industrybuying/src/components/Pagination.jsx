import { Button, Spacer } from "@chakra-ui/react";

function Pagination ({page,handlePageChange,totalCount}){
    return (
        <div id="pagination-section">
            <Button disabled={page===1}
            bgColor='orange.500'
            ml='5px'
             onClick={()=>handlePageChange(-1)} >
                 PREVIOUS
            </Button>
            <Button disabled={page===1} bgColor='orange.500' ml='5px'>{page}</Button>
            <Button 
            bgColor='orange.500'
            ml='5px'
              onClick={()=>handlePageChange(1)}
              disabled={page==Math.ceil(totalCount/3)}
             >
                NEXT
            </Button>
        </div>
    );
}

export default Pagination;