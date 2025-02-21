import { DOCTORS } from "./initData";
export const getFilteredDataWithPagination = async (
  city,
  specialty,
  page,
  limit
) => {
  let filteredDoctors = DOCTORS;

  if (city && city.length >= 2) {
    filteredDoctors = filteredDoctors.filter((doc) =>
      doc.city.toLowerCase().includes(city.toLowerCase())
    );
  }

  if (specialty && specialty.length >= 2) {
    filteredDoctors = filteredDoctors.filter((doc) =>
      doc.specialty.toLowerCase().includes(specialty.toLowerCase())
    );
  }

  // Pagination
  const totalDoctors = filteredDoctors.length;
  const totalPages = Math.ceil(totalDoctors / limit);
  const offset = (page - 1) * limit;
  const paginatedDoctors = filteredDoctors.slice(offset, offset + limit);

  return {
    doctors: paginatedDoctors,
    total: totalDoctors,
    totalPages,
    currentPage: page,
  };
};
