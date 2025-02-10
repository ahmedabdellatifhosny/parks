"use client";

import { useLocale } from "next-intl";
import { Container } from "react-bootstrap";
import MapView from "./MapView";
import SearchBar from "../SearchBar";

function Map() {
  const lang = useLocale();
  return (
    <>
      <Container className="pt100">
        <div className="sbar pr ">
          <h2>
            {lang === "ar"
              ? "ابحث عن أي حديقة في العالم"
              : "Search for any park in the world"}
          </h2>
          <SearchBar />
        </div>
      </Container>
      <Container>
        <div className="mt-6 mb-5 mapInner">
          <MapView />
        </div>
      </Container>
    </>
  );
}
export default Map;
