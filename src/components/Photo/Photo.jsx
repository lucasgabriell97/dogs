import React from "react";
import { useParams } from "react-router-dom";
import { PHOTO_GET } from "../../services/api";
import Error from "../Error/Error";
import Loading from "../../helper/Loading/Loading";
import PhotoContent from "./PhotoContent/PhotoContent";
import useFetch from "../../hooks/useFetch/useFetch";
import Head from "../../helper/Head/Head";

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent single={true} data={data} />
      </section>
    );
  else return null;
};

export default Photo;
