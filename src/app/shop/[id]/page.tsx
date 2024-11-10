import BestSelling from "@/components/best-selling/BestSelling"
import ProductDetails from "@/components/product-details/ProductDetails"

async function DynamicProduct({params}: {params : Promise<{id : string}>}) {
  const {id} = await params
  return (
    <div>
      <ProductDetails cardid={id}/>

      <BestSelling/>
    </div>
  )
}

export default DynamicProduct