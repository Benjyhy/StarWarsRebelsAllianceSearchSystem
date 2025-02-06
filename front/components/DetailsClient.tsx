"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DetailedCard from "@/components/DetailedCard";
import { SwapiType } from "@/types";
import { DetailedResponse } from "@/types/DetailedResponse";
import withAuth from "./WithAuth";

function DetailsClient({ type, id }: { type: SwapiType; id: string }) {
    const router = useRouter();
    const [data, setData] = useState<DetailedResponse | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const username = sessionStorage.getItem("username");
        const password = sessionStorage.getItem("password");

        if (!username || !password) {
            router.push("/login");
            return;
        }

        const fetchData = async () => {
            const endpoint = `/api/details/${type}/${id}`;
            const res = await fetch(endpoint, {
                method: 'GET',
                headers: {
                    Authorization: "Basic " + btoa(`${username}:${password}`),
                }
            });
            const result = await res.json();
            setData(result.results);
            setLoading(false);
        };

        fetchData();
    }, [type, id, router]);

    if (loading) return <p>Loading...</p>;
    return <DetailedCard type={type} data={data} />;
}

export default withAuth(DetailsClient);
