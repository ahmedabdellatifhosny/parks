type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  scroll?: boolean;
};

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange, scroll }) => {
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
      if (scroll) {
        window.scrollTo(0, 0);
      }
    }
  };

  const getPageNumbers = (): number[] => {
    const pageNumbers: number[] = [];
    let startPage = Math.max(1, currentPage - 1);
    let endPage = currentPage + 2;

    if (currentPage <= 2) {
      endPage = Math.min(totalPages, 4);
    }

    if (currentPage >= totalPages - 1) {
      startPage = Math.max(1, totalPages - 3);
      endPage = totalPages;
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="box pt50 paginationCont">
      <div className="paginations">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="page-link"
        >
          <i className="fa-regular fa-angle-left"></i>
        </button>

        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`page-link ${page === currentPage ? "active" : ""}`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="page-link"
        >
          <i className="fa-regular fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
