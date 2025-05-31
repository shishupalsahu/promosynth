import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateNewUser = mutation({
    args: {
        name: v.string(),
        email: v.string(),
        picture: v.string()
    },
    handler: async (ctx, args) => {
        // If User already Exis
        const userData=await ctx.db.query('users')
        .filter(q=>q.eq(q.field('email'),args.email))
        .collect();

        // if not then insert the new user 
        if(userData?.length==0){
            const data ={
                name :args.name,
                email :args.email,
                picture:args.picture,
                credits:30
            }
            const result =await ctx.db.insert('users',{
                ...data
            });

            console.log(result);
            return {
                ...data,
                _id:result
            }
        }
        return userData[0];

    }
    
}) 