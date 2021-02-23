// This is Next.js's linkfunction
import Link from "next/link"

// The layout specifies a few things; the page's navbar + which other content to use (aka "Children")
export default function Layout ({children}) {
    return (
        <div className="pb-20 bg-gradient-to-r from-green-400 to-blue-500 ...">
            <div className="px-2 py-12 md:px-24 text-white">
                <Link href="/">
                    <a className="text-white uppercase text-5xl py-8 my-2">
                        CATVENTURES 
                    </a>
                </Link>
                <div>
                <h2 className="text-base m-2">The Adventures of Gummi's prisoner</h2>
                </div> 
            </div>
            {/* These are my cat's kittens (blog posts provided by index.js) */}
            { children }
        </div>
    )
}