import React from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import useRoutes from "../../../hooks/useRoutes";

export default function DemoUseRoute() {
  const { navigate, searchParams, params } = useRoutes();
  const [search, setSearch] = searchParams;
  console.log({ navigate, searchParams, params });
  return <div className="container text-center my-2">DemoUseRoute</div>;
}
