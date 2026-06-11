import { useEffect, useState } from "react";

type RequestResult = "SUCCESS" | "FAILURE";

export default function CatFacts() {

    const [loading, setLoading] = useState<boolean>(false);
    const [facts, setFacts] = useState<string[]>([]);
    const [page, setPage] = useState(1);
    const [status, setStatus] = useState<RequestResult>();
    const url = `https://catfact.ninja/facts?limit=5&page=${page}`;


    const nextPage = () => {
        setPage(x => x + 1);
    };

    const previousPage = () => {
        setPage(x => x -1);
    };

    useEffect(() => {

        async function fetchData(){
            setLoading(true);

            try{

                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                setLoading(false);
            
                const json = await response.json();
    
                const facts: string[] = json.data.map(
                    (fact: {fact: string}) => fact.fact
                );
    
                setFacts(facts);
                setStatus("SUCCESS");
            }catch{
                setStatus("FAILURE");
            }
            

        }

        fetchData();
    },[page, url]);


    return (
        <section className="cat-facts">
            
            {status === "FAILURE" && <h1>ERROR</h1>}
            {loading ?
             <h1>Fetching data...</h1> : <h1>Cat Facts</h1>}
            <ul>
                {facts.map((fact, index) => (
                    <li key={index}>{fact}</li>
                ))}
            </ul>

            
            <span>
                <button onClick={previousPage}>Previous Page</button>
                Page: {page}
                <button onClick={nextPage}>Next Page</button>
            </span>

        </section>
    );
}
