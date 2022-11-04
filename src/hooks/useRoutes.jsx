import React from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function useRoutes() {
  const navigate = useNavigate();
  const [search, setSearch] = useSearchParams();
  const params = useParams();
  return {
    navigate: navigate,
    searchParams: [search, setSearch],
    params: params,
  };
}
