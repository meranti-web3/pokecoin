import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

export default function CreateToken() {
  const [coinData, setCoinData] = useState("");
  const navigate = useNavigate();

  const [createCoin, { data, loading, error }] = useMutation(
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
    <form>
      <input
        type="text"
        onChange={(event) => setCoinData(event.target.value)}
      />
      <button type="button" onClick={() => addCoin(coinData)}>
        Create
      </button>
    </form>
  );
}
