import { stripe } from "@/lib/stripe"

export async function POST(){

const session = await stripe.checkout.sessions.create({

payment_method_types:["card"],

line_items:[{
price_data:{
currency:"usd",
product_data:{name:"Golf Subscription"},
unit_amount:1000
},
quantity:1
}],

mode:"subscription",

success_url:"/dashboard",
cancel_url:"/"

})

return Response.json({url:session.url})

}