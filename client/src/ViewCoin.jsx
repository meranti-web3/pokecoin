import { useQuery, gql } from '@apollo/client';
import { useParams } from "react-router-dom";
import QRCode from "qrcode";
import { useEffect, useState } from 'react';

export default function ViewCoin() {
  const params = useParams();
  const [qrcode, setQRCode] = useState("");

  useEffect(() => {
    async function createQRCode() {
      QRCode.toDataURL(
        location.href,
        {
          type: "string",
          errorCorrectionLevel: "H",
        },
        (_, code) => setQRCode(code)
      );
    }

    createQRCode();
  }, []) 

  const { loading, data, error } = useQuery(gql`
    query GetCoin($id: Int) {
        coin(id: $id) {
            id
            data
        }
    }
  `, {
    variables: {
      id: Number(params.id)
    }
  });

  if (loading) {
    return (<p>Loading...</p>);
  }

  if (error) {
    return (<p>{ JSON.stringify(error) }</p>);
  }

  return (
    <div>
      <p>
        id: { data.coin.id } <br />
        localization: { data.coin.data }
      </p>
      <img src={ qrcode }/>
    </div>
  );
}