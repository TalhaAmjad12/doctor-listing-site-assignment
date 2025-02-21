// handle pagination logic
export const handleNextPage = (page, totalPages, setPage) => {
  if (page < totalPages) setPage(page + 1);
};

export const handlePreviousPage = (page, totalPages, setPage) => {
  if (page > 1) setPage(page - 1);
};
