import Head from 'next/head'
import Layout from "../components/Layout"
import Prismic from "prismic-javascript"
import { Client } from "../prismic-configuration"
import {RichText} from "prismic-reactjs"
import Link from "next/link"


export default function Home({blogs}) {
  return (
    <div>
    <head>
      <title>Catventures!</title>
    </head>
    <Layout>
      <div className="fles">
          <div className="flex flex-col w-90 ml-24 mr-24">
            
            {
              blogs.results.map((blog, index) => (
                <div>
                  <Link href="{`blog/$(blog.uid)`}">
                    <h2 className="bold text-3xl text-black">
                      {RichText.render (blog.data.title)}
                    </h2>
                    </Link>
                    <p>
                      {RichText.render (blog.data.content)}
                    </p>
                  <img className="w-full" src="{blogs.data.image.url}"></img>
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