import Image from 'next/image'

export default function Home() {
  return (
    <>
        <div className="block">
              <Image src="/background.jpg" height="630" width="1265" className='bg'></Image>
        </div>
    </>
  )
}
