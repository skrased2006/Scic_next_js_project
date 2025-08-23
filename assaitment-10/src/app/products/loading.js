export default function Loading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-6">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="border rounded-xl shadow-md p-6 animate-pulse"
        >
          <div className="bg-gray-300 h-40 w-full rounded-md mb-4"></div>
          <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto mb-3"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
        </div>
      ))}
    </div>
  );
}
