import React from "react";
import { GalleryPage } from "./pages/gallery";

const BASE_URL = process.env.BASE_URL;
if (!BASE_URL) {
    throw new Error(`Set BASE_URL environment variable.`);
}

console.log(`Expecting backend at ${BASE_URL}.`);

export function App() {
    return (
        <GalleryPage />
    )
}