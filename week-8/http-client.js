/*
    Title: Assignment 7.2 - WhatABook, Part2. Http-client.js
    Author: Jamal Eddine Damir
    Date: october 1, 2022
    Description: Code class that imported in damir-whatabook2.html and that is used
				 to fetch url dat using an async function.
    Sources: 
            * Source code from class GitHub Repository
            * W3Schools.com
            * Instructor provided assignment specific instructions*/

// Exported httpClient class
export class HttpClient {
	async get(url, params = "") {
		url = new URL(url);
		url.search = new URLSearchParams(params);
		// Fetch request that will be used to return a promise
		const res = await fetch(url.toString(), {
			method: "GET",
		});

		// Returning Json data from API
		return res.json();
	}
}
