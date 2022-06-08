import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

export default function CreateToken() {
  const [coinData, setCoinData] = useState("");
  const navigate = useNavigate();

  const [createCoin] = useMutation(
    gql`
      mutation CreateCoin($data: String) {
        addCoin(data: $data)
      }
    `,
    {
      variables: {
        data: coinData
      }
    }
  );

  function addCoin(data) {
    createCoin(data);
    navigate("/");
  }

  return (
    <div>
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Coin Information
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Specify here the information you want to display about your
              PokeCoin
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div>
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Location{" "}
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="about"
                      name="data"
                      rows="3"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                      placeholder="40.8165487,-73.9471619"
                      onChange={(event) => setCoinData(event.target.value)}
                    ></textarea>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Put any information that clearly identifies the PokeCoin
                    location
                  </p>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  disabled={coinData.length === 0}
                  type="button"
                  onClick={() => addCoin(coinData)}
                  className={
                    "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-white"
                  }
                >
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
