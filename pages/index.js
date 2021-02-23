import Head from 'next/head'
import Layout from "../components/Layout"
import Prismic from "prismic-javascript"
import { Client } from "../prismic-configuration"
import {RichText} from "prismic-reactjs"

export default function Home({blogs}) {
  return (
    <div>
    <head>
      <title>Catventures!</title>
    </head>
    <Layout>
      <div className="flex">
          <div className="flex flex-col w-70 ml-24 mr-24">
            
            {
              blogs.results.map((blog, index) => (
                <div>
                    <h2 className="bold text-3xl text-black mt-12">
                      {RichText.render (blog.data.title)}
                    </h2>
                    <p className="mt-8">
                      {RichText.render (blog.data.content)}
                    </p>
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


export async function getServerSideProps () {
  const blogs = await Client().query(
    Prismic.Predicates.at("document.type", "meowing")
  );

    return {
      props: {blogs},
    };
} 