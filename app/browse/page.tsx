import { fetchObjectIDs } from "@/lib/fetch-data";
import styles from "./page.module.css";
import Post from "@/components/post/Post";
import { Suspense } from "react";
import Search from "@/components/search/Search";
import { selectRandomIDs } from "@/lib/utils";

export default async function Browse({
  searchParams,
}: {
  searchParams: { searchTerm?: string };
}) {
  const query = searchParams.searchTerm || "flowers";
  return (
    <main className={styles.main}>
      <Search placeholder={query} />
      <p className={styles.search_result}>Search results for {query}:</p>
      <Suspense fallback={<p>Loading items...</p>}>
        <SearchResults query={query} />
      </Suspense>
    </main>
  );
}

async function SearchResults({query}: {query: string}) {
  const entries = await fetchObjectIDs(query);
  
  const randomObjectIDs = selectRandomIDs(
    entries.objectIDs,
    entries.total > 10 ? 10 : entries.total
  );
  return (
    <>
      {randomObjectIDs.map((id: number) => (
        <Suspense key={id} fallback={<p>Loading item...</p>}>
          <Post key={id} id={id} />
        </Suspense>
      ))}
    </>
  );
}
