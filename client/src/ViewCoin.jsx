import { useQuery, gql } from "@apollo/client";
import { useParams, Link } from "react-router-dom";
import QRCode from "qrcode";
import { useEffect, useState } from "react";

export default function ViewCoin() {
  const params = useParams();
  const [qrcode, setQRCode] = useState("");

  const { loading, data, error } = useQuery(
    gql`
      query GetCoin($id: Int) {
        coin(id: $id) {
          id
          data
        }
      }
    `,
    {
      variables: {
        id: Number(params.id)
      }
    }
  );

  useEffect(() => {
    QRCode.toDataURL(
      location.href,
      {
        type: "string",
        errorCorrectionLevel: "H"
      },
      (_, code) => setQRCode(code)
    );
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{JSON.stringify(error)}</p>;
  }

  return (
    <div>
      <Link to="/" className="text-blue-600 underline hover:text-blue-900">
        {"<"} Back
      </Link>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            PokeCoin Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">details</p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Id</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                # {data.coin.id}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Localization
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {data.coin.data}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">QR Code</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <img src={qrcode} />
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
