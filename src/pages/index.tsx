
import { Seo } from "@/ui/component/seo";
import { Button } from "@/ui/design-system/button/button";
export default function Home() {
return (
    <>
<Seo title="Site" description="Description ..." />
<Button isLoading variant = "accent">outline</Button>
{/*<Typography >Salut</Typography>
<Typography theme="primary" >Salut</Typography>
  */}
   </>
   
);
}
