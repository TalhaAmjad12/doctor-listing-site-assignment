export default function DoctorListItemSkeleton() {
  return (
    <div className="card bg-base-100 shadow-xl p-4 animate-pulse mb-5 w-[340px]">
      <div className="skeleton h-[250px] w-full mb-4"></div>{" "}
      <div className="skeleton h-6 w-3/4 mb-2"></div>
      <div className="skeleton h-4 w-1/2"></div>
      <div className="skeleton h-4 w-1/2 mt-2"></div>
      <div className="skeleton h-4 w-1/2 mt-2"></div>
      <div className="skeleton h-10 w-full mt-9"></div>
    </div>
  );
}
