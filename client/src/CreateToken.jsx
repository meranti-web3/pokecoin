import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

export default function CreateToken() {
  const [coinData, setCoinData] = useState('');

  const [createCoin, { data, loading, error }] = useMutation(gql`
    mutation CreateCoin($data: String) {
      addCoin(data: $data)
    }
  `, {
    variables: {
      data: coinData
    }
  });

  return (
    <form>
      <input type="text" onChange={ (event) => setCoinData(event.target.value) } />
      <button type="button" onClick={ () => createCoin(coinData) } >Create</button>
    </form>
  );
}