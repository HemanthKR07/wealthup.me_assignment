import Image from 'next/image'

export default function Home() {
  return (
    <>
        <div className="block">
              <Image src="/final01.jpg" height="1090" width="1265" className='bg' />
                <div className="content">
                <h1 className="t1">Check your financial health</h1>
                <h4 className='t2'>Use WeathoMeter to get a free report <br /> card for your finances - within minutes!</h4>
                <div className="button"> <h3 className="t3">Get Started</h3></div>
                <div className="tickblks">
                <div className="miniblk">
                    <div className="blk1">
                      <Image src="/tick01.png" height="28" width="28" className='tickimg'/>
                      <h5 className="t4">Expected Retirement Age</h5>
                      <Image src="/line.jpg" className='line' height="2" width="250"/>
                    </div>
                    <div className="blk1">
                      <Image src="/tick01.png" height="28" width="28" className='tickimg'/>
                      <h5 className="t4">Identify Mistakes</h5>
                      <Image src="/line.jpg" className='line2' height="2" width="180" />
                    </div>
                </div>
                {/* <Image src="/mobile.png" height="330" width="320" className='mobimg'/> */}
                <div className="miniblk2">
                      <div className="blk1">
                        <Image src="/tick01.png" height="28" width="28" className='tickimg tick2'/>
                        <h5 className="t4">Personalised Road Map</h5>
                        <Image src="/line.jpg" className='line line3' height="2" width="230"/>
                      </div>
                      <div className="blk1">
                        <Image src="/tick01.png" height="28" width="28" className='tickimg tick2'/>
                        <h5 className="t4">Tips To Improve</h5>
                        <Image src="/line.jpg" className='line line4' height="2" width="155"/>
                      </div>
                  </div>
                </div>
                <div className="blk3">
                    <h4 className="t5">How it works?</h4>
                    <Image src="/pic6.png" height="200" width="850" className='pic6'/>
                    <div className="texts">
                      <h5 className="ans ans1">Answer few <br /> questions</h5>
                    <h5 className="ans ans2">Register using <br />phone and OTP</h5>
                    <h5 className="ans ans3">Get report and <br />personal roadmap</h5>
                </div>
                <div className="button btn2"> <h3 className="t3">Get Started</h3></div>
                    </div>

                </div>
              
        </div>
    </>
  )
}