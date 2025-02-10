
import { Seo } from "@/ui/component/seo";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
export default function Home() {
return (
    <>
<Seo title="Site" description="Description ..." />
<Button variant = "outline">outline</Button>
<Button variant = "accent">primary</Button>

{/*<Typography >Salut</Typography>
<Typography theme="primary" >Salut</Typography>
  */}
   </>
   
);
}
