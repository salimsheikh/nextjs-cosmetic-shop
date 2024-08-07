This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Create App
````js
npx create-next-app@latest nextjs-cosmetic-shop
````

Reducx toolkit installation
````js
npm i @reduxjs/toolkit
````

React Redux  installation
````js
npm i react-redux
````

tailwind.config.ts
````js
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#EC2D9E"
      },
      container: {
        center: true,
        padding: "15px",
      }
    },
  },
  plugins: [],
};
export default config;
````
## Redux Settings
redux/features/cartSlice.ts
````js
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProduct {
    id: number;
    name: string;
    img: string;
    price: number;
    quantity: number;
}

const initialState: Array<IProduct> = [];
export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>) => {
            if(state.findIndex(pro => pro.id === action.payload.id) === -1){
                state.push(action.payload)
            }else{
                return state.map((item) => {
                    return item.id === action.payload.id ? {...item, quantity: item.quantity + 1} : item;
                });
            }
        },

        removeFromCart :  (state, action: PayloadAction<number>) =>{
            const id = action.payload
            return state.filter(item => item.id !== id)
        }
    }
});

export const {addToCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer;

````

redux/store.ts
````js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice"

export const store  = configureStore({
    reducer: {
        cartReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
````

redux/hooks.ts
````js
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
````