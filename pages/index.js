// Here we have the dependencies; Prismic Javascript, Prismic Client + RichText module for handling the communication with their API + the layout compentent.
import Head from 'next/head'
import Layout from "../components/Layout"
import Prismic from "prismic-javascript"
import { Client } from "../prismic-configuration"
import {RichText} from "prismic-reactjs"

// This is the function which returns the blogs to the index page.
export default function Home({blogs}) {
  return (
    <div>
    <head>
      <title>Catventures!</title>
    </head>
    <Layout>
      {/* Basic Tailwind CSS classeNames below */}
      <div className="flex">
          <div className="flex flex-col w-70 ml-24 mr-24">
            
            {
              {/* This is for mapping through the data from the API */}
              blogs.results.map((blog, index) => (
                <div>
                    <h2 className="bold text-3xl text-black mt-12">
                      {/* The RichText module takes care of transforming the content's data to human-readable */}
                      {RichText.render (blog.data.title)}
                    </h2>
                    <p className="mt-8">
                      {RichText.render (blog.data.content)}
                    </p>
                    {/* Image importent from Prismic */}
                  <img className="w-full mt-8" src={blog.data.image.url} />
                </div>
                ))
            }

          </div>
      </div>
    </Layout>
    </div>
  )
}

// Async function for SeverSideProps, or the data from Prismic
export async function getServerSideProps () {
  // Await returns all data marked Document Type : Meowing (that's the cat's blog posts)
  const blogs = await Client().query(
    Prismic.Predicates.at("document.type", "meowing")
  );
    // It returns the blogs as props
    return {
      props: {blogs},
    };
} 