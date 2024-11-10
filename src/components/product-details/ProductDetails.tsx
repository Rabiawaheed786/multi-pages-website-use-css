import React from 'react'
import styles from './ProductDetails.module.css'
import Image from 'next/image'
import {aBeeZee} from '@/font'
import {cardData} from '@/constant/card'


function ProductDetails(props: {cardid: string}) {
  
  const data = cardData.find((item)=>{return item.id == (props.cardid) as unknown as number})


  return (
    <div>
      <section className={styles.productDetail}>
        <div className={styles.leftImgDiv} style={{backgroundColor: data?.backgoundColor}}>
          <Image src={data?.src || "/myImage/card1.png"} alt={"men"} width={400} height={600} className={styles.img}></Image>
        </div>

        <div className={styles.rightTextDiv}>
          <h1 className={aBeeZee.className}>{data?.heading}</h1>

          <p>{data?.price}</p>

          <div className={styles.cartDiv}>
            <input type="number" value={1}/>
            <button>ADD TO CART</button>
          </div>

          <p style={{fontSize: "30px"}}>Product Details</p>

          <p style={{fontSize: "16px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur commodi quaerat facilis quae perferendis nam, illum rem aliquid praesentium, quia vero, velit sed eum debitis nihil iure veritatis unde quasi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias eveniet atque soluta porro ducimus tempora aliquam deserunt obcaecati sapiente quisquam nostrum minus ad adipisci ipsum ea architecto eos perferendis, fugit ipsam dolor quidem autem magni nam. Voluptas quasi quas, officia molestias odit maiores dolor vel aspernatur inventore quis asperiores in alias sapiente. Iste dolore molestias autem ipsa possimus sed dignissimos minima culpa quis</p>
        </div>
      </section>
    </div>
  )
}

export default ProductDetails