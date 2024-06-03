import Booking from "@/components/Booking/Booking";
import Image from "next/image";
import About from '@/components/About/about'
import Map from "@/components/Map/home"
import Members from '@/components/Members/members'
import Introduction from '@/components/Introduction/contact'
import EmailSection from "@/components/EmailSection/emailsection";
import Footer from "@/components/Footer/footer";
import Achievement from "@/components/Achievement/achievement";
import List from "@/components/List/Todo"

import Contact from "@/components/Contact/Contact"
export default function Home() {
  return (
<div>
  
 
<div className="grid gird-cols-1 md:grid-cols-3">
  <div>
 <Booking></Booking>
  </div>
  <div className="col-span-2">
   <Map></Map>
  </div>
</div>
<div>
  <Achievement></Achievement>
</div>
<div>
  <About></About>
</div>
<br></br>

<div>
  <Members></Members>
</div>
<div></div>
<br></br>
<br></br>
<br></br>
<div>
<div className="grid gird-cols-1 md:grid-cols-3">
  
  <div>
 <Introduction></Introduction>
  </div>
  
  <div className="col-span-2">
   <EmailSection></EmailSection>
   
  </div>
</div>
<br></br>
<br></br>
<div>
  <List></List>
</div>
<div>
  <Footer></Footer>
</div>
</div>
</div>
  );
}
