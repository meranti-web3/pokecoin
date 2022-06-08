import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

export default function ViewCoins() {
  const { loading, data } = useQuery(gql`
    {
      allCoins {
        id
        data
      }
    }
  `);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>All the coins</h2>
      <table className="border-collapse border-slate-500 rounded-md text-sm font-medium text-white">
        <thead className="bg-gray-900">
          <tr>
            <th className="border border-slate-600 p-3">Id</th>
            <th className="border border-slate-600 p-3">data</th>
            <th className="border border-slate-600 p-3"></th>
          </tr>
        </thead>
        <tbody>
          {data.allCoins.map(({ id, data: coinData }) => (
            <tr key={id}>
              <td className="border border-slate-600 p-3 text-gray-700">
                {id}
              </td>
              <td className="border border-slate-600 p-3 text-gray-700">
                {coinData}
              </td>
              <td className="border border-slate-600 p-3 text-gray-700">
                <Link
                  className="text-blue-600 underline hover:text-blue-900"
                  to={`/view/${id}`}
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
