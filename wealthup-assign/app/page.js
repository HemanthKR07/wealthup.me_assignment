import Image from 'next/image'

export default function Home() {
  return (
    <>
    <style>
  @import url('https://fonts.googleapis.com/css2?family=Alegreya:ital@1&family=Amatic+SC:wght@700&family=Architects+Daughter&family=Belanosima&family=Bree+Serif&family=Caveat:wght@700&family=Chakra+Petch:wght@500&family=Courier+Prime&family=Dosis&family=Edu+TAS+Beginner:wght@700&family=Exo+2:wght@300&family=Fasthand&family=Fredericka+the+Great&family=Handjet:wght@300&family=Indie+Flower&family=Inter:wght@300&family=Kalam&family=Lugrasimo&family=Lumanosimo&family=Merienda:wght@500&family=Montserrat+Alternates&family=Montserrat:wght@200;300;400&family=Noto+Sans+Indic+Siyaq+Numbers&family=Nunito:wght@200&family=Pangolin&family=Poppins:wght@100&family=Rajdhani&family=Raleway:wght@300&family=Red+Hat+Display:wght@500&family=Rubik&family=Rubik+Scribble&family=Sacramento&family=Sarabun&family=Sedgwick+Ave+Display&family=Single+Day&family=Slabo+27px&family=Tajawal&family=Titillium+Web:wght@300&family=Ysabeau+Infant:wght@200&family=Ysabeau+SC:wght@300&family=Zeyada&display=swap');
</style>
        <div className="block">
              <Image src="/background.jpg" height="740" width="1265" className='bg' />
                <div className="content">
                <h1 className="t1">Check your financial health</h1>
                <h4 className='t2'>Use WeathoMeter to get a free report <br /> card for your finances - within minutes!</h4>
                <div className="button"> <h3 className="t3">Get Started</h3></div>
                <div className="miniblk">
                    <div className="blk1">
                      <Image src="/tick01.png" height="28" width="28" className='tickimg'/>
                      <h5 className="t4">Expected Retirement Age</h5>
                    </div>
                    <div className="blk1">
                      <Image src="/tick01.png" height="28" width="28" className='tickimg'/>
                      <h5 className="t4">Expected Retirement Age</h5>
                    </div>
                </div>
                <div className="miniblk2">
                <div className="blk1">
                  <Image src="/tick01.png" height="28" width="28" className='tickimg'/>
                  <h5 className="t4">Expected Retirement Age</h5>
                </div>
                <div className="blk1">
                  <Image src="/tick01.png" height="28" width="28" className='tickimg'/>
                  <h5 className="t4">Expected Retirement Age</h5>
                </div></div>
                </div>
              
        </div>
    </>
  )
}