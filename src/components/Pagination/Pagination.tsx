import { FC, useEffect, useMemo, useState } from 'react';
import "./Pagination.scss";
import { ReactComponent as ArrowImg } from "assets/images/Pagination/arrow-right.svg";

interface PaginationProps {
   curPage: number,
   pageCount: number,
   pageCountDisplayed: number,
   onPageChange: (page: number) => void
}

interface PageRange {
   start: number,
   end: number
}


const Pagination: FC<PaginationProps> = ({ curPage, pageCount, pageCountDisplayed, onPageChange }) => {

   const [pageRangeDisplayed, setPageRangeDisplayed] = useState<PageRange>({ start: 1, end: pageCountDisplayed });

   useEffect(() => {
      if (pageCountDisplayed < 2) {
         throw new Error('Количество отображаемых страниц меньше 2')
      }
   }, [])

   const allPages: number[] = useMemo(() => {
      const pages: number[] = [];
      for (let page = 1; page <= pageCount; page++) {
         pages.push(page);
      }
      return pages;
   }, [pageCount]);



   function changeRange(selectedPage: number): void {
      if (selectedPage == pageRangeDisplayed.end && selectedPage != pageCount) {
         setPageRangeDisplayed((prev) => ({
            start: prev.start + Math.round(pageCountDisplayed / 2),
            end: prev.end + Math.round(pageCountDisplayed / 2)
         }))
      }
      if (selectedPage == pageRangeDisplayed.start && selectedPage != 1) {
         setPageRangeDisplayed((prev) => ({
            start: prev.start - Math.round(pageCountDisplayed / 2),
            end: prev.end - Math.round(pageCountDisplayed / 2)
         }))
      }
   }

   return (
      <div className='pagination'>
         {
            curPage > 1 &&
            <div className='pagination__arrow prev'
               onClick={() => {
                  onPageChange(--curPage);
                  changeRange(curPage);
               }}
            >
               <ArrowImg />
            </div>
         }


         {allPages.slice(pageRangeDisplayed.start - 1, pageRangeDisplayed.end).map(page =>
            <div key={page}
               className={'pagination__btn' + (page == curPage ? ' selected' : '')}
               onClick={() => {
                  onPageChange(page);
                  changeRange(page);
               }}
            >
               {page}
            </div>
         )}

         {
            curPage < pageCount &&
            <div className='pagination__arrow next'
               onClick={() => {
                  onPageChange(++curPage);
                  changeRange(curPage);
               }}
            >
               <ArrowImg />
            </div>
         }


      </div>
   )
}

export default Pagination;





