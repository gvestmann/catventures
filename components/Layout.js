import Link from "next/link"

export default function Layout ({children}) {
    return (
        <div>
            <div className="px-2 md:px-24 bg-black text-white w-full justify-content">
                <Link href="/">
                    <a className="text-white uppercase text-5xl py-8 my-2">
                        CATVENTURES 
                    </a>
                </Link>
                <div>
                <h2 className="text-base m-2">The Adventures of Gummi's prisoner</h2>
                </div> 
            </div>
            { children}
            <div>Footer</div>
        </div>
    )
}