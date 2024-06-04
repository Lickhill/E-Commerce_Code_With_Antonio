# E-Commerce (Code With Antonio)
Full Stack E-Commerce + Dashboard &amp; CMS- Next.js 13 App Router, React, Tailwind, Prisma, MySQL

Admin Live: https://e-commerce-admin-rahul8864.vercel.app/

Store Live: https://e-commerce-store-seven-sooty.vercel.app/

Tech Stack: clerk, stripe, prisma, planetscaler, nextjs

you have to install all the node packages 
change the database form supabase 
connect supabase to your github and do the changes in the .env file of both the folder - admin and -store 
i'll provide the total info of .env file and from which website you'll get the api keys, the uri(s) and everything.

//.env of admin

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=      [paste the publishable key from clerk project (without quotes)]
CLERK_SECRET_KEY=       [paste the secret key from clerk.com (without the quotes)]

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

DATABASE_URL=""     [here inside the quotes you need the paste the uri. Log into supabase.com and create a project. then  go to uri option, change the mode from transaction to session and then copy the link and paste it here within the quotes]
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""    [paste the cloud name of your cloudinary.com profile (within the quotes)]

STRIPE_API_KEY=     [here paste the secret key of your stripe.com id (without quotes)]
FRONTEND_STORE_URL=http://127.0.0.1:3001    [the link could be different in your case, the link is nothing but the server link of the store when you npm run dev the cd store]

//.env of store

NEXT_PUBLIC_API_URL=""      [inside the quotes you'll need to paste the api key which you will get in the setting page of admin]