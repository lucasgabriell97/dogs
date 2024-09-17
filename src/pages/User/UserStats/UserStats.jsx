import React from "react";
import Head from "../../../helper/Head/Head";
import useFetch from "../../../hooks/useFetch/useFetch";
import { STATS_GET } from "../../../services/api";
import Loading from "../../../helper/Loading/Loading";
const UserStatsGraphs = React.lazy(() =>
  import("../UserStatsGraphs/UserStatsGraphs")
);

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getaData() {
      const token = window.localStorage.getItem("token");

      const { url, options } = STATS_GET(token);
      await request(url, options);
    }
    getaData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  else return null;
};

export default UserStats;
