import Image from "next/image"
import Link from "next/link"
export default function section3() {
  return (
   <section className="py-16">
        <div className="container mx-auto md:px-20">
            <h1 className="font-bold text-4xl pb-12 text-center">Ipsum</h1>
            {slide()}
        
        </div>
   </section>
  )
}



function slide(){
    return(
        <div className="grid md:grid-cols-2">
            <div className="imgege">
            
                <Link href={"/"}><Image src={"/Screenshot 2024-09-17 140507.png"} width={500} height={600} className="mr-11"></Image></Link>
                

            </div>
            <div className="info">
                <div className="cat">
                    <Link href={"/"}  className="text-orange-600 hover:text-orange-800">Business, Travel</Link>
                    <Link href={"/"}  className="text-gray-800 hover:text-gray-800"> -july 3 2020</Link>
                </div>
                <div className="title">
                    <Link href={"/three"} className="text-3xl md:text-6xl font-bold text-gray-800  hover:text-gray-600">You most unhappy customers are your greatest soutce of learning</Link>

                </div>
            </div>

        </div>
    )
}